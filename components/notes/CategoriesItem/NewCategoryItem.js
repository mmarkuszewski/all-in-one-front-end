import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import CategoryButton from "./CategoryButton"

const CategoryInput = styled.input`
  width: 100%;
  border-radius: 25px;
  box-sizing: border-box;
  background-color: #ffffcc;

`


class NewCategoryItem extends React.Component{

  constructor(props){
    super(props)
    // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
    this.clickHandle = this.clickHandle.bind(this)
    this.hoverButton = this.hoverButton.bind(this)
    this.leaveButton = this.leaveButton.bind(this)
    this.onInputChange = this.onInputChange.bind(this)

    this.state = {hovered: false, name: ""}
  }

  clickHandle(e){
    e.preventDefault()
    if(this.state.name === "") {
      console.log("Dont send empty data!")
      return null
    }
    fetch("http://127.0.0.1:8080/category",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: this.state.name})
    }).then(res => this.props.categoryCreated())
      .catch(reason => console.log(reason))

    this.setState({name:""})
  }

  hoverButton(e){
    e.preventDefault()
    this.setState({hovered: true})
  }

  leaveButton(e){
    e.preventDefault()
    this.setState({hovered: false})
  }

  onInputChange(e){
    e.preventDefault()
    this.setState({name: e.target.value})
  }

  render() {
    let content
    if(this.state.hovered){
      content = (
        <div>
        <form onSubmit={this.clickHandle}>
          <CategoryInput type="text"
                         onChange={this.onInputChange}
                         value={this.state.name}
                         onClick={(e) => e.stopPropagation()}/>
        </form>
        <br/>
        <div>Create!</div>
        </div>
      )
    }else{
      content = <FontAwesomeIcon icon={faPlus} size="2x"/>
    }
    return (

      <CategoryButton isLink={false}
                      // name="Create"
                      clickHandle={this.clickHandle}
                      hoverButton={this.hoverButton}
                      leaveButton={this.leaveButton}>
        {content}
      </CategoryButton>
    )
  }
}

export default NewCategoryItem