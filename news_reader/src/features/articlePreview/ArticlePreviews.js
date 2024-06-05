import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLoadingArticles, loadArticlePreviews, selectArticlePreviews } from './artilcePreviewSlice'
import { loadCurrentArticle } from '../currentArticle/currentArticleSlice'
import ArticleListItem from '../../components/ArticleListItem'

function ArticlePreviews() {
    const articlePreviews = useSelector(selectArticlePreviews)
    const dispatch = useDispatch()
    const isLoading = useSelector(isLoadingArticles)
    
    const onFirstRender =  ()=>{
        
          dispatch(loadArticlePreviews())
        
    }
    useEffect(onFirstRender, [dispatch])
    
    if (isLoading) {
        return <div>Loading</div>;
      }
    
    return (
        <section className='articles-container'>
            <h2 className='section-title'>All Articles</h2>
            {articlePreviews.map((article) => (
                <div key={article.id} onClick={(e) => {
                    
                    dispatch(loadCurrentArticle(article.id));
                }}>
                    <ArticleListItem article={article} />
                    
                </div>
            ))}
        </section>
    )

    
}
export default ArticlePreviews;
