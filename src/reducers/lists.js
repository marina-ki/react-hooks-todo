import {
  CREATE_LIST,
  UPDATE_LIST,
  DELETE_LIST
} from '../actions'

const lists = (state = [], action) => {
  switch(action.type) {
    case CREATE_LIST:
      const list = { title: action.title }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...list }]
    case UPDATE_LIST:
      return state.map(list => list.id === action.id ? {...list, title: action.title, body: action.body} : list)
    case DELETE_LIST:   
      return state.filter(list => list.id !== action.id)
    default:
      return state
  }
}

export default lists;