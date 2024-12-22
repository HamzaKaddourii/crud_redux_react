import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import axios from 'axios';

function Stagiaire({ stagiaire }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(stagiaire);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/stagiaires/${stagiaire.numero}`);
      dispatch({ type: 'DELETE_STG', payload: stagiaire.numero });
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/stagiaires/${stagiaire.numero}`, editedData);
      dispatch({ type: 'UPDATE_STG', payload: response.data });
      setIsEditing(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  };

  if (isEditing) {
    return (
      <div className="row mb-2">
        <div className="col">
          <input
            type="text"
            value={editedData.numero}
            disabled
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="text"
            value={editedData.nom}
            onChange={(e) => setEditedData({...editedData, nom: e.target.value})}
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="text"
            value={editedData.filiere}
            onChange={(e) => setEditedData({...editedData, filiere: e.target.value})}
            className="form-control"
          />
        </div>
        <div className="col">
          <button className="btn btn-success me-2" onClick={handleUpdate}>Sauvegarder</button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Annuler</button>
        </div>
      </div>
    );
  }

  return (
    <div className="row mb-2">
      <div className="col">{stagiaire.numero}</div>
      <div className="col">{stagiaire.nom}</div>
      <div className="col">{stagiaire.filiere}</div>
      <div className="col">
        <button className="btn btn-primary me-2" onClick={() => setIsEditing(true)}>Modifier</button>
        <button className="btn btn-danger" onClick={handleDelete}>Supprimer</button>
      </div>
    </div>
  );
}

export default Stagiaire;
