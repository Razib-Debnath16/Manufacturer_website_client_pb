import React from 'react';
import country from '../../Assets/Images/Icon/flag.png';
import items from '../../Assets/Images/Icon/product.png';
import clients from '../../Assets/Images/Icon/clientt.png';
import feedback from '../../Assets/Images/Icon/feedback.png';

const Business = () => {
    return (
        <div>
            <h1 className='text-center text-primary uppercase text-4xl mb-2'>Millions Company Trust us</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={country} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary text-3xl ">100+</h2>
                        <h3 className='text-3xl'>Countries</h3>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={items} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary text-3xl">200+</h2>
                        <h3 className='text-3xl'>Products</h3>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={clients} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary text-3xl">500+</h2>
                        <h3 className='text-3xl'>Happy Clients</h3>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={feedback} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary text-3xl">800+</h2>
                        <h3 className='text-3xl'>Feedbacks</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;