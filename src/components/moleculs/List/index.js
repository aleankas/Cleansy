import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '../../atoms';
import {ICArrowRightGreen} from '../../../assets';
import {colors} from '../../../utils';

const List = () => {
  return (
    <TouchableOpacity style={styles.boxList}>
      <View style={styles.listOrange}></View>
      <Gap width={10} />
      <View style={styles.listData}>
        <Text style={styles.txtNamaGedung}>Kantor GOJEK Blok M Plaza</Text>
        <Text style={styles.txtTypeGedung}>Gedung</Text>
        <Text>17/08/2020</Text>
      </View>
      <View style={styles.viewIcon}>
        <ICArrowRightGreen />
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  boxList: {
    backgroundColor: colors.grey4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  listOrange: {
    backgroundColor: colors.orange,
    width: 7,
  },
  listData: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  viewIcon: {
    justifyContent: 'center',
    marginRight: 20,
  },
  txtNamaGedung: {
    fontSize: 18,
  },
  txtTypeGedung: {
    color: colors.secondary,
  },
});
