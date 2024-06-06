import { View } from 'react-native';

import { CardMerchants1 } from '@/components/Molecules/CardMerchants1';

export function HomeRecommendation() {
  return (
    <View>
      {Array.from({ length: 5 }).map((_, i) => (
        <CardMerchants1 key={i} />
      ))}
    </View>
  );
}
