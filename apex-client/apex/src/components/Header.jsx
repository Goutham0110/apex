import React from 'react';
import './Header.css';
import print from './assets/images/printer.png';
import MFC from './assets/images/MFC.png'

function Header(){
    return(<div className='container'>
        <div className='logo'>
            <img src={MFC} alt="MFC"/>
        </div>
        <div className='event'>Robocon</div> 
        <div className='print-container'>
            <div className='print'>
            <img src={print} alt="print" height={30} width={30}/>
            Print
            </div>
        </div> 
    </div>)
}

export default Header;

