import React from 'react';

import './addTodoButton.styles.scss';

const AddTodoButton = ({children, handleClick}) => (
    <button 
        className="addTodoButton" 
        onClick={handleClick}
    > 
    {children}
    </button>
)
export default AddTodoButton;