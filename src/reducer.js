import createReducer from 'redux-action-reducer'

module.exports = createReducer(
  ['ROUTER_ROUTE_CHANGED', (state, payload) =>
    ({ ...state, current_url: payload, previous_url: state.current_url })]
)({ current_url: '' })
