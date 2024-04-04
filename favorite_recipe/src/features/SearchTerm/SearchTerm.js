
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchTerm, selectSearchTerm, setSearchTerm } from './searchTermSlice';
const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';
export function SearchTerm() {
    const searchTerm = useSelector(selectSearchTerm)
    
    const dispatch= useDispatch()
    const onSearchTermChangeHandler =(e)=>{
        const userInput = e.target.value
        dispatch(setSearchTerm(userInput))
    }
    const onClearSearchTerm = ()=>{
        dispatch(clearSearchTerm())
    }
    return (
       <div id ='search-container'>
        <img id='search-icon' alt='' src={searchIconUrl}/>
        <input 
        id='search'
        type='text'
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        
        placeholder='Search recipes'
        />
        {searchTerm.length > 0 && (
            <button onClick={onClearSearchTerm}
                type='button'
                id='search-clear-button'>
                <img src={clearIconUrl}alt=''/>
            </button>
        )}
       </div>
    );
}

