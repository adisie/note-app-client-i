import {configureStore} from '@reduxjs/toolkit'

// redusers
// usersReducer
import usersReducer from '../features/users/usersSlice'
// notesReducer
import notesReducer from '../features/notes/notesSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        notes: notesReducer,
    }
})
