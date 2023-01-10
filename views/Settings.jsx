import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Settings() {
  return (
    <>
      <View style={styles.view}>
        <Text>Settings placeholder</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: "center", alignItems: "center" },
});
