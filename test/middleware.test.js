var assert = require('chai').assert

var redux = require('redux')
var route = require('riot-route')
var rrr = require('../src/')

var reducers = redux.combineReducers({
  router: rrr.reducer
})
var middleware = redux.compose(redux.applyMiddleware(rrr.middleware))
var store = redux.createStore(reducers, {}, middleware)

describe('#store', function() {
  it('should start with an empty string current_url', function() {
    var state = store.getState()
    assert.equal(state.router.current_url, '');
  })

  it('should store the current route in the state', function() {
    var targetUrl = '/foo/bar/baz'
    route(targetUrl)
    var state = store.getState()
    assert.equal(
      state.router.current_url,
      targetUrl.substr(1)  // remove leading slash
    )
  })

  it('should update the route as it changes', function() {
    var firstUrl = '/foo'
    var secondUrl = '/bar'

    route(firstUrl)
    route(secondUrl)

    var state = store.getState()
    assert.equal(
      state.router.current_url,
      secondUrl.substr(1)  // remove leading slash
    )
  })

  it('should store previous_url', function() {
    var firstUrl = '/foo'
    var secondUrl = '/bar'

    route(firstUrl)
    route(secondUrl)

    var state = store.getState()
    assert.equal(
      state.router.previous_url,
      firstUrl.substr(1)  // remove leading slash
    )
    assert.equal(
      state.router.current_url,
      secondUrl.substr(1)  // remove leading slash
    )
  })

})
