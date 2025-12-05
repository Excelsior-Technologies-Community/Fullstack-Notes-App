import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNoteById, updateNote } from "../lib/api";
import NoteForm from "../components/NoteForm";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNote = async () => {
      try {
        const data = await fetchNoteById(id);
        setNote(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadNote();
  }, [id]);

  const handleSubmit = async (noteData) => {
    try {
      await updateNote(id, noteData);
      navigate("/");
    } catch (err) {
      alert("Failed to update note: " + err.message);
    }
  };

  if (loading)
    return (
      <div className="container" style={{ textAlign: "center" }}>
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="container" style={{ textAlign: "center", color: "red" }}>
        Error: {error}
      </div>
    );

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>Edit Note</h2>
      {note && (
        <NoteForm
          initialData={note}
          onSubmit={handleSubmit}
          buttonLabel="Update Note"
        />
      )}
    </div>
  );
};

export default EditNote;
