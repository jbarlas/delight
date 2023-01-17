import { React, useState } from "react";
import { View, StyleSheet, Button, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          size={40}
          color={prevPrompt === -1 ? "lightgrey" : color}
        />
      </Pressable>
      {prevPrompt === -1 ? (
        <View style={[styles.swipepics, { marginRight: -185, opacity: 0 }]} />
      ) : (
        <View style={[styles.swipepics, { marginRight: -185 }]} />
      )}

      <View style={styles.slideshowpics}>
        <Pressable onPress={handlePress} style={{ height: "100%" }}>
          <Text style={styles.prompthead}>{prompts[prompt][0]}</Text>
          <Text style={styles.promptbody}>{prompts[prompt][1]}</Text>
        </Pressable>
      </View>

      {nextPrompt === length ? (
        <View style={[styles.swipepics, { marginLeft: -185, opacity: 0 }]} />
      ) : (
        <View style={[styles.swipepics, { marginLeft: -185 }]} />
      )}
      <Pressable onPress={nextArrow} style={styles.menuRight}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={40}
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
    width: 300,
    height: 200,
    zIndex: 50,
    backgroundColor: "#F0F2F6",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  swipepics: {
    width: 200,
    height: 150,
    backgroundColor: "#F0F2F6",
  },
  menuLeft: {
    marginRight: -10,
  },
  menuRight: {
    marginLeft: -10,
  },
  prompthead: {
    fontSize: 20,
    paddingTop: 5,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  promptbody: {
    fontSize: 18,
    paddingTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    fontSize: 20,
  },
});

export default PromptSlider;
