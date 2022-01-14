import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import React from 'react';
import { IMovie } from '../interfaces/MovieInterface';
import { StackScreenProps } from "@react-navigation/stack";
import { TRootStackParams } from "../navigation/Navigation";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { isLoadingComponent } from '../components/isLoadingComponent';
import { MovieDetails } from '../components/MovieDetails';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const screenHeight = Dimensions.get('screen').height

interface INavigateParams extends StackScreenProps<TRootStackParams, 'DetailScreen'> {};

export const DetailScreen = ({ route, navigation }: INavigateParams) => {
    const movie = route.params;
    const uriImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const { top } = useSafeAreaInsets();

    const { isLoading, cast, movieFullDetail} = useMovieDetail(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image 
                        source={{ uri: uriImg }}
                        style={styles.posterImage}
                    />
                </View>
                
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
            
            {
                isLoading 
                ? <ActivityIndicator size={35} style={{marginTop: 20,}}/>
                : <MovieDetails movieFull={movieFullDetail!} cast={ cast }/>
            }
            <View style={{...styles.backButton, top }}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Icon 
                        color='white' 
                        name="close-circle-outline" 
                        size={50} 
                    />

                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    infoContainer:{
        marginHorizontal: 20,
        marginTop: 20,
        
    },
    subTitle:{
        fontSize: 16,
        opacity: 0.8,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageContainer:{
        width: '100%',
        height: screenHeight * 0.7,
        //overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
    },
    imageBorder:{
        flex:1,
        overflow: 'hidden',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
    },
    posterImage:{
        flex: 1,
    },
    backButton:{
        position: 'absolute',
        right: 5
    }
})