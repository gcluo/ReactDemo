const homepage = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.condition
    default:
      return state
  }
}

export default homepage
