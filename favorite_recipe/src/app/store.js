import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { searchTermReducer } from '../features/SearchTerm/searchTermSlice';
import  allRecipesReducer  from '../features/allRecipe/allRecipeSlice';
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipeSlice";
export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer, 
    favoriteRecipes: favoriteRecipesReducer, 
  }
});
