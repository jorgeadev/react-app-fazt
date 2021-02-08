import React, { Component } from 'react';

export default class TaskForm extends Component {
    render() {
        return (
            <form>
                <input type={"text"} placeholder={"Write a Task"}/>
                <br/>
                <br/>
                <textarea placeholder={"Write a description"}/>
                <input type={"submit"} value={"Send"}/>
            </form>
        )
    }
}