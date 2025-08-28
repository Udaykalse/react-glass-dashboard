// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import { FiLayers } from "react-icons/fi";
import DashBoard from "./components/DashBoard/DashBoard";
import bg from "./assets/Light.jpg";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            <FiLayers /> Figma Design
          </div>
        </div>
      </nav>

      <DashBoard />
    </>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

function Home() {
  return (
    <section
      className="card"
      style={{
        marginTop: 0,
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", // 👈 text readable
      }}
    >
      <h1>Welcome 👋</h1>
      <p>
        This is a Vite + React starter with <strong>react-router-dom</strong>,{" "}
        <strong>react-icons</strong>, and a Google Font baked in.
      </p>
      <p>
        Start editing <code>src/App.jsx</code> to build your app.
      </p>
    </section>
  );
}
