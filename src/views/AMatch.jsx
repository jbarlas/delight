import { React } from "react";
import { StyleSheet, Text, SafeAreaView, Image, View, TouchableHighlight} from "react-native";
import anikaprofile from "../../assets/anika_profile.jpeg";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../components/Metrics";

export default function AMatch({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>It's a match!</Text>
      <View style={styles.info}>
        <Image
          style={styles.profilepic}
          source={anikaprofile}
        ></Image>
        <Text style={styles.name}>Anika Ahlualia</Text>
        <Text style={styles.comp}>99% Compatible</Text>
      </View>
      <Text style={styles.blerb} numberOfLines={2}>
        You are now in match mode and can only communicate with Anika!
      </Text>
      <TouchableHighlight
          activeOpacity={0.4}
          underlayColor="#b3728d"
          style={styles.button}
          onPress={() => navigation.navigate("Home-Matched")}
        >
          <View style={styles.buttonView}>
            <Ionicons name="chatbox-ellipses" size={horizontalScale(40)} color={"#F5D9E5"} style={{paddingLeft: "4%"}} />
            <Text style={styles.buttonText}>Message Anika</Text>
          </View>
        </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5D9E5",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profilepic: {
    height: horizontalScale(180),
    width: horizontalScale(180),
    borderRadius: horizontalScale(180)/2,
    borderWidth: horizontalScale(6),
    borderColor: "#DC8EAE",
  },
  info: {
    flex: 0.5,
    backgroundColor: "#F5D9E5",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: horizontalScale(30),
  },
  title: {
    fontSize: moderateScale(50),
    fontWeight: "bold",
    paddingTop: horizontalScale(30),
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
    paddingBottom: horizontalScale(80),
  },
  button: {
    heigh: horizontalScale(100),
    width: "75%",
    backgroundColor: "#DC8EAE",
    borderRadius: 30
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    padding: horizontalScale(10)
  },
  buttonText: {
    paddingLeft: "8%",
    fontSize: moderateScale(22),
    fontWeight: "bold"
  }
});