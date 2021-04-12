import colors from '../colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapperSell: {
    height: 30,
    width: 100,
    backgroundColor: colors.RED_COLOR,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  wrapperBuy: {
    height: 30,
    width: 100,
    backgroundColor: colors.GREEN_COLOR,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  wrapperHistory: {
    width: 100,
    backgroundColor: colors.ORANGE_COLOR,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    color: colors.WHITE_COLOR,
    alignSelf: 'center',
  },
});
