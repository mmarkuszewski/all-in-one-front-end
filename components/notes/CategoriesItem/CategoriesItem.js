import React from "react"

import CategoryButton from "./CategoryButton"

class CategoriesItem extends React.Component{

  render(){
    return(
        <CategoryButton id={this.props.id} isLink={true}>
            {this.props.name}
        </CategoryButton>
    )
  }
}

export default CategoriesItem