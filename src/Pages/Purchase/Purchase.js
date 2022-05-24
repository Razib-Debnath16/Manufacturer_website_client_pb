import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])
    console.log(user);
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row lg:text-center">
                <div>
                    <div class="card w-auto bg-base-100 shadow-xl">
                        <figure><img src={product.img} alt="Shoes" /></figure>
                        <div class="card-body text-left">
                            <h2 class="card-title">
                                {product.name}
                            </h2>
                            <p>{product.des}</p>
                            <p>Minimum Order Quantity: {product.min_ord}</p>
                            <p>InStock : {product.stock}</p>
                            <p>Price : ${product.price}</p>

                        </div>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <p className='text-left'>Name </p>
                            <input type="text" disabled placeholder={user?.displayName || user?.name} class="input input-bordered max-w-lg" />
                        </div>
                        <div class="form-control">
                            <p className='text-left'>Email </p>
                            <input type="text" disabled placeholder={user?.email} class="input input-bordered w-full" />
                        </div>
                        <div class="form-control">
                            <p className='text-left'>Address</p>
                            <input type="text" placeholder="Home Address" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <p className='text-left'>Number</p>
                            <input type="number" placeholder={product.name} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <p className='text-left'>How much quantity you want to buy?</p>
                            <input type="number" placeholder="Number" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;