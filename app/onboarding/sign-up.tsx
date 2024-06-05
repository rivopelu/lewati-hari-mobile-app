/* eslint-disable import/order */
import React, { useState } from 'react';

import MainProviders from '@/components/layouts/MainProviders';
import { StatusBar, View, Text } from 'react-native';
import { HeaderGradient } from '@/components/atoms/HeaderGradient';
import { Spacer } from '@/components/atoms/Spacer';
import { Container } from '@/components/atoms/Container';
import MainCheckbox from '@/components/atoms/MainCheckbox';
import { Btn } from '@/components/atoms/Btn';
import { Link } from 'expo-router';
import { InputText } from '@/components/atoms/InputText';
import { Image } from '@rneui/themed';
import { Colors } from '@/constants/Colors';

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <MainProviders>
      <HeaderGradient />
      <StatusBar barStyle="dark-content" />
      <Spacer y={48} />
      <View style={{ flex: 1 }}>
        <View style={{ justifyContent: 'space-around', flex: 1 }}>
          <Container>
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 24 }}>
              <View
                style={{
                  width: 160,
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                }}>
                <Image
                  alt="lewati hari"
                  source={require('@/assets/logo/lg_brand.png')}
                  style={{ height: 32, objectFit: 'contain', width: 'auto' }}
                />
              </View>
              <Text style={{ fontSize: 24, width: '100%', fontWeight: '600', textAlign: 'center' }}>
                Yuk, masukin informasi kamu buat daftar
              </Text>
            </View>
          </Container>
          <Container>
            <View style={{ gap: 16 }}>
              <View>
                <InputText
                  required
                  placeholder="Masukin nama kamu"
                  label="Nama"
                  onChangeText={(e) => console.log(e)}
                />
                <InputText
                  keyboardType="email-address"
                  required
                  placeholder="Masukan email"
                  label="Email"
                  onChangeText={(e) => console.log(e)}
                />
                <InputText
                  secureTextEntry={!showPassword}
                  required
                  placeholder="Masukan kata sandi"
                  label="Kata sandi"
                  onChangeText={(e) => console.log(e)}
                />
                <InputText
                  secureTextEntry={!showPassword}
                  required
                  placeholder="Masukin kata sandi sekali lagi"
                  label="Konfirmasi kata sandi"
                  onChangeText={(e) => console.log(e)}
                />
              </View>
              <MainCheckbox
                label="Tampilin kata sandi"
                checked={showPassword}
                onChange={(e) => setShowPassword(e)}
              />
              <Btn text="MASUK" />
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 7 }}>
                  <Text>Udah punya akun ?</Text>
                  <Link href="/onboarding/sign-in" style={{ padding: 0, margin: 0 }}>
                    <Text style={{ color: Colors.primary.main }}>Masuk disini</Text>
                  </Link>
                </View>
              </View>
            </View>
          </Container>
          <Container>
            <Text style={{ textAlign: 'center', color: Colors.system.textGray }}>V 0.1.0</Text>
          </Container>
        </View>
      </View>
    </MainProviders>
  );
}
