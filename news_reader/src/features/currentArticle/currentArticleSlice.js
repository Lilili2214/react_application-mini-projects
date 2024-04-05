import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentArticle= createAsyncThunk(
    'currentArticle/loadCurrentArticle',
    async (articleId)=>{
        const data = await fetch(`api/articles/${articleId}`)
        const json = await data.json()
        console.log(json)
        return json
    }
)


export const currentArticleSlice= createSlice({
    name: 'currentArticle',
    initialState: {
        article: undefined ,
        isLoadingCurrentAr: false,
        hasErrorCurrentAr: false
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loadCurrentArticle.pending, (state)=>{
            state.isLoadingCurrentAr= true;
            state.hasErrorCurrentAr= false;
        })
        .addCase(loadCurrentArticle.fulfilled, (state, action)=>{
            state.isLoadingCurrentAr= false;
            state.hasErrorCurrentAr= false;
            state.article= action.payload
        })
        .addCase(loadCurrentArticle.rejected, (state)=>{
            state.isLoadingCurrentAr= false;
            state.hasErrorCurrentAr= true;
            state.article = {}
        })
    }
})

export const selectCurrentArticle= (state)=>state.currentArticle.article
export const isLoadingCurrentArticle = (state)=> state.currentArticle.isLoadingCurrentAr


export default currentArticleSlice.reducer;