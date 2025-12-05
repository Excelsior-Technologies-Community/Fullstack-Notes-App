import React, { useState } from "react";
import { Save } from "lucide-react";

const NoteForm = ({
  initialData = { title: "", content: "" },
  onSubmit,
  buttonLabel = "Save Note",
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass"
      style={{ padding: "2rem", borderRadius: "1rem" }}
    >
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          required
          placeholder="Enter note title..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="form-textarea"
          rows="6"
          required
          placeholder="Write your thoughts..."
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Save size={20} />
        {buttonLabel}
      </button>
    </form>
  );
};

export default NoteForm;
