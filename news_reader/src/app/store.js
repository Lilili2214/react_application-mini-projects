import { configureStore } from '@reduxjs/toolkit';
import  articlePreviewsReducer  from '../features/articlePreview/artilcePreviewSlice';
import currentArticleReducer from '../features/currentArticle/currentArticleSlice'
import commentReducer from '../features/comments/commentsSlice'

export const store = configureStore({
  reducer: {
    articlePreviews: articlePreviewsReducer,
    currentArticle: currentArticleReducer,
    comments: commentReducer
  },
});
