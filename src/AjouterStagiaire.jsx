import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function AjouterStagiaire() {
    const [nom, setNom] = useState('');
    const [filiere, setFiliere] = useState('');
    const dispatch = useDispatch();
    const stagiaires = useSelector(state => state.stagiaires);

    const getNextNumero = () => {
        if (stagiaires.length === 0) return "1";
        const maxNum = Math.max(...stagiaires.map(s => parseInt(s.numero)));
        return (maxNum + 1).toString();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/stagiaires', {
                numero: getNextNumero(),
                nom,
                filiere
            });
            dispatch({ type: 'ADD_STG', payload: response.data });
            setNom('');
            setFiliere('');
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div>
                <label htmlFor="nom">Nom:</label>
                <input 
                    type="text" 
                    id="nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="form-control"
                />
            </div>
            <div>
                <label htmlFor="filiere">Filière:</label>
                <input 
                    type="text" 
                    id="filiere"
                    value={filiere}
                    onChange={(e) => setFiliere(e.target.value)}
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Ajouter</button>
        </form>
    );
}

export default AjouterStagiaire; 