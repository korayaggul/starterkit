import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Detail } from './screens';
import { navigationRef, isMountedRef } from '../navigation/rootNavigation';


const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    
     
        <SafeAreaView style={styles.safeAreaView}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="home" headerMode="none">
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="detail" component={Detail} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
