import React, {Component} from 'react';
import { useRouter } from 'next/router';
import axios from "axios"

const NotesWithRouter = () => {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.id}</h1>
            <Notes id={router.query.id}></Notes>
        </div>
    );
};


class Notes extends Component {

    constructor(props){
        super(props)
        this.createNote = this.createNote.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {note: "notatka"}
    }

    createNote(e){
        e.preventDefault()
        axios.post(`http://127.0.0.1:8080/categories/${this.props.id}/notes`,{
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
                <form onSubmit={this.createNote}>
                    <input type="text" onChange={this.handleInputChange} value={this.state.note}></input>
                    <input type="submit" ></input>
                </form>
            </div>
        )

    }
}


NotesWithRouter.getInitialProps = async function(context){
    // console.log(context)
    let res = axios.get(`http://127.0.0.1:8080/categories/${context.query.id}/notes`)
    let data = res.data
    console.log(data)

    return {notes: data}
}

export default NotesWithRouter;