import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { IMovie } from '../interfaces/MovieInterface';
import { MovieCard } from './MovieCard';

interface ISliderProps{
    title?: string,
    movies: IMovie[],
}
export const HorizontalSlider = ({title, movies}: ISliderProps) => {
    return (
        <View style={{ 
            height: (title) ? 260 : 220,
        }}>
            {
                title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>
            }
            <FlatList 
                data={movies}
                renderItem={({ item } : any) => (
                    <MovieCard movie={item} width={140} height={200}/>
                )}
                keyExtractor={( item: IMovie ) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}