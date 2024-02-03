import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'

// actions from slices
// usersSlice
import {
    setIsLogin,
} from '../../features/users/usersSlice'

// main
const LogoutHeader = () => {
    // hooks
    const dispatch = useDispatch()
  return (
    <div className='flex items-center py-1'>
        <NavLink to={'/users'}
            className={'ml-3 border border-emerald-700 border-opacity-[.5] px-5 py-[.13rem] rounded-sm'} 
            onClick={()=>{
                dispatch(setIsLogin(true))
            }}
        >Login</NavLink>
        <NavLink to={'/users'}
            className={'ml-3 border border-emerald-700 border-opacity-[.5] px-5 py-[.13rem] rounded-sm'} 
            onClick={()=>{
                dispatch(setIsLogin(false))
            }}
        >Signup</NavLink>
    </div>
  )
}

export default LogoutHeader