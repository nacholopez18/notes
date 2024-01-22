import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { newNote } from "../../../API/notes_API";
import ButtonComp from "../../components/Button/ButtonComp";
import "./NewNoteForm.css";

function NewNoteForm() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newNote({ title, note, active });
      console.log("Nueva nota agregada exitosamente!");
      navigate("/notes");
    } catch (error) {
      console.error("Error al agregar la nota:", error);
    }
  };

  return (
    <>
      <div className="newNoteContainer">
        <form onSubmit={handleSubmit} className="newNoteForm">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content">Contenido:</label>
          <input
            id="content"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <ButtonComp texto="Agregar Nota" type="submit" />
          <Link to="/notes">
            <ButtonComp texto="Volver a notas" />
          </Link>
        </form>
      </div>
    </>
  );
}

export default NewNoteForm;
