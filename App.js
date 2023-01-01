import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button, Keyboard, KeyboardAvoidingView } from "react-native";
import { BottomSheet } from '@rneui/themed';
import Popup from './src/components/Popup.jsx'
import MessagePrompt from './src/components/MessagePrompt.jsx'

export default function App() {
  const [unmatchVisible, setUnmatchVisible] = useState(false);
  const [hasUnmatched, setHasUnmatched] = useState(false);

  const [msgVisible, isMsgVisible] = useState(false);

  const buttonPress = () => {
    setUnmatchVisible(!unmatchVisible);
    console.log(unmatchVisible);
  }

  const handleUnmatching = (value) => {
    if (value == 0) {
      setHasUnmatched(true)
      console.log("yes");
    } else {
      console.log("no")
    }
    setUnmatchVisible(false);
  }

  return (
    <View style={styles.container}>
      {/* <Image source={require("./assets/DelightLogo.png")}></Image>
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
        onPress={buttonPress}
        title="Create"
        color="#841584"
        accessibilityLabel="create account"
      /> */}
       <MessagePrompt />
      

      <Popup isVisible={unmatchVisible} handlePress={handleUnmatching} options={['Confirm']} text={text2}></Popup>
      {/* <Popup isVisible={unmatchVisible} handlePress={handleUnmatching} options={['Yes', 'No']} text={text}></Popup> */}
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
  text: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 16,
  },
});


const text =
  <Text style={styles.text}>
    Are you sure this person is not
    <Text style={{ fontWeight: 'bold' }}> the one </Text>
    for you?
  </Text>

const text2 =
  <View>
    <Text style={{ ...styles.text, fontWeight: 'bold' }}>Reaction Sent!</Text>
    <Text style={styles.text}>You will be matched if Jeff reacts to your profile too!</Text>
  </View>