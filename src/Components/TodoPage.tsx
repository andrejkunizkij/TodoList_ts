import React from 'react'
import '../App.css';
import TodoList from './TodoList'
import TodoForm from "./TodoForm";

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

        this.state = {
            tasks: [
                {newLi: 'do something', done: false, id: Date.now()}
            ]
        }
    }

    check = (id: number) => {
        let index: number = 0;
        const item = this.state.tasks.find((task, idx) => {
            if (task.id === id) {
                index = idx;
                return task
            }
        });
        item!.done = !item!.done;
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1, item!);
        this.setState({tasks});
        console.log('check');
    };

    deleteLi = (id: number) => {
        const index = this.state.tasks.findIndex((task) => task.id === id);
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({tasks});
        console.log('deleteLi');
    };

    addLi = (title: string) => {
        const newTask: ITask = {
            newLi: title,
            done: false,
            id: Date.now(),
        };
        const tasks = [...this.state.tasks, newTask];
        this.setState({tasks});
        console.log('addLi');
    };


    render() {

        let list = this.state.tasks.map((item) => {
            return (
                <TodoList
                    check={this.check}
                    done={item.done}
                    name={item.newLi}
                    deleteLi={this.deleteLi}
                    key={item.id}
                    id={item.id}
                />
            )
        });

        return (
            <React.Fragment>
                <TodoForm
                    addLi={this.addLi}
                />

                <ul>
                    {list}
                </ul>
            </React.Fragment>
        )
    }
}

export default TodoPage;