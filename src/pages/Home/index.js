import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {IMGBgHome, ICLogoSmallPNG} from '../../assets';
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
          <Gap height={100} />
          <Button text="Aktifitas Survey" />
          <Gap height={50} />
          <View style={styles.viewBtnCircle}>
            <TouchableOpacity style={styles.btnCircle}>
              <View style={styles.btnCircle2}>
                <Text style={styles.txtBtnSurvey}>Mulai Survey</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    fontSize: 23,
    fontWeight: 'bold',
  },
  txtWelcome: {
    color: colors.white,
    fontSize: 20,
  },
  content: {
    padding: 20,
  },
  txtDescApp: {
    fontSize: 20,
    textAlign: 'center',
  },
  btnCircle: {
    backgroundColor: colors.primary,
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCircle2: {
    backgroundColor: colors.secondary,
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnSurvey: {
    color: colors.white,
    fontSize: 20,
  },
  viewBtnCircle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
