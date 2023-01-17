import { React, useState } from "react";
import { Image, View, StyleSheet, Button, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageSlider = (props) => {
  const color = props.color;
  const images = props.images;
  const length = images.length;
  const [image, setImage] = useState(0);
  const [prevImage, setPrevImage] = useState(-1);
  const [nextImage, setNextImage] = useState(1);
  const prevArrow = () => {
    if (image !== 0) {
      setNextImage(image);
      setImage(image - 1);
      setPrevImage(image - 2);
    }
  };
  const nextArrow = () => {
    if (image !== length - 1) {
      setPrevImage(image);
      setImage(image + 1);
      setNextImage(image + 2);
    }
  };

  const handlePress = () => {
    if (!props.isProfile) {
      props.reactFn(image);
    }
  };

  return (
    <View style={styles.slideshow}>
      <Pressable onPress={prevArrow} style={styles.menuLeft}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={40}
          color={prevImage === -1 ? "lightgrey" : color}
        />
      </Pressable>
      {prevImage === -1 ? (
        <Image
          style={[styles.swipepics, { marginRight: -185, opacity: 0 }]}
          source={images[prevImage]}
        />
      ) : (
        <Image
          style={[styles.swipepics, { marginRight: -185 }]}
          source={images[prevImage]}
        />
      )}
      <View style={styles.slideshowpics}>
        <Pressable onPress={handlePress} style={{ height: "100%", zIndex: 10 }}>
          <Image style={styles.slideshowpics} source={images[image]} />
        </Pressable>
      </View>
      {nextImage === length ? (
        <Image
          style={[styles.swipepics, { marginLeft: -185, opacity: 0 }]}
          source={images[nextImage]}
        />
      ) : (
        <Image
          style={[styles.swipepics, { marginLeft: -185 }]}
          source={images[nextImage]}
        />
      )}
      <Pressable onPress={nextArrow} style={styles.menuRight}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={40}
          color={nextImage === length ? "lightgrey" : color}
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
    resizeMode: "cover",
    zIndex: 50,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuLeft: {
    marginRight: -10,
  },
  menuRight: {
    marginLeft: -10,
  },
  swipepics: {
    width: 200,
    height: 150,
    resizeMode: "cover",
  },
  button: {
    fontSize: 20,
  },
});

export default ImageSlider;
