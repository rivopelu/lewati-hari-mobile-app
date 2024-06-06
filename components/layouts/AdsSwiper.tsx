import { Card } from '@rneui/themed';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel/src/Carousel';

import { SIZE } from '@/constants/STYLES';

export function AdsSwiper() {
  const width = Dimensions.get('window').width;
  const containerWidth = width - SIZE.CONTAINER;
  const containerHeight = (containerWidth * 9) / 16;
  return (
    <View>
      <Carousel
        loop
        style={{ margin: 'auto' }}
        width={width}
        height={containerHeight}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <Card containerStyle={{ marginHorizontal: SIZE.CONTAINER, borderRadius: SIZE.MD }}>
            <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text>ADS {index + 1}</Text>
            </View>
          </Card>
        )}
      />
    </View>
  );
}
