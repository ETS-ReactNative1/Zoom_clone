import { StatusBar } from 'expo-status-bar';
import React, { useEffect }from 'react';
import Home from './android/screens/home';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navigation from './Navigation';
export default function App() {
  return<Navigation/>


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
   