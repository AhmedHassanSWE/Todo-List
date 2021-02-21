import React from 'react';
import './TodoItems.css'

const TodoItems = (props) => {
    const {items, deleteItems} = props;
    const length = items.length;
    const ListItems = length ? (
        items.map(item => {
            return(
                <div key={item.id}>
                    <span className='task'>{item.task}</span>
                    <span className='year'>{item.year}</span>
                    <span className='action icon' onClick={() => deleteItems(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p>There's no items to show</p>
    )
    return(
        <div>
            <div className='ListItems'>
                <span className='task title'>Task</span>
                <span className='year title'>Year</span>
                <span className='action title'>Action</span>
                {ListItems}
            </div>
            
        </div>
    )
}

export default TodoItems;