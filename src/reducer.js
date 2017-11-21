var actions = require('./actions')

module.exports = function (state, action) {
  state = state || { current_url: '' }

  switch (action.type) {
    case actions.ROUTER_ROUTE_CHANGED:
      return Object.assign({}, state, {
        current_url: action.payload,
        previous_url: state.current_url
      })
    default:
      return state
  }
}
