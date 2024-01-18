import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import ChekIn from "./pages/Checkin/ChekIn.jsx";
import Notes from "./pages/Home/Notes.jsx";
import Card from "./pages/CardNote/Card.jsx";
import NewNoteForm from "./pages/NewNoteForm/NewNoteForm.jsx";
import AchivedNotes from "./pages/Home/AchivedNotes.jsx";
import UnachivedNotes from "./pages/Home/UnachivedNotes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChekIn />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/notes",
    element: <Notes />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/notesachived",
    element: <AchivedNotes />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/notesunachived",
    element: <UnachivedNotes />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/notes/:id",
    element: <Card />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/newNoteForm",
    element: <NewNoteForm />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
