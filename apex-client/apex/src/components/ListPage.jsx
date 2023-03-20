import React from 'react';
import Header from './Header';
import AddItem from './AddItem';
import List from './List';

function ListPage(){
    return(<div>
        <Header/>
        <AddItem/>
        <List />
    </div>)
}

export default ListPage;