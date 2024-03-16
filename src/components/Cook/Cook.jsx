

const Cook = () => {
    return (
        <div className="mt-10 lg:w-1/3 border border-gray-300 rounded-lg">
            <h1 className="text-3xl font-bold text-center pt-4 pb-4">Want to Cook</h1>
            <hr />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cook;