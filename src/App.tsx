import React from 'react';
import './App.css';
import TodoPage from './Components/TodoPage'
import {Route, NavLink, Switch} from 'react-router-dom'
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

class App extends React.Component {

    render() {
        return (
            <div className="main">

                <nav className="nav">
                    <NavLink to="/" exact>go to Main Page</NavLink>
                    <NavLink to="/form">go to Form</NavLink>
                    <NavLink to="/list">go to result of List</NavLink>
                </nav>

                <Switch>
                    <Route path="/form" component={TodoForm}/>
                    <Route path="/list" component={TodoPage}/>
                    <Route path="/" exact render={() => <h1>Todo List</h1>}
                    />
                </Switch>
            </div>
        )
    }
}

export default App;
