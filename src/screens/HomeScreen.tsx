import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { isLoadingComponent } from '../components/isLoadingComponent';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { ScrollView } from 'react-native-gesture-handler';

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
    
    return isLoading ? 
        isLoadingComponent() 
        : 
        (
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
        )
}

const styles = StyleSheet.create({

})