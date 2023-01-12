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
  Button,
  Modal,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Popup from "../components/Popup.jsx";
import MessagePrompt from "../components/MessagePrompt.jsx";

const Stack = createStackNavigator();

export default function Profile({ route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="user"
        component={ProfilePage}
        initialParams={{
          userData: JeffData,
          matched: route.params.matched,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfilePage({ route, navigation }) {
  const userData = route.params.userData;
  const [matched, setMatched] = useState(route.params.matched);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [msgVisible, isMsgVisible] = useState(false);

  const toggleMatched = () => {
    setMatched(!matched);

    // this does nothing but we need to do something like this i think
    navigation.setOptions("Root", { matched: !matched });
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
      <View
        style={{
          ...styles.top,
          backgroundColor: matched ? "#F6BCD4" : "#65D9D5",
        }}
      >
        <SafeAreaView style={styles.topinfo}>
          <TouchableOpacity
            onPress={() =>
              navigation.push("user", {
                userData: userData == JeffData ? AnikaData : JeffData,
              })
            }
          >
            <Ionicons
              name="close-circle-outline"
              size={40}
              color={"black"}
              backgroundColor={"black"}
              style={styles.xbutton}
            ></Ionicons>
          </TouchableOpacity>
          <Image source={userData.profileImg} style={styles.profilepic}></Image>
          <View style={styles.name}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>
              {userData.name}
            </Text>
            <Text style={{ fontSize: 18, paddingTop: 5 }}>
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
              { borderBottomLeftRadius: 5, borderTopLeftRadius: 5 },
            ]}
          >
            <Text style={styles.bartext}>{userData.age}</Text>
          </View>
          <View
            style={[
              styles.bar,
              {
                marginLeft: -1,
              },
            ]}
          >
            <Text style={[styles.bartext]}>{userData.gender}</Text>
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
            <Text style={styles.bartext}>{userData.location}</Text>
          </View>
        </View>
        <View style={styles.slideshows}>
          <View style={styles.picslide}>
            <Text style={styles.pictext}>Gallery</Text>
            <ImageSlider images={userData.images} />
          </View>
          <View style={styles.picslide}>
            <Text style={styles.pictext}>Prompts</Text>
            <PromptSlider
              prompts={userData.prompts}
              reactFn={() => isMsgVisible(!msgVisible)}
            />
          </View>
        </View>
        <Button title="Toggle Match" onPress={toggleMatched}></Button>
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
            prompt={userData.prompts[0][0]}
            answer={userData.prompts[0][1]}
          />
        </Modal>

        <Popup
          isVisible={confirmationVisible}
          handlePress={() => setConfirmationVisible(!confirmationVisible)}
          options={["Confirm"]}
          text={reactionText}
        ></Popup>
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
    top: -50,
    left: 330,
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
    paddingLeft: "7%",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 15,
  },
  text: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 16,
  },
});
