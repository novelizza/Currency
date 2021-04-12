import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../styles';
import OrganismComponent from '../organisms';

const {SecondPageStyle} = Styles.StyleSheets;

const {BuySellOrganism} = OrganismComponent;

function SecondTemplates({route}) {
  const {name} = route.params;
  return (
    <View style={SecondPageStyle.wrapper}>
      <View style={SecondPageStyle.wrapperTittle}>
        <Text style={SecondPageStyle.crypto}>{name}</Text>
      </View>
      <BuySellOrganism name={name} />
    </View>
  );
}

export default SecondTemplates;
