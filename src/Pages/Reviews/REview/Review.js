import React from 'react';

const Review = (props) => {
    const { name, review, img } = props.review;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt='' />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p> Review: {review}</p>

            </div>
        </div>
    );
};

export default Review;