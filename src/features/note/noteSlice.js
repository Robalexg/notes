import { createSlice, nanoid } from "@reduxjs/toolkit";
import notesData from '../../db/notes.js'


const initialState = {
    notes : notesData,
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state,action) => {
            const note = {
                id: nanoid(),
                title: action.payload.title,
                desc: action.payload.desc
            }
            state.notes.push(note)
        },
        removeNote: (state,action) => {
            state.notes = state.notes.filter((item) => item.id !== action.payload)
        }
    }
})


export const {addNote,removeNote} = noteSlice.actions
export default noteSlice.reducer