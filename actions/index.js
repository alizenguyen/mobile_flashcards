import { handleGetDeck, handleGetDecks, handleSaveDeckTitle, handleAddCardToDeck } from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

//GET ALL DECKS ACTION CREATOR
function getDecks (decks) {
  return {
    type: GET_DECKS, 
      decks,
  }
}

export const loadDecks = () => {
  return dispatch => {
    return handleGetDecks().then(response => dispatch(getDecks(response)))
  }
}

//GET ONE DECK ACTION CREATOR
export function getDeck (deck) {
  return {
    type: GET_DECK, 
      deck,
  }
}

export const loadDeck = (deck) => {
  return dispatch => {
    return handleGetDeck(deck).then(response => dispatch(getDeck(response)))
  }
}

// //SAVE DECK ACTION CREATOR
// function saveDeck (title) {
//   return {
//     type: SAVE_DECK_TITLE, 
//       title,
//   }
// }

// export const savingDeck = (deck) => {
//   console.log(deck)
//   return dispatch => {
//     return handleSaveDeckTitle(deck).then(response => dispatch(saveDeck(response)))
//   }
// }

//ADD CARD ACTION CREATOR
export function addCardToDeck (dID, card) {
  return {
    type: ADD_CARD_TO_DECK, 
      dID,
      card
  }
}