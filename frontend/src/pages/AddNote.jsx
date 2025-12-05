import React from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../lib/api";
import NoteForm from "../components/NoteForm";

const AddNote = () => {
  const navigate = useNavigate();

  const handleSubmit = async (noteData) => {
    try {
      await createNote(noteData);
      navigate("/");
    } catch (err) {
      alert("Failed to create note: " + err.message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
        Create New Note
      </h2>
      <NoteForm onSubmit={handleSubmit} buttonLabel="Create Note" />
    </div>
  );
};

export default AddNote;
