import todos, { TodosModel } from './todos';

export interface StoreModel {
  todos: TodosModel;
}

const models: StoreModel = { todos };

export default models;