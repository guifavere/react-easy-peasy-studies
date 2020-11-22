import { Action, Thunk, action, thunk } from 'easy-peasy';

export interface TodosModel {
  items: string[];
  asyncAdd: Thunk<TodosModel, string>;
  add: Action<TodosModel, string>;
  delete: Action<TodosModel, string>;
}

const todos: TodosModel = {
  items: ['todo 1', 'todo 2', 'todo 3'],
  asyncAdd: thunk(async (actions, payload) => {
    setTimeout(() => actions.add(payload), 2000);
  }),
  add: action((state, payload) => {
    const item = state.items.find(i => i === payload);

    if (!item) {
      state.items.push(payload);
    }
  }),
  delete: action((state, payload) => {
    state.items = state.items.filter(item => item !== payload);
  })
}

export default todos;