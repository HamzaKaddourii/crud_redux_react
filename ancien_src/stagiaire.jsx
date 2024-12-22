import React from 'react'

export default function Stagiaire({stagiaire}) {
  return (
    <div>
      <p> numero : <input type="text" value={stagiaire.numero} /></p>

      <p> nom : <input type="text" value={stagiaire.nom} /></p>

      <p> filier : <input type="text" value={stagiaire.filiere} /></p>
    </div>
  )
}
