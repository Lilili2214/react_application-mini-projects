import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const loadComment = createAsyncThunk(
    'comments/loadComment',
    async (id)=>{
        const data = await fetch(`api/articles/${id}/comments`)
        const json = await data.json()
        console.log(json)
        return json
    }
)
export const postComment= createAsyncThunk(
    'comments/postComment',
    async ({articleId, comment})=>{
        const requestBody= JSON.stringify({comment})
        
        const data = await fetch(`api/articles/${articleId}/comments`,{
            method: 'POST',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',  
              },

        })
        const json= await data.json()
        return json
    }
)

export const commentSlice = createSlice({
    name: 'comments',
    initialState : {
        comments: {},
        isLoadingComment: false,
        hasErrorComment: false,
        createCommentIsPending: false,
        failedToCreateComment: false,
    },
    extraReducers: (builder)=>{
        builder
        .addCase(loadComment.pending, (state)=>{
            state.isLoadingComment= true;
            state.hasErrorComment= false;
        })
        .addCase(loadComment.fulfilled, (state, action)=>{
            state.isLoadingComment= false;
            state.hasErrorComment= false;
            state.comments[action.payload.articleId] = action.payload.comments;
        })
        .addCase(loadComment.rejected, (state)=>{
            state.isLoadingComment= false;
            state.hasErrorComment= true;
            state.comments= []
        })
        .addCase(postComment.pending, (state)=>{
            state.createCommentIsPending= true;
            state.failedToCreateComment= false;
        })
        .addCase(postComment.fulfilled, (state, action)=>{
            state.createCommentIsPending= false;
            state.failedToCreateComment= false;
            state.comments[action.payload.articleId].push(action.payload)
        })
        .addCase(postComment.rejected, (state)=>{
            state.createCommentIsPending= false;
            state.failedToCreateComment= true
            
        })
    }
})

export const selectComments= (state)=> state.comments.comments
export const isLoadingComment = (state) => state.comments.isLoadingComment
export const createCommentIsPending = (state) =>
  state.comments.createCommentIsPending;

export default commentSlice.reducer