import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name : "counter",
    initialState: initialState,
    reducers: {
        Increment: (state, action)=>{
            state.count++;
        },
        Decrement: (state, action)=>{
            state.count--;
        },
        reset: (state,action)=>{
            state.count = 0;
        }
    } 
})


export const{Increment, Decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;
