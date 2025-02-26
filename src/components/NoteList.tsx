import React from "react";

interface Note {
  id: number;
  content: string;
}

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li className="list-item" key={note.id}>
          {note.content}
          <button className="btn list-btn" onClick={() => onDelete(note.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;