import React, { useEffect, useState } from "react";
import "../styles/offredemploie.css";
import { Link } from "react-router-dom";
import api from "../libs/Api";

type Offer = {
  id?: string | number;
  title?: string;
  company?: string;
  location?: string;
  description?: string;
  [key: string]: any;
};

export default function Offredemploi() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api
      .get("/offres")
      .then((data) => {
        setOffers(Array.isArray(data) ? data : []);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="body-1">
      <div className="container-1">
        <Link to="/DeveloppeurFullStack">DeveloppeurFullStack</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">SquaHR</p>
        <button>Temps plain</button>
      </div>

        <div className="container-2">
        <Link to="/DataEngenieur">DataEngenieur</Link>
        <h2 className="first-h2">Maarif</h2>
        <p className="first-p">CRIT Maroc</p>
        <button>Temps plein</button>
      </div>

        <div className="container-3">
        <Link to="/Excel">Excel</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">SSII</p>
        <button>Temps Partiel</button>
      </div>

        <div className="container-4">
        <Link to="/WebDesigner">WebDesigner</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">Helya</p>
        <button>Temps plein</button>
      </div>

        <div className="container-5">
        <Link to="/MarketingDigital">MarketingDigital</Link>
        <h2 className="first-h2">Casablanca</h2>
        <p className="first-p">Bill-App</p>
        <button>Stage</button>
      </div>
    </div>
  );
}
