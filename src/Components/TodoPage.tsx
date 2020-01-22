// @ts-nocheck

import React from 'react'
import '../App.css';
import TodoList from './TodoList'
import TodoForm from "./TodoForm";
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
    constructor(props: ITodoProps) {
        super(props);
    }

    // check = (id: number) => {
    //     let index: number = 0;
    //     const item = this.props.tasks.find((task, idx) => {
    //         if (task.id === id) {
    //             index = idx;
    //             return task
    //         }
    //     });
    //     item!.done = !item!.done;
    //     const tasks = [...this.props.tasks];
    //     tasks.splice(index, 1, item!);
    //     this.setState({tasks});
    //     console.log('check');
    // };
    //
    // deleteLi = (id: number) => {
    //     const index = this.props.tasks.findIndex((task) => task.id === id);
    //     const tasks = [...this.props.tasks];
    //     tasks.splice(index, 1);
    //     this.setState({tasks});
    //     console.log('deleteLi');
    // };
    //
    // addLi = (title: string) => {
    //     const newTask: ITask = {
    //         newLi: title,
    //         done: false,
    //         id: Date.now(),
    //     };
    //     const tasks = [...this.props.tasks, newTask];
    //     this.setState({tasks});
    //     console.log('addLi');
    // };


    render() {
        let list = this.props.tasks.map((item) => {
            return (
                <TodoList
                    // check={this.check}
                    done={item.done}
                    name={item.newLi}
                    // deleteLi={this.deleteLi}
                    key={item.id}
                    id={item.id}
                />
            )
        });

        return (
            <React.Fragment>
                <TodoForm
                    addTodo={this.addTodo}
                />
                <ul>
                    {list}
                </ul>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        tasks: state.tasks
    }
}

function mapDispathToProps(dispatch) {
    return  {
        completeTodo: () => dispatch({type:'COMPLETE_TODO'}),
        deleteTodo: id => dispatch({type:'DELETE_TODO', payload: id})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(TodoPage);