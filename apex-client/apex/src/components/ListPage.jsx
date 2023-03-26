import React, {createContext,useContext, useState} from 'react';
import Header from './Header';
import AddItem from './AddItem';
import List from './List';
import './ListPage.css'

export const ListContext=createContext([{quantity:2, unitPrice:200, itemName:"iphone 24"}]);

function ListPage(){
    const [items,setItems]=useState([]);

    return(
    <div className='list-page'>
        <Header/>
        <ListContext.Provider value={items}>
            <AddItem onAdd={setItems} items={items}/>
            <List/>
        </ListContext.Provider>
    </div>
    )}

export default ListPage;