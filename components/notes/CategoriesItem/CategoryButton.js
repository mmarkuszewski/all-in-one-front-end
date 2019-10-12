import React, { Component } from "react"
import styled from "styled-components"
import Link from "next/link";



const ItemWrapper = styled.a`
  border: ${props => props.isLink ? "4px solid" : "4px dotted"};//2px solid;
  border-radius: 25px;
  margin: 5px;
  width: 200px;
  padding: 15px;
  height: 20vh;
  color: #ffffcc;
  background-color: #003366;
  box-shadow: ${props => props.isLink ? "2px 2px 10px black" : "0px"};
  font-size: 2em; 
  box-sizing: border-box;
  text-align: center;
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
                       onClick={props.clickHandle}>
              {content}
            </ItemWrapper>
        </Link>
    )

}

export default CategoryButton
