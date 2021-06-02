const INITIAL_STATE = {
  authorized: false,
  clients: [],
  users: [{ login: 'admin@admin', password: 'admin' }],
};

function myReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        clients: [...state.clients, action.payload],
      }
    case 'REMOVE':
      return {
        ...state,
        clients: [...state.clients.filter((entry) => entry.name !== action.payload)]
      }
    case 'LOGIN':
      return {
        ...state,
        authorized: true,
      }
    default:
      return state;
  }
}

export default myReducer;