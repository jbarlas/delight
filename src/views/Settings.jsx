import { React } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import settingsData from "../components/settings-data.json"
import { createStackNavigator } from "@react-navigation/stack";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../components/Metrics";

const Stack = createStackNavigator();

export default function SettingsPage({ route }) {
  const matched = route.params.matched;
  return (
    <View style={styles.container}>
      <View style={{...styles.top, backgroundColor: (matched ? "#F6BCD4" : "#65D9D5")}}>
        <SafeAreaView style={styles.topinfo}>
          <Text style={styles.name}>
            Settings
          </Text>
        </SafeAreaView>
        <View>
        </View>
      </View>
      {settingsData.map((item) =>
        <View key ={item.iconName} style={styles.row}>
          <View style={styles.mainContent}>
            <Ionicons name={item.iconName} color={matched ? "#DC8EAE" : "#53ABBB"} size={horizontalScale(40)}></Ionicons>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
          <Ionicons name="ios-chevron-forward" color="black" size={horizontalScale(30)}></Ionicons>
        </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    backgroundColor: "#65D9D5",
    height: horizontalScale(150),
    width: "100%",
    borderBottomWidth: horizontalScale(1.5),
  },
  topinfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    flex: 1,
    alignItems: "left",
    marginLeft: "8%",
    fontSize: moderateScale(30),
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: verticalScale(15),
    paddingRight: verticalScale(30),
    paddingVertical: verticalScale(12),
    borderBottomWidth: horizontalScale(1.5),
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  itemText: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    paddingHorizontal: horizontalScale(20),
  }
});