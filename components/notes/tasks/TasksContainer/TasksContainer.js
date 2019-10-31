import React, {Component} from 'react';
import styled from "styled-components"
import axios from "axios"

import TaskColumn from "../TasksColumn/TasksColumn";
import TaskItem from "../TaskItem/TaskItem";

const Container = styled.div`
    display: flex;
    // flex-wrap: wrap;
    justify-content: center;
`

const NewTaskInput = styled.input`
    width: 100%;
`


class TasksContainer extends Component {

    constructor(props){
        super(props)
        this.createTask = this.createTask.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.pullTasks = this.pullTasks.bind(this)
        this.state = {newTaskName : "", tasks: {}}
    }

    componentDidMount() {
        this.pullTasks()
    }

    createTask(){
        axios.post(`http://127.0.0.1:8080/categories/${this.props.categoryId}/tasks`, {
            task: this.state.newTaskName
        }).then(res => this.pullTasks())
            .catch(reason => console.log(reason))
            .finally(this.setState({newTaskName: ""}))
    }

    handleInputChange(e){
        e.preventDefault()
        this.setState({newTaskName: e.target.value})
    }

    async pullTasks(){
        try{
            let res = await axios.get(`http://127.0.0.1:8080/categories/${this.props.categoryId}/tasks`)
            this.setState({tasks: res.data.tasks})
        }catch(e){
            console.log(e)
        }

    }

    render() {
        return (
            <Container>
                <TaskColumn red={true} tasks={this.state.tasks.todo}>
                    <form onSubmit={this.createTask}>
                        <NewTaskInput type="text"
                               onChange={this.handleInputChange}
                               value={this.state.newTaskName}/>
                    </form>
                </TaskColumn>
                <TaskColumn red={false} tasks={this.state.tasks.work}/>
                <TaskColumn red={true} tasks={this.state.tasks.done}/>
            </Container>
        );
    }
}

export default TasksContainer;