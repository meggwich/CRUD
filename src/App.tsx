import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import './App.css'

const App: React.FC = () => {
  const [notes, setNotes] = useState<{ id: number; content: string }[]>([]);

  // Загрузка заметок при монтировании компонента
  useEffect(() => {
    fetchNotes();
  }, []);

  // Функция для получения списка заметок
  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:7070/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке заметок:", error);
    }
  };

  // Функция для добавления новой заметки
  const addNote = async (content: string) => {
    try {
      await axios.post("http://localhost:7070/notes", { id: 0, content });
      fetchNotes(); // Обновляем список заметок
    } catch (error) {
      console.error("Ошибка при добавлении заметки:", error);
    }
  };

  // Функция для удаления заметки
  const deleteNote = async (id: number) => {
    try {
      await axios.delete(`http://localhost:7070/notes/${id}`);
      fetchNotes(); // Обновляем список заметок
    } catch (error) {
      console.error("Ошибка при удалении заметки:", error);
    }
  };

  return (
    <div>
      <div className="header-container">
        <h1>Notes</h1>
        <button className="btn header-btn" onClick={fetchNotes}>🔄</button>
      </div>
      <NoteList notes={notes} onDelete={deleteNote} />
      <NoteForm onAdd={addNote} />
    </div>
  );
};

export default App;