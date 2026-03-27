import "../styles/offredemploie.css";
import { Link } from "react-router-dom";

export default function Offredemploie() {
  return (
    <div className="SQUARE-A">
      <div className="container-1">
        <Link to="/DeveloppeurFullStack">Developpeur Full Stack</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">SquaHR</p>
        <button>Temps plein</button>
      </div>

      <div className="container-2">
        <Link to="/DataEngenieur">Data Engineer</Link>
        <h2 className="first-h2">Maarif</h2>
        <p className="first-p">CRIT Maroc</p>
        <button>Temps plein</button>
      </div>

      <div className="container-3">
        <Link to="/Excel">Excel</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">SSII</p>
        <button>Temps partiel</button>
      </div>

      <div className="container-4">
        <Link to="/WebDesigner">Web Designer</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">Helya</p>
        <button>Temps plein</button>
      </div>

      <div className="container-5">
        <Link to="/MarketingDigital">Marketing Digital</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">Bill-App</p>
        <button>Stage</button>
      </div>
    </div>
  );
}
