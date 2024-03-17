import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Cooks = ({ cooks }) => {
    return (
        <div className="lg:w-[35%] mt-10">
            <h3 className="text-2xl font-bold text-center">
                Want to cook : {cooks.length}</h3>
                <div className="overflow-x-auto">
                <table className="table">
                    <thead className='flex justify-between'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                </table>
            </div>
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