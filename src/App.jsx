
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import RecipeHeader from './components/Recipeheader/RecipeHeader'
import Recipes from './components/Recipes/Recipes'
import Cooks from './components/Cooks/Cooks'

function App() {

  const [cooks, setCooks] = useState([])

  const handleAddToCook = recipe =>{
    const newRecipeList = [...cooks, recipe]
    setCooks(newRecipeList)
  }

  const [currentCooks, setCurrentCooks] = useState([])

  const handleCurrentCook = currCook => {
      const newCurrentCook = [...currentCooks, currCook]
      setCurrentCooks(newCurrentCook)
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>
      <div className='lg:flex container mx-auto gap-3'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <Cooks handleCurrentCook={handleCurrentCook} cooks={cooks} currentCooks={currentCooks}></Cooks>
      </div>

    </>
  )
}

export default App
