import { React } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { Card, Button as IconButton } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import AnikaProfile from "../../assets/anika_profile.jpeg"

export default function Messaging() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.top}>
                <SafeAreaView style={styles.topinfo}>
                    <Image
                        source={AnikaProfile}
                        style={styles.profilepic}
                    ></Image>
                    <View style={styles.name}>
                        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
                            Anika Ahluwalia
                        </Text>
                        <Text style={{ fontSize: 18, paddingTop: 5 }}>
                            99% Compatible!
                        </Text>
                    </View>
                </SafeAreaView>
            </View>
            <KeyboardAvoidingView style={styles.mainContent} keyboardVerticalOffset={-150} behavior={"position"}>
                {/* <ScrollView style={{ paddingTop: 50}}> */}
                <ScrollView>
                    <View style={styles.rightMsg}>
                        <Card containerStyle={{ width: 225 }}>
                            <Card.Title>The biggest red flag I avoid is...</Card.Title>
                            <Text style={{ marginBottom: 15 }}>Men who are software engineers</Text>
                            <Card.Divider />
                            <Text>Good thing I dropped my intro CS class!!</Text>
                        </Card>
                    </View>

                    <Card containerStyle={{ width: 225 }}>
                        <Card.Title>My shower thoughts are....</Card.Title>
                        <Text style={{ marginBottom: 15 }}>In the worm world, the early worm gets eaten :P</Text>
                        <Card.Divider />
                        <Text>um, ok</Text>
                    </Card>
                    <View style={styles.rightMsg}>
                        <Card containerStyle={{ width: 175 }}>
                            <Text>Hello! So excited {':)'}</Text>
                        </Card>
                    </View>

                </ScrollView>

                <View style={styles.messaging}>
                    <IconButton
                        onPress={() => console.log("sent")}
                        icon={<Ionicons name="send" color="black" size={20}></Ionicons>}
                        color="rgba(240, 242, 246, 0)"
                    />
                    <TextInput
                        style={{ ...styles.input, width: "80%" }}
                        placeholder="Message Anika..."
                    />
                </View>

            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    top: {
        backgroundColor: "#F6BCD4",
        height: 150,
        width: "100%",
        borderBottomWidth: 1.5,
        zIndex: 3
    },
    topinfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    profilepic: {
        marginLeft: "7%",
        height: 90,
        width: 90,
        borderRadius: 50,
    },
    name: {
        flex: 1,
        alignItems: "left",
        marginLeft: "8%",
    },
    messaging: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        width: 200,
        padding: 5,
        margin: 15,
        backgroundColor: "rgba(240, 242, 246, 0.95)",
    },
    mainContent: {
        display: "flex",
        justifyContent: "space-around",
        height: "100%"
    },
    rightMsg: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "flex-end"
    }
});