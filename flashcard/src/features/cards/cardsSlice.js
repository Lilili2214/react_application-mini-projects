import { createSlice } from "@reduxjs/toolkit";



// Slice
export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {},
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      return {
        ...state,
        [id]: {
            id, front, back
        }
      }
    }
  }
});

// Selector
export const selectCardById = (state) => state.cards

// Actions
export const { addCard } = cardsSlice.actions;

// Reducer
export default cardsSlice.reducer;