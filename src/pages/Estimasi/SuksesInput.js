import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import {Gap, Button} from '../../components/atoms';

const SuksesInput = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* <Gap height={150} /> */}
      <View>
        <Text style={styles.txt}>Estimasi Berhasil di input</Text>
      </View>
      <Gap height={70} />
      <Button
        text="Tambah Area Kerja"
        type="border-white"
        onPress={() => navigation.replace('SetAreaKerja')}
      />
      <Gap height={50} />
      <Button
        text="Selesai"
        type="border-white"
        onPress={() => navigation.replace('SurveyList')}
      />
    </View>
  );
};

export default SuksesInput;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    justifyContent: 'center',
  },
  txt: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 25,
  },
});
