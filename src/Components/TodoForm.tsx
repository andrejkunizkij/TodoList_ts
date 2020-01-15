import React from 'react'
import '../App.css';

interface TodoFormProps {
    addLi(title: string): void
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

    handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: event.target.value,
        })
    };

    handleClick = () => {
        this.props.addLi(this.state.text);
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

export default TodoForm


