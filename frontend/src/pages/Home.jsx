import React, { useEffect, useState } from "react";
import { fetchNotes, deleteNote } from "../lib/api";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const data = await fetchNotes();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await deleteNote(id);
        setNotes(notes.filter((note) => note._id !== id));
      } catch (err) {
        alert("Failed to delete note");
      }
    }
  };

  if (loading)
    return (
      <div className="container" style={{ textAlign: "center" }}>
        Loading notes...
      </div>
    );
  if (error)
    return (
      <div className="container" style={{ textAlign: "center", color: "red" }}>
        Error: {error}
      </div>
    );

  return (
    <div className="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {notes.length === 0 ? (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              color: "var(--text-secondary)",
            }}
          >
            No notes found. Create one to get started!
          </p>
        ) : (
          notes.map((note) => (
            <NoteCard key={note._id} note={note} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
