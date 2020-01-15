import React from 'react'
import '../App.css';

interface  TodoListProps {
    done: boolean;
    check(id: number):void
    name: string
    deleteLi(id:number): void
    id: number
}

class TodoList extends React.Component<TodoListProps, {}> {

    handleClick = () => {
        this.props.check(this.props.id)
    };

    handleClickDelete = () => {
        this.props.deleteLi(this.props.id)
    };

    render() {
        return (<div>
            <div className='newLi'>
                <li className={this.props.done ? 'newLiTextDec' : undefined}
                    onClick={this.handleClick}
                >
                    {this.props.name}
                </li>
                <button onClick={this.handleClickDelete}>Delete</button>
            </div>
        </div>)

    }
}
console.log(TodoList)
export default TodoList;
