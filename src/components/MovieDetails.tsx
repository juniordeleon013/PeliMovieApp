import React from 'react';
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ICast } from '../interfaces/MovieCastInterface';
import { IMovieFullDetail } from '../interfaces/MovieDetailInterface';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';
import { HorizontalSlider } from './HorizontalSlider';

interface IProps {
    movieFull: IMovieFullDetail,
    cast: ICast[],
}
export const MovieDetails = ({ movieFull, cast } : IProps) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline" 
                        size={20} 
                        color="grey"
                    />
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - { movieFull.genres.map( gen => gen.name ).join(', ') }
                    </Text>
                </View>
                {/* Description */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Description
                </Text>
                <Text style={{ fontSize: 16 }}>
                    { movieFull.overview}
                </Text>
                {/* budget */}
                <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Budget: 
                    </Text>
                    <Text style={{ fontSize: 20 }}> 
                         { currencyFormatter.format(movieFull.budget, {code: 'USD'})}
                    </Text>

                </View>

                {/* Cast */}
                <View style={{ paddingBottom: 30, }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Actors
                    </Text>
                    <FlatList
                        data={cast}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item}/>}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, height: 50 }}
                    />
                    

                </View>

            </View>
        </>
    )
}