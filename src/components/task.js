import React, { Component } from 'react';
import './task.css';
import PropTypes from 'prop-types';

class Task extends Component {
    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray': 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {task} = this.props;
        return <p style={this.styleCompleted()}>
            {task.title} - {task.description} - {task.done} - {task.id}
            <input type={"checkbox"}/>
            <button className={"btnDelete"}>x</button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;