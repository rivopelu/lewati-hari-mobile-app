import { Text } from '@rneui/base';
import { Button } from '@rneui/themed';

import { STYLES } from '@/src/constants/STYLES';

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
          backgroundColor: STYLES.COLORS.PRIMARY[10],
        }}>
        <Text style={{ color: STYLES.COLORS.PRIMARY.MAIN, fontWeight: '700' }}>{props.text}</Text>
      </Button>
    </>
  );
}

interface IProps {
  text: string;
  onPress?: () => void;
}
