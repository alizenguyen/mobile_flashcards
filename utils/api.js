import { AsyncStorage } from 'react-native'

export function handleGetDecks() {
  return AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet(keys).then(stores => {
      return stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = JSON.parse(store[i][1]);

        if (value) {
          return {
            key,
            title: value.title,
            questions: value.questions
          };
        }
      }).filter(items => {
        if (items) {
          return typeof items.questions !== 'undefined'
        }
      });
    });
  });
}

export function handleGetDeck (key) {
  return AsyncStorage.getItem(key);
}

export function handleSaveDeckTitle (title) {
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] })).then(console.log('added'));
  } catch (error) {
    console.log(error);
  }
}

export function handleAddCardToDeck (title, card) {
  AsyncStorage.getItem(title).then(deck => {
    const data = JSON.parse(deck);
    let questions = data.questions;

    questions.push(card);

    //merges the updated deck with the old one
    AsyncStorage.mergeItem(title, JSON.stringify({
      questions
    }));
  }).then(console.log("DONE"));
}