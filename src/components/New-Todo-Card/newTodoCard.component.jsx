import React from 'react';

import './newTodoCard.styles.scss'
import AddTodoButton from '../Add-Todo-Button/addTodoButton.component';

const NewTodoCard = ({handleClick, newTodoText, handleChange}) => (
    <div className="newTodoCard">
        <input type="text" value={newTodoText} onChange={handleChange}/>
        <AddTodoButton handleClick={handleClick}> Add new Item </AddTodoButton>
    </div>
)
export default NewTodoCard;