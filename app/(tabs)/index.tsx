import { Animated, StatusBar, Text, View } from 'react-native';

import { Container } from '@/components/atoms/Container';
import ScrollView = Animated.ScrollView;

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" translucent={false} />
      <View style={{ backgroundColor: 'white' }}>
        <Text>VIEW</Text>
      </View>
      <ScrollView>
        <Container>
          {Array.from({ length: 100 }).map((_, i) => (
            <Text key={i}>HEADER</Text>
          ))}
        </Container>
      </ScrollView>
    </View>
  );
}
