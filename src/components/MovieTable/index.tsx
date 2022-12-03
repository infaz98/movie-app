import React, { FC } from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MovieTableProps {
  movieList: Movie[]
}

export const MovieTable: FC<MovieTableProps> = (props) => {
  console.log(props.movieList);
  return (
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">

    {props.movieList.map((x : Movie, i) =>
        <MovieCard 
        image={'https://image.tmdb.org/t/p/w500/'+x.backdrop_path}
        discription=''
        genres={['Action', 'Drama', 'Thriller']}
        movieName={x.original_title}
        key={x.id}
      />
    )}

  </div>
);
}
 
