import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const [value, setValue] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const url = `https://enigmatic-shelf-24691.herokuapp.com/tools/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                "authorization": `Bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = product.name;
        const email = user?.email;
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const price = parseInt(quantity) * parseInt(product.price);
        const newStock = parseInt(product.stock) - parseInt(quantity);
        const data = {
            name,
            email,
            quantity,
            address,
            phone,
            price
        }
        fetch('https://enigmatic-shelf-24691.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        navigate(`/dashboard/myOrder`);




    }
    const handleQuantity = event => {
        if (parseInt(event.target.value) > parseInt(product.stock)) {
            setValue(-1);
            setError("Sorry...We don't have enough stock");
        }
        else if (parseInt(event.target.value) < parseInt(product.min_ord)) {
            setValue(-1);
            setError(`You have to purchase minimum ${product.min_ord}`);
        }
        else {
            setError('');
            setValue(0);
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:text-center">
                <div>
                    <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src={product.img} alt="Shoes" /></figure>
                        <div className="card-body text-left">
                            <h2 className="card-title">
                                {product.name}
                            </h2>
                            <p>{product.des}</p>
                            <p>Minimum Order Quantity: {product.min_ord}</p>
                            <p>InStock : {product.stock}</p>
                            <p>Price : ${product.price}</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <p className='text-left'>Name </p>
                            <input type="text" disabled placeholder={user?.displayName || user?.name} className="input input-bordered max-w-lg" />
                        </div>
                        <div className="form-control">
                            <p className='text-left'>Email </p>
                            <input type="text" disabled placeholder={user?.email} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <p className='text-left'>Address</p>
                            <input type="text" name='address' placeholder="Home Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <p className='text-left'>Number</p>
                            <input type="number" name='phone' placeholder='Your Phone Number' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <p className='text-left'>How much quantity you want to buy?</p>
                            <input onChange={handleQuantity} type="number" name='quantity' placeholder="Number" className="input input-bordered" />
                            <p className={!value === -1 ? 'text-green-500' : 'text-red-500'}>{
                                error
                            }</p>
                        </div>

                        <div className="form-control mt-6">
                            <button disabled={value === -1} className="btn btn-primary" type='submit'>Purchase</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;