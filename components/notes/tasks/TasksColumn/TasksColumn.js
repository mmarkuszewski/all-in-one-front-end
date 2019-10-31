import React, {Component} from 'react';
import styled from "styled-components"

import TaskItem from "../TaskItem/TaskItem";

const Column = styled.div`
 background-color: ${props => props.red ? "red" : "black"};
 width: 25%;
 height: 20vh;
 margin: 5px 5%;
`


class TasksColumn extends Component {
    render() {
        let tasks
        if(this.props.tasks){
            tasks = this.props.tasks.map(item => <TaskItem key={item.id}>{item.content}</TaskItem> )
        }else{
            tasks = null
        }

            return (
            <Column red={this.props.red}>
                {this.props.children}
                {tasks}
            </Column>
        );
    }
}

export default TasksColumn;