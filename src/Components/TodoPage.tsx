// @ts-nocheck
import React from 'react'
import '../App.css';
import TodoList from './TodoList'
import {connect} from 'react-redux'

interface ITodoProps {
}

interface ITask {
    newLi: string;
    done: boolean;
    id: number;
}

interface IAppState {
    tasks: ITask[]
}

class TodoPage extends React.Component<ITodoProps, IAppState> {

    render() {
        let list = this.props.tasks.map((item: ITask) => {
            return (
                <TodoList
                    done={item.done}
                    name={item.newLi}
                    key={item.id}
                    id={item.id}
                />
            )
        });

        return (
            <React.Fragment>
                <ul>
                    {list}
                </ul>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state: IAppState) {
    return {
        tasks: state.tasks
    }
}

function mapDispathToProps(dispatch: any) {
    return {
        completeTodo: () => dispatch({type: 'COMPLETE_TODO'}),
        deleteTodo: (id: number) => dispatch({type: 'DELETE_TODO', payload: id})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(TodoPage);

