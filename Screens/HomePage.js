import React from 'react';
import { ScrollView, StyleSheet, Animated } from 'react-native';
import Card from '../Components/Card';

export default function HomePage() {
  const scrollY = new Animated.Value(0);
  const bgColor = scrollY.interpolate({
    inputRange: [0, 500],
    outputRange: ['rgb(128,128,128)', 'rgb(144,238,144)'],
  });

  return (
    <Animated.ScrollView 
      style={{...styles.container, backgroundColor: bgColor}}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: false}
      )}
      scrollEventThrottle={16}
    >
      <Card title="Profile" image="https://images.pexels.com/photos/4503264/pexels-photo-4503264.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card title="My Plants" image="https://images.pexels.com/photos/2845269/pexels-photo-2845269.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card title="Water Calendar" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtng22JSXehZSR6SFVjziVMKjiFuJrwCpraTzfXtAgTZN9sa1uvAFIdg4gvNSIbvFD28&usqp=CAU" />
      <Card title="Plant Identifier" image="https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card title="Garden Layout" image="https://images.pexels.com/photos/3192175/pexels-photo-3192175.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card title="Explore" image="https://images.pexels.com/photos/2086862/pexels-photo-2086862.jpeg?auto=compress&cs=tinysrgb&w=400" />
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20
  },
});
