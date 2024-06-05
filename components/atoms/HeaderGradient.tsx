import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export function HeaderGradient() {
  return (
    <View style={{ height: 400, width: '100%', position: 'absolute', top: 0, left: 0 }}>
      <LinearGradient colors={['rgba(255,138,0,0.1)', 'transparent']} style={{ height: '100%' }} />
    </View>
  );
}
