import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';
import CurrentCooks from '../CurrentCooks/CurrentCooks';




const Cooks = ({ cooks, handleCurrentCook, currentCooks }) => {

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
                cooks.map((cook, index) => <Cook
                    key={cook.recipe_id}
                    cook={cook}
                    handleCurrentCook={handleCurrentCook}
                    index={index + 1}
                ></Cook>)
            }
                   <div>
             <h3 className="text-2xl font-bold text-center mt-6">
                Currently Cooking : {currentCooks.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
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
                currentCooks.map((cook, index) =><CurrentCooks 
                     key={cook.recipe_id + 1} 
                     cook={cook}
                     index={index + 1}
                     ></CurrentCooks>)
            }
           
        </div>
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array.isRequired,
    handleCurrentCook: PropTypes.func.isRequired,
    currentCooks: PropTypes.array.isRequired
}

export default Cooks;