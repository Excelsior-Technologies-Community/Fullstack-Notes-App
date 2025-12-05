import NoteForm from "../../../components/NoteForm";
import { getNote } from "../../../lib/api";

export default async function EditPage({ params }) {
  const { id } = await params;
  const note = await getNote(id);
  return (
    <div className="container-sm">
      <div className="mb-xl text-center animate-fade-in">
        <h1>✏️ Edit Note</h1>
        <p className="mt-sm">Update your note content</p>
      </div>
      <div className="card">
        <NoteForm
          initial={{ title: note.title, content: note.content }}
          noteId={note._id}
        />
      </div>
    </div>
  );
}
