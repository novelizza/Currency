import React from 'react';
import {View, Text} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';

const {ButtonStyle} = Styles.StyleSheets;

function Button(props) {
  return (
    <View style={props.StyleButton}>
      <Text style={ButtonStyle.text}>{props.text}</Text>
    </View>
  );
}

Button.propTypes = {
  text: propTypes.string,
  StyleButton: propTypes.any,
};
Button.defaulrProps = {
  text: '',
  StyleButton: '',
};
export default Button;
