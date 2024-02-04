import {formatDistanceToNow} from 'date-fns'
import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// usersSlice
import {
    selectUser,
} from '../../users/usersSlice'
//notesSlice
import {
    deleteNote,
} from '../notesSlice'

// icons
// user
import { FaUserCircle } from "react-icons/fa"
// delete
import { MdDelete } from "react-icons/md"

// sub-users
import GetUsername from '../../users/sub-users/GetUsername'
import IsOnline from '../../users/sub-users/IsOnline'

// main
const SingleNote = ({note}) => {
    // states from slices
    // usersSlice
    const user = useSelector(selectUser)

    // hooks
    const dispatch = useDispatch()

  return (
    <div className="text-xs text-emerald-700 font-serif mb-3 border-b border-emerald-700 border-opacity-[.13] py-1">
        <div className="ml-5 my-1">
            <p className="text-justify">
                {note.note}
            </p>
        </div>
        <div className="flex items-center">
            <div className="flex items-center mr-3 cursor-pointer">
                <FaUserCircle className="text-xl mr-1"/>
                <span>
                    <GetUsername userId={note.authorId}/>
                </span>
                <IsOnline userId={note.authorId}/>
            </div>
            <div className="flex items-center">
                {
                    user?._id === note.authorId 
                    ?
                    <button className="mx-1 text-xl opacity-[.5] transition-all ease-in-out duration-300 hover:opacity-[1]" 
                        onClick={()=>{
                            dispatch(deleteNote(note._id))
                        }}
                    >
                        <MdDelete />
                    </button>
                    :
                    <></>
                }
                <span>{formatDistanceToNow(new Date(note.createdAt),{addSuffix: true})}</span>
            </div>
        </div>
    </div>
  )
}

export default SingleNote