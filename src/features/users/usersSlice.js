import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {SOCKET} from '../../config'

// local user
const localUser = JSON.parse(localStorage.getItem('user'))

// initial stae
const initialState = {
    isLogin: true,
    isUserPending: false,
    user: localUser ? localUser : null,
    users: [],
    onlineUsers: [],
    errors: null,
}

// all-users
export const allUsers = createAsyncThunk('users/allUsers',async () => {
    try{
        const response = await axios.get('/api/users/all-users')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// check-auth
export const checkAuth = createAsyncThunk('users/checkAuth',async () => {
    try{
        const response = await axios.get('/api/users/check-auth')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// signup
export const signup = createAsyncThunk('users/signup',async data => {
    try{
        const response = await axios.post('/api/users/signup',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// login
export const login = createAsyncThunk('users/login',async data => {
    try{
        const response = await axios.post('/api/users/login',data) 
        return response.data
    }catch(err){
        return err.response.data
    }
})

// logout 
export const logout = createAsyncThunk('users/logout',async () => {
    try{
        const response = await axios.get('/api/users/logout')
        return response.data
    }catch(err){
        return err.response.data
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsLogin: (state,action) => {
            state.isLogin = action.payload
        },
        resetErrors: state => {
            state.errors = null
        },
        setOnlineUsers: (state,action) => {
            state.onlineUsers = action.payload
        },
        addNewSignupUser: (state,action) => {
            let users = [...state.users,action.payload] 
            let filteredUsers = []
            users.forEach(user=>{
                let isUser = filteredUsers.find(u=>u._id === user._id)
                if(!isUser){
                    filteredUsers.push(user)
                }
            })
            state.users = filteredUsers
        }
    },
    extraReducers: builder => {
        builder
            // cases
            // all users
            // fulfilled
            .addCase(allUsers.fulfilled,(state,action) => {
                if(action.payload.users){
                    state.users = action.payload.users
                }
            })
            // chec-auth
            // fulfilled
            .addCase(checkAuth.fulfilled,(state,action) => {
                if(action.payload.error === 'unauthorized'){
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // signup
            // pending
            .addCase(signup.pending, state => {
                state.isUserPending = true
            })
            //fulfilled
            .addCase(signup.fulfilled, (state,action) => {
                state.isUserPending = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                    SOCKET.emit('addNewUserOnSignup',action.payload.user)
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
            })
            // rejected
            .addCase(signup.rejected, state => {
                state.isUserPending = false
            })
            // login
            // pending
            .addCase(login.pending,state=>{
                state.isUserPending = true
            })
            // fulfilled
            .addCase(login.fulfilled,(state,action) => {
                state.isUserPending = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                    SOCKET.emit('userLogin',action.payload.user._id)
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
            })
            // rejected
            .addCase(login.rejected,state =>{
                state.isUserPending = false
            })
            // logout
            // fulfilled
            .addCase(logout.fulfilled,(state,action)=>{
                if(action.payload.message === 'logged out'){
                    SOCKET.emit('userLogout',state.user._id)
                    state.errors = null 
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
    }
})

// actions
export const {
    setIsLogin,
    resetErrors,
    setOnlineUsers,
    addNewSignupUser,
} = usersSlice.actions

// selectors
// isLogin
export const selectIsLogin = state => state.users.isLogin 
// isUserPending
export const selectIsUserPending = state => state.users.isUserPending 
// user
export const selectUser = state => state.users.user
// errors
export const selectErrors = state => state.users.errors
// users
export const selectUsers = state => state.users.users 
// onlieusers
export const selectOnlineUsers = state => state.users.onlineUsers 

export default usersSlice.reducer