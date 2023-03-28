import React, { useContext } from 'react';
import './Footer.css';
import { ListContext } from './ListPage';

export default function Footer(){
    let items=useContext(ListContext);
    let totalPrice=0;
    return(
        <div className='footer'>
            <p className='counter-text'>You have added <span className='counter'>{items.length}</span> items</p>
            <div className='total'>
                <p>Total :</p>
                <div className='total-price'>{totalPrice}</div>
            </div>
        </div>
    )
}