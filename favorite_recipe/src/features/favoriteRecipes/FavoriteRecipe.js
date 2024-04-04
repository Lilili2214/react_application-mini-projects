import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipeSlice'
import Recipe from '../../components/Recipe'
import FavoriteButton from '../../components/FavoriteButton'
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';
export function FavoriteRecipe() {
  const allRecipes = useSelector(selectFilteredFavoriteRecipes)
  console.log(allRecipes)
  const dispatch = useDispatch()
  const onRemovedRecipe = (recipe) =>{
    dispatch(removeRecipe(recipe))
  }
  return (
    <div className='recipes-container'>
      {allRecipes.map(createFavoriteRecipes)} 
    </div>
  )
  function createFavoriteRecipes(recipe){
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton onClickHandler={()=>onRemovedRecipe(recipe)} icon ={unfavoriteIconUrl}>
          Remove Recipe
        </FavoriteButton>
      </Recipe>
    )
  }
}
