import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCommentIsPending, postComment } from '../features/comments/commentsSlice'

export default function CommentForm({articleId}) {
    const dispatch= useDispatch()
    const [comment, setComment]= useState('')
    const isCreatePending = useSelector(createCommentIsPending)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          
          await dispatch(postComment({ articleId, comment }));
          setComment('');
        } catch (error) {
          console.error('Error posting comment:', error);
          }
      };
  return (
    <form onSubmit={handleSubmit}>
        <label  htmlFor='comment' className='label'>
            Add Comment:

        </label>
        <div id='input-container'>
            <input
            type='text'
            id='comment'
            value={comment}
            onChange={(e)=>setComment(e.currentTarget.value)}

            />
            <button disabled={isCreatePending}
            className='comment-button'>
                Submit
            </button>
        </div>
    </form>
  )
}
