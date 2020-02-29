import {
  CREATE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  DONE_TODO,
  UPDATE_TODO
} from '../actions'

const todos = (state = [], action) => {
  switch(action.type) {
    case CREATE_TODO:
      const todo = { listId: action.listId, title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...todo }]
    case DELETE_TODO:
      console.log(state)
      return state.filter(todo => todo.id !== action.id)
    case DELETE_ALL_TODOS:
      return [];
    case UPDATE_TODO:
      return state.map(todo => todo.id === action.id ? {...todo, title: action.title, body: action.body} : todo)
    case DONE_TODO:
      return state.map(todo => todo.id === action.id ? {...todo, listId: "done"} : todo)
    default:
      return state
  }
}

export default todos;