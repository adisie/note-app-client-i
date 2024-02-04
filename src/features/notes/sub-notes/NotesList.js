import {useSelector} from 'react-redux'

// actions from slices
// notesSlice
import {
  selectNotes,
} from '../notesSlice'

// sub-notes
// SingleNote
import SingleNote from "./SingleNote"

// main
const NotesList = () => {
  // states from slice
  // notesSlice
  const notes = useSelector(selectNotes)
  return (
    <div>
        {
          notes.map(note=>(
            <SingleNote key={note._id} note={note} />
          ))
        }
    </div>
  )
}

export default NotesList