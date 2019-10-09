import React from "react"
import {createGlobalStyle} from "styled-components"

import CategoriesList from "../components/notes/CategoriesList/CategoriesList"


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`;

const IndexPage = (props) => (
    <>
      <GlobalStyle/>
      <CategoriesList categories={props.categories}/>
    </>
);

IndexPage.getInitialProps = async function() {
    const categories = await CategoriesList.getCategories()

    return {
        categories: categories
    };
};

export default IndexPage
