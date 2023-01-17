import { React, useState } from "react";
import ImageSlider from "../components/imageSlider";
import PromptSlider from "../components/promptSlider";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";



export default function Profile({ route }) {
  const ChaChaData = route.params.userData;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView style={styles.topinfo}>
          <Image
            source={ChaChaData.profileImg}
            style={styles.profilepic}
          ></Image>
          <View style={styles.name}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>
              {ChaChaData.name}
            </Text>
            <Text style={{ fontSize: 18, paddingTop: 5 }}>
              Profile {ChaChaData.compatible}% Complete!
            </Text>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.infobar}>
          <View
            style={[
              styles.bar,
              { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
            ]}
          >
            <Text style={styles.bartext}>{ChaChaData.age}</Text>
          </View>
          <View
            style={[
              styles.bar,
              {
                marginLeft: -1,
              },
            ]}
          >
            <Text style={[styles.bartext]}>{ChaChaData.gender}</Text>
          </View>
          <View
            style={[
              styles.bar,
              {
                borderBottomEndRadius: 5,
                borderTopEndRadius: 5,
                marginLeft: -1,
              },
            ]}
          >
            <Text style={styles.bartext}>{ChaChaData.location}</Text>
            <MaterialCommunityIcons name="pencil" size={28} />
          </View>
        </View>
        <View style={styles.slideshows}>
          <View style={styles.picslide}>
            <View style={styles.add}>
              <Text style={styles.pictext}>Gallery</Text>
              <MaterialCommunityIcons name="plus" size={28} />
            </View>
            <ImageSlider images={ChaChaData.images} isProfile={true}/>
          </View>
          <View style={styles.picslide}>
            <View style={styles.add}>
              <Text style={styles.pictext}>Prompts</Text>
              <MaterialCommunityIcons name="plus" size={28} />
            </View>
            <PromptSlider prompts={ChaChaData.prompts} isProfile={true} />
          </View>
        </View>
        <View style={{height:80, width:"100%"}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    backgroundColor: "#65D9D5",
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
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  name: {
    flex: 1,
    alignItems: "left",
    marginLeft: "6%",
  },
  scroll: {
    flex: 1,
    paddingTop: 15,
  },
  infobar: {
    flex: 0.1,
    paddingLeft: "7%",
    flexDirection: "row",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    backgroundColor: "#F0F2F6",
    borderWidth: 0.5,
  },
  bartext: {
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  slideshows: {
    flex: 1,
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
    paddingRight: "15%",
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingTop: 15,
  },
});
