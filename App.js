import { useEffect, useState } from 'react';
import './App.css';
import { Recipe } from './Recipe';
import './index.css';



function App() {
  
  const APP_ID = "b8139055";
  const APP_KEY = "93b4c7700e557ab13340aa56953aaac5";
  
  const [recipes,setRecipes] = useState([]);
  
  const [query,setQuery] = useState("Chicken");
  const[search,setSearch] = useState("");

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }
  return (

    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type='submit'>Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}




export default App;
