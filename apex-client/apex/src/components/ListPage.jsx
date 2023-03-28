import React, {createContext, useState} from 'react';
import Header from './Header';
import AddItem from './AddItem';
import List from './List';
import './ListPage.css'
import Footer from './Footer';

export const ListContext=createContext([]);

function ListPage(){
    const [items,setItems]=useState([]);
    

    return(
    <div className='list-page'>
        <Header/>
        <ListContext.Provider value={items}>
            <AddItem onAdd={setItems} items={items}/>
            <List/>
            <Footer/>
        </ListContext.Provider>
    </div>
    )}

export default ListPage;