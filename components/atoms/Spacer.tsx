import { View } from 'react-native';

export function Spacer(props: IProps) {
  return <View style={{ height: props.y || 0, width: props.x || 0 }} />;
}

interface IProps {
  y?: number;
  x?: number;
}
