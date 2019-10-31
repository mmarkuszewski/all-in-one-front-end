import React, {Component} from 'react';
import styled from "styled-components";

const Item = styled.div`
background-color: white;
color: black;
border: 1px solid black;
padding: 2px;
`

class TaskItem extends Component {

    drag(e){
        e.dataTransfer.setData("text", e.target);
        console.log(e.dataTransfer.getData("text"))

        console.log("drag")
    }

    drop(e){
        e.preventDefault()
        console.log("drop")

        let data = e.dataTransfer.getData("text");
        console.log(data)
        e.target.parent.appendChild(document.getElementById(data));
    }


    render() {
        return (
            <Item draggable={true} onDragStart={this.drag} onDrop={this.drop} onDragOver={e => e.preventDefault()}>
                {this.props.children}
            </Item>
        );
    }
}

export default TaskItem;