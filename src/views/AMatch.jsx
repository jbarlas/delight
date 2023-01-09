import { React } from "react";
import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";

export default function AMatch() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>It's a match!</Text>
      <View style={styles.info}>
        <Image
          style={styles.profilepic}
          source={require("../assets/anika_profile.jpeg")}
        ></Image>
        <Text style={styles.name}>Anika Ahlualia</Text>
        <Text style={styles.comp}>99% Compatible</Text>
      </View>
      <Text style={styles.blerb} numberOfLines={2}>
        You are now in match mode and can only communicate with Anika!
      </Text>
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
    height: 160,
    width: 160,
    borderRadius: 100,
  },
  info: {
    flex: 0.45,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  comp: {
    fontSize: 15,
  },
  blerb: {
    marginLeft: 35,
    marginRight: 35,
    textAlign: "center",
    paddingBottom: 80,
  },
});