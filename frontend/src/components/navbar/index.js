import * as React from 'react';
import './styles.css'
import Mydetailsbutton from './buttons/mydetails';

const Navbar = () => (
    <header className='navbar'>
        <div className='navbar__item navbar__title'>AMS</div>
        <div className='navbar__item'>Request i-Card</div>
        <Mydetailsbutton />      
    </header>
);

export default Navbar;