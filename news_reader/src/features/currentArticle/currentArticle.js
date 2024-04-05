import React from 'react'
import { useSelector } from 'react-redux'
import { isLoadingCurrentArticle, selectCurrentArticle } from './currentArticleSlice'
import FullArticle from '../../components/FullArticle'

export default function CurrentArticle() {
    const currentArticle= useSelector(selectCurrentArticle)
    const isLoadingArticles= useSelector(isLoadingCurrentArticle)
    if (isLoadingArticles) {
        return <div>Loading</div>;
      } else if (!currentArticle) {
        return null;
      }
    
  return (
    <FullArticle article= {currentArticle}/>
  )
}
