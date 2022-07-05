import React from 'react';
import { HStack, Spinner, Text, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import COLORS from '<constants>/colors';
import { FONT_SIZE } from '<constants>/size';
import { ILoadingStatus } from '<types>/loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleDisplayWrapper: {
    alignItems: 'center',
  },
});

interface ILoader {
  size?: 'lg' | 'sm';
  color?: string;
  title?: string;
  titleColor?: string;
  message?: string;
  description?: string;
  status?: ILoadingStatus;
}

const Loader = (props: ILoader): JSX.Element => {
  const {
    size = 'lg',
    title,
    message,
    description,
    color = COLORS.white,
    status = 'loading',
  } = props;

  const getIcon = () => {
    switch (status) {
      case 'loading':
        return <Spinner size={size} color={color} />;
      case 'error':
        return;
      case 'success':
        return <FontAwesome5 name="check" size={FONT_SIZE.large} color={color} />;
    }
  };

  return (
    <VStack style={styles.container}>
      <HStack space={2} style={styles.titleDisplayWrapper}>
        {getIcon()}
        {title && (
          <Text fontWeight="bold" color={color} fontSize={FONT_SIZE.medium}>
            {title}
          </Text>
        )}
      </HStack>
      <VStack space={6}>
        {message && (
          <Text textAlign="center" fontSize={FONT_SIZE.default} color={color}>
            {message}
          </Text>
        )}
        {description && (
          <Text textAlign="center" fontSize={FONT_SIZE.tiny} color={color}>
            {description}
          </Text>
        )}
      </VStack>
    </VStack>
  );
};

export default Loader;
