import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const des = event.target.des.value;
        const quantity = event.target.quantity.value;
        const stock = event.target.stock.value;
        const price = event.target.price.value;
        const tool = {
            name: name,
            img: img,
            des: des,
            quantity: quantity,
            stock: stock,
            price: price,

        }
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tool)
        }).then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <h2 className='text-center text-2xl text-green-500'>Add Product</h2>
                <form onSubmit={handleAddProduct} className="card-body">
                    <label className="label">
                        <span className="label-text">Tool name?</span>
                    </label>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input className='text-xl input input-bordered w-full max-w-xs' name='des' type="text" readOnly placeholder='Type here' />
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name='img' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">InStock</span>
                    </label>
                    <input type="number" name='stock' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Minimum Purchase Quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className="btn btn-active">Add Product</button>
                </form>
            </div>


        </div>
    );
};

export default AddProduct;