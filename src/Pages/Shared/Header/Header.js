import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () =>{
        signOut(auth);
        navigate('/');
        localStorage.removeItem('accessToken');
    }
    const navigations = <>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/portfolio' >My Portfolio</Link></li>
        <li><Link to='/blogs' >Blogs</Link></li>
        {user ? 
        <>
        <li><Link to='/dashboard' >Dashboard</Link></li>
        <li><button onClick={handleSignOut} class="btn btn-secondary">Sign out</button></li>
        
        </>
        :
        <li><Link to='/login' >Login</Link></li>}
    </>
    return (
        <div className="navbar bg-primary">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navigations}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Household Industrial</a>
                <label for="my-drawer-2" class="btn btn-secondary drawer-button lg:hidden"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-16">
                    {navigations}

                </ul>
            </div>

        </div>
    );
};

export default Header;