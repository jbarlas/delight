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
import { LogBox } from "react-native";
import AMatch from "./src/views/AMatch";
import Unmatch from "./src/views/Unmatch";
import { createStackNavigator } from "@react-navigation/stack";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [matched, setMatched] = useState(false);
  const onPressFunc = () => {
    setMatched((matched) => !matched);
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="Home" component={NavBar} initialParams={{matched: matched, setMatched: setMatched}}/>
          <Stack.Screen name="AMatch" component={AMatch} />
          <Stack.Screen name="Unmatch" component={Unmatch} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function NavBar({route}) {
  const matched = route.params.matched
  const setMatched = route.params.setMatched
  const CustomButton = ({ children, onPress }) => (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          top: -30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 90,
            width: 90,
            borderRadius: 45,
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
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: matched ? "#F6BCD4" : "#65D9D5",
            height: 80,
            borderTopWidth: 1,
            borderTopColor: "black",
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            let size;
            let color;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
              size = 35;
              color = focused ? "black" : "grey";
            } else if (route.name === "Matches") {
              iconName = "heart";
              size = 70;
              color = focused ? "#65D9D5" : "gray";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
              size = 35;
              color = focused ? "black" : "grey";
            } else if (route.name === "CoupleProfile") {
              iconName = focused ? "people" : "people-outline";
              size = 35;
              color = focused ? "black" : "grey";
            } else if (route.name === "Messaging") {
              iconName = "chatbubbles";
              size = 70;
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
        <Tab.Screen
          name={matched ? "CoupleProfile" : "Profile"}
          component={matched ? CoupleProfile : Profile}
          initialParams={{ matched: matched, setMatched: setMatched }}
        />
        <Tab.Screen
          name={matched ? "Messaging" : "Matches"}
          options={{
            tabBarButton: (props) => <CustomButton {...props} />,
          }}
          component={matched ? Messaging : Matches}
          initialParams={{ matched: matched, setMatched: setMatched }}
          // initialParams={{ setMatched: onPressFunc }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          initialParams={{ matched: matched, setMatched: setMatched }}
        />
      </Tab.Navigator>
  );
}
