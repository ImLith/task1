import React from 'react';
import { View, Text } from 'native-base';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { RowMap } from 'react-native-swipe-list-view';

import COLORS from '<constants>/colors';

import { HEIGHT } from './renderItems';
import { ISeededData } from '<types>/seededData';

const BORDER_RADIUS = 50;

const styles = StyleSheet.create({
  hiddenButtonsWrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
  },
  hiddenBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    height: HEIGHT,
  },
  hiddenBtnRight: {
    backgroundColor: COLORS.red.light,
    right: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  hiddenBtnLeft: {
    backgroundColor: COLORS.yellow.light,
    left: 0,
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

interface IRenderHiddenItemProps {
  item: ISeededData;
  rowMap: RowMap<ISeededData>;
  deleteRow: (rowMap: RowMap<ISeededData>, rowKey: string) => void;
  displayRow: (key: string) => void;
}

const RenderHiddenItem = (props: IRenderHiddenItemProps): JSX.Element => {
  const {
    item: { key },
    rowMap,
    deleteRow,
    displayRow,
  } = props;

  return (
    <View style={styles.hiddenButtonsWrapper}>
      <TouchableOpacity
        style={[styles.hiddenBtn, styles.hiddenBtnLeft]}
        onPress={() => displayRow(key)}
      >
        <Text color={COLORS.yellow.dark}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.hiddenBtn, styles.hiddenBtnRight]}
        onPress={() => deleteRow(rowMap, key)}
      >
        <Text color={COLORS.red.dark}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderHiddenItem;
