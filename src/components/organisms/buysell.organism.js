import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Atoms from '../atoms';
import Styles from '../../styles';
import propTypes from 'prop-types';
import axios from 'axios';

const {ButtonStyle, SecondPageStyle} = Styles.StyleSheets;

const {ButtonAtoms} = Atoms;

export default function BuySellOrganism(props) {
  const [dataHistory, setDataHistory] = useState({
    data: [],
  });

  const [transaksi, setTransaksi] = useState('');

  const dataForApi = {
    name: props.name,
    status: transaksi,
  };

  if (dataHistory.data === 0) {
    axios
      .get('https://currencytest-63e75-default-rtdb.firebaseio.com/.json')
      .then(result => {
        setDataHistory({data: result.data.data});
      })
      .catch(err => console.log('err: ', err));
  }

  const onPressedBuy = () => {
    setTransaksi('Beli');
    axios
      .post(
        'https://currencytest-63e75-default-rtdb.firebaseio.com/.json',
        dataForApi,
      )
      .then(result => alert('Berhasil!'))
      .catch(err => console.log(err));
  };

  const onPressedSell = () => {
    setTransaksi('Jual');
    axios
      .post(
        'https://currencytest-63e75-default-rtdb.firebaseio.com/.json',
        dataForApi,
      )
      .then(result => alert('Berhasil!'))
      .catch(err => console.log(err));
  };

  const onPressed = data => {
    setTransaksi(data);

    if (data === 'jual') {
      onPressedSell();
    } else {
      onPressedBuy();
    }
  };

  return (
    <View style={SecondPageStyle.buysell}>
      <TouchableOpacity onPress={() => onPressed('jual')}>
        <ButtonAtoms text="Sell" StyleButton={ButtonStyle.wrapperSell} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressed('beli')}>
        <ButtonAtoms text="Buy" StyleButton={ButtonStyle.wrapperBuy} />
      </TouchableOpacity>
    </View>
  );
}

BuySellOrganism.propTypes = {
  name: propTypes.any,
};
BuySellOrganism.defaultProps = {
  name: '',
};
