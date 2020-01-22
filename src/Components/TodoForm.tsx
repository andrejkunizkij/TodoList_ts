//@ts-nocheck
import React from 'react'
import '../App.css';
import {connect} from "react-redux";

interface TodoFormProps {
    addTodo(title: string): void
}

interface TodoFormState {
    text: string
}

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
    constructor(props: TodoFormProps) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: event.target.value
        })
    };

    handleClick = () => {
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        })
    };

    render() {
        return (
            <div>
                <input
                    id='input'
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <input type="button" value="add new item" onClick={this.handleClick}/>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addTodo: (title: string) => dispatch({type: 'ADD_TODO', payload: title}),
    }
}

export default connect(null, mapDispatchToProps)(TodoForm)



