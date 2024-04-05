import React from 'react'
import ArticlePreviews from '../features/articlePreview/ArticlePreviews'
import CurrentArticle from '../features/currentArticle/CurrentArticle'
import Comments from '../features/comments/Comments'

export default function App() {
  return (
    <div className='App'>
        <header className='App-header'/>
        <main>
        <div className='current-article'>
            <CurrentArticle/>
            <Comments/>

        </div>
        <ArticlePreviews/>
    </main>
    </div>
  )
}
