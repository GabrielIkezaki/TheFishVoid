import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./routes";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes/> 
      {/* <Text>DJASIODJOSIADJIOASIODJASIODJA</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
