import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MeetingRoom from './android/screens/MeetingRoom';
import Home from './android/screens/home';

function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>{
      <Stack.Navigator initialRouteName  = {Home}>

    
          <Stack.Screen
          name = "Home"
          component = {Home}
          options={{
              headerShown: false
          }}
          />
           <Stack.Screen
          name = "Room"
          component = {MeetingRoom}
          options={{
              title:"Start a Meeting",
              headerStyle:{
                  backgroundColor:"#1c1c1c",
                  shadowOpacity:0
              },
              headerTintColor:"white",
              
           
        }}
          />
      </Stack.Navigator>
}
    </NavigationContainer>
        
    );
}

export default Navigation
