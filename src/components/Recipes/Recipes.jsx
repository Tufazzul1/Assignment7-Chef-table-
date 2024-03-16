import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => recipes(data))
    }, [recipes])


    return (
        <div>
            <div className="text-center mt-14">
                <h2 className="text-4xl font-bold">Our Recipes</h2>
                <p className="mt-4">Dive into a world of delicious possibilities with our mouthwatering recipes. From quick meals to gourmet delights, <br /> theres something for every craving.</p>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;