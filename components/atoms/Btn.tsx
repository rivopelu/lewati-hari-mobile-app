import { Text } from '@rneui/base';
import { Button } from '@rneui/themed';

import { Colors } from '@/constants/Colors';

export function Btn(props: IProps) {
  return (
    <>
      <Button
        onPress={props.onPress}
        type="outline"
        size="lg"
        style={{
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 9999,
          backgroundColor: Colors.primary[10],
        }}>
        <Text style={{ color: Colors.primary.main, fontWeight: '700' }}>{props.text}</Text>
      </Button>
    </>
  );
}

interface IProps {
  text: string;
  onPress?: () => void;
}
