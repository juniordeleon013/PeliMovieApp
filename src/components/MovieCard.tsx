import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { IMovie } from '../interfaces/MovieInterface';


interface IMovieCard {
    movie: IMovie,
    height?: number,
    width?: number,
}

export const MovieCard = ({ movie, height = 420, width = 300 }: IMovieCard) => {
    const { title, poster_path } = movie;
    const uriImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    const navigation = useNavigation();

    return (
        <View style={{ 
            height, 
            width, 
            marginHorizontal: 2, 
            paddingBottom: 20,
            paddingHorizontal: 7,
        }}>
            <TouchableOpacity style={styles.imageContainer}
                onPress={() => navigation.navigate('DetailScreen', movie)}
                activeOpacity={0.8}
            >

                <Image
                source={{ 
                    uri: uriImg
                }} 
                style={styles.image}
                />
            </TouchableOpacity>
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