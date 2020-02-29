import {
  CREATE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
} from '../actions'

const todos = (state = [], action) => {
  switch(action.type) {
    case CREATE_TODO:
      const todo = { listId: action.listId, title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...todo }]
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case DELETE_ALL_TODOS:
      return [];
    default:
      return state
  }
}

export default todos;