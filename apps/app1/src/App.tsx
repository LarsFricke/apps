import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>App 1</h1>
      <p>Hosted at <code>/app1</code> on apps.domain.com</p>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<p>Home page of App 1</p>} />
        <Route path="/about" element={<p>About page of App 1</p>} />
      </Routes>
    </div>
  );
}