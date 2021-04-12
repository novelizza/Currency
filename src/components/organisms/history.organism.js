import React from 'react';
import {FlatList, View} from 'react-native';
import Styles from '../../styles';
import propTypes from 'prop-types';
import moleculesComponent from '../molecules';

const {ListItemMolecules} = moleculesComponent;

const {FirstPageStyle} = Styles.StyleSheets;

export default function HomeOrganism(props) {
  const RenderElement = () => {
    if (props.data.data !== null || props.data.data !== []) {
      // const parsing = JSON.stringify(props.data.data);
      // const hasil = parsing.split('-');
      // console.log(hasil[2]);
      console.log(props.data);
      return (
        <View>
          <FlatList
            style={FirstPageStyle.flatList}
            data={props.data}
            renderItem={({item}) => <ListItemMolecules data={item} />}
            keyExtractor={item => item.data}
          />
        </View>
      );
    }
  };

  return (
    <View>
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
