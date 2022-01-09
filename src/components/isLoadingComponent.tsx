import React from 'react';
import { ActivityIndicator, View } from "react-native";

export const isLoadingComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignCenter: 'center' }}>
            <ActivityIndicator color="red" size={50}/>
        </View>
    )
}