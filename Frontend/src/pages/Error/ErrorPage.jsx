import { Link, useRouteError } from "react-router-dom";

import "./errorpage.css";
import ButtonComp from "../../components/Button/ButtonComp";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <div className="titleError">
        <h1>Oops!</h1>
      </div>
      <div className="textError">
        <p>No exsite el contenido al que quiere ingresar</p>
      </div>
      <div className="errorStatus">
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div className="errorExit">
        <Link to="/">
          <ButtonComp texto="Regresar a inicio" />
        </Link>
      </div>
    </div>
  );
}
