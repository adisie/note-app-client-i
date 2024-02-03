
// icons
// user
import { HiUserCircle } from "react-icons/hi2"

// main
const LoginHeaer = () => {
  return (
    <div className="flex items-center">
        <span>username</span>
        <HiUserCircle 
            className="text-3xl mx-1"
        />
        <button className="border border-emerald-700 border-opacity-[.5] rounded-sm px-5 py-[.13rem]">logout</button>
    </div>
  )
}

export default LoginHeaer