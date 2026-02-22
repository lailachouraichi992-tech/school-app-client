import "../styles/home.css";
import { Link } from "react-router";


export default function Home(){
    

    return (

        <>

    <div>


    <div id='home'> 

        <Link to="/"> Acceuille </Link>
        <Link to="/formation"> formation </Link>
        <Link to="/Offredemploie" > offredemploie </Link>
        <Link to="/offredestage" > offredestage  </Link>



        </div>


    
</div>

<div>

  
</div>

 <img id="im-M"

    src="/img/imageecole/67428211-template-design-logo-school-vector-illustration-of-icon.jpg" alt="image ecole" />

<div>

 <img className="im-k"

    src="/img/imageecole/5c80f94ac30a312ea1e96a45d1999a86.jpg" />
</div>




 

<div>
 <p  id="second-p"> Le Campus Ynov est un établissement d’enseignement supérieur innovant,  <br />
    spécialisé dans les métiers du numérique, de la création digitale, du design,  <br />
    de l’informatiqueet de l’innovation technologique.  <br />
    Présent dans plusieurs grandes villes, Ynov forme les talents de  <br />
    demain en mettant l’accent sur la pratique, la créativité et l’employabilité.
 </p> 


</div>
 


        </>

    )
};
