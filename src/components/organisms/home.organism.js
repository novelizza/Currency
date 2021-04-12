import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../styles';
import propTypes from 'prop-types';
import moleculesComponent from '../molecules';
import atomsComponent from '../atoms';
import {useNavigation} from '@react-navigation/native';

const {ListItemMolecules} = moleculesComponent;

const {ButtonAtoms} = atomsComponent;

const {FirstPageStyle, ButtonStyle} = Styles.StyleSheets;

export default function HistoryOrganism(props) {
  const RenderElement = () => {
    if (props.data.lenght !== 0) {
      return (
        <View>
          <FlatList
            style={FirstPageStyle.flatList}
            data={props.data}
            renderItem={({item}) => <ListItemMolecules data={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      );
    }
  };

  const navigation = useNavigation();
  const onPressed = () => {
    navigation.navigate('HistoryPage');
  };

  return (
    <View>
      <View style={FirstPageStyle.topFlatlist}>
        <Text style={FirstPageStyle.leftTopFlatlist}>Pair</Text>
        <TouchableOpacity onPress={() => onPressed()}>
          <ButtonAtoms
            text="History"
            StyleButton={ButtonStyle.wrapperHistory}
          />
        </TouchableOpacity>
        <View style={FirstPageStyle.rightTopFlatlist}>
          <Text style={FirstPageStyle.txtRightTopFlatlist}>Last Price</Text>
        </View>
      </View>
      <RenderElement />
    </View>
  );
}

HistoryOrganism.propTypes = {
  data: propTypes.any,
};
HistoryOrganism.defaultProps = {
  data: '',
};
