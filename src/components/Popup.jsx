import React from 'react'
import { StyleSheet, Text } from "react-native";
import { Overlay } from '@rneui/base';
import { ButtonGroup } from '@rneui/themed';

export default function Popup(props) {
    return (
        <Overlay isVisible={props.isVisible} overlayStyle={styles.overlay}>
            {props.text}
            <ButtonGroup
                onPress={props.handlePress}
                buttons={props.options}
                buttonStyle={styles.button}
                containterStyle={{ marginTop: 5, }}
                textStyle={{ color: "black", fontSize: 16 }} />
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: "#BFC3CC",
        borderRadius: 10,
        width: "60%",
        borderWidth: "1px",
        paddingBottom: 2,
    },
    button: {
        backgroundColor: "#F0F2F6",
        color: "black",
        padding: 0,
    },
})