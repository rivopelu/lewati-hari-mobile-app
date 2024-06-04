import React from "react";
import {View} from "react-native";

export function Container(props : IProps){
    return (
        <View style={{paddingHorizontal : 16}}>
            {props.children}
        </View>
    )
}

interface IProps {
    children: React.ReactNode;
}