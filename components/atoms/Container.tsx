import React from 'react';
import { View } from 'react-native';

import { SIZE } from '@/constants/STYLES';

export function Container(props: IProps) {
  return <View style={{ paddingHorizontal: SIZE.CONTAINER }}>{props.children}</View>;
}

interface IProps {
  children: React.ReactNode;
}
