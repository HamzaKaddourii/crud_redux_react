import React from 'react';
import { store } from './reducestagaire'
import { useSelector } from 'react-redux';
import Stagiaire from './stagiaire';

export default function ListStagiaire() {
    // const list = store.getState().stagiaires;
    const list = useSelector((state)=> state.stagiaires);
  return (
    <div>
      {list.map((stg)=>(
        <Stagiaire key={stg.numero} stagiaire={stg}></Stagiaire>
      ))}
    </div>
  )
}
