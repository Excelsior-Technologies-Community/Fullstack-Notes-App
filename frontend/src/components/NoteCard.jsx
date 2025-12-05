import React from "react";
import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="card glass">
      <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
        {note.title}
      </h3>
      <p
        style={{
          color: "var(--text-secondary)",
          marginBottom: "1.5rem",
          lineHeight: "1.6",
        }}
      >
        {note.content}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
          {new Date(note.createdAt).toLocaleDateString()}
        </span>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link
            to={`/edit/${note._id}`}
            className="btn btn-outline"
            style={{ padding: "0.5rem" }}
          >
            <Edit2 size={16} />
          </Link>
          <button
            onClick={() => onDelete(note._id)}
            className="btn btn-danger"
            style={{ padding: "0.5rem" }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
