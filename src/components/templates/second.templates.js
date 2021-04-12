import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../styles';
import OrganismComponent from '../organisms';
import propTypes from 'prop-types';

const {SecondPageStyle} = Styles.StyleSheets;

const {BuySellOrganism} = OrganismComponent;

function SecondTemplates({route}) {
  // const onPressed = () => {
  //   alert('Halo, anda di halaman 2');
  // };
  const {name} = route.params;
  return (
    <View style={SecondPageStyle.wrapper}>
      <BuySellOrganism name={name} />
      <Text>{name}</Text>
    </View>
  );
}

export default SecondTemplates;

// SecondTemplates.propTypes = {
//   route: propTypes.any,
// };
// SecondTemplates.defaultProps = {
//   route: 'saya',
// };
