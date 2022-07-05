import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Router from '<routes>/router';
import COLORS from '<constants>/colors';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.blue.light,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

const MainEntry = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default MainEntry;
