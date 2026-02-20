import { type RouteConfig, index, route } from "@react-router/dev/routes";




export default [

    
  index("components/home.tsx"),
    route("/DataEngenieur", "components/DataEngenieur.tsx"),
    route("/DeveloppeurFullStack", "components/DeveloppeurFullStack.tsx"),
    route("/Excel", "components/Excel.tsx"),
    route("/formation", "components/formation.tsx"),
    route("/MarketingDigital", "components/MarketingDigital.tsx"),
    route("/offredemploie", "components/offredemploie.tsx"),
    route("/offredestage", "components/offredestage.tsx"),
    route("/WebDesigner", "components/WebDesigner.tsx"),


] satisfies RouteConfig;
