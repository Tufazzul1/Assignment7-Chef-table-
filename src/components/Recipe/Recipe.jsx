import PropTypes from 'prop-types';

const Recipe = ({ recipe, handleAddToCook }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='border-solid border-2 border-gray-300  rounded-xl p-3'>
            <img className='rounded-xl' src={recipe_image} alt="" />
            <h2 className="text-xl font-bold mt-3">{recipe_name}</h2>
            <p className='text-gray-500'>{short_description}</p>
            <br />
            <h4 className='font-bold'>Ingredients: {ingredients.length}</h4>
            <ul className='list-disc ml-4 text-gray-500'>
                {ingredients.map((ingredient, index) => {
                    const [quantity, ingredientName] = ingredient.split(' ');
                    return (
                        <li key={index}>
                            {quantity}{ingredientName}
                        </li>
                    );
                })}
            </ul>
            <br />
            <div className='flex gap-3 text-gray-500'>
                <h4><i className="fa-regular fa-clock mr-2"></i>{preparing_time} minutes</h4>
                <h4><i className="fa-solid fa-fire mr-2"></i>{calories} calories</h4>
            </div>
            <button onClick={()=>handleAddToCook(recipe)} className="btn btn-success mt-4">Want to Cook</button>

        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func.isRequired
}

export default Recipe;