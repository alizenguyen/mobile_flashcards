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
function getDeck (deck) {
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

//SAVE DECK ACTION CREATOR
export function saveDeck (title) {
  return {
    type: SAVE_DECK_TITLE, 
      title,
  }
}

//ADD CARD ACTION CREATOR
export function addCardToDeck (title, card) {
  return {
    type: ADD_CARD_TO_DECK, 
      title,
      card
  }
}

// export const addingCardToDeck= (qID, card) => {
//   console.log(qID)
//   console.log(card)
//   return dispatch => {
//     return handleAddCardToDeck(qID, card).then(response => dispatch(addCardToDeck(response)))
//   }
// }