import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import {List, ListItem} from '../../components/List';
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";
// import App from '../../App';
// import Main from '../Main';

class Saved extends Component {
  state = {
    recipes: [],
    recipeInfo: []
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getSavedRecipes()
      .then(res => {
        console.log(res.data);
        this.setState({
          recipes: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteRecipes = id => {
    API.deleteRecipes(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  render() {
    return (
        <Row>
          <Col size="md-12">
            {this.state.recipes.length ? (
              <List>
                {this.state.recipes.map(recipe => (
                  <ListItem key={recipe.id}>
                    <a href={recipe.spoonacularSourceUrl} target="_blank">
                      <strong>{recipe.title}</strong>
                    </a>
                    <br />
                    </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Saved Recipes to Display</h3>
            )}
          </Col>
        </Row>
    );
  }
}

export default Saved;
