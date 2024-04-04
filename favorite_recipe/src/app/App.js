import React from 'react';


import '../App.css';

import { FavoriteRecipe } from '../features/favoriteRecipes/FavoriteRecipe.js';
import { AllRecipe } from '../features/allRecipe/AllRecipe.js'
import { SearchTerm } from '../features/SearchTerm/SearchTerm.js';
export function App(){
  return (
    <main>
      <section>
        <SearchTerm/>
        <br></br>
        
      </section>
      <section>
        <h2>Favorite Recipes</h2>
  
        <FavoriteRecipe />
        <br></br>
      </section>
      <section>
        <h2>All Recipes</h2>
        <AllRecipe />

      </section>
    </main>
  )
}
