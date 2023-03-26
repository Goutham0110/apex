import React from 'react';
import './AddItem.css';
import {useState } from 'react';
import { ListContext } from './ListPage';

function AddItem({onAdd,items}){

    let itemDetails={
        name:"",
        quantity:0,
        unitPrice:0,
        purchase_type:"",
        supplier:"",
        recurring:"",
        justification:""}


    const [item, setItem] = useState(itemDetails);

    const handleChange =async (event)=>{
        const lookup=event.target.name;
        setItem({...item, [lookup]:event.target.value});
    }

    const handleSubmit= async (event)=>{
        event.preventDefault();
        onAdd([...items, item]);
        console.log(items);
    }

    return(<div className='AddItem-container'>
    <div className='AddItem'>
        <h2>Add Item</h2>
        <form id="itemsForm">
            <div className='form-attribute'>
                <label htmlFor="item">Item :</label>
                <input type="text" name="name" value={item.name} onChange={handleChange}></input>
            </div>

            <div className='form-attribute'>
                <label htmlFor="quantity">Quantity :</label>
                <input type="number" name="quantity" value={item.quantity} onChange={handleChange}></input>
            </div>

            <div className='form-attribute'>
                <label htmlFor="price">Price per unit :</label>
                <input type="number" name="unitPrice" value={item.unitPrice} onChange={handleChange}></input>
            </div>

            <div className='form-attribute'>
                <label>Purchase Type :</label>
                <select name="purchase_type" id="purchase_type" onChange={handleChange}>
                    <option value="online">online</option>
                    <option value="offline">offline</option>
                </select>
            </div>

            <div className='form-attribute'>
                <label htmlFor="supplier">Supplier :</label>
                <input type="text" name="supplier" value={item.supplier} onChange={handleChange}></input>
            </div>

            <div className='form-attribute'>
                <label>Recurring :</label>
                <select name="recurring" id="recurring" onChange={handleChange}>
                    <option value="none">--select--</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                </select>
            </div>

            <div className='form-attribute'>
                <label htmlFor="justification">Justification :</label>
                <input type="text" name="justification" value={item.justification} onChange={handleChange}></input>
            </div>

            <div className='add-button'>
                <input type="submit" value="Add" onClick={handleSubmit}></input>
            </div>

        </form>
    </div>
    </div>
    )
}

export default AddItem;

/*
item
quantity
price
purchase_type
supplier
recurring
justification
*/