import React from 'react';
import { toast } from 'react-toastify';
const UserTable = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = user => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('AccessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                refetch();
                toast.success('Successfully made and Admin');
            })
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <button button onClick={makeAdmin} className="btn btn-sm btn-secondary ">Make Admin</button>}
                {role === 'admin' && <button className="btn btn-sm btn-primary ">Already an Admin</button>}</td>
        </tr >
    );
};

export default UserTable;