import { StatusBar, Text } from 'react-native';
import View from 'react-native-ui-lib/view';

import { Container } from '@/components/atoms/Container';
import { HeaderGradient } from '@/components/atoms/HeaderGradient';
import { InputText } from '@/components/atoms/InputText';
import { Spacer } from '@/components/atoms/Spacer';

export default function SignInScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <HeaderGradient />
      <Spacer y={48} />
      <Container>
        <Text>HELLO</Text>
        <InputText />
      </Container>
    </View>
  );
}
