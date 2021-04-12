import {StyleSheet} from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
  topFlatlist: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.THEME_COLOR,
  },
  leftTopFlatlist: {
    flex: 1,
    fontSize: 17,
  },
  rightTopFlatlist: {
    flex: 1,
    alignItems: 'flex-end',
  },
  txtRightTopFlatlist: {
    fontSize: 17,
    color: colors.BLACK_COLOR,
  },
  flatList: {
    backgroundColor: colors.WHITE_COLOR,
  },
  wrapperList: {
    backgroundColor: colors.WHITE_COLOR,
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 15,
  },
  leftList: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameList: {
    color: colors.BLACK_COLOR,
    fontSize: 17,
  },
  usdList: {
    color: colors.GREY4_COLOR,
    fontSize: 17,
  },
  rightList: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  txtRightList: {
    fontSize: 17,
  },
  buysell: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
