import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import useTools from '../../../hooks/useTools';
import Loading from '../../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';

const Products = ({ tool }) => {
    const { _id, img, des, min_ord, stock, price, name } = tool;
    const [user] = useAuthState(auth);
    const [items, setItems] = useTools();
    const url = `http://localhost:5000/user/email?email=${user.email}`;
    const { data, isLoading } = useQuery('user', () => fetch(`http://localhost:5000/user/email?email=${user.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const admin = data?.user[0]?.role;
    // const admin = newData?.role;
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data2 => {
                    console.log(data);
                    if (data2.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                        window.location.reload();
                    }
                });
        }

    }
    return (
        <div className="card border border-slate-300  bg-base-100 shadow-xl">
            <figure >
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center bg-slate-200">
                <h2 className="card-title">{name}</h2>
                <p>Product Details : {des}</p>
                <p>Minimum Order Quantity: {min_ord}</p>
                <p>InStock : {stock}</p>
                <p>Price : ${price}</p>
                <div className="card-actions">
                    {
                        admin &&
                        <label onClick={() => handleDelete(_id)} for="deleteModal" class="btn btn  text-red-500">Delete</label>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;