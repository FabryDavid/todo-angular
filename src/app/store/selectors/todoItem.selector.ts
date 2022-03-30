import { createSelector } from '@ngrx/store';
import { TodoItem } from '../../classes/todoItem';

export const selectAllTodo = (state: Array<TodoItem>) => state;

// export const selectTodoItems = createSelector(
  // (state: Array<TodoItem>) => state
// );
