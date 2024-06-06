import { ScrollView, View } from 'react-native';

import { CardMerchants1 } from '@/src/components/Molecules/CardMerchants1';
import { MainContainer } from '@/src/components/atoms/MainContainer';
import { Spacer } from '@/src/components/atoms/Spacer';
import Typo from '@/src/components/atoms/Typo';
import { SIZE } from '@/src/constants/STYLES';

export function HomeRecommendation() {
  return (
    <View>
      <MainContainer>
        <Typo type="h3">Rekomendasi Buat Kamu</Typo>
        <Typo type="xs" color="gray">
          Rekomendasi Buat Kamu
        </Typo>
      </MainContainer>
      <Spacer y={SIZE.XS} />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <Spacer x={SIZE.CONTAINER} />

        <View style={{ flexDirection: 'row', gap: SIZE.XS }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <CardMerchants1 key={i} />
          ))}
        </View>
        <Spacer x={SIZE.CONTAINER} />
      </ScrollView>
    </View>
  );
}
