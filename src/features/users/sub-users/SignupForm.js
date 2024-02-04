import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// actions from slices
// usersSlice
import {
    signup,
    selectErrors,
    selectIsUserPending,
    resetErrors,
} from '../usersSlice'

// actions from slices
// usersSlcie
import {
    setIsLogin,
} from '../usersSlice'

// sub-users
import UsersSpinner from './UsersSpinner'

// main
const SignupForm = () => {
    // local state
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    // states from slices
    // usersSlice
    const isUserPending = useSelector(selectIsUserPending)
    const errors = useSelector(selectErrors)

    // hooks
    const dispatch = useDispatch()

    // submit handler
    const submitHandler = () => {
        let usernameError = document.getElementById('signup-username-error')
        let passwordError = document.getElementById('signup-password-error')

        if(!username.trim() && !password){
            usernameError.textContent = 'username required'
            passwordError.textContent = 'password required'
        }else if(username.trim() && !password){
            usernameError.textContent = '' 
            passwordError.textContent = 'password required'
        }else if(!username.trim() && password){
            usernameError.textContent = 'username required' 
            passwordError.textContent = ''
        }else if(username.trim() && password.length < 3){
            usernameError.textContent = ''
            passwordError.textContent = 'to shortpassword'
        }else {
            usernameError.textContent = ''
            passwordError.textContent = ''
            dispatch(signup({username,password}))
        }
    }

    if(isUserPending){
        return <UsersSpinner />
    }

  return (
    <div>
        {/* form */}
        <div className="px-5 py-3 bg-black bg-opacity-[.1] rounded-sm flex flex-col font-serif text-xs">
            <div className="flex items-center justify-center my-1 text-emerald-700 text-xl">
                <span>Signup</span>
            </div>
            {/* input-container */}
            <div className="mb-2">
                <div className="bg-white rounded-sm flex py-1 px-3">
                    <input type="text" name="username" placeholder="username" 
                        className="focus:outline-none bg-transparent w-[150px]" 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)} 
                    />
                </div>
                <div className="flex items-center justify-center text-[.65rem] text-red-700" id='signup-username-error'>{errors?.username}</div>
            </div>
            {/* input-container */}
            <div className="mb-2">
                <div className="bg-white rounded-sm flex py-1 px-3">
                    <input type="password" name="password" placeholder="password" 
                        className="focus:outline-none bg-transparent w-[150px]" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                    />
                </div>
                <div className="flex items-center justify-center text-[.65rem] text-red-700" id='signup-password-error'>{errors?.password}</div>
            </div>
            {/* button */}
            <div className="flex items-center justify-center my-2 bg-emerald-700 rounded-sm text-gray-300 cursor-pointer transition-all ease-in-out duration-300 hover:opacity-[.75]" 
                onClick={()=>{
                    submitHandler()
                }}
            >
                <span className="text-justify my-1">Signup</span>
            </div>
            {/* link */}
            <div className="mt-2 text-gray-500">
                <span className="hover:underline cursor-pointer"
                    onClick={()=>{
                        dispatch(setIsLogin(true))
                        dispatch(resetErrors())
                    }} 
                >have an account?</span>
            </div>
        </div>
    </div>
  )
}

export default SignupForm