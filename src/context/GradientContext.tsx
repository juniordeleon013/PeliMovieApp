import React from 'react';
import { createContext, useState } from 'react';

interface IImageColor {
    primary: string,
    secondary: string
}

interface IContextProps {
    colors: IImageColor,
    prevColors: IImageColor,
    setMainColors: ( colors: IImageColor ) => void,
    setPrevMainColors: ( colors: IImageColor ) => void
}

export const GradientContext = createContext({} as IContextProps);

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<IImageColor>({
        primary: '#084F6A',
        secondary: '#75CEDB'
    });

    const [prevColors, setPrevColors] = useState<IImageColor>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColors = ( colors: IImageColor) => {
        setColors( colors );
    }

    const setPrevMainColors = ( colors: IImageColor) => {
        setPrevColors( colors );
    }

    return (
        <GradientContext.Provider value={{ 
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
         }}>
             {children}
        </GradientContext.Provider>
    );
}