import { Ionicons } from "@expo/vector-icons";

export const TAB_ICONS = {
  Restaurants: (focused) =>
    focused ? "ios-restaurant" : "ios-restaurant-outline",
  Map: (focused) => (focused ? "md-map" : "md-map-outline"),
  Settings: (focused) => (focused ? "ios-settings" : "ios-settings-outline"),
};

export const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => (
    <Ionicons name={TAB_ICONS[route.name](focused)} size={size} color={color} />
  ),
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});
