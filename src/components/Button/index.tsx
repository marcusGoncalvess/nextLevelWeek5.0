import React, { ReactNode } from 'react';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    height: 56,
    borderRadius: 16,
  },
  text: {
    fontFamily: fonts.heading,
    fontSize: 16,
    color: colors.white,
  },
});

export default Button;
