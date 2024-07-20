import { Text, View, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text key={dataPoint} style={styles.itemText}>
        {dataPoint}
      </Text>
    </View>
  ));
}

export default List;
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 9,
    marginVertical: 4,
    marginHorizontal: 40,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
