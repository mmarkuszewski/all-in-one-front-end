import React, { Component } from "react"
import styled from "styled-components"
import Link from "next/link";



const ItemWrapper = styled.button`
  border: ${props => props.isLink ? "4px solid" : "4px dotted"};//2px solid;
  border-radius: 25px;
  margin: ${props => props.isLink ? "5px" : "5px"};//5px;
  padding: 15px;
  width: ${props => props.isLink ? "15%" : "15%"};//15%;
  height: 20vh;
  color: #ffffcc;
  background-color: #003366;
  box-shadow: ${props => props.isLink ? "2px 2px 10px black" : "0px"};
  font-size: 2em;
`

const CategoryButton = (props) => {

    let content
    if(props.children){
      content = (<div>{props.children}<br/>{props.name}</div>)
    }else{
      content = (<div>{props.name}</div>)
    }
    return (
        <Link href="notes/[id]" as={`/notes/${props.id}`}>
            <ItemWrapper isLink={props.isLink}
                       onClick={props.clickHandle}
                       onMouseEnter={props.hoverButton}
                       onMouseLeave={props.leaveButton}>
              {content}
            </ItemWrapper>
        </Link>
    )

}

export default CategoryButton

// class CategoryButton extends Component {
//     render() {
//         let content
//         if(this.props.children){
//             content = (<div>{this.props.children}<br/>{this.props.name}</div>)
//         }else{
//             content = (<div>{this.props.name}</div>)
//         }
//         return (
//             <Link href="notes/[id]" as={`/notes/${this.props.id}`}>
//                 <ItemWrapper isLink={this.props.isLink}
//                              onClick={this.props.clickHandle}
//                              onMouseEnter={this.props.hoverButton}
//                              onMouseLeave={this.props.leaveButton}>
//                     {content}
//                 </ItemWrapper>
//             </Link>
//         )
//     }
// }