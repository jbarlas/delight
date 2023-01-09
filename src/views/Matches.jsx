import { React } from "react";
import ImageSlider from "../src/components/imageSlider";
import PromptSlider from "../src/components/promptSlider";
import { ChaChaData } from "../src/components/chacha";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import xbutton from "../assets/xcircle.png";

export default function Matches() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView style={styles.topinfo}>
          <Image source={xbutton} style={styles.xbutton}></Image>
          <Image
            source={{
              uri: "https://i.ytimg.com/vi/JKx_Sa7CFMY/maxresdefault.jpg",
            }}
            style={styles.profilepic}
          ></Image>
          <View style={styles.name}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {ChaChaData.name}
            </Text>
            <Text style={{ fontSize: 16, paddingTop: 5 }}>
              {ChaChaData.compatible}% Compatible!
            </Text>
          </View>
        </SafeAreaView>
      </View>
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
            { borderBottomEndRadius: 5, borderTopEndRadius: 5, marginLeft: -1 },
          ]}
        >
          <Text style={styles.bartext}>{ChaChaData.location}</Text>
        </View>
      </View>
      <View style={styles.slideshows}>
        <View style={styles.picslide}>
          <Text style={[styles.pictext, { marginBottom: -20 }]}>Gallery</Text>
          <ImageSlider images={ChaChaData.images} />
        </View>
        <View style={styles.picslide}>
          <Text style={styles.pictext}>Prompts</Text>
          <PromptSlider prompts={ChaChaData.prompts} />
        </View>
      </View>
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
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  name: {
    flex: 1,
    alignItems: "left",
    marginLeft: "8%",
  },
  infobar: {
    flex: 0.1,
    paddingLeft: "7%",
    flexDirection: "row",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    backgroundColor: "F0F2F6",
    borderWidth: 0.5,
  },
  bartext: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  slideshows: {
    flex: 0.7,
  },
  picslide: {
    flex: 0.5,
  },
  pictext: {
    paddingLeft: "8%%",
    fontSize: 17,
    fontWeight: "bold",
  },
});
