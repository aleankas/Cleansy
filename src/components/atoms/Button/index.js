import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const Button = ({text, disable, onPress, type, shimmer}) => {
  if (disable) {
    return (
      <View style={styles.btn(disable)}>
        <Text style={styles.txt(disable)}>{text}</Text>
      </View>
    );
  }

  if (type === 'btn-absen') {
    return (
      <TouchableOpacity style={styles.btnAbsen} onPress={onPress}>
        <Text style={styles.txtBtnAbsen}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.btn(disable)} onPress={onPress}>
      <Text style={styles.txt(disable)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: (disable) => ({
    height: 50,
    backgroundColor: disable ? colors.grey4 : colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 3,
  }),
  txt: (disable) => ({
    color: disable ? colors.grey2 : colors.white,
    fontSize: 18,
  }),
  btnAbsen: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },
  txtBtnAbsen: {
    color: colors.white,
    fontSize: 16,
  },
  shimmerText: {
    backgroundColor: colors.grey2,
    width: 80,
    height: 50,
    marginBottom: 2,
    borderRadius: 10,
  },
});
