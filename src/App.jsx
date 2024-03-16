
import './App.css'
import Banner from './components/Banner/Banner'
import Cook from './components/Cook/Cook'
import Header from './components/Header/Header'
import RecipeHeader from './components/Recipeheader/RecipeHeader'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <RecipeHeader></RecipeHeader>
      <div className='lg:flex container mx-auto gap-3'>
        <Recipes></Recipes>
        <Cook></Cook>
      </div>

    </>
  )
}

export default App
