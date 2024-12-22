import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ListeStagiaires from "./ListeStagiaires";
import AjouterStagiaire from "./AjouterStagiaire";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">Gestion Stagiaires</Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Accueil</Link>
              <Link className="nav-link" to="/liste">Liste des Stagiaires</Link>
              <Link className="nav-link" to="/ajouter">Ajouter un Stagiaire</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liste" element={<ListeStagiaires />} />
          <Route path="/ajouter" element={<AjouterStagiaire />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
