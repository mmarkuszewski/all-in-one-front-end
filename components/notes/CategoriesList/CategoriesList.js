import React from "react"
import styled from "styled-components"
import axios from "axios"

import CategoriesItem from "../CategoriesItem/CategoriesItem"
import NewCategoryItem from "../CategoriesItem/NewCategoryItem"

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  
  height: 100vh;
`

class CategoriesList extends React.Component{

  constructor(props){
    super(props)
    this.addCreatedCategory = this.addCreatedCategory.bind(this)
    this.state = {categories: this.props.categories}
  }

  static async getCategories(){
    let res = await axios.get("http://127.0.0.1:8080/categories")
    return res.data.categories;
  }

  async addCreatedCategory(){
    let data = await this.constructor.getCategories()
    this.setState((state) => ({categories: data}))
  }

  render() {
    let list
    if(this.state){
      list = this.state.categories.map(category => <CategoriesItem id={category.id}
                                                                   key={category.id}
                                                                   name={category.name}/>)
    }
    return (
      <ListWrapper>
        {list}
        <NewCategoryItem categoryCreated={this.addCreatedCategory}/>
      </ListWrapper>
    )
  }
}

export default CategoriesList