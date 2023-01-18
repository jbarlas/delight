import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  View,
  Image,
} from "react-native";
import { Card, Button as IconButton } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "./Metrics";

export default function Popup(props) {
  const handleReactionSent = () => {
    props.setUnmatchVisible(true);
    props.isMsgVisible(false);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Ionicons
        onPress={() => props.isMsgVisible(false)}
        name="close-circle-outline"
        color="black"
        size={horizontalScale(40)}
        style={styles.xbutton}
      ></Ionicons>
      <View ></View>
      <View>
        <Card containerStyle={{ marginBottom: horizontalScale(15), width: verticalScale(225) }}>
          {props.isAPrompt === true ? (
            <View>
              <Card.Title>{props.prompt}</Card.Title>
              <Card.Divider />
              <Text>{props.answer}</Text>
            </View>
          ) : (
            <Image style={styles.picture} source={props.image} />
          )}
        </Card>
        <View style={styles.messaging}>
          <IconButton
            onPress={handleReactionSent}
            icon={<Ionicons name="send" color="black" size={horizontalScale(20)}></Ionicons>}
            color="rgba(240, 242, 246, 0)"
          />
          <TextInput
            autoFocus={true}
            style={{ ...styles.input, width: "80%" }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  messaging: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(240, 242, 246, 0.95)",
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(240, 242, 246, 0.8)",
    alignItems: "center",
    bottom: 0,
  },
  input: {
    borderWidth: 1,
    width: verticalScale(200),
    backgroundColor: "white",
    paddingBottom: horizontalScale(5),
    paddingRight: verticalScale(5),
    paddingLeft: verticalScale(5),
    paddingTop: horizontalScale(5),
    marginBottom: horizontalScale(15),
    marginTop: horizontalScale(15),
    marginRight: verticalScale(15),
    marginLeft: verticalScale(15)
  },
  xbutton: {
    position: "absolute",
    height: horizontalScale(45),
    width: horizontalScale(45),
    top: horizontalScale(44),
    right: verticalScale(15),
  },
  picture: {
    resizeMode: "cover",
    aspectRatio: 2 / 1,
    height: horizontalScale(120),
    paddingBottom: horizontalScale(-5),
    paddingRight: verticalScale(-5),
    paddingLeft: verticalScale(-5),
    paddingTop: horizontalScale(-5),
    marginBottom: horizontalScale(-15),
    marginTop: horizontalScale(-15),
    marginRight: verticalScale(-15),
    marginLeft: verticalScale(-15)
  },
});
