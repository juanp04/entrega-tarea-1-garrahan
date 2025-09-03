import React from "react";
import { Text, View } from "react-native";

const Tarjeta = (props: {text: string}) => {
    const handlePress = () => {
        console.log("Hola!")
    }
    
    return (
        <View style={{ backgroundColor: "red", width: 200, height: 100, alignItems: "center", justifyContent: "center"}}>
            <Text>{props.text}</Text>
        </View>
    )
}