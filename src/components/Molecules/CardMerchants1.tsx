import { Avatar, Card } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

import Typo from '@/src/components/atoms/Typo';
import { SIZE } from '@/src/constants/STYLES';

export function CardMerchants1() {
  return (
    <Card
      containerStyle={{
        padding: 0,
        margin: 0,
        borderRadius: SIZE.MD,
        overflow: 'hidden',
      }}>
      <View>
        <Avatar
          containerStyle={{ borderRadius: 0, width: 162, height: 124, aspectRatio: 16 / 9 }}
          source={{
            uri: 'https://picsum.photos/1920/1080',
          }}
        />
        <View style={{ padding: SIZE.XS }}>
          <Typo type="h4">Hello 123 123</Typo>
        </View>
      </View>
    </Card>
  );
}
