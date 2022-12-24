import { React } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button  } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/DelightLogo.png")}></Image>
      <Text>Delight</Text>
      <Text>Find the one for you</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={input}
        placeholder="Full Name"
        // keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={input}
        placeholder="Email"
        // keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={input}
        placeholder="Password"
        // keyboardType="numeric"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={input}
        placeholder="Confirm Password"
        // keyboardType="numeric"
        secureTextEntry={true}
      />
      <Button
        onPress={() => console.log("pressed button")}
        title="Create"
        color="#841584"
        accessibilityLabel="create account"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 5,
    margin: 15,
  },
  createAccountButton: {
    height: 36,
    width: 90,
  },
});
