import './App.css';
import React, { Component } from 'react';
import tasks from './samples/tasks.json';
import Tasks from './components/tasks';
import TaskForm  from "./components/task-form";


class App extends Component {
    state = {
        tasks: tasks
    }
    render() {
        return <div>
            <TaskForm/>
            <Tasks tasks={this.state.tasks}/>
        </div>
    };
}

export default App;