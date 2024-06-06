import React from 'react';
import { View } from 'react-native';

import { SIZE } from '@/src/constants/STYLES';

export function MainContainer(props: IProps) {
  return <View style={{ paddingHorizontal: SIZE.CONTAINER }}>{props.children}</View>;
}

interface IProps {
  children: React.ReactNode;
}
