import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealOverviewScreen() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={MEALS}
        key={(item) => item.id}
        renderItem={(itemData) => <View>{itemData.item.id}</View>}
      /> */}
      <Text>Meal Over View</Text>
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
