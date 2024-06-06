import { AntDesign, Feather } from '@expo/vector-icons';
import { Avatar, Card, Divider, Rating } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';

import Typo from '@/src/components/atoms/Typo';
import { SIZE, STYLES } from '@/src/constants/STYLES';

export function CardMerchants1() {
  return (
    <Card
      containerStyle={{
        padding: 0,
        margin: 0,
        borderRadius: SIZE.XS,
        overflow: 'hidden',
      }}>
      <View>
        <Avatar
          containerStyle={{ borderRadius: 0, width: 162, height: 124, aspectRatio: 16 / 9 }}
          source={{
            uri: 'https://picsum.photos/1920/1080',
          }}
        />
        <View style={{ padding: SIZE.MD }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typo type="h4">Hello 123 123</Typo>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              <Typo type="xs">3.3</Typo>
              <AntDesign name="star" size={SIZE.SM} color={STYLES.COLORS.PRIMARY.MAIN} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 4, marginTop: 4, alignItems: 'center' }}>
            <Feather name="map-pin" size={SIZE.SM} color={STYLES.COLORS.SYSTEM.TEXT_GRAY} />
            <Typo color="gray" type="xs">
              Surabaya
            </Typo>
          </View>
        </View>
      </View>
    </Card>
  );
}
