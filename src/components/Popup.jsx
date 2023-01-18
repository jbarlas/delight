import React from 'react'
import { StyleSheet, Text } from "react-native";
import { Overlay } from '@rneui/base';
import { ButtonGroup } from '@rneui/themed';
import {
    horizontalScale,
    moderateScale,
    verticalScale,
  } from "./Metrics";

export default function Popup(props) {
    return (
        <Overlay isVisible={props.isVisible} overlayStyle={styles.overlay}>
            {props.text}
            <ButtonGroup
                onPress={props.handlePress}
                buttons={props.options}
                buttonStyle={styles.button}
                containterStyle={{ marginTop: horizontalScale(5), }}
                textStyle={{ color: "black", fontSize: moderateScale(16) }} />
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "#BFC3CC",
        borderRadius: 10,
        width: "70%",
        borderWidth: "1px",
        padding: horizontalScale(10)
    },
    button: {
        backgroundColor: "#F0F2F6",
        color: "black",
        paddingBottom: 0,
    },
})