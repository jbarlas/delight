import { React, useState } from "react";
import { Image, View, StyleSheet, Button } from "react-native";

const ImageSlider = (props) => {
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

  return (
    <View style={styles.slideshow}>
      <Button
        title="<"
        onPress={prevArrow}
        disabled={image === 0 ? true : false}
      />
      {prevImage === -1 ? (
        <></>
      ) : (
        <Image
          style={[styles.swipepics, { marginRight: -180 }]}
          source={{ uri: images[prevImage] }}
        />
      )}
      <Image style={styles.slideshowpics} source={{ uri: images[image] }} />
      {nextImage === length ? (
        <></>
      ) : (
        <Image
          style={[styles.swipepics, { marginLeft: -180 }]}
          source={{ uri: images[nextImage] }}
        />
      )}
      <Button
        title=">"
        onPress={nextArrow}
        disabled={image === length - 1 ? true : false}
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
    resizeMode: "contain",
    zIndex: 50,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  swipepics: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  button: {
    fontSize: 20,
  },
});

export default ImageSlider;
