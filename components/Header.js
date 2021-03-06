import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export const Header = () => {
  const [fontLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf')
  });

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return <Title>JUST DO IT!</Title>
  };
};

const Title = styled.Text`
  font-family: 'Inter-Regular, Arial, Helvetica, sans-serif';  
  font-size: 36px;
  color: #C8553D;
  font-weight: bold;
  text-align: center;
  background-color: #FFD5C2;
  padding: 120px 20px 20px 20px;
  text-shadow: 1px 1px 4px #959695;
`;