import { React, useState } from "react";
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
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Popup from "../components/Popup.jsx";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../components/Metrics";

export default function CoupleProfile({ navigation, route }) {
  const [unmatchVisible, setUnmatchVisible] = useState(false);
  const [hasUnmatched, setHasUnmatched] = useState(false);

  const handleUnmatching = (value) => {
    if (value == 0) {
      navigation.navigate("Unmatch");
      setHasUnmatched(true);
    } else {
      console.log("no");
    }
    setUnmatchVisible(false);
  };

  const handlePress = () => {
    setUnmatchVisible(true);
    console.log("open popup");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.xbutton}
        onPress={() => setUnmatchVisible(true)}
      >
        <MaterialCommunityIcons
          name="heart-broken"
          size={horizontalScale(40)}
          color={"black"}
          backgroundColor={"black"}
        ></MaterialCommunityIcons>
      </TouchableOpacity>
      <View style={styles.top}>
        <SafeAreaView style={styles.topinfo}>
          <Image
            source={AnikaData.profileImg}
            style={styles.profilepic}
          ></Image>
          <Image
            source={ChaChaData.profileImg}
            style={[styles.profilepic, { marginLeft: verticalScale(-30) }]}
          ></Image>
          <View style={styles.name}>
            <Text style={{ fontSize: moderateScale(22), fontWeight: "bold" }}>
              Anika and You
            </Text>
            <Text style={{ fontSize: moderateScale(16), paddingTop: horizontalScale(5) }}>
              {AnikaData.compatible}% Compatible!
            </Text>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.infobar}>
          <Text style={styles.profileText}>Visit Anika's original profile</Text>
          <MaterialCommunityIcons name="arrow-right-bold" size={horizontalScale(30)} />
        </View>
        <View style={styles.common}>
          <Text style={styles.profileText}>What you have in common</Text>
          <View style={styles.heartcon}>
            <MaterialCommunityIcons
              name="heart"
              style={styles.heart}
              size={horizontalScale(18)}
            ></MaterialCommunityIcons>
            <Text style={styles.commonText}>You both want 2 kids</Text>
          </View>
          <View style={styles.heartcon}>
            <MaterialCommunityIcons
              name="heart"
              style={styles.heart}
              size={horizontalScale(18)}
            ></MaterialCommunityIcons>
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
              size={horizontalScale(18)}
            ></MaterialCommunityIcons>
            <Text style={styles.commonText}>You both want 2 kids</Text>
          </View>
          <View style={styles.heartcon}>
            <MaterialCommunityIcons
              name="heart-broken"
              style={styles.heart}
              size={horizontalScale(18)}
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
              <MaterialCommunityIcons name="plus" size={horizontalScale(28)} />
            </View>
            <ImageSlider
              images={[...ChaChaData.images, ...AnikaData.images]}
              isProfile={true}
              color={"#F6BCD4"}
            />
          </View>
          <View style={styles.picslide}>
            <View style={styles.add}>
              <Text style={styles.pictext}>Where it all started</Text>
              <MaterialCommunityIcons name="plus" size={horizontalScale(28)} />
            </View>
            <PromptSlider
              prompts={[...AnikaData.prompts, ...ChaChaData.prompts]}
              isProfile={true}
              color={"#F6BCD4"}
            />
          </View>
        </View>
        <View style={{ height: horizontalScale(80), width: "100%" }}></View>
      </ScrollView>
      <Popup
        isVisible={unmatchVisible}
        handlePress={handleUnmatching}
        options={["Yes", "No"]}
        text={unmatchText}
      ></Popup>
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
    height: horizontalScale(45),
    width: horizontalScale(45),
    top: horizontalScale(45),
    right: verticalScale(16),
    zIndex: 20,
  },
  top: {
    backgroundColor: "#F6BCD4",
    height: horizontalScale(145),
    width: "100%",
    borderBottomWidth: horizontalScale(1.5),
  },
  topinfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  profilepic: {
    marginLeft: "7%",
    height: horizontalScale(75),
    width: horizontalScale(75),
    borderRadius: horizontalScale(80)/2,
  },
  name: {
    flex: 1,
    alignItems: "left",
    marginLeft: "3%",
  },
  scroll: {
    flex: 1,
    paddingTop: horizontalScale(15),
  },
  infobar: {
    flex: 0.2,
    marginLeft: "5.5%",
    marginRight: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: horizontalScale(5),
    marginBottom: horizontalScale(15),
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
    paddingRight: verticalScale(5),
    paddingLeft: verticalScale(15),
  },
  commonText: {
    fontSize: moderateScale(16),
  },
  profileText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  slideshows: {
    flex: 0.7,
  },
  picslide: {
    flex: 0.5,
  },
  pictext: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  add: {
    paddingLeft: "7%",
    paddingRight: "10%",
    direction: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: horizontalScale(10),
    paddingTop: horizontalScale(15),
  },
  text: {
    textAlign: "center",
    paddingVertical: verticalScale(5),
    fontSize: moderateScale(16),
  },
});

const unmatchText = (
  <Text style={styles.text}>
    Are you sure this person is not
    <Text style={{ fontWeight: "bold" }}> the one </Text>
    for you?
  </Text>
);
