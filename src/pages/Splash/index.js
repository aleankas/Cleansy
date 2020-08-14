import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {IMGBgSplash, ICLogoSplash} from '../../assets';
import Login from '../Login';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000);
  }, [navigation]);
  return (
    <View style={styles.pages}>
      <ImageBackground source={IMGBgSplash} style={styles.imageBg}>
        <View style={styles.wrapper}>
          <View style={styles.logo}>
            <ICLogoSplash />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
