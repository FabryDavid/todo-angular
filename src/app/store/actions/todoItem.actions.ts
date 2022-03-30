import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../../classes/todoItem';

export const addItemAction = createAction('[TODO ITEM] Add', props<{ payload: TodoItem }>());
export const removeItemAction = createAction('[TODO ITEM] Remove', props<{ id: string }>());
