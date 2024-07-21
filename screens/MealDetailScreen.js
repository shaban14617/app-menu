import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../components/store/redux/favorites';

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoritePressHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoritePressHandler}
            color={'white'}
            icon={mealIsFavorite ? 'star' : 'star-outline'}
          />
        );
      },
    });
  }, [navigation, changeFavoritePressHandler]);

  return (
    <ScrollView style={styles.rootContainers}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        textStyle={{ color: 'white' }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainers: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  listItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  listOuterContainer: {
    textAlign: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
