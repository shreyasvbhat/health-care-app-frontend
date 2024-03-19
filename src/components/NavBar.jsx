import React from 'react';
import NavItems from './NavItems.jsx';

const NavBar = () => {
    let icons = [
        <i className="fa-brands fa-facebook"></i>,
        <i className="fa-brands fa-instagram"></i>,
        <i className="fa-brands fa-youtube"></i>,
        <i className="fa-brands fa-linkedin"></i>
    ];

    let routes = ["Home", "About", "Blogs"];

    return (
        <>
            <nav className='w-[100vw] flex justify-between py-3 px-7 bg-blue-900 text-white shadow-lg sticky top-0'>
                <NavItems items={icons} />
                <NavItems items={routes} />
            </nav>
        </>
    )
}

export default NavBar
