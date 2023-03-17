import * as React from 'react';
import './styles.css'
import Mydetailsbutton from './buttons/mydetails';
import Requestidbutton from './buttons/requestid';
import Amsbutton from './buttons/ams';
import Scholarshipbutton from './buttons/scholarshipapply';

const Navbar = () => (
    <header className='navbar'>
        {/* <div className='navbar__item navbar__title'>AMS</div> */}
        {/* <div className='navbar__item'>Request i-Card</div> */}
        <Amsbutton />
        <Requestidbutton />
        <Mydetailsbutton />    
        <Scholarshipbutton />  
    </header>
);

export default Navbar;