import React, { useEffect, useState } from "react";
import "../styles/offredemploie.css";
import { Link } from "react-router";
import api from "../libs/Api";

type Offer = {
  id?: string | number;
  title?: string;
  company?: string;
  location?: string;
  description?: string;
  [key: string]: any;
};

export default function Offredemploie() {
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
    <>
      <div className="body-1">
        <div className="container-1">
          <a href="DeveloppeurFullStack">DeveloppeurFullStack</a>
          <h2 className="first-h2">Casablanca</h2>
          <p className="first-p">Jobinetech</p>
          <button>Temps plein</button>
        </div>

        <div className="container-2">
          <a href="DataEngenieur">DataEngenieur</a>
          <h2 className="first-h2">Casablanca</h2>
          <p className="first-p">Jobinetech</p>
          <button>Temps plein</button>
        </div>

        <div className="container-3">
          <a href="Excel">Excel</a>
          <h2 className="first-h2">Casablanca</h2>
          <p className="first-p">Jobinetech</p>
          <button>Temps plein</button>
        </div>

        <div className="container-4">
          <a href="WebDesigner">WebDesigner</a>
          <h2 className="first-h2">Casablanca</h2>
          <p className="first-p">Jobinetech</p>
          <button>Temps plein</button>
        </div>

        <div className="container-5">
          <a href="MarketingDigital">MarketingDigital</a>
          <h2 className="first-h2">Casablanca</h2>
          <p className="first-p">Jobinetech</p>
          <button>Temps plein</button>
        </div>
      </div>
    </>
  );
}
