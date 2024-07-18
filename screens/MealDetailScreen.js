import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
      />
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.listItem}>
            {ingredient}
          </Text>
        ))}
        <Text style={styles.subtitle}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <Text key={step} style={styles.listItem}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  listContainer: {
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});
