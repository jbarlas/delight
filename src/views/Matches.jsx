import { React, useState } from "react";
import ImageSlider from "../components/imageSlider";
import PromptSlider from "../components/promptSlider";
import { JeffData, AnikaData } from "../components/UserData";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Popup from "../components/Popup.jsx";
import MessagePrompt from "../components/MessagePrompt.jsx";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../components/Metrics";

const Stack = createStackNavigator();

export default function Matches() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false,}}>
      <Stack.Screen
        name="user"
        component={MatchProfile}
        initialParams={{
          userData: JeffData,
        }}
      />
    </Stack.Navigator>
  );
}

function MatchProfile({ route, navigation }) {
  const userData = route.params.userData;
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [msgVisible, isMsgVisible] = useState(false);
  const [reactedPromp, setReactedPrompt] = useState(0);
  const [reactedImage, setReactedImage] = useState(0);
  const [isPrompt, setIsPrompt] = useState(false);

  const handleConfirmPress = () => {
    setConfirmationVisible(!confirmationVisible);
    if (userData === AnikaData) {
      navigation.setParams({ userData: JeffData });
      navigation.navigate("Match");
    }
  };

  const handleReactFN = (prompt) => {
    isMsgVisible(!msgVisible);
    setReactedPrompt(prompt);
    setIsPrompt(true);
  };

  const handleReactFNImage = (prompt) => {
    isMsgVisible(!msgVisible);
    setReactedImage(prompt);
    setIsPrompt(false);
  };

  const reactionText = (
    <View>
      <Text style={{ ...styles.text, fontWeight: "bold" }}>Reaction Sent!</Text>
      <Text style={styles.text}>
        You will be matched if {userData.name} reacts to your profile too!
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.xbutton} onPress={() =>
          navigation.push("user", {
            userData: userData == JeffData ? AnikaData : JeffData,
          })
        }>
      <MaterialCommunityIcons
        name="close-circle-outline"
        size={horizontalScale(40)}
        color={"black"}
        backgroundColor={"black"}
      ></MaterialCommunityIcons>
      </TouchableOpacity>
      <View style={styles.whiteX} />
      <View
        style={{
          ...styles.top,
          backgroundColor: "#65D9D5",
        }}
      >
        <SafeAreaView style={styles.topinfo}>
          <Image source={userData.profileImg} style={styles.profilepic}></Image>
          <View style={styles.name}>
            <Text style={{ fontSize: moderateScale(26), fontWeight: "bold" }}>
              {userData.name}
            </Text>
            <Text
              style={{
                fontSize: moderateScale(18),
                paddingTop: horizontalScale(5),
              }}
            >
              {userData.compatible}% Compatible!
            </Text>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.infobar}>
          <View
            style={[
              styles.bar,
              {
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
              },
            ]}
          >
            <Text style={styles.bartext}>{userData.age}</Text>
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
            <Text style={[styles.bartext, { paddingRight: 20 }]}>
              {userData.gender}
            </Text>
          </View>
          <View
            style={[
              styles.bar,
              {
                borderBottomEndRadius: 5,
                borderTopEndRadius: 5,
                marginLeft: -6,
              },
            ]}
          >
            <Text style={styles.bartext}>{userData.location}</Text>
          </View>
        </View>
        <View style={styles.slideshows}>
          <View style={styles.picslide}>
            <Text style={styles.pictext}>Gallery</Text>
            <ImageSlider
              images={userData.images}
              reactFn={handleReactFNImage}
              isProfile={false}
              color={"#65D9D5"}
            />
          </View>
          <View style={styles.picslide}>
            <Text style={styles.pictext}>Prompts</Text>
            <PromptSlider
              prompts={userData.prompts}
              reactFn={handleReactFN}
              isProfile={false}
              color={"#65D9D5"}
            />
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={msgVisible}
          onRequestClose={() => {
            isMsgVisible(!msgVisible);
          }}
        >
          <MessagePrompt
            isMsgVisible={isMsgVisible}
            setUnmatchVisible={setConfirmationVisible}
            prompt={userData.prompts[reactedPromp][0]}
            answer={userData.prompts[reactedPromp][1]}
            isAPrompt={isPrompt}
            image={userData.images[reactedImage]}
          />
        </Modal>

        <Popup
          isVisible={confirmationVisible}
          handlePress={handleConfirmPress}
          options={["Confirm"]}
          text={reactionText}
        ></Popup>
        <View style={{ height: 80, width: "100%" }}></View>
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
    height: horizontalScale(45),
    width: horizontalScale(45),
    top: horizontalScale(45),
    right: verticalScale(16),
    zIndex: 20,
    borderRadius: 30
  },
  whiteX: {
    position: "absolute",
    height: horizontalScale(30),
    width: horizontalScale(30),
    backgroundColor: "white",
    top: horizontalScale(49),
    right: verticalScale(27),
    borderRadius: 50,
    zIndex: 19,
  },
  top: {
    backgroundColor: "#65D9D5",
    height: horizontalScale(145),
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
    height: horizontalScale(85),
    width: horizontalScale(85),
    borderRadius: horizontalScale(90) / 2,
  },
  name: {
    flex: 1,
    alignItems: "left",
    marginLeft: "6%",
  },
  scroll: {
    flex: 1,
    paddingTop: horizontalScale(15),
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
    borderWidth: horizontalScale(0.5),
  },
  bartext: {
    fontSize: moderateScale(18),
    paddingTop: horizontalScale(5),
    paddingBottom: horizontalScale(5),
    paddingLeft: verticalScale(15),
    paddingRight: verticalScale(15),
  },
  slideshows: {
    flex: 1,
  },
  picslide: {
    flex: 0.5,
  },
  pictext: {
    paddingLeft: "7%",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    paddingBottom: horizontalScale(10),
    paddingTop: horizontalScale(15),
  },
  text: {
    textAlign: "center",
    paddingVertical: verticalScale(5),
    fontSize: moderateScale(16),
  },
});
