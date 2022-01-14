import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { isLoadingComponent } from '../components/isLoadingComponent';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageColors from 'react-native-image-colors';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { ScrollView } from 'react-native-gesture-handler';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { 
        nowPlaying, 
        popular, 
        topRated, 
        upcoming, 
        isLoading
    } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext( GradientContext );

    const getPosterColors = async (index: number) => {
        const uriImg = `https://image.tmdb.org/t/p/w500/${nowPlaying[index].poster_path}`;
        const [primary = "#084F6A", secondary = "#75CEDB" ] = await getImageColors(uriImg);

        setMainColors({primary, secondary});
    }

    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColors(0);
        }
    }, [nowPlaying])
    
    return isLoading ? 
        isLoadingComponent() 
        : 
        (
            <GradientBackground>
                <ScrollView>
                    <View style={{ paddingTop: top + 20}}>
                        
                        {/* Main Carrousel */}
                        <View style={{ height: 440 }}>

                            <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MovieCard movie={ item } />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={ (index) => getPosterColors(index)}
                            />
                        </View>

                        {/* Popular movies */}
                        <HorizontalSlider title="Populares" movies={popular} />

                        {/* Top rated */}
                        <HorizontalSlider title="Mejores valoradas" movies={topRated} />

                        {/* up comming */}
                        <HorizontalSlider title="Por venir" movies={upcoming} />

                    </View>
                </ScrollView>
            </GradientBackground>
        )
}

const styles = StyleSheet.create({

})