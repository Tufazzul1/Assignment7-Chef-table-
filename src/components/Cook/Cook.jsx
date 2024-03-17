import PropTypes from 'prop-types';

const Cook = ({ cook, handleCurrentCook }) => {
    const { recipe_name, preparing_time, calories,recipe_id } = cook
    return (
     
            <div className='p-4 m-4 bg-gray-100 rounded-lg flex gap-2 justify-between'>
                <h3>{recipe_id}. </h3>
                <h3>{recipe_name}</h3>
                <h4>{preparing_time} minutes</h4>
                <p>{calories} calories</p>
                <button onClick={()=>handleCurrentCook(cook)} className="btn btn-success rounded-full">Preparing</button>
            </div>
        
    );
};
Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    handleCurrentCook: PropTypes.func.isRequired
}

export default Cook;