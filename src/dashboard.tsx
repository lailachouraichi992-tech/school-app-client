import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>
      <p>Here is the dashboard overview.</p>
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
        <h3>Stats</h3>
        <p>Students: 150</p>
        <p>Teachers: 12</p>
      </div>
      <br />
      <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
        Back to Home
      </Link>
    </div>
  );
}
