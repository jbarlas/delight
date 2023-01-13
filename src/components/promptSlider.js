import { React, useState } from "react";
import { View, StyleSheet, Button, Text, Pressable } from "react-native";

const PromptSlider = (props) => {
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
      <Button
        title="<"
        onPress={prevArrow}
        disabled={prompt === 0 ? true : false}
      />
      {prevPrompt === -1 ? (
        <></>
      ) : (
        <View style={[styles.swipepics, { marginRight: -180 }]} />
      )}

      <View style={styles.slideshowpics}>
        <Pressable onPress={handlePress} style={{ height: "100%" }}>
          <Text style={styles.prompthead}>{prompts[prompt][0]}</Text>
          <Text style={styles.promptbody}>{prompts[prompt][1]}</Text>
        </Pressable>
      </View>

      {nextPrompt === length ? (
        <></>
      ) : (
        <View style={[styles.swipepics, { marginLeft: -180 }]} />
      )}
      <Button
        title=">"
        onPress={nextArrow}
        disabled={prompt === length - 1 ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slideshow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  prompthead: {
    fontSize: 20,
    paddingTop: 5,
    paddingLeft: 8,
    paddingRight: 5,
    fontWeight: "bold",
  },
  promptbody: {
    fontSize: 18,
    paddingTop: 5,
    paddingLeft: 8,
    paddingRight: 5,
  },
  button: {
    fontSize: 20,
  },
});

export default PromptSlider;
