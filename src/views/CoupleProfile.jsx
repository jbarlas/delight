import { React } from "react";
import ImageSlider from "../src/components/imageSlider";
import PromptSlider from "../src/components/promptSlider";
import { AnikaData } from "../src/components/anika";
import { ChaChaData } from "../src/components/chacha";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CoupleProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView style={styles.topinfo}>
          <Ionicons
            name="heart-dislike"
            size={40}
            color={"black"}
            backgroundColor={"black"}
            style={styles.xbutton}
          ></Ionicons>
          <Image source={AnikaData.profile} style={styles.profilepic}></Image>
          <Image
            source={ChaChaData.profile}
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
          <Ionicons name="arrow-forward" size={25} />
        </View>
        <View style={styles.common}>
          <Text style={styles.profileText}>What you have in common</Text>
          <View style={styles.heartcon}>
            <Ionicons name="heart" style={styles.heart} size={18}></Ionicons>
            <Text style={styles.commonText}>You both want 2 kids</Text>
          </View>
          <View style={styles.heartcon}>
            <Ionicons name="heart" style={styles.heart} size={18}></Ionicons>
            <Text style={styles.commonText}>
              You both want to live in a city
            </Text>
          </View>
        </View>
        <View style={styles.common}>
          <Text style={styles.profileText}>What you disagree on</Text>
          <View style={styles.heartcon}>
            <Ionicons
              name="heart-dislike"
              style={styles.heart}
              size={18}
            ></Ionicons>
            <Text style={styles.commonText}>You both want 2 kids</Text>
          </View>
          <View style={styles.heartcon}>
            <Ionicons
              name="heart-dislike"
              style={styles.heart}
              size={18}
            ></Ionicons>
            <Text style={styles.commonText}>
              You both want to live in a city
            </Text>
          </View>
        </View>
        <View style={styles.slideshows}>
          <View style={styles.picslide}>
            <View style={styles.add}>
              <Text style={styles.pictext}>Gallery</Text>
              <Ionicons name="add" size={25} />
            </View>
            <ImageSlider images={[...ChaChaData.images, ...AnikaData.images]} />
          </View>
          <View style={styles.picslide}>
            <View style={styles.add}>
              <Text style={styles.pictext}>Where it all started</Text>
              <Ionicons name="add" size={25} />
            </View>
            <PromptSlider
              prompts={[...AnikaData.prompts, ...ChaChaData.prompts]}
            />
          </View>
        </View>
      </ScrollView>
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
    marginLeft: "6.5%",
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
    marginLeft: "8%",
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
    paddingLeft: "8%",
    paddingRight: "15%",
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -2,
    paddingBottom: 5,
  },
});