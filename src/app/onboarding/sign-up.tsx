/* eslint-disable import/order */
import React, { useState } from 'react';

import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { Link } from 'expo-router';
import MainProviders from '@/src/components/layouts/MainProviders';
import { HeaderGradient } from '@/src/components/atoms/HeaderGradient';
import { Spacer } from '@/src/components/atoms/Spacer';
import { MainContainer } from '@/src/components/atoms/MainContainer';
import { InputText } from '@/src/components/atoms/InputText';
import MainCheckbox from '@/src/components/atoms/MainCheckbox';
import { Btn } from '@/src/components/atoms/Btn';
import { STYLES } from '@/src/constants/STYLES';

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <MainProviders>
      <HeaderGradient />
      <StatusBar barStyle="dark-content" />
      <Spacer y={100} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: 'space-around', flex: 1, gap: 32 }}>
            <MainContainer>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
                <Text
                  style={{ fontSize: 24, width: '100%', fontWeight: '600', textAlign: 'center' }}>
                  Yuk, masukin informasi kamu buat daftar
                </Text>
              </View>
            </MainContainer>
            <MainContainer>
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
                <Btn text="MASUK DENGAN GOOGLE" />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', gap: 7 }}>
                    <Text>Udah punya akun ?</Text>
                    <Link href="/onboarding/sign-in" style={{ padding: 0, margin: 0 }}>
                      <Text style={{ color: STYLES.COLORS.PRIMARY.MAIN }}>Masuk disini</Text>
                    </Link>
                  </View>
                </View>
              </View>
            </MainContainer>
            <MainContainer>
              <Text style={{ textAlign: 'center', color: STYLES.COLORS.SYSTEM.TEXT_GRAY }}>
                V 0.1.0
              </Text>
            </MainContainer>
          </View>
        </View>
      </ScrollView>
    </MainProviders>
  );
}
