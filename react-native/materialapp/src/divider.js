import {StyleSheet, View} from 'react-native';
import React from 'react';

const CustomDivider = () => <View style={styles.divider}></View>;
const styles = StyleSheet.create({
  divider: {
    height: 10,
  },
});

export default CustomDivider;
