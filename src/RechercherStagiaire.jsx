import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RechercherStagiaire() {
    const dispatch = useDispatch();
    const stagiaires = useSelector(state => state.stagiaires);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = term === '' ? stagiaires : stagiaires.filter(stg => 
            stg.nom.toLowerCase().includes(term) ||
            stg.filiere.toLowerCase().includes(term) ||
            stg.numero.includes(term)
        );
        dispatch({ type: 'SEARCH_STG', payload: filtered });
    };

    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Rechercher par nom, filière ou numéro..."
                onChange={handleSearch}
            />
        </div>
    );
}

export default RechercherStagiaire; 