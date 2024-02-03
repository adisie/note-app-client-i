import {useState} from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// usersSlice
import {
    setIsLogin,
} from '../usersSlice'

// main
const LoginForm = () => {
    // local state
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    // hooks
    const dispatch = useDispatch()

    // submit handler
    const submitHandler = () => {
        let usernameError = document.getElementById('login-username-error')
        let passwordError = document.getElementById('login-password-error')

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
            console.log({username,password})
        }
    }

  return (
    <div>
        {/* form */}
        <div className="px-5 py-3 bg-black bg-opacity-[.1] rounded-sm flex flex-col font-serif text-xs">
            <div className="flex items-center justify-center my-1 text-emerald-700 text-xl">
                <span>Login</span>
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
                <div className="flex items-center justify-center text-[.65rem] text-red-700" id='login-username-error'></div>
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
                <div className="flex items-center justify-center text-[.65rem] text-red-700" id='login-password-error'></div>
            </div>
            {/* button */}
            <div className="flex items-center justify-center my-2 bg-emerald-700 rounded-sm text-gray-300 cursor-pointer transition-all ease-in-out duration-300 hover:opacity-[.75]" 
                onClick={()=>{
                    submitHandler()
                }}
            >
                <span className="text-justify my-1">Login</span>
            </div>
            {/* link */}
            <div className="mt-2 text-gray-500">
                <span className="hover:underline cursor-pointer" 
                    onClick={()=>{
                        dispatch(setIsLogin(false))
                    }}
                >no account?</span>
            </div>
        </div>
    </div>
  )
}

export default LoginForm