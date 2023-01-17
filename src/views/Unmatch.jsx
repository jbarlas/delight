import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Button,
} from "react-native";
import anikaprofile from "../../assets/anika_profile.jpeg";
import chaprofile from "../../assets/cha_profile.jpeg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { JeffData } from "../components/UserData";

export default function Unmatch({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>Oh no!</Text>
          <Text style={styles.subTitle}>Sorry it didn't work out /:</Text>
        </View>
        <View style={styles.pictures}>
          <Image style={[styles.profilepic, {marginRight: -40, opacity: .4}]} source={anikaprofile}></Image>
          <MaterialCommunityIcons
                            name="heart-broken"
                            size={100}
                            color={"black"}
                            style={{zIndex: 10}}
                        ></MaterialCommunityIcons>
          <Image style={[styles.profilepic, {marginLeft: -40}]} source={chaprofile}></Image>
        </View>
        <Text style={styles.blerb} numberOfLines={2}>
          We hope your next match will be the one for you!
        </Text>
        <Button
          title="Back to matching"
          onPress={() => navigation.navigate("Home-Unmatched")}
        ></Button>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#65D9D5",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profilepic: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  info: {
    flex: 0.2,
    backgroundColor: "#65D9D5",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  pictures : {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#65D9D5",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 30,
    textAlign: "center",
    margin: 10,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 30,
    textAlign: "center",
  },
  name: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  comp: {
    fontSize: 20,
  },
  blerb: {
    fontSize: 15,
    marginLeft: 35,
    marginRight: 35,
    textAlign: "center",
    paddingBottom: 10,
  },
});
