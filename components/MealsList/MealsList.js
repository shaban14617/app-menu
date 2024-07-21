import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../MealItem';

function MealsList({ items }) {
  function renderMealsItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealsItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
