import React from 'react';

import { StyleSheet, Text, View, Image, Button } from 'react-native';

import * as Google from 'expo-auth-session/providers/google';


function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '794785542197-jckhmr84ba4bmh2lrc27prm027cqu7q6.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log(response);
      navigation.navigate("Home", { auth: response.authentication })
    }
  }, [response]);

  return (

    <View style={{  }}>
      <Image source={require('./icon.jpeg')}style={{ position: 'absolute', width: 500, height: 900, zIndex: -1, }} />
      
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
 
});