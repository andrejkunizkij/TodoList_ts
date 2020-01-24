import React from 'react'
import '../App.css';
import {connect} from 'react-redux'

interface TodoListProps {
    done: boolean;
    check(id: number): void
    name: string
    deleteLi(id: number): void
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
        return (
            <div>
                <div className='newLi'>
                    <li className={this.props.done ? 'newLiTextDec' : undefined}
                        onClick={this.handleClick}
                    >
                        {this.props.name}
                    </li>
                    <button onClick={this.handleClickDelete}>Delete</button>
                </div>
            </div>
        )

    }
}

function mapDispathToProps(dispatch: any) {
    return  {
        check: (id: number) => dispatch({type:'COMPLETE_TODO', payload: id }),
        deleteLi: (id: number) => dispatch({type:'DELETE_TODO', payload: id})
    }
}

export default connect(null, mapDispathToProps)(TodoList);

