import { addItemAction, removeItemAction } from '../actions/todoItem.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { TodoItem } from '../../classes/todoItem';

const localStorageKey = 'todoItems';
const localStorageValue = localStorage.getItem(localStorageKey);
const initialState: Array<TodoItem> = localStorageValue ? JSON.parse(<string>localStorageValue) : [];

export const reducer = createReducer(
  initialState,
  on(addItemAction, (state, action) => {
    const newState = [...state, action.payload];

    localStorage.setItem(localStorageKey, JSON.stringify(newState));

    return newState;
  }),
  on(removeItemAction, (state, action) => {
    const newState = [...state];

    for (let i = 0; i < newState.length; i++) {
      if (newState[i]._id === action.id) {
        newState.splice(i, 1);
        break;
      }
    }

    console.log(newState);

    localStorage.setItem(localStorageKey, JSON.stringify(newState));
    return newState;
  })
);

export function TodoItemReducer(state: Array<TodoItem> | undefined, action: Action) {
  return reducer(state, action);
}
