import React from 'react';
import {ColorValue, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../assets/images/components/Home';
import Header from '../components/Header';

// Hook for theme change (Light/Dark Mode)
import {useTheme} from '../theme/useTheme';

// Screens
import ImageListView from '../screens/ImageListView';
import ImageView from '../screens/ImageView';

// Icons for Bottom Tab Navigation
const homeIcon = ({color}: {color: ColorValue | number}) => (
  <>
    <Home name="list-sharp" size={30} color={color} />
    <Text style={{color}}>Home</Text>
  </>
);

// Root Navigation
const Tab = createBottomTabNavigator();
const TaskStack = createStackNavigator();

const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="ImageList"
        component={ImageListView}
        options={({navigation}) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
      <TaskStack.Screen
        name="ImageView"
        component={ImageView}
        options={({navigation}) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
    </TaskStack.Navigator>
  );
};

export default function RootNavigation() {
  const {theme} = useTheme();

  return (
    <NavigationContainer>
      {/* {user.token ? ( */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.cardBg,
            borderTopColor: theme?.layoutBg,
            height: 90,
            borderTopWidth: 0,
            paddingBottom: 0,
          },
          tabBarInactiveTintColor: theme.color,
          tabBarActiveTintColor: theme.primary,
          headerStyle: {backgroundColor: 'red', height: 60},
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Tasks"
          component={TaskStackScreen}
          options={{
            tabBarIcon: homeIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
