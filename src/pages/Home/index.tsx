import React, { FC, useEffect } from 'react';
import { Header } from '../../components/Header';
import { MovieTable } from '../../components/MovieTable';
import { NoRecordFound } from '../../components/NoRecordFound';
import { SearchBar } from '../../components/SearchBar';
import { getMoviesForHomeScreen } from '../../services/movieFetchService';
import { Movie } from '../../types/Movie';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {

  //const { isLoading, data, setData, firstFetchedData, reFetch } = useQuery<Movie[]>(getMoviesForHomeScreen, [], []);
  
  const [movies, setMovies] = React.useState<Movie[]>();

  useEffect(() => {
    getMoviesForHomeScreen().then((response) => {
      if(response != null) setMovies(response);
    });
  }, [])

  return (
    <>
        <Header />
        <SearchBar />
        {(movies !== undefined && movies.length > 0)?  <MovieTable movieList={movies}/> : <NoRecordFound/>}
    </>
);
}
 
