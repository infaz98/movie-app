import { FC } from 'react';

interface MovieCardProps {
  movieId: number;
  movieName: string,
  discription: string,
  image: string,
  genres: string[],
  key: number;
  setShowModal: any;
  setSelectedMovieId: any;
}

export const MovieCard: FC<MovieCardProps> = (props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
    <img className="w-full" src={props.image} alt="River" onClick={() => {
      props.setShowModal(true);
      props.setSelectedMovieId(props.movieId);
    }}/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.movieName}</div>
      <p className="text-gray-700 text-base">
          {props.discription}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
    {props.genres.map((x, i) =>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{x}</span>
    )}
    </div>
  </div>
  );
}
 
