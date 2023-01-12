import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, View } from "react-native";
import { Card, Button as IconButton } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { patchWebProps } from '@rneui/base';

export default function Popup(props) {
    const handleReactionSent = () => {
        props.setUnmatchVisible(true);
        props.isMsgVisible(false);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Ionicons 
            onPress={() => props.isMsgVisible(false)}
            name="close-circle-outline" 
            color="black" 
            size={40} 
            style={{ right: -135, marginTop: 48 }}></Ionicons>
            <View>
                <Card containerStyle={{ marginBottom: 15, width: 225 }}>
                    <Card.Title>{props.prompt}</Card.Title>
                    <Card.Divider />
                    <Text>
                        {props.answer}
                    </Text>
                </Card>
                <View style={styles.messaging}>
                    <IconButton
                        onPress={handleReactionSent}
                        icon={<Ionicons name="send" color="black" size={20}></Ionicons>}
                        color="rgba(240, 242, 246, 0)"
                       />
                    <TextInput
                        autoFocus={true}
                        style={{ ...styles.input, width: "80%" }}
                        // onSubmitEditing={handleReactionSent}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    messaging: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(240, 242, 246, 0.95)",
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgba(240, 242, 246, 0.8)",
        alignItems: "center",
        bottom: 0,
    },
    input: {
        borderWidth: 1,
        width: 200,
        padding: 5,
        margin: 15,
    },
    xbutton: {
        position: "absolute",
        height: 45,
        width: 45,
        top: 55,
        left: "83%",
    },
})