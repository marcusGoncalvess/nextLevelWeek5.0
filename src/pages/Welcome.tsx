import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas {'\n'} de forma fácil
      </Text>
      <Image style={styles.image} source={wateringImg} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>{'>'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: '50@vs',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: '20@vs',
    height: 56,
    width: 56,
  },
  image: {
    width: 292,
    height: 284,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});

export default Welcome;
