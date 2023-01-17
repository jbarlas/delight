import { React } from "react";
import { StyleSheet, Text, SafeAreaView, Image, View, TouchableHighlight} from "react-native";
import anikaprofile from "../../assets/anika_profile.jpeg";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

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
            <Ionicons name="chatbox-ellipses" size={40} color={"#F5D9E5"} />
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
    height: 180,
    width: 180,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: "#DC8EAE",
  },
  info: {
    flex: 0.5,
    backgroundColor: "#F5D9E5",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 30,
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
    paddingBottom: 80,
  },
  button: {
    heigh: 100,
    width: "75%",
    backgroundColor: "#DC8EAE",
    borderRadius: 30
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  buttonText: {
    paddingLeft: "10%",
    fontSize: 22,
    fontWeight: "bold"
  }
});