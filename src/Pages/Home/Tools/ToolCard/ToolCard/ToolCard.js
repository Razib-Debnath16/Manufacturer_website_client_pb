import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolCard = ({ tool }) => {
    const { _id, img, des, min_ord, stock, price, name
    } = tool;
    const navigate = useNavigate();
    const handleBook = id => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div className="card border border-slate-300  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center bg-slate-200">
                <h2 className="card-title">{name}</h2>
                <p>Product Details : {des}</p>
                <p>Minimum Order Quantity: {min_ord}</p>
                <p>InStock : {stock}</p>
                <p>Price : ${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleBook(_id)} className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;