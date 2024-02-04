import {useDispatch} from 'react-redux'

// actions from slices
// usersSlice
import {
  logout,
} from '../../features/users/usersSlice'

// icons
// user
import { HiUserCircle } from "react-icons/hi2"

// main
const LoginHeaer = ({user}) => {
  // hooks
  const dispatch = useDispatch()

  return (
    <div className="flex items-center">
        <span>{user?.username}</span>
        <HiUserCircle 
            className="text-3xl mx-1"
        />
        <button className="border border-emerald-700 border-opacity-[.5] rounded-sm px-5 py-[.13rem]" 
          onClick={()=>{
            dispatch(logout())
          }}
        >logout</button>
    </div>
  )
}

export default LoginHeaer