import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {IMGBgMain, IMGBgMainPNG, ICArrowRightGreen} from '../../assets';
import {Header, Gap, Input, Button} from '../../components/atoms';
import {colors} from '../../utils';
import List from '../../components/moleculs/List';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Estimasi = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.viewImgHeader}>
          <Image source={IMGBgMainPNG} style={styles.imgBgHead} />
        </View>
        <View style={styles.header}>
          <Header text="Estimasi" />
        </View>
        <View style={styles.content}>
          {/* chemical */}
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
          <Gap height={30} />
          {/* consumable */}
          <View style={styles.viewEstimasi}>
            <Text style={styles.txtDataLabel}>Consumable</Text>
            <View style={styles.boxEstimasi}>
              <View style={styles.dataLabel}>
                <Text style={styles.txtDataLabel}>Nama</Text>
                <Text style={styles.txtDataLabel}>Qty</Text>
                <Text style={styles.txtDataLabel}>Merk</Text>
                <Text style={styles.txtDataLabel}>Harga</Text>
              </View>
              <View style={styles.dataList}>
                <Text style={styles.txtDataList}>Pewangi Ruangan</Text>
                <Text style={styles.txtDataList}>10 btl</Text>
                <Text style={styles.txtDataList}>Wanginya</Text>
                <Text style={styles.txtDataList}>Rp. 100.000</Text>
              </View>
            </View>
          </View>
          <Gap height={30} />
          {/* tools */}
          <View style={styles.viewEstimasi}>
            <Text style={styles.txtDataLabel}>Tools</Text>
            <View style={styles.boxEstimasi}>
              <View style={styles.dataLabel}>
                <Text style={styles.txtDataLabel}>Nama</Text>
                <Text style={styles.txtDataLabel}>Qty</Text>
                <Text style={styles.txtDataLabel}>Merk</Text>
                <Text style={styles.txtDataLabel}>Harga</Text>
              </View>
              <View style={styles.dataList}>
                <Text style={styles.txtDataList}>Sapu</Text>
                <Text style={styles.txtDataList}>10 Pcs</Text>
                <Text style={styles.txtDataList}>Standart</Text>
                <Text style={styles.txtDataList}>Rp. 100.000</Text>
              </View>
              <View style={styles.dataList}>
                <Text style={styles.txtDataList}>Alat Pel / Mop</Text>
                <Text style={styles.txtDataList}>10 Pcs</Text>
                <Text style={styles.txtDataList}>Standart</Text>
                <Text style={styles.txtDataList}>Rp. 100.000</Text>
              </View>
            </View>
          </View>
          <Gap height={30} />
          {/* total */}
          <View style={styles.viewEstimasi}>
            <View style={styles.boxEstimasi}>
              <View style={styles.dataLabel}>
                <Text style={styles.txtDataLabel}>Total Biaya</Text>
                <Text style={styles.txtDataLabel}>Rp. 400.000</Text>
              </View>
            </View>
          </View>
        </View>
        <Gap height={30} />
      </ScrollView>
      <View style={styles.viewBtn}>
        <Button
          type="two-text"
          textBack="Atur Ulang"
          textNext="Simpan Estimasi"
          onPressBack={() => navigation.goBack()}
          onPressNext={() => navigation.replace('EstimasiSuksesInput')}
        />
      </View>
    </View>
  );
};

export default Estimasi;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewImgHeader: {
    height: windowHeight / 2,
  },
  header: {
    position: 'absolute',
    width: windowWidth,
  },
  imgBgHead: {
    height: windowHeight,
    width: windowWidth,
  },
  content: {
    flex: 1,
    top: -windowHeight / 3,
    height: windowHeight / 3,
    // width: windowWidth,
    padding: 20,
  },
  viewBtn: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: 0,
  },
  // -----------------
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
