// sub-notes
// NotesList
import NotesList from "./sub-notes/NotesList"
// NewNoteForm
import NewNoteForm from "./sub-notes/NewNoteForm"

// main
const Notes = () => {
  return (
    <div className="flex-grow flex">
        <div className="flex-grow max-w-[720px] mx-auto px-3 overflow-y-auto max-h-[90vh] relative pr-5" id="note-container">
            <NotesList />
            <NewNoteForm />
        </div>
    </div>
  )
}

export default Notes