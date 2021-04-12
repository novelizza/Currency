import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../styles';
import propTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

const {FirstPageStyle} = Styles.StyleSheets;

export default function listitemMolecules(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();
  const onPressed = (data, parsing) => {
    navigation.navigate('SecondPage', data);
  };
  const parsing = JSON.stringify(props.data.quote.USD.price);
  return (
    <TouchableOpacity onPress={() => onPressed(props.data)}>
      <View style={FirstPageStyle.wrapperList}>
        <View style={FirstPageStyle.leftList}>
          <Text style={FirstPageStyle.nameList}>{props.data.name}</Text>
          <Text style={FirstPageStyle.usdList}> / USD</Text>
        </View>
        <View style={FirstPageStyle.rightList}>
          <Text style={FirstPageStyle.txtRightList}>
            {parsing.split('.')[0]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

listitemMolecules.propTypes = {
  data: propTypes.any,
};
listitemMolecules.defaultProps = {
  data: 'saya',
};
