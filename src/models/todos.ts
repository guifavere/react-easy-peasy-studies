import { Action, action } from 'easy-peasy';

export interface TodosModel {
  items: string[];
  add: Action<TodosModel, string>;
  delete: Action<TodosModel, string>;
}

const todos: TodosModel = {
  items: ['todo 1', 'todo 2', 'todo 3'],
  add: action((state, payload) => {
    state.items.push(payload);
  }),
  delete: action((state, payload) => {
    state.items = state.items.filter(item => item !== payload);
  })
}

export default todos;