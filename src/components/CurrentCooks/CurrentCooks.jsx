
import PropTypes  from 'prop-types';
const CurrentCooks = ({ cook }) => {
    const { recipe_name, preparing_time, calories, recipe_id } = cook;
    return (
        <div className="p-4 m-4 bg-gray-100 rounded-lg flex gap-2 justify-between">
            <h3>{recipe_id}. </h3>
            <h3>{recipe_name}</h3>
            <h4>{preparing_time} minutes</h4>
            <p>{calories} calories</p>
        </div>
    );
};

CurrentCooks.propTypes = {
    cook: PropTypes.object.isRequired
}

export default CurrentCooks;