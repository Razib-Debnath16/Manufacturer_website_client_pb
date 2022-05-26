import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../../Payment/CheckoutForm/CheckoutForm';
const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L3ImtEY9coFqB6FxX4BUXdUS3psEIueZmOBOdTvDxjNQEX5zqnJfOYXN5AOumxNp5IsG499eZIY47CLBfjYhvw800fE3riluU');
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrder(...data);
                console.log(order);
            })
    }, [id])
    // const { data, isLoading } = useQuery(['order', id], fetch(url).then(res => res.json()))
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    // console.log(data?.email);

    return (
        <div className='flex-1'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{order?.name}</h2>
                    <p>Total Quantity : <span className='text-blue-500'>{order?.quantity} </span> ps</p>
                    <p>Please pay <span className='text-red-500'>{order?.price} </span>Tk</p>
                </div>
            </div>
            <div className='card w-96 bg-base-100 shadow-xl mt-6'>

                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order}></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;