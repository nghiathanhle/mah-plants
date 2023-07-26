import React from 'react';
import { Button } from 'react-native';

export default function MyButton({ text, onPress }) {
  return <Button title={text} onPress={onPress} />;
}
