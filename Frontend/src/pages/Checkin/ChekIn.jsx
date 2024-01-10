import ButtonComp from "../../components/Button/ButtonComp";
import "./ChekIn.css";
import { Link } from "react-router-dom";

export const ChekIn = () => {
  localStorage.clear();
  return (
    <>
      <div className="checkInContainer">
        <Link to="/notes">
          <ButtonComp texto="Ingresar a notas" />
        </Link>
      </div>
    </>
  );
};
export default ChekIn;
