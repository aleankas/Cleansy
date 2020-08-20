import React, {useState} from 'react';
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
import {Table, Row, Rows} from 'react-native-table-component';

const SurveyDetail = ({navigation}) => {
  const [dataLabel, setDataLabel] = useState(['Nama', 'Qty', 'Merk', 'Harga']);
  const [dataTotal, setDataTotal] = useState(['', '', '', 'Rp 400.000']);
  const [dataTable, setDataTable] = useState([
    ['Pembersih Lantai', '12 Lt', 'Superpel', 'Rp 100.000'],
  ]);

  return (
    <View style={styles.pages}>
      <ImageBackground source={IMGBgMain} style={styles.imageBg}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header text="Survey Detail" />
          <View style={styles.content}>
            <List type="list-without-icon" />
            <View style={styles.boxList}>
              <View style={styles.listOrange}></View>
              <Gap width={10} />
              <View style={styles.listData}>
                <Text style={styles.txtNamaKoridor}>
                  Koridor - Lantai 1 (12m)
                </Text>
                <Text style={styles.txtTypeGedung}>Gedung</Text>
                {/* chemical */}
                <Text style={styles.txtInterior}>Chemical</Text>
                <Table>
                  <Row
                    data={dataLabel}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  <Rows data={dataTable} textStyle={styles.text} />
                </Table>
                {/* consumable */}
                <Text style={styles.txtInterior}>Consumable</Text>
                <Table>
                  <Row
                    data={dataLabel}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  <Rows data={dataTable} textStyle={styles.text} />
                </Table>
                {/* tools */}
                <Text style={styles.txtInterior}>Tools</Text>
                <Table>
                  <Row
                    data={dataLabel}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  <Rows data={dataTable} textStyle={styles.text} />
                </Table>
                {/* total */}
                <Gap height={30} />
                <Table>
                  <Row
                    data={dataTotal}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                </Table>
                <Gap height={20} />
              </View>
            </View>
            <Gap height={10} />
            <View style={styles.boxList}>
              <View style={styles.listOrange}></View>
              <Gap width={10} />
              <View style={styles.listData}>
                <Text style={styles.txtNamaKoridor}>
                  Toilet - Lantai 1 (10m)
                </Text>
                <Text style={styles.txtTypeGedung}>Gedung</Text>
                {/* chemical */}
                <Text style={styles.txtInterior}>Chemical</Text>
                <Table>
                  <Row
                    data={dataLabel}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  <Rows data={dataTable} textStyle={styles.text} />
                </Table>
                {/* consumable */}
                <Text style={styles.txtInterior}>Consumable</Text>
                <Table>
                  <Row
                    data={dataLabel}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  <Rows data={dataTable} textStyle={styles.text} />
                </Table>
                {/* tools */}
                <Text style={styles.txtInterior}>Tools</Text>
                <Table>
                  <Row
                    data={dataLabel}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  <Rows data={dataTable} textStyle={styles.text} />
                </Table>
                {/* total */}
                <Gap height={30} />
                <Table>
                  <Row
                    data={dataTotal}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                </Table>
                <Gap height={20} />
              </View>
            </View>
            <View style={styles.viewTotal}>
              <Text style={styles.txtTotal}>Total</Text>
              <Text style={styles.txtTotalNumber}>Rp 800.0000</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.viewBtn}>
          <Button
            type="two-text"
            textBack="Tambah Area Kerja"
            textNext="Download"
            onPressBack={() => navigation.navigate('SetAreaKerja')}
            // onPressNext={() => navigation.navigate('Estimasi')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SurveyDetail;

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
  boxList: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: colors.grey4,
    elevation: 3,
  },
  listOrange: {
    backgroundColor: colors.orange,
    width: 7,
  },
  listData: {
    padding: 5,
    flex: 1,
    justifyContent: 'center',
  },
  viewIcon: {
    justifyContent: 'center',
    marginRight: 20,
  },
  txtNamaKoridor: {
    fontSize: 18,
  },
  txtTypeGedung: {
    color: colors.secondary,
  },
  txtInterior: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  head: {height: 40, backgroundColor: colors.grey4},
  text: {margin: 6},
  viewBtn: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  // total
  viewTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  txtTotal: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  txtTotalNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.orange,
  },
});
