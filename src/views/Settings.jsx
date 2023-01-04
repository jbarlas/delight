import { React } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import settingsData from "../components/settings-data.json"

export default function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={{...styles.top, backgroundColor: (props.matched ? "#F6BCD4" : "#65D9D5")}}>
        <SafeAreaView style={styles.topinfo}>
          <Text style={styles.name}>
            Settings
          </Text>
        </SafeAreaView>
        <View>
        </View>
      </View>
      {settingsData.map((item) =>
        <View style={styles.row}>
          <View style={styles.mainContent}>
            <Ionicons name={item.iconName} color={props.matched ? "#DC8EAE" : "#53ABBB"} size={40}></Ionicons>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
          <Ionicons name="ios-chevron-forward" color="black" size={30}></Ionicons>
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
    height: 150,
    width: "100%",
    borderBottomWidth: 1.5,
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
    fontSize: 30,
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: 12,
    borderBottomWidth: 1.5,
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  itemText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
  }
});