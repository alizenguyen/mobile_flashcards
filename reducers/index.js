import { GET_DECKS, GET_DECK, SAVE_DECK_TITLE, ADD_CARD_TO_DECK } from '../actions/index'

function decks (state = {}, action) {
  switch (action.type) {
    case GET_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case GET_DECK : 
      return {
        ...state,
        ...action.deck,
      }
    case SAVE_DECK_TITLE : 
      return {
        ...state,
        [action.deck.name]: action.deck
      }
    case ADD_CARD_TO_DECK : 
      return {
        ...state,
        [action.dID]: {
          ...state[dID],
          [action.questions]: state[dID][questions].concat(action.card)
        }  
      }
    default :
      return state
  }
}

export default decks