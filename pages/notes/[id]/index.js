import React, {Component} from 'react';
import { useRouter } from 'next/router';


const NoteWithRouter = () => {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.id}</h1>
            <Note></Note>
        </div>
    );
};

class Note extends Component {
    render() {
        return (
            <div>
                class
            </div>
        );
    }
}


export default NoteWithRouter;