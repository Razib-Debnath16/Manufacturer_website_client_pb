import React from 'react';

const ToolCard = ({ tool }) => {
    const { img, des, min_ord, stock, price, name } = tool;
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Product Details : {des}</p>
                <p>Minimum Order Quantity: {min_ord}</p>
                <p>InStock : {stock}</p>
                <p>Price : ${price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;