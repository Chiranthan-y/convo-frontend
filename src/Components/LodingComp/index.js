import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './style';

const LoadingComp = () => {
  return (
    <View style={styles.contsiner}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingComp;
