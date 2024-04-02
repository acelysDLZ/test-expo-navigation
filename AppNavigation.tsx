import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksList from './src/pages/TasksList';
import RecipesList from './src/pages/RecipesList';
import RecipeDetail from './src/pages/RecipeDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const RecipesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='RecipesList' component={RecipesList}/>
      <Stack.Screen name='RecipeDetail' component={RecipeDetail}/>
    </Stack.Navigator>
  );
}

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>
          <Tabs.Screen name="Recettes" component={RecipesStack}/>
          <Tabs.Screen name="Liste de tâches" component={TasksList}/>
      </Tabs.Navigator>
    </NavigationContainer>
  )
};



export default AppNavigationContainer;