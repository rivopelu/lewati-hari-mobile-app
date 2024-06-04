import { Text } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { Colors } from '@/constants/Colors';

export function Btn(props: IProps) {
  return (
    <>
      <Button
        onPress={props.onPress}
        backgroundColor={Colors.primary['10']}
        style={{ borderColor: 'black', borderWidth: 1 }}>
        <Text style={{ color: Colors.system.text }}>{props.text}</Text>
      </Button>
    </>
  );
}

interface IProps {
  text: string;
  onPress?: () => void;
}
