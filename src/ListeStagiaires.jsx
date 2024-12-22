import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Stagiaire from "./Stagiaire";
import RechercherStagiaire from "./RechercherStagiaire";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

function ListeStagiaires() {
  const stagiaires = useSelector(state => state.stagiaires);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/stagiaires")
      .then(response => dispatch({ type: "GET_DATA", payload: response.data }))
      .catch(error => console.error('Erreur:', error));
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Liste des Stagiaires</h2>
        <Link to="/ajouter" className="btn btn-primary">Ajouter un Stagiaire</Link>
      </div>
      <RechercherStagiaire />
      <div className="row header">
        <div className="col">Numéro</div>
        <div className="col">Nom</div>
        <div className="col">Filière</div>
        <div className="col">Actions</div>
      </div>
      {stagiaires.map(stg => <Stagiaire key={stg.numero} stagiaire={stg} />)}
    </div>
  );
}

export default ListeStagiaires;
