import { StyleSheet, Text, View } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 6,
  },
});
