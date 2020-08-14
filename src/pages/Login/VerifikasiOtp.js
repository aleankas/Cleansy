import React from 'react';
import {Dimensions, Image, StyleSheet, View, ScrollView} from 'react-native';
import {IMGBgHeadLogin, ICLogoSmall} from '../../assets';
import {Input, Button, Gap} from '../../components/atoms';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VerifikasiOTP = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={IMGBgHeadLogin} style={styles.imgBgHead} />
        </View>
        <Gap height={100} />
        <View style={styles.content}>
          <Input label="Kode OTP" placeholder="xxxx" />
          <Gap height={50} />
          <Button
            text="Masuk"
            onPress={() => navigation.replace('Home')}
          />
          <Gap height={50} />
        </View>
      </ScrollView>
    </View>
  );
};

export default VerifikasiOTP;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  imgBgHead: {
    height: windowHeight,
    width: windowWidth,
  },
  header: {
    height: windowHeight / 3,
  },
  content: {
    padding: 20,
  },
});
