import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {SOCKET} from '../../config'

// actions from slices
// usersSlice
import {
  allUsers,
  checkAuth,
  setOnlineUsers,
  addNewSignupUser,
} from '../users/usersSlice'
// notesSlice
import {
  allNotes,
  addNewNoteEvent,
  deleteNoteEvent,
} from './notesSlice'

// actions from slices
// usersSlice
import {
  selectUser,
} from '../users/usersSlice'

// sub-notes
// NotesList
import NotesList from "./sub-notes/NotesList"
// NewNoteForm
import NewNoteForm from "./sub-notes/NewNoteForm"

// main
const Notes = () => {
  // states from slices
  // usersSlice
  const user = useSelector(selectUser)

  // hooks
  const dispatch = useDispatch() 

  // effects
  // get all users
  useEffect(()=>{
    dispatch(allUsers())
  },[])

  // check-auth
  useEffect(()=>{
    // dispatch(checkAuth())
  },[])

  // all notes
  useEffect(()=>{
    dispatch(allNotes())
  },[])

  // new note
  useEffect(()=>{
    SOCKET.on('addNewNoteEvent',note=>{
      dispatch(addNewNoteEvent(note))
    })
  },[])

  // delete note
  useEffect(()=>{
    SOCKET.on('deleteNoteEvent',_id => {
      dispatch(deleteNoteEvent(_id))
    })
  },[])

  // online users 
  useEffect(()=>{
    SOCKET.on('onlineUsers',onlineUsers=>{
      dispatch(setOnlineUsers(onlineUsers))
    })
  },[])

  // reconnect
  useEffect(()=>{
    if(user){
      SOCKET.emit('addUserOnReconnect',user._id)
    }
  },[])

  // add user to list
  useEffect(()=>{
    SOCKET.on('addUserToList',user=>{
      dispatch(addNewSignupUser(user))
    })
  },[])

  return (
    <div className="flex-grow flex">
        <div className="flex-grow max-w-[720px] mx-auto px-3 overflow-y-auto max-h-[90vh] relative pr-5" id="note-container">
            <NotesList />
            {
              user 
              ?
              <NewNoteForm />
              :
              <></>
            }
        </div>
    </div>
  )
}

export default Notes