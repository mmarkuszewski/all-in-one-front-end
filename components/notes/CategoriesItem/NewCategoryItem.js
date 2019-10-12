import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import axios from "axios"

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
    this.onInputChange = this.onInputChange.bind(this)

    this.state = {hovered: false, name: ""}
  }

  clickHandle(e){
    e.preventDefault()
    if(this.state.name.trim() === "") {
      console.log("Dont send empty data!")
      return null
    }
    axios.post("http://127.0.0.1:8080/categories",{
      name: this.state.name
    }).then(res => this.props.categoryCreated())
      .catch(reason => console.log(reason))

    this.setState({name:""})
  }

  onInputChange(e){
    e.preventDefault()
    this.setState({name: e.target.value})
  }

  render() {
    return (

      <CategoryButton isLink={false}
                      // name="Create"
                      clickHandle={this.clickHandle}>
        <form onSubmit={this.clickHandle}>
          <CategoryInput type="text"
                         onChange={this.onInputChange}
                         value={this.state.name}
                         onClick={(e) => e.stopPropagation()}/>
        </form>
        <br/>
        <FontAwesomeIcon icon={faPlus} size="2x"/>
      </CategoryButton>
    )
  }
}

export default NewCategoryItem