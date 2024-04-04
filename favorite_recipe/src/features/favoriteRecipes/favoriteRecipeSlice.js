import { createSlice } from "@reduxjs/toolkit"
import { selectSearchTerm } from "../SearchTerm/searchTermSlice"


export const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState: [],
    reducers:{
        addRecipe: (state, action)=>{
            state.push(action.payload)
        },
        removeRecipe: (state, action)=>{
            return state.filter(recipe =>recipe.id !== action.payload.id)
            
        }
    }
})


export const selectFavoriteRecipes= (state)=> state.favoriteRecipes

export const selectFilteredFavoriteRecipes = (state) =>{
    const allRecipes = selectFavoriteRecipes(state)
    
    const searchTerm = selectSearchTerm(state)
    if (!Array.isArray(allRecipes)) {
        console.error("allRecipes is not an array.");
        return [];
    }

   
    return allRecipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

}

export const {addRecipe, removeRecipe} = favoriteRecipesSlice.actions
export default favoriteRecipesSlice.reducer
