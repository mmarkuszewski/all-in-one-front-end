import React, {Component} from 'react';
import { useRouter } from 'next/router';
import axios from "axios"

import TasksContainer from "../../../components/notes/tasks/TasksContainer/TasksContainer";

const NotesWithRouter = (props) => {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.id}</h1>
            <Notes categoryId={router.query.id}></Notes>
        </div>
    );
};


class Notes extends Component {

    constructor(props){
        super(props)
        this.createNote = this.createNote.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {note: ""}
    }

    createNote(e){
        e.preventDefault()
        axios.post(`http://127.0.0.1:8080/categories/${this.props.categoryId}/notes`,{
            note: this.state.note
        })
        .then(res => res.data)
            .then(data => this.setState({notes: data}))
    }

    handleInputChange(e){
        e.preventDefault()
        this.setState({note: e.target.value})
    }


    render() {
        return (
            <div>
                <TasksContainer categoryId={this.props.categoryId}/>
                <form onSubmit={this.createNote}>
                    <input type="text" onChange={this.handleInputChange} value={this.state.note}></input>
                    <input type="submit" ></input>
                </form>
            </div>
        )
    }
}


NotesWithRouter.getInitialProps = async function(context){
    return {tasks: "res.data.tasks"}
}

export default NotesWithRouter;