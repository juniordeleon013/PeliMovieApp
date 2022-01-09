import { useState, useEffect }from 'react';
import movieDB from '../api/movieDB';
import { IMovieDBResponse, IMovie } from '../interfaces/MovieInterface';


interface IMoviesState{
    nowPlaying: IMovie[],
    popular: IMovie[],
    topRated: IMovie[],
    upcoming: IMovie[],
}


export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<IMoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });

    
    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<IMovieDBResponse>('/now_playing');
        const popularPromise    = movieDB.get<IMovieDBResponse>('/popular');
        const topRatedPrimise   = movieDB.get<IMovieDBResponse>('/popular');
        const upcomingPromise   = movieDB.get<IMovieDBResponse>('/popular');

        const resp = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPrimise, 
            upcomingPromise
        ]);
        
        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results,
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}