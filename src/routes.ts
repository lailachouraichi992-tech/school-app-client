import { type RouteConfig, index, route } from "@react-router/dev/routes";


console.log("Routes config loading...");

export default [
  index("./dashboard.tsx"),
  
    route("home","./components/home.tsx"),
    route("formation","./components/formation.tsx"),
    route("offredemploie","./components/offredemploie.tsx"),
    route("offredestage","./components/offredestage.tsx"),
    route("DeveloppeurFullStack","./components/DeveloppeurFullStack.tsx"),
    route("DataEngenieur","./components/DataEngenieur.tsx"),
    route("Excel","./components/Excel.tsx"),
    route("WebDesigner","./components/WebDesigner.tsx"),
    route("MarketingDigital","./components/MarketingDigital.tsx"),





  route("about", "./about.tsx"),
  // route("dashboard", "./dashboard.tsx"),
  route("*?", "./catchall.tsx"),
] satisfies RouteConfig;
   