import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

// actions from slices
// usersSlice
import {
    selectUser,
} from '../features/users/usersSlice'

// icons
// pen
import { RiQuillPenFill } from "react-icons/ri"
// sub-headers
// LoginHeader
import LoginHeaer from './sub-header/LoginHeaer'
// LogoutHeader
import LogoutHeader from './sub-header/LogoutHeader'

// main
const Header = () => {
    // states from slices
    // users
    const user = useSelector(selectUser)

  return (
    <header className='py-1 text-xs text-emerald-700 font-serif'>
        <div className='max-w-[720px] mx-auto px-3 flex items-start justify-between py-2'>
            {/* site logo */}
            <div>
                <NavLink to={'/'}>
                    <RiQuillPenFill 
                        className='mr-3 text-2xl opacity-[.75]'
                    />
                </NavLink>
            </div>
            {/* nav link */}
            <div className='flex-grow flex items-center justify-end border-b border-emerald-700 border-opacity-[.15]'>
                {
                    user 
                    ?
                    <LoginHeaer user={user}/>
                    :
                    <LogoutHeader />
                }
            </div>
        </div>
    </header>
  )
}

export default Header