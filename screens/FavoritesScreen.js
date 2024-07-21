import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { useContext } from 'react';
import { FavoritesContext } from '../components/store/context/Favorite-context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

function FavoritesScreen() {
  const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textContainer}>
          {' '}
          You have no favorite meals yet.
        </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  textContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ccc',
  },
});
