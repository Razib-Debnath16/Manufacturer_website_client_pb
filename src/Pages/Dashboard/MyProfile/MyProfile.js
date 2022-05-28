import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const handleProfile = (event) => {
        event.preventDefault();
        const email = user?.email;
        const name = user?.displayName;
        const education = event.target.edu.value;
        const location = event.target.loc.value;
        const linkedin = event.target.linkedin.value;
        const profile = {
            name: name,
            email: email,
            education: education,
            location: location,
            linkedin: linkedin
        }
        fetch('https://enigmatic-shelf-24691.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        }).then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }
    return (
        <div>
            <div>
                <div className='w-full'>
                    <h2 className='text-3xl text-success'>Welcome to Dashboard</h2>
                    <h2 className='text-xl '>User Name : <span className='text-2xl text-center text-secondary'>{user?.displayName} {user?.name}</span></h2>
                    <h2 className='text-xl'>User Email : <span className='text-2xl text-secondary'>{user?.email}</span></h2>
                </div>
            </div>
            <div>
                <h2 className='text-center text-primary text-2xl mt-6'>Update Your Profile</h2>
                <form onSubmit={handleProfile} className="card-body" >
                    <label className="label">
                        <span className="label-text">Your Education Background?</span>
                    </label>
                    <input type="text" name='edu' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">Your Location</span>
                    </label>
                    <input className='text-xl input input-bordered w-full max-w-xs' name='loc' type="text" placeholder="Type here" />
                    <label className="label">
                        <span className="label-text">Your Linkedin Profile</span>
                    </label>
                    <input type="text" name='linkedin' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button type='submit' className="btn btn-active">Update Profile</button>
                </form>
            </div>
        </div >
    );
};

export default MyProfile;