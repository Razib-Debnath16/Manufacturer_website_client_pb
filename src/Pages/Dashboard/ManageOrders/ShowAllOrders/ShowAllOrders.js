import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const ShowAllOrders = ({ order, index, refetch }) => {
    const [loading] = useAuthState(auth);
    const { _id, email, price, status, paid } = order;
    let paymentStatus;
    if (paid) {
        paymentStatus = 'Paid';
    }
    else {
        paymentStatus = 'UnPaid'
    }

    const handleShipped = id => {
        const url = `https://enigmatic-shelf-24691.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
        if (loading) {
            return <Loading></Loading>
        }

    }
    const handleDeleteOrder = id => {
        const url = `https://enigmatic-shelf-24691.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data)
            })
        if (loading) {
            return <Loading></Loading>
        }
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>{price}</td>
            <td>{<button className={paymentStatus === 'Paid' ? 'btn btn-success' : 'btn btn-warning'}>{paymentStatus}</button>}</td>
            <td className={status === 'Shipped' ? 'text-success' : 'text-yellow-500'}>{status}{!status && '--------'}</td>
            <td>{
                paid && status === 'pending' && <button onClick={() => handleShipped(_id)} className="btn btn-success">Ship Now</button>
            }
                {
                    !paid && <button onClick={() => handleDeleteOrder(_id)} className="btn btn-error btn-md">Delete Order</button>
                }
            </td>
        </tr>
    );
};

export default ShowAllOrders;