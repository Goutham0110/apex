import React from 'react';
import './Item.css';

let itemDetails={
    name:"",
    quantity:0,
    price:0,
    purchase_type:"",
    supplier:"",
    recurring:"",
    justification:""}

function Item(props){
    return(<div className='item'>
        <a className='item-name' href={props.itemData.link} target='_blank'>{props.itemData.name}</a>
        <div className='total-price'>$ {props.itemData.unitPrice*props.itemData.quantity}</div>
        <div className='quantity'>$ {props.itemData.unitPrice} x {props.itemData.quantity} units</div>
    </div>)
}

export default Item;