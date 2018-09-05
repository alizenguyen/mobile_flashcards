import { AsyncStorage } from 'react-native'

export function handleGetDecks () {
  return AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (err, stores) => {
      stores.map((result, i, store) => {
        // get at each store's key/value so you can work with it
        let key = store[i][0];
        let value = store[i][1];

        if (value) {
          return {
            key,
            title: value.title,
            questions: value.questions
          };
        }
      });
    });
  });
}

export function handleGetDeck (key) {
  return AsyncStorage.getItem(key);
}

export function handleSaveDeckTitle (title) {
  return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
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
  });
}