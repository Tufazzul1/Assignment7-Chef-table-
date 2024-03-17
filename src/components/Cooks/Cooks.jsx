import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Cooks = ({ cooks }) => {
    return (
        <div className="lg:w-[40%] mt-10">
            <h3 className="text-2xl font-bold text-center">
                Want to cook : {cooks.length}</h3>
            {
                cooks.map(cook => <Cook key={cook.recipe_id} cook={cook}></Cook>)
            }

        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array.isRequired
}

export default Cooks;