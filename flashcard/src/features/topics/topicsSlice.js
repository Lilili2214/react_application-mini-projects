import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"


export const topicsSlice= createSlice({
    name: 'topics',
    initialState:{
        
        
    },
    reducers: {
        addTopic: (state, action)=>{
        
        const {id, name, icon}= action.payload
        
        const newTopic = {
            id,
            name, 
            icon, 
            quizIds:[]
        }  
        return{
                ...state,
                [id]: newTopic
        };  
        
        },
        updateTopicQuizz: (state, action)=>{
            const {quizId, topicId}= action.payload
            state[topicId] = {
                ...state[topicId],
                quizIds: [...state[topicId].quizIds, quizId]
              };

            
        }
    }
})

export const selectTopics = (state) => state.topics

export const {addTopic, updateTopicQuizz}= topicsSlice.actions
export default topicsSlice.reducer