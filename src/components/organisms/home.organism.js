import React from 'react';
import {FlatList, View, Text} from 'react-native';
import Styles from '../../styles';
import propTypes from 'prop-types';
import moleculesComponent from '../molecules';

const {ListItemMolecules} = moleculesComponent;

const {FirstPageStyle} = Styles.StyleSheets;

export default function HomeOrganism(props) {
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
  return (
    <View>
      <View style={FirstPageStyle.topFlatlist}>
        <Text style={FirstPageStyle.leftTopFlatlist}>Pair</Text>
        <View style={FirstPageStyle.rightTopFlatlist}>
          <Text style={FirstPageStyle.txtRightTopFlatlist}>Last Price</Text>
        </View>
      </View>
      <RenderElement />
    </View>
  );
}

HomeOrganism.propTypes = {
  data: propTypes.any,
};
HomeOrganism.defaultProps = {
  data: '',
};
