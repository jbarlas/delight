import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';


export default function Profile({ route }) {
  return (
    <>
    <View style={styles.view}>
      <Text>
        {route.params.text}
      </Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  view: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})