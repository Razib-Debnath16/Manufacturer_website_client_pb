import React from 'react';

const UserTable = ({ user, index }) => {
    return (
        <tr>
            <th>{index}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button class="btn btn-sm btn-secondary ">Make Admin</button></td>
        </tr>
    );
};

export default UserTable;