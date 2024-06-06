import { Avatar } from '@rneui/themed';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Container } from '../atoms/Container';
import Typo from '../atoms/Typo';

export default function HomeHeader() {
  const router = useRouter();
  return (
    <Container>
      <View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Typo type="h3">Hy, Jhon Doe</Typo>
          <TouchableOpacity onPress={() => router.push('onboarding/sign-in')}>
            <Avatar
              size={36}
              containerStyle={{ backgroundColor: '#6733b9', borderRadius: 9999 }}
              rounded
              source={{
                uri: 'https://gravatar.com/avatar/65edb87b7bec06ae192e290b0f9c194f?s=400&d=robohash&r=x',
              }}
            />
          </TouchableOpacity>
        </View>
        <Typo type="h1">Mau kemana hari ini ? </Typo>
      </View>
    </Container>
  );
}
