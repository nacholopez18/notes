import { useEffect, useState } from "react";
import "./Notes.css";
import { achivednotes } from "../../../API/notes_API";
import { Link } from "react-router-dom";
import ButtonComp from "../../components/Button/ButtonComp";

function AchivedNotes() {
  const [achivedNotes, setAchivednotes] = useState([]);
  const [order, setOrder] = useState("desc");

  const getAchivedNotes = async () => {
    try {
      const achivedNotesDb = await achivednotes();
      const sortedAchivedNotes =
        order === "desc"
          ? achivedNotesDb.sort((a, b) => b.notes_id - a.notes_id)
          : achivedNotesDb.sort((a, b) => a.notes_id - b.notes_id);
      setAchivednotes(sortedAchivedNotes);
    } catch (error) {
      console.error("Error al obtener las notas:", error);
    }
  };

  useEffect(() => {
    getAchivedNotes(order);
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
          {achivedNotes.map((achivedNotes) => (
            <Link
              to={`/notes/${achivedNotes.notes_id}`}
              key={achivedNotes.notes_id}
            >
              <div className="individualNote">
                <h5 className="titleNote">{achivedNotes.title}</h5>
                <p className="contentNote">{achivedNotes.note}</p>
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
          <Link to="/notesunachived">
            <button className="buttonForm">Notas activas</button>
          </Link>
          <button className="buttonForm">Notas archivadas</button>
        </div>
      </div>
    </>
  );
}

export default AchivedNotes;
