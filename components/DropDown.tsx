import React, { useState } from 'react';
import { View, Text, Modal, TouchableHighlight, FlatList, TouchableOpacity, Image } from 'react-native';

export default function DropdownSelector({ setItem }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select Country');
  const data = [
    {
      name: 'USA',
      flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.png',
      code: 'us',
    },
    {
      name: 'UK',
      flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.png',
      code: 'gb',
    },
    {
      name: 'Canada',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.png',
      code: 'ca',
    },
    {
      name: 'Australia',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.png',
      code: 'au',
    },
    {
      name: 'Germany',
      flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.png',
      code: 'de',
    },
    {
      name: 'France',
      flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.png',
      code: 'fr',
    },
    {
      name: 'China',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.png',
      code: 'cn',
    },
    {
      name: 'India',
      flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.png',
      code: 'in',
    },
    {
      name: 'Philippines',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.png',
      code: 'ph',
    },
    {
      name: 'Mexico',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.png',
      code: 'mx',
    },
    {
      name: 'Zambia',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.png',
      code: 'zm',
    },
  ];

  const ListItem = ({ item, setItem }: any) => {
    return (
      <TouchableHighlight
        underlayColor="#DDD"
        onPress={() => {
          setSelectedItem(item.name);
          setIsVisible(false);
          console.log(item);
          setItem(item);
        }}
        style={{
          padding: 10,
          height: 50,
          borderBottomWidth: 1,
          borderColor: '#CCC',
          borderWidth: 1,
          alignItems: 'center',
          width: 300,
          marginBottom: 10,
          flexDirection: 'row',
          borderRadius: 10,
        }}
      >
        {/* <Image source={item.flag} style={{ width: 50, height: 50 }} /> */}
        <Text>{item.name}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <View style={{ width: '100%' }}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View
          style={{
            marginTop: 50,
            backgroundColor: 'white',
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            flex: 1,
            width: '100%',
          }}
        >
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={{
              position: 'absolute',
              top: 0,
              right: 20,
            }}
          >
            <Text style={{ fontSize: 16 }}>Close</Text>
          </TouchableOpacity>
          <FlatList
            data={data}
            renderItem={({ item }) => <ListItem item={item} setItem={setItem} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={{
          width: '100%',
          borderRadius: 10,
          height: 56,
          borderWidth: 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#CCC',
        }}
      >
        <Text style={{ fontSize: 18, color: 'grey' }}>{selectedItem || 'Select a country to send from'}</Text>
      </TouchableOpacity>
    </View>
  );
}
