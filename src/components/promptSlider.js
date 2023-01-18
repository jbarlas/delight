import { React, useState } from "react";
import { View, StyleSheet, Button, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { horizontalScale, moderateScale, verticalScale } from "./Metrics";

const PromptSlider = (props) => {
  const color = props.color;
  const prompts = props.prompts;
  const length = prompts.length;
  const [prompt, setPrompt] = useState(0);
  const [prevPrompt, setPrevPrompt] = useState(-1);
  const [nextPrompt, setNextPrompt] = useState(1);
  const prevArrow = () => {
    if (prompt !== 0) {
      setNextPrompt(prompt);
      setPrompt(prompt - 1);
      setPrevPrompt(prompt - 2);
    }
  };
  const nextArrow = () => {
    if (prompt !== length - 1) {
      setPrevPrompt(prompt);
      setPrompt(prompt + 1);
      setNextPrompt(prompt + 2);
    }
  };

  const handlePress = () => {
    if (!props.isProfile) {
      props.reactFn(prompt);
    }
  };

  return (
    <View style={styles.slideshow}>
      <Pressable onPress={prevArrow} style={styles.menuLeft}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={horizontalScale(40)}
          color={prevPrompt === -1 ? "lightgrey" : color}
        />
      </Pressable>
      {prevPrompt === -1 ? (
        <View
          style={[
            styles.swipepics,
            { marginRight: verticalScale(-185), opacity: 0 },
          ]}
        />
      ) : (
        <View
          style={[styles.swipepics, { marginRight: verticalScale(-185) }]}
        />
      )}

      <View style={styles.slideshowpics}>
        <Pressable onPress={handlePress} style={{ height: "100%" }}>
          <Text style={styles.prompthead}>{prompts[prompt][0]}</Text>
          <Text style={styles.promptbody}>{prompts[prompt][1]}</Text>
        </Pressable>
      </View>

      {nextPrompt === length ? (
        <View
          style={[
            styles.swipepics,
            { marginLeft: verticalScale(-185), opacity: 0 },
          ]}
        />
      ) : (
        <View style={[styles.swipepics, { marginLeft: verticalScale(-185) }]} />
      )}
      <Pressable onPress={nextArrow} style={styles.menuRight}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={horizontalScale(40)}
          color={nextPrompt === length ? "lightgrey" : color}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  slideshow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  slideshowpics: {
    aspectRatio: 3 / 2,
    height: horizontalScale(190),
    zIndex: 50,
    backgroundColor: "#F0F2F6",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  swipepics: {
    width: verticalScale(200),
    height: horizontalScale(150),
    backgroundColor: "#F0F2F6",
  },
  menuLeft: {
    marginRight: verticalScale(-10),
  },
  menuRight: {
    marginLeft: verticalScale(-10),
  },
  prompthead: {
    fontSize: moderateScale(20),
    paddingTop: horizontalScale(5),
    marginLeft: verticalScale(10),
    marginRight: verticalScale(10),
    fontWeight: "bold",
  },
  promptbody: {
    fontSize: moderateScale(18),
    paddingTop: horizontalScale(5),
    marginLeft: verticalScale(10),
    marginRight: verticalScale(10),
  },
});

export default PromptSlider;
