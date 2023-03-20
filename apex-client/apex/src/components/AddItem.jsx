import React from 'react';
import './AddItem.css';

function AddItem(){
    return(<div className='AddItem-container'>
    <div className='AddItem'>
        <h2>Add Item</h2>
        <form>
            <div className='form-attribute'>
                <label for="item">Item :</label>
                <input type="text" name="item"></input>
            </div>

            <div className='form-attribute'>
                <label for="quantity">Quantity :</label>
                <input type="text" name="quantity"></input>
            </div>

            <div className='form-attribute'>
                <label for="price">Price :</label>
                <input type="text" name="price"></input>
            </div>

            <div className='form-attribute'>
                <label for="purchase_type">Purchase Type :</label>
                <input type="text" name="purchase_type"></input>
            </div>

            <div className='form-attribute'>
                <label for="supplier">Supplier :</label>
                <input type="text" name="supplier"></input>
            </div>

            <div className='form-attribute'>
                <label for="recurring">Recurring :</label>
                <input type="text" name="recurring"></input>
            </div>

            <div className='form-attribute'>
                <label for="justification">Justification :</label>
                <input type="text" name="justification"></input>
            </div>

            <div className='add-button'>
                <input type="submit" value="Add Item"></input>
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