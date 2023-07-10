import { StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const goBack = () => router.back();

  console.log(params);

  const url = 'https://www.monito.com/en/compare/transfer/gb/zm/gbp/usd/2000';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Remittance Providers</Text>
      </View>
      <WebView source={{ uri: url }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    height: 60,
    backgroundColor: '#58C436',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 15,
  },
  webview: {
    flex: 1,
  },
});
