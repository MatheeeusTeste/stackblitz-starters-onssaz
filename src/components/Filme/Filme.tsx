import React from 'react';
import { deleteItem } from '../../services/firebase';

import './filme.css';

export interface FilmeInterface {
  id: string;
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface FilmeProps {
  filme: FilmeInterface;
  handleAddToFavorites?: (movie: FilmeInterface) => void;
}

export function Filme({ filme, handleAddToFavorites }: FilmeProps) {
  function handleSaveMovie() {
    if (handleAddToFavorites) {
      handleAddToFavorites(filme);
      alert('Filme salvo: ' + filme.original_title);
    }
  } 

  return (
    <>
      <div className="filme">
        <img
          src={`https://image.tmdb.org/t/p/w154/${filme.poster_path}`}
          alt={filme.original_title}
        />
        <small>{filme.vote_average}</small>
        <button onClick={handleSaveMovie}>+ Adicionar</button>
        <div>
          <b>{filme.original_title}</b>
          {filme.release_date}
        </div>
      </div>

    </>
  );
}
