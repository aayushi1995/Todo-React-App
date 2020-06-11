import React , {useState} from 'react';

import {ReactComponent as Edit } from '../../assets/edit.svg';
import {ReactComponent as Delete } from '../../assets/delete.svg';
import './todoItem.styles.scss';

const TodoItem = ({id, title, completetion_status, handleChange, handleEdit, handleDelete, }) => {

    const [ edit, setEdit ] = useState({
        status: false,
        editText: ''
    });

    const handleEditChange = event => {
        let value = event.target.value;
        setEdit({
            status: edit.status,
            editText: value
        })
    }

    const saveChanges = (id,event) => {
        setEdit({
            status: false,
            editText: edit.editText
        })
        handleEdit(id,edit.editText);
    }
    const changeEditStatus = (event) => {
        setEdit({
            status: !edit.status,
            editText: title
        })
    }
    return (
        <div className="todoWrapper">
            <input 
                name="todo-list-checkbox" 
                type="checkbox" 
                id={id}
                checked={completetion_status}  
                className="completetion_status_checkbox" 
                onChange={handleChange}
            />
            <div className="title" >
                {
                    edit.status
                    ? (
                        <div className="editSectionWrapper">
                            <input type="text" className="" value={edit.editText} onChange={handleEditChange} />
                            <button className="" onClick={saveChanges.bind(this,id)} > 
                                Save
                            </button>
                        </div>
                    )
                    : title
                }
            </div>
            <div className="actions">
                <button className="editButton" onClick={changeEditStatus} > 
                    <Edit/>
                </button>
                <button className="deleteButton" onClick={handleDelete.bind(this,id)}> 
                    <Delete/>
                </button>
            </div>
        </div>
    )
        

   
}

export default TodoItem;