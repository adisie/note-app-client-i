import {useSelector} from 'react-redux'

// actions from slices
// usersSlice
import {
  selectOnlineUsers,
} from '../usersSlice'

// main
const IsOnline = ({userId}) => {
  // states from slices
  // usersSlice
  const onlineUsers = useSelector(selectOnlineUsers)
  let user = onlineUsers.find(user=>user.userId === userId)
  return (
    <>
    {
        user 
        ?
        <div className="w-[7px] h-[7px] rounded-full bg-emerald-700 mx-1"></div>
        :
        <></>
    }
    </>
  )
}

export default IsOnline