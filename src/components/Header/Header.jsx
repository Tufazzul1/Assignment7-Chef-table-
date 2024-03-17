

const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-3xl font-bold">Tasty Hutt</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>

                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <label className="sm: w-[100px]input p-2 border input-bordered flex items-center gap-2 rounded-full">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        
                        <input type="text" className="grow" placeholder="Search" />

                    </label>


                    <a className="btn bg rounded-full bg-green-500"><i className="fa-regular fa-user"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Header;