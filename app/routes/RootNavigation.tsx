/**
 * This is a Navigation file which is wired already with Bottom Tab Navigation.
 * If you don't like it, feel free to replace with your own setup.
 * Uncomment commented lines from return() of RootNavigation to wire Login flow
 */
import React, {useEffect} from 'react';
import {ColorValue, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import Home from '../assets/images/components/Home';
import Reservation from '../assets/images/components/Reservation';
import Table from '../assets/images/components/Table';
import Help from '../assets/images/components/Help';
// import {useSelector, useDispatch} from 'react-redux';

// Hook for theme change (Light/Dark Mode)
import {useTheme} from '../theme/useTheme';
// Get Value from Keyring (Encrypted token)
import {getSecureValue} from '../utils/keyChain';
// Redux slice for updating Access Token to store
import {updateToken} from '../store/userSlice';

// import {RootState} from '../store/store';

// Screens
// import Login from '../screens/auth/Login';
import Tasks from '../screens/TaskView';
import TaskCreateView from '../screens/TaskCreateView';
import NetworkExample from '../screens/NetworkExample';
import Settings from '../screens/Settings';
import Header from '../components/Header';

// Icons for Bottom Tab Navigation
const homeIcon = ({color}: {color: ColorValue | number}) => (
  <>
    <Home name="list-sharp" size={30} color={color} />
    <Text style={{color}}>Home</Text>
  </>
);

const reservationIcon = ({color}: {color: ColorValue | number}) => (
  <>
    <Reservation name="list-sharp" size={30} color={color} />
    <Text style={{color}}>Reservation</Text>
  </>
);

const tableIcon = ({color}: {color: ColorValue | number}) => (
  <>
    <Table name="list-sharp" size={30} color={color} />
    <Text style={{color}}>Table</Text>
  </>
);

const helpIcon = ({color}: {color: ColorValue | number}) => (
  <>
    <Help name="list-sharp" size={30} color={color} />
    <Text style={{color}}>Help</Text>
  </>
);
const networkIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="wifi-sharp" size={24} color={color} />
);
const settingsIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="settings-sharp" size={24} color={color} />
);

// Root Navigation
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TaskStack = createStackNavigator();

const TaskStackScreen = () => {
  return (
    <TaskStack.Navigator>
      <TaskStack.Screen
        name="TasksList"
        component={Tasks}
        options={({navigation}) => ({
          headerShown: true,
          header: () => (
            <Header
              title="Tasks-1"
              onLeftPress={() => navigation.navigate('TasksList')} // Навігація до Tasks-2
              onRightPress={() => console.log('Pressed Right for Tasks-1')}
            />
          ),
        })}
      />
      <TaskStack.Screen
        name="TasksCreate"
        component={TaskCreateView}
        options={({navigation}) => ({
          headerShown: true,
          header: () => (
            <Header
              title="Tasks-1"
              onLeftPress={() => navigation.navigate('TasksList')} // Навігація до Tasks-2
              onRightPress={() => console.log('Pressed Right for Tasks-1')}
            />
          ),
        })}
      />
    </TaskStack.Navigator>
  );
};

export default function RootNavigation() {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user);

  // Copy existing token from local storage to redux store
  useEffect(() => {
    async function checkIsLogined() {
      try {
        let temp = await getSecureValue('token');
        dispatch(updateToken({token: temp}));
      } catch (e) {}
    }

    checkIsLogined();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {/* {user.token ? ( */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.cardBg,
            borderTopColor: theme?.layoutBg,
            height: 70,
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
        <Tab.Screen
          name="NetworkExample"
          component={NetworkExample}
          options={{
            headerShown: true,
            header: () => (
              <Header
                title=""
                onLeftPress={() => console.log('Pressed Left')}
                onRightPress={() => console.log('Pressed Right')}
              />
            ),
            tabBarIcon: reservationIcon,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: true,
            header: () => (
              <Header
                title=""
                onLeftPress={() => console.log('Pressed Left')}
                onRightPress={() => console.log('Pressed Right')}
              />
            ),
            tabBarIcon: tableIcon,
          }}
        />
        <Tab.Screen
          name="Settings2"
          component={Settings}
          options={{
            headerShown: true,
            header: () => (
              <Header
                title=""
                onLeftPress={() => console.log('Pressed Left')}
                onRightPress={() => console.log('Pressed Right')}
              />
            ),
            tabBarIcon: helpIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
