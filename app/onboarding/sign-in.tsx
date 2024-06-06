import { Image, Text } from '@rneui/base';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StatusBar, View } from 'react-native';

import { Btn } from '@/components/atoms/Btn';
import { Container } from '@/components/atoms/Container';
import { HeaderGradient } from '@/components/atoms/HeaderGradient';
import { InputText } from '@/components/atoms/InputText';
import MainCheckbox from '@/components/atoms/MainCheckbox';
import { Spacer } from '@/components/atoms/Spacer';
import MainProviders from '@/components/layouts/MainProviders';
import { STYLES } from '@/constants/STYLES';

export default function SignInScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  return (
    <MainProviders>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <HeaderGradient />
        <Spacer y={48} />
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
                Masukin Email dan kata sandi untuk masuk
              </Text>
            </View>
          </Container>
          <Container>
            <View style={{ gap: 16 }}>
              <View>
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
                  label="Password"
                  onChangeText={(e) => console.log(e)}
                />
              </View>
              <MainCheckbox
                label="Tampilin kata sandi"
                checked={showPassword}
                onChange={(e) => setShowPassword(e)}
              />
              <Btn onPress={() => router.push('/')} text="MASUK" />
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 7 }}>
                  <Text>Belum Punya Akun ?</Text>
                  <Link href="/onboarding/sign-up" style={{ padding: 0, margin: 0 }}>
                    <Text style={{ color: STYLES.primary.main }}>Silahkan Daftar</Text>
                  </Link>
                </View>
              </View>
            </View>
          </Container>
          <Container>
            <Text style={{ textAlign: 'center', color: STYLES.system.textGray }}>V 0.1.0</Text>
          </Container>
        </View>
      </View>
    </MainProviders>
  );
}
