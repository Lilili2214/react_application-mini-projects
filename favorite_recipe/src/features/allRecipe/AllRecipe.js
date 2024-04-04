import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData, selectFilteredAllRecipes } from './allRecipeSlice'
import Recipe from '../../components/Recipe.js'
import FavoriteButton from '../../components/FavoriteButton.js'
import { addRecipe, selectFilteredFavoriteRecipes } from '../favoriteRecipes/favoriteRecipeSlice'
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'
export const AllRecipe = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes)
  const allFavoriteRecipes= useSelector(selectFilteredFavoriteRecipes)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  const onAddRecipe = (recipe) => {
    const current_favorite= new Set(allFavoriteRecipes.map(recipe_=>recipe_.id))
    if (!current_favorite.has(recipe.id) ){
      dispatch(addRecipe(recipe))
    }
    else{
      alert("Already add to Favorite list")
    }
    
  }
  return (
    
      <div className='recipes-container'>
        {allRecipes.map(recipe => (
          <Recipe recipe = {recipe} key={recipe.id}>
            <FavoriteButton 
            onClickHandler={()=>onAddRecipe(recipe)}
            icon={favoriteIconURL}>
              Add to Favorite
            </FavoriteButton>
          </Recipe>
        )) 
        }
      </div>
    
  )
}
