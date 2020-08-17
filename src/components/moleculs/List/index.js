import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '../../atoms';
import {ICArrowRightGreen} from '../../../assets';
import {colors} from '../../../utils';

const List = ({type}) => {
  if (type === 'list-estimasi') {
    return (
      <View style={styles.viewEstimasi}>
        <Text style={styles.txtDataLabel}>Chemical</Text>
        <View style={styles.boxEstimasi}>
          <View style={styles.dataLabel}>
            <Text style={styles.txtDataLabel}>Nama Chemical</Text>
            <Text style={styles.txtDataLabel}>Qty</Text>
            <Text style={styles.txtDataLabel}>Merk</Text>
            <Text style={styles.txtDataLabel}>Harga</Text>
          </View>
          <View style={styles.dataList}>
            <Text style={styles.txtDataList}>Pembersih Lantai</Text>
            <Text style={styles.txtDataList}>12 Lt</Text>
            <Text style={styles.txtDataList}>Superpel</Text>
            <Text style={styles.txtDataList}>Rp. 100.000</Text>
          </View>
        </View>
      </View>
    );
  }

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
  // list-estimasi
  boxEstimasi: {
    backgroundColor: colors.grey4,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 5,
    elevation: 4,
  },
  dataLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
  dataList: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDataLabel: {
    fontWeight: 'bold',
  },
  txtDataList: {
    color: colors.secondary,
  },
});
