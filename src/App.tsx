import React, {Component} from 'react';
import './App.css';
import  TodoPage from './Components/TodoPage'

class App extends React.Component {

    render() {
        return (
            <div className="main">
                <TodoPage/>
            </div>
        )
    }
}

export default App;
