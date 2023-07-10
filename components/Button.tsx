import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface ButtonProps {
  label: string;
  href: any;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#58C436',
    width: '100%',
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Button = ({ label, href }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Link href={href}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {label}
        </Text>
      </Link>
    </View>
  );
};

export default Button;
