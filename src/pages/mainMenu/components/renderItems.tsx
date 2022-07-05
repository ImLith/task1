import React, { PureComponent } from 'react';
import { VStack, Text, Collapse, FlatList } from 'native-base';
import { TouchableHighlight, StyleSheet } from 'react-native';

import { ISeededData } from '<types>/seededData';
import { FONT_SIZE } from '<constants>/size';
import COLORS from '<constants>/colors';

import renderEmployees from './renderEmployees';

export const HEIGHT = 60;

const styles = StyleSheet.create({
  itemPressable: {
    justifyContent: 'center',
    height: HEIGHT,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray.light,
  },
});

interface IRenderItemsProps {
  item: ISeededData;
  displayEmployees?: string;
  setDisplayEmployees: (key?: string) => void;
}

class RenderItems extends PureComponent<IRenderItemsProps> {
  constructor(props: IRenderItemsProps) {
    super(props);
  }

  render(): JSX.Element {
    const {
      item: { key, name, phrase, employees },
      displayEmployees,
      setDisplayEmployees,
    } = this.props;

    const isOpen = key === displayEmployees;

    return (
      <>
        <TouchableHighlight
          onPress={() => setDisplayEmployees(isOpen ? undefined : key)}
          style={styles.itemPressable}
          underlayColor={COLORS.underlayColor}
        >
          <VStack>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize={FONT_SIZE.default}
              color={COLORS.blue.normal}
            >
              {name}
            </Text>
            <Text textAlign="center" fontSize={FONT_SIZE.small} color={COLORS.blue.faded}>
              {phrase}
            </Text>
          </VStack>
        </TouchableHighlight>
        <Collapse isOpen={isOpen}>
          <FlatList
            data={employees}
            renderItem={renderEmployees}
            maxToRenderPerBatch={2}
            initialNumToRender={2}
            borderBottomWidth={1}
            borderTopWidth={isOpen ? 1 : 0}
            borderColor={COLORS.gray.normal}
          />
        </Collapse>
      </>
    );
  }
}

export default RenderItems;
