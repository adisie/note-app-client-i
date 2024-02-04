import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

// actions from slices
// usersSlice
import {
    selectIsLogin,
    selectUser,
} from './usersSlice'

// sub-users
import LoginForm from "./sub-users/LoginForm"
import SignupForm from "./sub-users/SignupForm"

// main
const Users = () => {
    // states from slices
    // usersSlice
    const isLogin = useSelector(selectIsLogin)
    const user = useSelector(selectUser)

    // hooks
    const navigate = useNavigate() 

    // effect
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    })

  return (
    <div className="flex-grow flex">
        <div className="flex-grow max-w-[720px] mx-auto px-3 flex justify-center">
            {
                isLogin 
                ?
                <LoginForm />
                :
                <SignupForm />
            }
        </div>
    </div>
  )
}

export default Users