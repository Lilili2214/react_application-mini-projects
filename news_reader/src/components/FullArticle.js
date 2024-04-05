import React from 'react'

export default function FullArticle({article}) {
  return (
    <>
    <div className='article-full-image-container'>
        <img src={article.image} alt=''/>
        <div key={article.id} className='current-article-container'>
            <h1 className='current-article-title'>{article.title}</h1>
            <div className='current-article-full-text'>{article.fullText}</div>
        </div>
    </div>
    </>
  )
}
