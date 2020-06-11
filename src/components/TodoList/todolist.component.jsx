import React from 'react';

import TodoItem from '../TodoItem/todoItem.component';
import NewTodoCard from '../New-Todo-Card/newTodoCard.component';

import './todolist.styles.scss';


class TodoList extends React.Component{

    constructor() {
        super();

        this.state = {
            TodoList: [],
            newTodoText: '',
            listcount: 0
        }
    }

    handleCheckBoxChange = (event) => {
       
        let id = parseInt(event.target.id);
       
        let mainObj = this.state.TodoList;

        mainObj.filter((item)=> {
            if(item.id === id){
                item.completetion_status = event.target.checked;
                return item;
            } else {return item}
        })
        this.setState({
            TodoList : [...mainObj]
        })
        
    }

    handleNewTodoText = event => {
        this.setState({
            newTodoText : event.target.value
        })
    }

    addTodoInState = () => {
        if(this.state.newTodoText.trim() !== '')
        {
            let obj = {
                title: this.state.newTodoText,
                completetion_status: false,
                id: Date.now()
            }
            let tempObj = [...this.state.TodoList];
            tempObj.push(obj);
            
            this.setState({
                TodoList : [...tempObj],
                newTodoText: ''
            })

        }
       
    }
    handleEdit = (id,text) => {
        console.log('new edit called '+ id + ' text '+text);
 
        let mainObj = this.state.TodoList;

        mainObj.filter((item)=> {
            if(item.id === parseInt(id)){
                item.title = text;
                return item;
            } else {return item}
        })
        this.setState({
            TodoList : [...mainObj]
        })
      
    }

    handleDelete = (id,event) => {
        let remove_id = parseInt(id);
        let newArray = this.state.TodoList.filter((item) => {
            return ( item.id !== remove_id) ? item : null
        })
        this.setState({
            TodoList : [...newArray]
        })
    }
   

    render(){
        return (
            <div className="todo-container">
                <h2>Todo App</h2>
                <p>Create, Edit and Delete your Todo List</p>
            
                <NewTodoCard 
                    handleClick={this.addTodoInState} 
                    handleChange={this.handleNewTodoText} 
                    newTodoText={this.state.newTodoText}
                />
                
                {
                    this.state.TodoList.map( ({id, ...otherTodoItemProps }) => {
                        return (
                            <TodoItem 
                            key={id} 
                            id={id} 
                            handleChange={this.handleCheckBoxChange}
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete}
                            {...otherTodoItemProps} 
                             />
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoList;