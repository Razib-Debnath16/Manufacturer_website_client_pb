import React from 'react';
import img1 from '../../../../Assets/Images/Payment/cash.jpg';
import img2 from '../../../../Assets/Images/Payment/credit card2.jpg';

const HomePay = () => {
    return (
        <div>
            <h2 className='text-secondary text-center text-2xl'>Payment Methods</h2>
            <div class="hero  bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img1} class="max-w-sm rounded-lg shadow-2xl px-2" alt='' />
                    <div>
                        <img src={img2} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePay;