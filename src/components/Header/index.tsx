import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../styles/colors';
import userImg from '../../assets/marcus.png';
import fonts from '../../styles/fonts';

const Header = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function getName() {
      const name = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(name || '');
    }

    getName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá, </Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image style={styles.image} source={userImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
    paddingHorizontal: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
});

export default Header;
