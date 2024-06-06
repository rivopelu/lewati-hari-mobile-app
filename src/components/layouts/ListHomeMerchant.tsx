import { View } from 'react-native';

import { CardMerchants1 } from '@/src/components/Molecules/CardMerchants1';
import { MainContainer } from '@/src/components/atoms/MainContainer';
import { Spacer } from '@/src/components/atoms/Spacer';
import Typo from '@/src/components/atoms/Typo';
import { SIZE } from '@/src/constants/STYLES';

export function ListHomeMerchant() {
  return (
    <MainContainer>
      <Typo type="h4">Temukan tempat yang cocok buat kamu</Typo>
      <Typo type="xs" color="gray">
        Pilihan daftar tempat yang mungkin sesuai dengan selera kamu
      </Typo>
      <Spacer y={SIZE.XS} />
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <View
            key={i}
            style={{
              width: '50%',
              marginBottom: SIZE.XS,
              paddingRight: i % 2 === 0 ? SIZE.XXS : 0,
              paddingLeft: i % 2 !== 0 ? SIZE.XXS : 0,
            }}>
            <CardMerchants1 />
          </View>
        ))}
      </View>
    </MainContainer>
  );
}
