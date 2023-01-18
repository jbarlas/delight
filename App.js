import { React, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableWithoutFeedback, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Matches from "./src/views/Matches";
import Profile from "./src/views/Profile";
import Settings from "./src/views/Settings";
import CoupleProfile from "./src/views/CoupleProfile";
import Messaging from "./src/views/Messaging";
import AMatch from "./src/views/AMatch";
import Unmatch from "./src/views/Unmatch";
import { createStackNavigator } from "@react-navigation/stack";
import { ChaChaData, JeffData } from "./src/components/UserData";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "./src/components/Metrics";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen
            name="Home-Unmatched"
            component={UnmatchedNavBar}
            initialParams={{ userData: JeffData }}
          />
          <Stack.Screen name="Home-Matched" component={MatchedNavBar} />
          <Stack.Screen name="Match" component={AMatch} />
          <Stack.Screen name="Unmatch" component={Unmatch} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function MatchedNavBar() {
  const CustomButton = ({ children, onPress }) => (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          top: horizontalScale(-30),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: verticalScale(90),
            width: verticalScale(90),
            borderRadius: verticalScale(90) / 2,
            backgroundColor: "#F0F2F6",
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <Tab.Navigator
      initialRouteName="Messaging"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#F6BCD4",
          height: horizontalScale(80),
          borderTopWidth: 1,
          borderTopColor: "black",
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let size;
          let color;

          if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            size = horizontalScale(35);
            color = focused ? "black" : "grey";
          } else if (route.name === "CoupleProfile") {
            iconName = focused ? "people" : "people-outline";
            size = horizontalScale(35);
            color = focused ? "black" : "grey";
          } else if (route.name === "Messaging") {
            iconName = "chatbox-ellipses";
            size = horizontalScale(57);
            color = focused ? "#F6BCD4" : "gray";
          } else {
            color = "white";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="CoupleProfile" component={CoupleProfile} />
      <Tab.Screen
        name="Messaging"
        options={{
          tabBarButton: (props) => <CustomButton {...props} />,
        }}
        component={Messaging}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        initialParams={{ matched: true }}
      />
    </Tab.Navigator>
  );
}

function UnmatchedNavBar() {
  const CustomButton = ({ children, onPress }) => (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          top: horizontalScale(-30),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: verticalScale(90),
            width: verticalScale(90),
            borderRadius: verticalScale(90) / 2,
            backgroundColor: "#F0F2F6",
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <Tab.Navigator
      initialRouteName="Matches"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#65D9D5",
          height: horizontalScale(80),
          borderTopWidth: 1,
          borderTopColor: "black",
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let size;
          let color;

          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            size = horizontalScale(35);
            color = focused ? "black" : "grey";
          } else if (route.name === "Matches") {
            iconName = "heart";
            size = horizontalScale(57);
            color = focused ? "#65D9D5" : "gray";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            size = horizontalScale(35);
            color = focused ? "black" : "grey";
          } else {
            color = "white";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ userData: ChaChaData }}
      />
      <Tab.Screen
        name="Matches"
        options={{
          tabBarButton: (props) => <CustomButton {...props} />,
        }}
        component={Matches}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        initialParams={{ matched: false }}
      />
    </Tab.Navigator>
  );
}
