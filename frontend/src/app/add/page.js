import NoteForm from "../../components/NoteForm";

export default function AddPage() {
  return (
    <div className="container-sm">
      <div className="mb-xl text-center animate-fade-in">
        <h1>✨ Create New Note</h1>
        <p className="mt-sm">Capture your ideas and thoughts</p>
      </div>
      <div className="card">
        <NoteForm />
      </div>
    </div>
  );
}
