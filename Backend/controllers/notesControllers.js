const knex = require("../config/knex");

exports.allnotes = async (req, res) => {
  try {
    const notesDb = await knex("notes").select(
      "notes_id",
      "title as title",
      "content as note",
      "active as active"
    );
    res.status(200).json(notesDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.newnote = async (req, res) => {
  const { title, note } = req.body;
  try {
    await knex("notes").insert({
      title: title,
      content: note,
    });

    res.status(200).json({ message: "Nota ingresada en la base de datos" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al insertar la nota", error: error.message });
  }
};

exports.getNoteId = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await knex("notes")
      .select("*")
      .where({ notes_id: id })
      .first();

    if (!note) {
      return res.status(404).json({ message: "Nota no encontrada" });
    }

    res.status(200).json({ note });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener la nota", error: error.message });
  }
};

exports.deleteNoteId = async (req, res) => {
  const { id } = req.params;
  try {
    await knex("notes").where({ notes_id: id }).del();
    res.status(200).json({ message: "Nota eliminada correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la nota", error: error.message });
  }
};
exports.modifyNoteId = async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;
  try {
    await knex("notes")
      .where({ notes_id: id })
      .update({ title: title, content: note });
    res.status(200).json({ message: "Nota modificada correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al modificar la nota", error: error.message });
  }
};
exports.toggleArchiveNoteId = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await knex("notes").where({ notes_id: id }).first();
    if (!note) {
      return res.status(404).json({ message: "Nota no encontrada" });
    }
    const newStatus = note.active;
    await knex("notes").where({ notes_id: id }).update({ active: !newStatus });

    res.status(200).json({ message: "Estado de la nota cambiado" });
  } catch (error) {
    res.status(500).json({
      message: "Error al cambiar el estado de la nota",
      error: error.message,
    });
  }
};
