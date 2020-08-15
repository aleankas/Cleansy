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
import {Gap, Button} from '../../components/atoms';
import List from '../../components/moleculs/List';

const SurveyList = () => {
  return (
    <View style={styles.pages}>
      <ImageBackground source={IMGBgMain} style={styles.imageBg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewHeader}>
            <Text style={styles.txtHeader}>Survey List</Text>
          </View>
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
        <Button type="btn-add-circle" />
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
  viewHeader: {
    backgroundColor: '#EBEAEA',
    marginTop: 30,
    width: '65%',
    height: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
