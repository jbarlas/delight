import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image, View, Button } from "react-native";
import anikaprofile from "../../assets/anika_profile.jpeg";


export default function Unmatch({navigation, route}) {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Oh no! Sorry it didn't work out</Text>
      <View style={styles.info}>
        <Image
          style={styles.profilepic}
          source={anikaprofile}
        ></Image>
        <Text style={styles.name}>Anika Ahlualia</Text>
      </View>
      <Text style={styles.blerb} numberOfLines={2}>
        You are now in match mode and can only communicate with Anika!
      </Text>
      <Button title="Back to matches" onPress={() => navigation.navigate("Home")}></Button>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#65D9D5",
      alignItems: "center",
      justifyContent: "space-around",
    },
    profilepic: {
      height: 180,
      width: 180,
      borderRadius: 100,
    },
    info: {
      flex: 0.5,
      backgroundColor: "#65D9D5",
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
  });
