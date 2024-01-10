import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNote, deleteNote, modifyNote } from "../../../API/notes_API";
import ButtonComp from "../../components/Button/ButtonComp";
import "./Card.css";

function Card() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const noteData = await getNote(id);
        setNote(noteData);
        setEditedTitle(noteData.title);
        setEditedContent(noteData.content);
      } catch (error) {
        console.error("Error al obtener la nota:", error);
      }
    };
    fetchNote();
  }, [id]);

  const handleDeleteNote = async (e) => {
    e.preventDefault();
    try {
      await deleteNote(id);
      console.log("Nota eliminada exitosamente!");
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };

  const handleUpdateNote = async () => {
    try {
      const newData = {
        title: editedTitle,
        note: editedContent,
      };
      await modifyNote(id, newData);
      console.log("Nota modificada exitosamente!");
    } catch (error) {
      console.error("Error al modificar la nota:", error);
    }
  };

  if (!note) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <div className="cardContainer">
        <div>
          <span>Titulo:</span>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </div>
        <div>
          <span>Nota:</span>
          <input
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </div>
        <button className="buttonForm" onClick={handleUpdateNote}>
          Guardar cambios
        </button>
        <button className="buttonForm" onClick={handleDeleteNote}>
          Eliminar nota
        </button>
        <Link to="/notes">
          <ButtonComp texto="Volver a notas" />
        </Link>
      </div>
    </>
  );
}

export default Card;
