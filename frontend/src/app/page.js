import Link from "next/link";
import { getNotes } from "../lib/api";
import NoteCard from "../components/NoteCard";

export default async function Home() {
  const notes = await getNotes();
  return (
    <div className="container">
      <div className="grid">
        {notes.length === 0 ? (
          <div className="card text-center">
            <h3>No notes yet! 🎯</h3>
            <p className="mt-md">
              Start creating your first note to get organized.
            </p>
          </div>
        ) : (
          notes.map((note) => <NoteCard key={note._id} note={note} />)
        )}
      </div>
    </div>
  );
}
