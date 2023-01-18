import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableHighlight
} from "react-native";
import anikaprofile from "../../assets/anika_profile.jpeg";
import chaprofile from "../../assets/cha_profile.jpeg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../components/Metrics";

export default function Unmatch({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.title}>Oh no!</Text>
          <Text style={styles.subTitle}>Sorry it didn't work out /:</Text>
        </View>
        <View style={styles.pictures}>
          <Image style={[styles.profilepic, {marginRight: verticalScale(-50), opacity: .4}]} source={anikaprofile}></Image>
          <MaterialCommunityIcons
                            name="heart-broken"
                            size={horizontalScale(100)}
                            color={"black"}
                            style={{zIndex: 10}}
                        ></MaterialCommunityIcons>
          <Image style={[styles.profilepic, {marginLeft: verticalScale(-50)}]} source={chaprofile}></Image>
        </View>
        <Text style={styles.blerb} numberOfLines={2}>
          We hope your next match will be the one for you!
        </Text>
        <TouchableHighlight
          activeOpacity={0.4}
          underlayColor="#3e808c"
          style={styles.button}
          onPress={() => navigation.navigate("Home-Unmatched")}
        >
          <View style={styles.buttonView}>
            <MaterialCommunityIcons name="heart" size={horizontalScale(40)} color={"#65D9D5"} style={{paddingLeft: "4%"}} />
            <Text style={styles.buttonText}>Go to matching</Text>
          </View>
        </TouchableHighlight>
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
    height: horizontalScale(150),
    width: horizontalScale(150),
    borderRadius: horizontalScale(150)/2,
    borderWidth: verticalScale(6),
    borderColor: "#53ABBB"
  },
  info: {
    flex: 0.25,
    backgroundColor: "#65D9D5",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: horizontalScale(30),
  },
  pictures : {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#65D9D5",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: horizontalScale(30),
  },
  title: {
    fontSize: moderateScale(50),
    fontWeight: "bold",
    paddingTop: horizontalScale(30),
    textAlign: "center",
    margin: horizontalScale(10),
  },
  subTitle: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    paddingTop: horizontalScale(30),
    textAlign: "center",
  },
  name: {
    paddingTop: horizontalScale(10),
    paddingBottom: horizontalScale(10),
    fontSize: moderateScale(30),
    fontWeight: "bold",
  },
  comp: {
    fontSize: moderateScale(20),
  },
  blerb: {
    fontSize: moderateScale(15),
    marginLeft: verticalScale(35),
    marginRight: verticalScale(35),
    textAlign: "center",
    paddingBottom: horizontalScale(10),
  },
  button: {
    heigh: horizontalScale(100),
    width: "75%",
    backgroundColor: "#53ABBB",
    borderRadius: horizontalScale(30)
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    padding: horizontalScale(10)
  },
  buttonText: {
    paddingLeft: "6.5%",
    fontSize: moderateScale(22),
    fontWeight: "bold"
  }
});
