import React from 'react';
import { View, Text } from 'native-base';

import COLORS from '<constants>/colors';
import { IEmployee } from '<types>/seededData';

interface IRenderEmployeesProps {
  item: IEmployee;
}

const RenderEmployees = (props: IRenderEmployeesProps): JSX.Element => {
  const {
    item: { name },
  } = props;

  return (
    <View bg={COLORS.gray.light}>
      <Text textAlign="center" color={COLORS.gray.dark} fontWeight="bold">
        {name}
      </Text>
    </View>
  );
};

export default RenderEmployees;
