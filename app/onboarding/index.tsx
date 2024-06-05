import { Link, useRouter } from 'expo-router';
import { Image, StatusBar, Text, View } from 'react-native';

import { Btn } from '@/components/atoms/Btn';
import { Container } from '@/components/atoms/Container';
import { HeaderGradient } from '@/components/atoms/HeaderGradient';
import { Spacer } from '@/components/atoms/Spacer';
import MainProviders from '@/components/layouts/MainProviders';
import { Colors } from '@/constants/Colors';

export default function OnboardingScreen({ navigation }: any) {
  const router = useRouter();
  return (
    <MainProviders>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <HeaderGradient />
        <Spacer y={48} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Container>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                alt="lewati hari"
                source={require('@/assets/logo/lg_brand.png')}
                style={{ height: 32, objectFit: 'contain' }}
              />
              <Image
                alt="lewati hari"
                source={require('@/assets/illustrations/il_onboarding.png')}
                style={{ height: 200, width: 200, objectFit: 'contain' }}
              />
              <View style={{ gap: 24 }}>
                <View>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 32 }}>
                    Temukan tempat terbaik yang cocok buat kamu
                  </Text>
                  <Spacer y={8} />
                  <Text style={{ textAlign: 'center', color: Colors.system.textGray }}>
                    Jelajahi berbagai pilihan tempat menarik, dari cafe tersembunyi hingga coffee
                    shop populer di sekitarmu
                  </Text>
                </View>
                <Btn text="MASUK" onPress={() => router.push('/onboarding/sign-in')} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', gap: 7 }}>
                    <Text>Belum Punya Akun ?</Text>
                    <Link href="/onboarding/sign-up" style={{ padding: 0, margin: 0 }}>
                      <Text style={{ color: Colors.primary.main }}>Silahkan Daftar</Text>
                    </Link>
                  </View>
                </View>
              </View>
            </View>
          </Container>
        </View>
      </View>
    </MainProviders>
  );
}
