import React, { useContext,useRef } from 'react';
import Item from './Item';
import './List.css'
import { ListContext } from './ListPage';


function List(){
    const items=useContext(ListContext);

    return(<div className='list'>
        {items.map((itemData)=> <Item itemData={itemData}/>)}
    </div>)
}

export default List;