import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectTopics } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState:{
        
    },
    reducers:{
       
        addQuizz: (state, action)=>{
            console.log('here')
            const {id, topicId, name, cardIds} = action.payload
            const newQuizz= {
                id,
                topicId,
                name,
                cardIds:cardIds
            }
            console.log(state.topics)
            
            
            
            return {
                ...state, 
                [id]: newQuizz
            }
        }
    }

})

export const selectQuizzes= (state)=> state.quizzes

export const {addQuizz}= quizzesSlice.actions
export default quizzesSlice.reducer