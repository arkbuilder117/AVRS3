import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SignInScreen = () => {
  return (
    <View style={styles.defaultStyle}>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
