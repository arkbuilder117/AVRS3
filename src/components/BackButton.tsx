import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BackButton = (props: {
  backPress: (value?: React.SetStateAction<string>) => void;
  args?: string;
}) => {
  return (
    <View>
      <Pressable
        style={({pressed}) => [styles.button, pressed ? {opacity: 0.8} : {}]}
        onPress={() => props.backPress(props.args)}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    backgroundColor: '#377888',
  },
});
