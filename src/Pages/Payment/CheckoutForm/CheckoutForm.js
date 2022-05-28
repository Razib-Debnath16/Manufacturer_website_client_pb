import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const CheckoutForm = ({ order }) => {
    const [loading] = useAuthState(auth);
    const [error, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { _id, price, email } = order;
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        fetch('https://enigmatic-shelf-24691.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret);
                }
            })
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message || '');
        }
        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setSuccess('');
        }
        else {
            setSuccess('Congrats...Your Payment is successful');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setCardError('');
            const payment = {
                transactionId: paymentIntent.id,
                partsId: _id
            }
            fetch(`https://enigmatic-shelf-24691.herokuapp.com/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button onClick={handleSubmit} type="submit" className='btn btn-secondary btn-sm m-6' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <div className='p-6'>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
                {
                    success && <div>
                        <p className='text-green-500'>{success}</p>
                        <p className='text-yellow-500 text-2xl'>{transactionId}</p>
                    </div>
                }
            </div>
        </>
    );
};

export default CheckoutForm;