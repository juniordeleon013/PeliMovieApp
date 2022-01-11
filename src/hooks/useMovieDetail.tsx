import { useEffect, useState } from "react"
import { IMovieFullDetail } from '../interfaces/MovieDetailInterface';
import movieDB from '../api/movieDB';
import { IMovieCast, ICast } from '../interfaces/MovieCastInterface';

interface IMovieDetail {
    isLoading: boolean,
    movieFullDetail?: IMovieFullDetail,
    cast: ICast[],
}

export const useMovieDetail = ( movieId: number) =>{
    const [movieDetails, setmovieDetails] = useState<IMovieDetail>({
        isLoading: true,
        movieFullDetail: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<IMovieFullDetail>(`/${movieId}`);
        const MovieCastPromise    = movieDB.get<IMovieCast>(`/${movieId}/credits`);
        
        const [ 
            movieDetailsResp,
            movieCastResp
        ] = await Promise.all([
            movieDetailsPromise,
            MovieCastPromise
        ]);

        setmovieDetails({
            isLoading:       false,
            movieFullDetail: movieDetailsResp.data,
            cast:            movieCastResp.data.cast
        });
        
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return {
        ...movieDetails,
    }
}