import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    {<li><Link className='text-teal-500 text-2xl' to="/dashboard">My Profile</Link></li>}
                    {!admin && <li><Link to="/dashboard/addReview" className='text-teal-500 text-2xl'>Add a Review</Link></li>}
                    {!admin && <li><Link className='text-teal-500 text-2xl' to="/dashboard/myOrder">My Order</Link></li>}
                    {admin && <li><Link className='text-teal-500 text-2xl' to="/dashboard/addProduct">Add a Product</Link></li>}

                    {admin && <li><Link className='text-teal-500 text-2xl' to="/dashboard/manageOrders">Manage All Orders</Link></li>}
                    {admin && <li><Link className='text-teal-500 text-2xl' to="/dashboard/makeAdmin">Make Admin</Link></li>}
                    {admin && <li><Link className='text-teal-500 text-2xl' to="/dashboard/manageProducts">Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;