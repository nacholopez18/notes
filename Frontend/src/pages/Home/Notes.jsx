import { useEffect, useState } from "react";
import "./Notes.css";
import { allNotes } from "../../../API/notes_API";
import { Link } from "react-router-dom";
import ButtonComp from "../../components/Button/ButtonComp";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [order, setOrder] = useState("desc");

  const getAllNotes = async () => {
    try {
      const allNotesDb = await allNotes();
      const sortedNotes =
        order === "desc"
          ? allNotesDb.sort((a, b) => b.notes_id - a.notes_id)
          : allNotesDb.sort((a, b) => a.notes_id - b.notes_id);
      setNotes(sortedNotes);
    } catch (error) {
      console.error("Error al obtener las notas:", error);
    }
  };

  useEffect(() => {
    getAllNotes(order);
  }, [order]);

  const handleOrderChange = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
  };

  return (
    <>
      <div className="notesContainer">
        <h1>Todas las notas:</h1>
        <div>
          <label htmlFor="orderCheckbox">
            <input
              type="checkbox"
              id="orderCheckbox"
              onChange={handleOrderChange}
            />
            Ordenadas {order === "desc" ? "más recientes" : "más viejas"}
          </label>
        </div>
        <ul>
          {notes.map((note) => (
            <li key={note.notes_id}>
              <Link to={`/notes/${note.notes_id}`}>{note.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Link to="/newNoteForm">
            <ButtonComp texto="Crear nueva nota" />
          </Link>
        </div>
        <div>
          <button className="buttonForm">Notas activas</button>
          <button className="buttonForm">Notas archivadas</button>
        </div>
      </div>
    </>
  );
}

export default Notes;
