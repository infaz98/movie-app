import axios from 'axios';
import { Movie } from '../types/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/';
const HEADERS = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDk5NDE0MzgxZGY0MTExYTkwMjQ0YzViNzYxMzU3MyIsInN1YiI6IjYzOGFhYWNkOGE4NGQyMDA4YzRiNTcxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7y4_NIN6IHJNBU7EePsxT8AQqBjpHcbXh9V0DVFs070',
  }


export const getMoviesForHomeScreen = async (): Promise<Movie[] | undefined>  => {
    try {
        const response = await axios.get(BASE_URL + 'list/8230250', { headers : HEADERS})
        return response.data?.items as Movie[];
      } catch (error) {
          console.log(error);
      }
}

export const getMovieById = async (movieId: string): Promise<Movie | undefined>  => {
    try {
        const response = await axios.get(BASE_URL + movieId, { headers : HEADERS})
        return response.data?.items as Movie;
      } catch (error) {
          console.log(error);
      }
}