import React from 'react'
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, View } from "react-native";
import { Card, Button as IconButton } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Popup() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Ionicons name="close-circle-outline" color="black" size={40} style={{ right: -150, marginTop: 35 }}></Ionicons>
            <View>
                <Card containerStyle={{ marginBottom: 15, width: 225 }}>
                    <Card.Title>I enjoy...</Card.Title>
                    <Card.Divider />
                    <Text>
                        Long walks on the beach and you {';)'}
                    </Text>
                </Card>
                <View style={styles.messaging}>
                    <IconButton
                        onPress={() => console.log("send")}
                        icon={<Ionicons name="send" color="black" size={20}></Ionicons>}
                        color="white"
                    />
                    <TextInput
                        autoFocus={true}
                        style={{ ...styles.input, width: "80%" }}
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
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems: "center",
        bottom: 0,
    },
    input: {
        borderWidth: 1,
        width: 200,
        padding: 5,
        margin: 15,
    },
})