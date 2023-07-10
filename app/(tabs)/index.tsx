import { Image, ImageBackground, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Button from '../../components/Button';
import DropdownSelector from '../../components/DropDown';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function TabOneScreen() {
  const [from, setFrom] = useState<any>({});
  const [to, setTo] = useState<any>({});

  console.log(to);
  return (
    <View style={styles.bg}>
      <View
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          marginBottom: 50,
        }}
      >
        <Image source={require('../../assets/images/logo.png')} style={{ width: 163, height: 48 }} />
      </View>

      <Image
        source={require('../../assets/images/cover.png')}
        style={{ width: '100%', height: 180, marginBottom: 50 }}
      />

      <View style={{ width: '100%', marginBottom: 50 }}>
        <Text style={{ fontSize: 11, marginBottom: 5 }}>SENDING FROM</Text>
        <DropdownSelector setItem={setFrom} />

        <Text style={{ fontSize: 11, marginBottom: 5, marginTop: 20 }}>SENDING TO</Text>
        <DropdownSelector setItem={setTo} />
      </View>

      <Button
        label="Find best transfer rates"
        href={{
          pathname: '/two',
          params: { to: to.code || 'us', from: from.code || 'zm' },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 70,
    padding: 20,
  },
});
