import { CheckBox } from '@rneui/themed';
import React from 'react';

export default function MainCheckbox(props: IProps) {
  return (
    <CheckBox
      title={props.label}
      checked={props.checked || false}
      containerStyle={{
        backgroundColor: 'transparent',
        margin: 0,
        padding: 0,
        width: '100%',
      }}
      onPress={() => props.onChange && props.onChange(!props.checked)}
    />
  );
}

interface IProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}
