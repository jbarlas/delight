import { React, useState } from "react";
import ImageSlider from "../components/imageSlider";
import PromptSlider from "../components/promptSlider";
import { ChaChaData, AnotherUser } from "../components/UserData";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Modal,
  Pressable
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Popup from '../components/Popup.jsx'
import MessagePrompt from '../components/MessagePrompt.jsx'

const Stack = createStackNavigator();

export default function Profile({ route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="user"
        component={ProfilePage}
        initialParams={{
          userData: ChaChaData,
          matched: route.params.matched,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfilePage({ route, navigation }) {
  const userData = route.params.userData;
  const [matched, setMatched] = useState(route.params.matched)
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [msgVisible, isMsgVisible] = useState(false);

  const toggleMatched = () => {
    setMatched(!matched);

    // this does nothing but we need to do something like this i think
    navigation.setOptions("Root", {matched: !matched})
  }

  const reactionText =
  <View>
    <Text style={{ ...styles.text, fontWeight: 'bold' }}>Reaction Sent!</Text>
    <Text style={styles.text}>You will be matched if {userData.name} reacts to your profile too!</Text>
  </View>

  return (
    <View style={styles.container}>
      <View style={{...styles.top, backgroundColor: matched ? "#F6BCD4" : "#65D9D5"}}>
        <SafeAreaView style={styles.topinfo}>
          <TouchableOpacity
            onPress={() =>
              navigation.push("user", {
                userData: userData == ChaChaData ? AnotherUser : ChaChaData,
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
          <Image
            source={{
              uri: userData.profileImg,
            }}
            style={styles.profilepic}
          ></Image>
          <View style={styles.name}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {userData.name}
            </Text>
            <Text style={{ fontSize: 16, paddingTop: 5 }}>
              {userData.compatible}% Compatible!
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
            { borderBottomEndRadius: 5, borderTopEndRadius: 5, marginLeft: -1 },
          ]}
        >
          <Text style={styles.bartext}>{userData.location}</Text>
        </View>
      </View>
      <View style={styles.slideshows}>
        <View style={styles.picslide}>
          <Text style={[styles.pictext, { marginBottom: -20 }]}>Gallery</Text>
          <ImageSlider images={userData.images} />
        </View>
        <View style={styles.picslide}>
          <Text style={styles.pictext}>Prompts</Text>
          <PromptSlider prompts={userData.prompts} reactFn={() => isMsgVisible(!msgVisible)}/>

          
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
        <MessagePrompt isMsgVisible={isMsgVisible} setUnmatchVisible={setConfirmationVisible} prompt={userData.prompts[0][0]} answer={userData.prompts[0][1]}/>
      </Modal>

      <Popup isVisible={confirmationVisible} handlePress={() => setConfirmationVisible(!confirmationVisible)} options={['Confirm']} text={reactionText}></Popup>
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
    left: 310,
  },
  top: {
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
  text: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 16,
  },
});