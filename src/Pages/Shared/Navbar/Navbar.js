import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('AccessToken');
        Navigate('/');
    };
    const menuItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/allTools'>Tools</Link></li>
            <li><Link to='/business'>Business Summary</Link></li>
            <li><Link to='/allReviews'>Reviews</Link></li>
            <li><Link to='/myPortfolio'>My Portfolio</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            {
                user && <li><Link to='/dashboard'>Dashboard</Link></li>
            }
            <li>{user ? <button onClick={logout} className="btn btn-ghost">Log out</button> : <Link to='/login'>Login</Link>}</li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Thor Computer Mfr.</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;