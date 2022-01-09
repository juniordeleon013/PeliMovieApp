import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IMovie } from '../interfaces/MovieInterface';


interface IMovieCard {
    movie: IMovie,
    height?: number,
    width?: number,
}

export const MovieCard = ({ movie, height = 420, width = 300 }: IMovieCard) => {
    const { title, poster_path } = movie;
    const uriImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <View style={{ height, width, marginHorizontal: 8, }}>
            <View style={styles.imageContainer}>

                <Image
                source={{ 
                    uri: uriImg
                }} 
                style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        flex:1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 7,
    },
    image:{
        flex: 1,
        borderRadius: 18,
    }
});