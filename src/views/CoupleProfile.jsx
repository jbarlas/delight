import { React, useEffect, useState } from "react";
import ImageSlider from "../components/imageSlider";
import PromptSlider from "../components/promptSlider";
import { ChaChaData, AnikaData } from "../components/UserData";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    Pressable
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Popup from '../components/Popup.jsx'

export default function CoupleProfile({ navigation, route }) {
    const [unmatchVisible, setUnmatchVisible] = useState(false);
    const [hasUnmatched, setHasUnmatched] = useState(false);

    const handleUnmatching = (value) => {
        if (value == 0) {
            navigation.navigate("Unmatch")
            setHasUnmatched(true)
        } else {
            console.log("no")
        }
        setUnmatchVisible(false);
    }

    const handlePress = () => {
        setUnmatchVisible(true);
        console.log("open popup");
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <SafeAreaView style={styles.topinfo}>
                    <Pressable onPress={() => setUnmatchVisible(true)} style={styles.xbutton}>
                        <MaterialCommunityIcons
                            name="heart-broken"
                            size={40}
                            color={"black"}
                            backgroundColor={"black"}
                        ></MaterialCommunityIcons>
                    </Pressable>
                    <Image source={AnikaData.profileImg} style={styles.profilepic}></Image>
                    <Image
                        source={ChaChaData.profileImg}
                        style={[styles.profilepic, { marginLeft: -30 }]}
                    ></Image>
                    <View style={styles.name}>
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                            Anika and You
                        </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5 }}>
                            {AnikaData.compatible}% Compatible!
                        </Text>
                    </View>
                </SafeAreaView>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.infobar}>
                    <Text style={styles.profileText}>Visit Anika's original profile</Text>
                    <MaterialCommunityIcons name="arrow-right-bold" size={30} />
                </View>
                <View style={styles.common}>
                    <Text style={styles.profileText}>What you have in common</Text>
                    <View style={styles.heartcon}>
                        <MaterialCommunityIcons name="heart" style={styles.heart} size={18}></MaterialCommunityIcons>
                        <Text style={styles.commonText}>You both want 2 kids</Text>
                    </View>
                    <View style={styles.heartcon}>
                        <MaterialCommunityIcons name="heart" style={styles.heart} size={18}></MaterialCommunityIcons>
                        <Text style={styles.commonText}>
                            You both want to live in a city
                        </Text>
                    </View>
                </View>
                <View style={styles.common}>
                    <Text style={styles.profileText}>What you disagree on</Text>
                    <View style={styles.heartcon}>
                        <MaterialCommunityIcons
                            name="heart-broken"
                            style={styles.heart}
                            size={18}
                        ></MaterialCommunityIcons>
                        <Text style={styles.commonText}>You both want 2 kids</Text>
                    </View>
                    <View style={styles.heartcon}>
                        <MaterialCommunityIcons
                            name="heart-broken"
                            style={styles.heart}
                            size={18}
                        ></MaterialCommunityIcons>
                        <Text style={styles.commonText}>
                            You both want to live in a city
                        </Text>
                    </View>
                </View>
                <View style={styles.slideshows}>
                    <View style={styles.picslide}>
                        <View style={styles.add}>
                            <Text style={styles.pictext}>Gallery</Text>
                            <MaterialCommunityIcons name="plus" size={28} />
                        </View>
                        <ImageSlider images={[...ChaChaData.images, ...AnikaData.images]} isProfile={true} color={"#F6BCD4"}/>
                    </View>
                    <View style={styles.picslide}>
                        <View style={styles.add}>
                            <Text style={styles.pictext}>Where it all started</Text>
                            <MaterialCommunityIcons name="plus" size={28} />
                        </View>
                        <PromptSlider
                            prompts={[...AnikaData.prompts, ...ChaChaData.prompts] } isProfile={true} color={"#F6BCD4"}
                        />
                    </View>
                </View>
                <View style={{height:80, width:"100%"}}></View>
            </ScrollView>
            <Popup isVisible={unmatchVisible} handlePress={handleUnmatching} options={['Yes', 'No']} text={unmatchText}></Popup>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    xbutton: {
        position: "absolute",
        height: 45,
        width: 45,
        top: 55,
        left: "83%",
    },
    top: {
        backgroundColor: "#F6BCD4",
        height: 150,
        width: "100%",
        borderBottomWidth: 1.5,
    },
    topinfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    profilepic: {
        marginLeft: "7%",
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    name: {
        flex: 1,
        alignItems: "left",
        marginLeft: "3%",
    },
    scroll: {
        flex: 1,
        paddingTop: 15,
    },
    infobar: {
        flex: 0.2,
        marginLeft: "5.5%",
        marginRight: "8%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        marginBottom: 15,
        alignContent: "center",
        backgroundColor: "#F0F2F6",
    },
    common: {
        flex: 1,
        justifyContent: "space-around",
        marginLeft: "7%",
        marginRight: "8%",
    },
    heartcon: {
        marginTop: 5,
        flex: 1,
        flexDirection: "row",
    },
    heart: {
        color: "#DC8EAE",
        paddingRight: 5,
        paddingLeft: 15,
    },
    commonText: {
        fontSize: 16,
    },
    profileText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    slideshows: {
        flex: 0.7,
    },
    picslide: {
        flex: 0.5,
    },
    pictext: {
        fontSize: 20,
        fontWeight: "bold",
    },
    add: {
        paddingLeft: "7%",
        paddingRight: "10%",
        direction: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingTop: 15,
    },
    text: {
        textAlign: "center",
        paddingVertical: 5,
        fontSize: 16,
    },
});

const unmatchText =
    <Text style={styles.text}>
        Are you sure this person is not
        <Text style={{ fontWeight: 'bold' }}> the one </Text>
        for you?
    </Text>