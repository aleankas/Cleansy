import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  IMGBgHome,
  ICLogoSmallPNG,
  ICBaygon,
  ICArrowRightGreen,
} from '../../assets';
import {colors} from '../../utils';
import {Gap, Button} from '../../components/atoms';

const Home = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <ImageBackground source={IMGBgHome} style={styles.imageBg}>
        <View style={styles.header}>
          <Image source={ICLogoSmallPNG} style={styles.logo} />
          <View>
            <Text style={styles.txtName}>Hi, John Doe</Text>
            <Text style={styles.txtWelcome}>Selamat Bekerja!</Text>
          </View>
        </View>
        <Gap height={50} />
        <View style={styles.content}>
          <Text style={styles.txtDescApp}>
            Aplikasi survey biaya dan perlengkapan layanan kebersihan / cleaning
            service.
          </Text>
          <Gap height={50} />
          <Button
            text="Aktifitas Survey"
            type="survey-activity"
            onPress={() => navigation.navigate('SurveyList')}
          />
          <Gap height={50} />
          <Button
            text="Mulai Survey"
            type="start-survey"
            onPress={() => navigation.navigate('SetAreaKerja')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  header: {
    // backgroundColor: 'black',
    height: 110,
    marginTop: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  txtName: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtWelcome: {
    color: colors.white,
    // fontSize: 20,
  },
  content: {
    padding: 20,
  },
  txtDescApp: {
    fontSize: 18,
    textAlign: 'center',
  },
});
