
import "../styles/offredemploie.css";
import { Link } from "react-router";


export default function offredemploie(){
    

    return (

    <>





<body className="body">
  

    <div id="container-10">


        
        <ul className="ul">
    <li id="Li-1"><b>OFFRE DEMPLOIE</b></li>
    <li id="Li-2"><a href="offredestagel"><b>OFFRE DE STAGE</b></a></li>

        </ul>
    </div>


      <div className="container-0">
        <p>
          Informatique & Ingénierie Logicielle
        </p>
        <p>
          Création & Design (Ynov Design)
        </p>
        <p>
          Animation 3D, Jeux Vidéo
        </p>
      </div>

      <div className="container-1">
        <p>
          <b>Informatique & Ingénierie Logicielle</b>
        </p>
        <p>
          <b>Création & Design (Ynov Design)</b>
        </p>
        <p>
          <b>Animation 3D, Jeux Vidéo</b>
        </p>
      </div>

      <div className="Box-9">
        <div className="Box-1">
          <Link className="link" to="/DeveloppeurWeb">DeveloppeurWeb</Link>
          <Link className="link" to="/DeveloppeurMobile">DeveloppeurMobile</Link>
          <Link className="link" to="/IngénieurLogiciel">IngénieurLogiciel</Link>
          <Link className="link" to="/DataEngenieur">DataEngenieur</Link>
          <Link className="link" to="/DevOps">DevOps</Link>
        </div>
        <div className="Box-2">
          <Link className="link" to="/Gamedesigner">Game designer</Link>
          <Link className="link" to="/Animation2D"> Animation2D</Link>
          <Link className="link" to="/Modeleur3d"> Modeleur3D</Link>
          <Link className="link" to="/LevelDesigner">LevelDesigner</Link>
        </div>
        <div className="Box-3">
          
          <Link className="link" to="/DesigneGraphique">DesigneGraphique</Link>
          <Link className="link" to="/WebDesigner">Webdesigner </Link>
          <Link className="link" to="/MotionDesigner">MotionDesigner</Link>
          <Link className="link" to="/DirecteurArtistique">DirecteurArtistique</Link>
        </div>
      </div>
      </body>
    </>
  );

}
