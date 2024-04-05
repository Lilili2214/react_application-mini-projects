import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLoadingComment, loadComment, selectComments } from './commentsSlice'
import { selectCurrentArticle } from '../currentArticle/currentArticleSlice'
import CommentList from '../../components/CommentList'
import CommentForm from '../../components/CommentForm'


export default function Comments() {
    const allComments= useSelector(selectComments)
    const dispatch= useDispatch()
    const isLoading = useSelector(isLoadingComment)
    const article = useSelector(selectCurrentArticle)
    
    useEffect( ()=>{
        if(article){
             dispatch(loadComment(article.id))
        }
    }, [article, dispatch])
    const commentsForArticleId = article ? allComments[article.id] : [];
    if (isLoading) return <div>Loading Comments</div>;
    if (!article) return null;
  
    return (
      <div className='comments-container'>
        <h3 className='comments-title'>Comments</h3>
        <CommentList comments={commentsForArticleId} />
        <CommentForm articleId={article.id} />
      </div>
    );
  };
  