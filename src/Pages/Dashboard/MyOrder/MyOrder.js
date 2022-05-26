import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Order from './Order/Order';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: orders, isLoading } = useQuery('orders', () => fetch(`http://localhost:5000/orders/email?email=${user?.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handlePay = id => {
        navigate(`/dashboard/payment/${id}`);
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-96">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Total Amount(BDT.) </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.email}</td>
                            <td>{order.price}</td>
                            <td>
                                {!order.paid && <button onClick={() => handlePay(order._id)} className="btn btn-active btn-secondary">Pay Now</button>}
                                {order.paid && <span className="btn btn-active btn-success">Paid</span>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;