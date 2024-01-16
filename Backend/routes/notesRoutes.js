const express = require("express");
const {
  allnotes,
  newnote,
  getNoteId,
  deleteNoteId,
  modifyNoteId,
  toggleArchiveNoteId,
  achivednotes,
  unachivednotes,
} = require("../controllers/notesControllers");

const router = express.Router();

router.get("/notes", allnotes);
router.get("/notesarchived", achivednotes);
router.get("/notesunarchived", unachivednotes);
router.post("/notes", newnote);
router.get("/notes/:id", getNoteId);
router.delete("/notes/:id", deleteNoteId);
router.patch("/notes/:id", modifyNoteId);
router.patch("/notes/:id/archive", toggleArchiveNoteId);

module.exports = router;
