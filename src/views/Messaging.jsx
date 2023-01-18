import { React, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Card, Button as IconButton } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import AnikaProfile from "../../assets/anika_profile.jpeg";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../components/Metrics";

export default function Messaging() {
  const scrollViewRef = useRef(null);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.top}>
          <SafeAreaView style={styles.topinfo}>
            <Image source={AnikaProfile} style={styles.profilepic}></Image>
            <View style={styles.name}>
              <Text style={{ fontSize: moderateScale(26), fontWeight: "bold" }}>
                Anika Ahluwalia
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(18),
                  paddingTop: horizontalScale(5),
                }}
              >
                99% Compatible!
              </Text>
            </View>
          </SafeAreaView>
        </View>
        <KeyboardAvoidingView
          style={styles.mainContent}
          keyboardVerticalOffset={horizontalScale(-50)}
          behavior={"position"}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
              ref={scrollViewRef}
              onContentSizeChange={() => {
                scrollViewRef.current?.scrollToEnd();
              }}
            >
              <View style={styles.rightMsg}>
                <Card containerStyle={{ width: verticalScale(240) }}>
                  <Card.Title>The biggest red flag I avoid is...</Card.Title>
                  <Text style={{ marginBottom: horizontalScale(15) }}>
                    Men who are software engineers
                  </Text>
                  <Card.Divider />
                  <Text>Good thing I dropped my intro CS class!!</Text>
                </Card>
              </View>

              <Card containerStyle={{ width: verticalScale(230) }}>
                <Card.Title>My shower thoughts are....</Card.Title>
                <Text style={{ marginBottom: horizontalScale(15) }}>
                  In the worm world, the early worm gets eaten :P
                </Text>
                <Card.Divider />
                <Text>um, ok</Text>
              </Card>
              <View style={styles.rightMsg}>
                <Card containerStyle={{ width: verticalScale(180) }}>
                  <Text>Hello! So excited {":)"}</Text>
                </Card>
              </View>
            </ScrollView>
            <View style={styles.messaging}>
              <IconButton
                onPress={() => console.log("sent")}
                icon={
                  <Ionicons
                    name="send"
                    color="black"
                    size={horizontalScale(20)}
                  ></Ionicons>
                }
                color="rgba(240, 242, 246, 0)"
              />
              <TextInput
                style={{ ...styles.input, width: "80%" }}
                placeholder="Message Anika..."
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    backgroundColor: "#F6BCD4",
    height: horizontalScale(145),
    width: "100%",
    borderBottomWidth: 1.5,
    zIndex: 3,
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
    borderRadius: horizontalScale(85) / 2,
  },
  name: {
    flex: 1,
    alignItems: "left",
    marginLeft: "8%",
  },
  messaging: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(50),
  },
  input: {
    borderWidth: 1,
    width: verticalScale(200),
    padding: horizontalScale(5),
    margin: horizontalScale(15),
    backgroundColor: "rgba(240, 242, 246, 0.95)",
  },
  mainContent: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
  },
  rightMsg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
