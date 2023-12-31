import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Navbar = () => {
    const itemMenu = <>
    <Link to='/' className='px-3'>Home</Link>
    <Link to='/about' className='px-3'>About</Link>
    <Link to='/service' className='px-3'>Service</Link>
    <Link to='/blog' className='px-3'>Blog</Link>
    <Link to='/contact' className='px-3'>Contact</Link>
    <Link to='/login' className='px-3'>Login</Link>
    <Link to='/register' className='px-3'>Register</Link>
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {itemMenu}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img width={75} src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {itemMenu}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;