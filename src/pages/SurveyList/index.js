import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IMGBgMain, ICArrowRightGreen, ICAddCircle} from '../../assets';
import {colors} from '../../utils';
import {Gap, Button, Header} from '../../components/atoms';
import List from '../../components/moleculs/List';

const SurveyList = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <ImageBackground source={IMGBgMain} style={styles.imageBg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header text="Survey List" />
          <Gap height={25} />
          <View style={styles.content}>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </View>
        </ScrollView>
        <Button
          type="btn-add-circle"
          onPress={() => navigation.navigate('SetInfoBangunan')}
        />
      </ImageBackground>
    </View>
  );
};

export default SurveyList;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
  },

  content: {
    flex: 1,
    padding: 20,
  },
});
