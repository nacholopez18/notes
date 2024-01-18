import { useEffect, useState } from "react";
import "./Notes.css";
import { unachivednotes } from "../../../API/notes_API";
import { Link } from "react-router-dom";
import ButtonComp from "../../components/Button/ButtonComp";

function UnachivedNotes() {
  const [unachivedNotes, setUnachivedotes] = useState([]);
  const [order, setOrder] = useState("desc");

  const getUnachivednotes = async () => {
    try {
      const achivedNotesDb = await unachivednotes();
      const sortedAchivedNotes =
        order === "desc"
          ? achivedNotesDb.sort((a, b) => b.notes_id - a.notes_id)
          : achivedNotesDb.sort((a, b) => a.notes_id - b.notes_id);
      setUnachivedotes(sortedAchivedNotes);
    } catch (error) {
      console.error("Error al obtener las notas:", error);
    }
  };

  useEffect(() => {
    getUnachivednotes(order);
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

        <div className="individualNotesContainer">
          {unachivedNotes.map((unachivedNotes) => (
            <Link
              to={`/notes/${unachivedNotes.notes_id}`}
              key={unachivedNotes.notes_id}
            >
              <div className="individualNote">
                <h5 className="titleNote">{unachivedNotes.title}</h5>
                <p className="contentNote">{unachivedNotes.note}</p>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <Link to="/newNoteForm">
            <ButtonComp texto="Crear nueva nota" />
          </Link>
        </div>
        <div>
          <Link to="/notes">
            <button className="buttonForm">Todas las notas</button>
          </Link>
          <button className="buttonForm">Notas activas</button>
          <Link to="/notesachived">
            <button className="buttonForm">Notas archivadas</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnachivedNotes;
