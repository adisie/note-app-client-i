import { useState } from 'react'
import {motion} from 'framer-motion'
import {useDispatch} from 'react-redux'


// actions from slices
// noteSlice
import {
    addNewNote,
} from '../notesSlice'

// icons
// send
import { GrSend } from "react-icons/gr"

// main
const NewNoteForm = () => {

    // local states
    const [note,setNote] = useState('')

    // hooks
    const dispatch = useDispatch()

    // adjust textarea height
    const adjustTextAreaHeight = e => {
        let textarea = document.getElementById('new-note-text-area')
        textarea.style.height = '18px'
        let scHeight = e.target.scrollHeight 
        textarea.style.height = `${scHeight}px`
    }

    // submit handler
    const submitHandler = () => {
        let textarea = document.getElementById('new-note-text-area')
        if(note.trim()){
            dispatch(addNewNote({note}))
        }
        setNote('')
        textarea.style.height = '18px'
        textarea.focus()
    }

  return (
    <div className="fixed bottom-0">
        <motion.div className="bg-emerald-700 text-xs text-gray-300 font-serif flex items-center p-1 rounded-sm" 
            drag
            dragSnapToOrigin
            whileDrag={{cursor: 'pointer',opacity: .75}}
        >
            <textarea name="text" placeholder="text..." 
                className="focus:outline-none bg-transparent w-[190px] h-[18px] resize-none" 
                id='new-note-text-area' 
                value={note} 
                onChange={e=>setNote(e.target.value)} 
                onKeyUp={adjustTextAreaHeight}
            ></textarea>
            <button className="self-end text-2xl opacity-[.75] mx-1" 
                onClick={submitHandler}
            >
                <GrSend />
            </button>
        </motion.div>
    </div>
  )
}

export default NewNoteForm