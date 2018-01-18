import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


//; props.saveRecipe(props.children)
// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Ready In Minutes: {props.readyInMinutes}</p>
          
          <a rel="noreferrer noopener" target="_blank" href={'https://spoonacular.com/'+ props.href}>Go to recipe!</a>
          <button className="btn btn-success" onClick={() => props.getRecipeInfo(props.id)} style={{float: "right"}}> Save Recipe </button>
        </Col>
         
      </Row>
    </Container>
  </li>
);
