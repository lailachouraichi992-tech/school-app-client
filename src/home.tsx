import { Link } from "react-router";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome to the School Management System</h1>
      <p>This is the home page.</p>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/about" style={{ color: "blue", textDecoration: "underline" }}>
              Go to About
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ color: "blue", textDecoration: "underline" }}>
              Go to Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
