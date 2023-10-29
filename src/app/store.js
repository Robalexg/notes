import { configureStore } from "@reduxjs/toolkit";
import noteReducer from '../features/note/noteSlice.js'


const store = configureStore({
    reducer: noteReducer,
})


export default store