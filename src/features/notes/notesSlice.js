import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {SOCKET} from '../../config'

// initial state
const initialState = {
    notes: [],
}

// all notes
export const allNotes = createAsyncThunk('notes/allNotes',async () => {
    try{
        const response = await axios.get('/api/notes/all-notes')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// add new note
export const addNewNote = createAsyncThunk('notes/addNewNote',async data => {
    try{
        const response = await axios.post('/api/notes/add-note',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// delete note
export const deleteNote = createAsyncThunk('notes/deleteNote',async _id => {
    try{
        const response = await axios.delete(`/api/notes/delete-note/${_id}`)
        return response.data
    }catch(err){
        return err.response.data
    }
})

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNewNoteEvent: (state,action) => {
            let notes = [action.payload,...state.notes]
            let filteredNotes = []
            notes.forEach(no=>{
                let isNote = filteredNotes.find(note=>note._id === no._id)
                if(!isNote){
                    filteredNotes.push(no)
                }
            })
            state.notes = filteredNotes
        },
        deleteNoteEvent: (state,action) => {
            state.notes = state.notes.filter(note=>note._id !== action.payload)
        }
    },
    extraReducers: builder => {
        builder
            // cases
            // all notes
            // fulfilled
            .addCase(allNotes.fulfilled,(state,action) => {
                if(action.payload.notes){
                    state.notes = action.payload.notes
                }
            })
            // add note
            // fulfilled 
            .addCase(addNewNote.fulfilled,(state,action) => {
                if(action.payload.note){
                    // emit
                    SOCKET.emit('addNewNote',action.payload.note)
                }
            })
            // delete note
            // fulfilled
            .addCase(deleteNote.fulfilled,(state,action) => {
                if(action.payload._id){
                    // emit
                    SOCKET.emit('deleteNote',action.payload._id)
                }
            })
    }
})

// actions 
export const {
    addNewNoteEvent,
    deleteNoteEvent,
} = notesSlice.actions

// selectors
export const selectNotes = state => state.notes.notes

export default notesSlice.reducer
