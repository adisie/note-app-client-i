import {Routes,Route} from 'react-router-dom'

// components
import Header from "./components/Header"
// pages
import Notes from "./features/notes/Notes"
import Comments from "./features/comments/Comments"
import Users from './features/users/Users'

// main
const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <Routes>
        <Route index element = {<Notes />} />
        <Route path = 'comments' element = {<Comments />} />
        <Route path='users' element = {<Users />} />
      </Routes>
    </div>
  )
}

export default App