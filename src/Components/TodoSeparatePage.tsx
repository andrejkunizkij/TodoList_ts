import React from 'react'
import '../App.css';
import TodoForm from "./TodoForm";


class TodoFormPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TodoForm/>
            </React.Fragment>
        )
    }
}

export default TodoFormPage