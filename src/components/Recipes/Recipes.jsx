
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handleAddToCook}) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))

    }, [])


    return (
        <div className="mt-10 lg:w-[60%] container grid lg:grid-cols-2 gap-8 ">
            {
                recipes.map(recipe =>
                     <Recipe key={recipe.recipe_id}
                      recipe={recipe}
                      handleAddToCook={handleAddToCook}
                      ></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes ={
    handleAddToCook : PropTypes.func.isRequired
}

export default Recipes;