import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignUpScreen = () => {
  return (
    <View style={styles.defaultStyle}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
