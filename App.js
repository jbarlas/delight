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

const Tab = createBottomTabNavigator();

export default function App() {
  const [matched, setMatched] = useState(false);
  const onPressFunc = () => {
    setMatched((matched) => !matched);
  };

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
    <>
      <NavigationContainer>
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
            initialParams={{ matched: matched }}
          />
          <Tab.Screen
            name={matched ? "Messaging" : "Matches"}
            options={{
              tabBarButton: (props) => <CustomButton {...props} />,
            }}
            component={matched ? Messaging : Matches}
            initialParams={{ matched: matched }}
            // initialParams={{ setMatched: onPressFunc }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            initialParams={{ matched: matched }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
