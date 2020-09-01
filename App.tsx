import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native'

import TaskListScreen from './components/tasks/TaskListScreen.jsx'
import ActivityListScreen from './components/activities/ActivityListScreen.jsx'

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const style = StyleSheet.create({
  bottomTabIcons: {
    color: '#3ea784',
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    fontSize: 24,
    marginBottom: -10
  }
})


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#0d7754',
          style: {
            height: 70
          },
          labelStyle: {
            fontWeight: "bold",
            marginBottom: 10,
            marginTop: 2,
          },
        }}
      >
        <Tab.Screen
          name="Activities"
          component={ActivityListScreen}
          options={{
            tabBarLabel: 'Activities',
            tabBarIcon: () => (
              <FontAwesome5
                name="check-double"
                style={style.bottomTabIcons}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={TaskListScreen}
          options={{
            tabBarLabel: 'Tasks',
            tabBarIcon: () => (
              <FontAwesome5
                name="bath"
                style={style.bottomTabIcons}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Members"
          component={TaskListScreen}
          options={{
            tabBarLabel: 'Members',
            tabBarIcon: () => (
              <FontAwesome5
                name="users"
                style={style.bottomTabIcons}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={TaskListScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5
                name="cogs"
                style={style.bottomTabIcons}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    /*
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Task List">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Task List" component={TaskListScreen} />
      </Drawer.Navigator>
    </NavigationContainer> */
  );
}