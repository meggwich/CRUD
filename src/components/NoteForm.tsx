import React, { useState } from "react";

interface NoteFormProps {
  onAdd: (content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd(content);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <textarea
          className="input-box"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Введите текст заметки"
        ></textarea>
        <button className="btn form-btn" type="submit">➡</button>
      </div>
    </form>
  );
};

export default NoteForm;