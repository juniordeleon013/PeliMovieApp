
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { act } from 'react-test-renderer';
import { ICast } from '../interfaces/MovieCastInterface';

interface IProps {
    actor: ICast
}
export const CastItem = ({ actor } : IProps) => {
    const uriImg = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri: uriImg }} 
                        style={{  width: 50, height: 50, borderRadius: 10, }}
                    />
                )
            }
            
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        height: 50,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 9,
        marginRight: 15,
        paddingRight: 15,
    },
    actorInfo:{
        marginLeft: 10,
        marginTop: 5
    }
})