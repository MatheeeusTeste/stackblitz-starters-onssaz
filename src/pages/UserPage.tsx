import React, { useEffect, useState } from 'react';
import { Filme, FilmeInterface } from '../components/Filme/Filme';
import { addItem, deleteItem, selectAllItems } from '../services/firebase';
import { getDiscoverMovies } from '../services/moviedb';

export function UserPage() {
  const [movies, setMovies] = useState<FilmeInterface[]>([]);
  
  const [favoriteMovies, setFavoriteMovies] = useState<FilmeInterface[]>([]);

  async function handleAdd(id: string, data: unknown) {
    try {
      await addItem('movies', id, data).then(console.log).catch(console.error);
      console.info('Added');
      handleLoadFavoriteMovies();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLoadMovies() {
    try {
      const data = await getDiscoverMovies();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  }


  // Função para carregar os filmes favoritos do usuário
  async function handleLoadFavoriteMovies() {
    try {
      const queryResult = await selectAllItems('movies');
      setFavoriteMovies(queryResult);
    } catch (err) {
      console.error(err);
    }
  }
  

  function handleAddToFavorites(movie: FilmeInterface) {
    try {
      const updatedFavorites = [...favoriteMovies, movie];
      handleAdd(String(movie.id), movie);
      setFavoriteMovies(updatedFavorites);

     

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handleLoadMovies();
    handleLoadFavoriteMovies();
  }, []);


  return (
    <>
      <h1>Bem-vindo!</h1>
      <hr />
      <h2>Seus favoritos</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
        }}
      >
        {favoriteMovies?.map((movie) => {
          return <Filme filme={movie} key={movie.original_title} />;
        })}
      </div>
      <hr />
      <h2>Veja outros lançamentos</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
        }}
      >
        {movies?.map((movie) => {
          return <Filme filme={movie} key={movie.original_title} handleAddToFavorites={handleAddToFavorites} />;
        })}
      </div>
    </>
  );
}
