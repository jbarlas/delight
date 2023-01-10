import { React, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Settings from "./views/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  const [matched, setMatched] = useState(false);
  return (
    <>
      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
              ? 'settings'
              : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: "#53ABBB",
          tabBarInactiveBackgroundColor: "#65D9D5",
          headerShown: false
        })}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Profile" component={Profile} initialParams={{matched: matched}}/>
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}
