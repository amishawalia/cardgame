import { createStore } from "redux";

const initialState = {
  turns:0,
  openedCards:[],
  indexes:[]
};
const gameReducer = (state = initialState, action) => {
  
    if (action.type === 'opened') {
        return {
            ...state,
            openedCards:[...state.openedCards, action.value]
        }
    }
    if (action.type === 'closed') {
        return {
            ...state,
            openedCards:['open']
        }
    }
    if (action.type === 'matched') {
        return {
            ...state,
            openedCards:[]
        }
    }
    if (action.type === 'add') {
        return {
            ...state,
            turns: state.turns + 1
        }
    }

    if (action.type === 'reset') {
        return {
            turns:0,
            openedCards:[],
            match:''
        }
    }
    if (action.type === '') {
        return {
            ...state,
            indexes:[...state.indexes,action.value]
        }
    }
  return state;
};
const gameStore = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default gameStore;
