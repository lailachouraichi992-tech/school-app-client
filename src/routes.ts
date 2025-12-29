import { type RouteConfig, index, route } from "@react-router/dev/routes";


console.log("Routes config loading...");

export default [
  index("./dashboard.tsx"),
    route("home","./components/home.tsx"),
    route("formation","./components/formation.tsx"),
    route("offredemploie","./components/offredemploie.tsx"),

    route("offredestagel","./components/offredestagel.tsx"),

    route("DeveloppeurWeb","./components/DeveloppeurWeb.tsx"),
    route("DeveloppeurMobile","./components/DeveloppeurMobile.tsx"),
    route("IngénieurLogiciel","./components/IngénieurLogiciel.tsx"),
    route("DataEngenieur","./components/DataEngenieur.tsx"),
    route("DevOps","./components/DevOps.tsx"),


    
    route("DesigneGraphique","./components/DesigneGraphique.tsx"),
    route("WebDesigner","./components/WebDesigner.tsx"),
    route("MotionDesigner","./components/MotionDesigner.tsx"),
    route("DirecteurArtistique","./components/DirecteurArtistique.tsx"),


    
    route("Gamedesigner","./components/Gamedesigner.tsx"),
    route("Animation2D","./components/Animation2D.tsx"),
    route("Modeleur3D","./components/Modeleur3D.tsx"),
    route("LevelDesigner","./components/LevelDesigner.tsx"),
   



  route("about", "./about.tsx"),
  // route("dashboard", "./dashboard.tsx"),
  route("*?", "./catchall.tsx"),
] satisfies RouteConfig;
   