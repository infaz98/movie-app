import React, { FC, useEffect } from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import { MovieInforModal } from '../MovieInformationModal';

interface MovieTableProps {
  movieList: Movie[]
}

export const MovieTable: FC<MovieTableProps> = (props) => {
  
  const [showModal, setShowModal] = React.useState(false)
  const [selectedMovieId, setSelectedMovieId] = React.useState(0)
  
useEffect(() => {
  console.log("selectedMovieId");

  console.log(selectedMovieId);
}, [selectedMovieId])

  return (
  <>
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">

    {props.movieList.map((x : Movie, i) =>
        <MovieCard 
        setSelectedMovieId={setSelectedMovieId}
        movieId={x.id}
        setShowModal={setShowModal}
        image={'https://image.tmdb.org/t/p/w500/'+x.backdrop_path}
        discription=''
        genres={['Action', 'Drama', 'Thriller']}
        movieName={x.original_title}
        key={x.id}
      />
    )}
  </div>
  <MovieInforModal movieId={selectedMovieId} showModal={showModal} setShowModal={setShowModal} />
  </>
);
}
 
