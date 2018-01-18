import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";
import App from '../../App';
import Saved from '../Saved';


//const orgImgUrl = "https://spoonacular.com/recipeImages/";
class Main extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    recipeInfo: []

  };

 getRecipeInfo = recipeInfo =>{
    API.getRecipeInfo(recipeInfo)
    .then(res => {

      this.setState({
        recipeInfo: res.data
      })
      
    }).then(() => {

      const recipeInfoToSave = {
        title:this.state.recipeInfo.title,
        recipeId: this.state.recipeInfo.id,
        sSUrl: this.state.recipeInfo.spoonacularSourceUrl,
        pairedWines: this.state.recipeInfo.winePairing.pairedWines,
        readyInMinutes: this.state.recipeInfo.readyInMinutes,
        pricePerServing: this.state.recipeInfo.pricePerServing,
        instructions: this.state.recipeInfo.instructions
      }
      this.saveRecipe(recipeInfoToSave)
    })
      .catch(err => {
        console.log(err);
      });
  };


  saveRecipe = recipeInfo => {
    console.log(recipeInfo)
    console.log(typeof recipeInfo)
    API.saveRecipe(recipeInfo)
      .then(res => {
        console.log('hey its saved');
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log(this.state.recipeSearch)
    // When the form is submitted, prevent its default behavior, get recipes update the recipe state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => { 
        console.log(res.data);
        //console.log(res.data.baseUri);
        //console.log(res.data[0].image);
        //console.log(res.data.length);
        this.setState({ recipes: res.data })
    }).catch(err => console.log("get recipes failed", err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    const recipeInfo = {
                          title: recipe.title,
                          recipeId: recipe.id,
                          sSUrl: recipe.spoonacularSourceUrl,
                          readyInMins: recipe.readyInMinutes,
                          instructions: recipe.instructions,
                          pairedWines: recipe.pairedWines,
                          cuisineType: recipe.cuisineType,
                          pricePerServing: recipe.pricePerServing
                        }
                    return (
                      <RecipeListItem
                        key={recipe.id}
                        title={recipe.title}
                        href={recipe.title + "-" + recipe.id}
                        id={recipe.id}
                        readyInMinutes={recipe.readyInMinutes}
                        thumbnail={recipe.image}
                        getRecipeInfo={this.getRecipeInfo}
                        saveRecipe={this.saveRecipe}
                        recipeInfo={recipeInfo}
                        />     
                      );
                      
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
