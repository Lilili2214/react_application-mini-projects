import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const loadArticlePreviews= createAsyncThunk(
    'articlePreviews/loadArticlePreviews',
    async ()=>{
        const data= await fetch('api/articles')
        const json = await data.json()
        console.log(json)
        
        return json
    }
)
export const articlePreviewsSlice = createSlice({
    name: 'articlePreviews', 
    initialState: {
        articles: [],
        isLoading: false,
        hasError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadArticlePreviews.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadArticlePreviews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.articles.push(...action.payload);
            })
            .addCase(loadArticlePreviews.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
                state.articles = [];
            });
    },
});

export const selectArticlePreviews= (state)=>{
    
    return state.articlePreviews.articles}
export const isLoadingArticles = (state) => state.articlePreviews.isLoading
export default articlePreviewsSlice.reducer