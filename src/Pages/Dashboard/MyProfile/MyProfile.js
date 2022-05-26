import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='w-96'>
            <h2 className='text-3xl text-center text-success'>welcome to Dashboard</h2>
            <h2 className='text-xl '>User Name : <span className='text-2xl text-center text-secondary'>{user?.displayName} {user?.name}</span></h2>
            <h2 className='text-xl'>User Email : <span className='text-2xl text-center text-secondary'>{user.email}</span></h2>
        </div>
    );
};

export default MyProfile;