import {motion} from 'framer-motion'

// icons
// send
import { GrSend } from "react-icons/gr"

// main
const NewNoteForm = () => {
  return (
    <div className="fixed bottom-0">
        <motion.div className="bg-emerald-700 text-xs text-gray-300 font-serif flex items-center p-1 rounded-sm" 
            drag
            dragSnapToOrigin
            whileDrag={{cursor: 'pointer',opacity: .75}}
        >
            <textarea name="text" placeholder="text..." 
                className="focus:outline-none bg-transparent w-[190px] h-[18px] resize-none"
            ></textarea>
            <button className="self-end text-2xl opacity-[.75] mx-1">
                <GrSend />
            </button>
        </motion.div>
    </div>
  )
}

export default NewNoteForm