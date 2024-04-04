import { createSlice } from "@reduxjs/toolkit";
import allRecipesData from "../../data.js";
import { selectSearchTerm } from "../SearchTerm/searchTermSlice";


export const allRecipeSlice = createSlice({
    name: 'allRecipes', 
    initialState: [],
    reducers: {
        loadData: (state, action)=> {
            return [...allRecipesData]
        }
    }
})
export const selectAllRecipes= (state)=> state.allRecipes;
export const selectFilteredAllRecipes = (state) => {
    const allRecipes = selectAllRecipes(state);
    console.log(allRecipes)
    const searchTerm = selectSearchTerm(state);

    if (!Array.isArray(allRecipes)) {
        console.error("allRecipes is not an array.");
        return [];
    }

    if (typeof searchTerm !== "string") {
        console.error("searchTerm is not a valid string.");
        return [];
    }

    return allRecipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};
export const {loadData} = allRecipeSlice.actions;
export default allRecipeSlice.reducer