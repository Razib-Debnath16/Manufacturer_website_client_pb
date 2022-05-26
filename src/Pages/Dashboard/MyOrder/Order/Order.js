import React from 'react';

const Order = ({ order }) => {
    const { _id, email, price } = order;
    return (
        <tr>
            <th>*</th>
            <td>{email}</td>
            <td>{price}</td>
        </tr>
    );
};

export default Order;