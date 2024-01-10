const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const notes = require("./routes/notesRoutes");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", notes);

app.get("/api/*", (req, res) => {
  res.status(404).json({
    error:
      "el recurso que quiere consumir no existe, revise los datos de la url",
  });
});

app.listen(port, () => {
  console.log(`servidor levantado y escuchando en el puerto 8000`);
});
