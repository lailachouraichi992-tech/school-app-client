import { type RouteConfig, index, route } from "@react-router/dev/routes";

console.log("Routes config loading...");

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),
  route("dashboard", "./dashboard.tsx"),
  route("*?", "./catchall.tsx"),
] satisfies RouteConfig;
   