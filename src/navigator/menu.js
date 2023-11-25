import Dashboard from '../screens/DashboardScreen/Dashboard'
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchHistory from '../screens/DashboardScreen/SearchHist';

export default function Menu() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home' headerShown={false}>
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{ unmountOnBlur: true, headerShown: false }} />

      <Stack.Screen
        name="SearchHistory"
        component={SearchHistory}
        options={{ unmountOnBlur: true, headerShown: false }} />
    </Stack.Navigator>
  );
}