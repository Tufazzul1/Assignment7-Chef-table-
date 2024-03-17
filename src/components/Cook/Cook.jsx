import PropTypes from 'prop-types';

const Cook = ({ cook }) => {
    const { recipe_name, preparing_time, calories } = cook
    return (

        
        <div>
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
            <div className='p-4 m-4 bg-gray-100 rounded-lg flex gap-2 justify-between'>
                <h3>{recipe_name}</h3>
                <h4>{preparing_time} minutes</h4>
                <p>{calories} calories</p>
                <button className="btn btn-success rounded-full">Preparing</button>
            </div>
        </div>
    );
};
Cook.propTypes = {
    cook: PropTypes.object.isRequired
}

export default Cook;