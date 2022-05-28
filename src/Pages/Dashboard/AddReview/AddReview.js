import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handleReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = user.email;
        const img = event.target.img.value;
        const comment = event.target.review.value;
        const review = {
            name: name,
            email: email,
            img: img,
            review: comment
        }
        fetch('https://enigmatic-shelf-24691.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <h2 className='text-center text-2xl text-green-500'>Please Give your Opinion</h2>
                <form onSubmit={handleReview} className="card-body">
                    <label className="label">
                        <span className="label-text">Your name?</span>
                    </label>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input className='text-xl input input-bordered w-full max-w-xs' name='email' type="email" readOnly placeholder={user.email} />
                    <label className="label">
                        <span className="label-text">Your Image URL</span>
                    </label>
                    <input type="text" name='img' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <input type="text" name='review' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className="btn btn-active">Add Review</button>
                </form>
            </div>


        </div>
    );
};

export default AddReview;