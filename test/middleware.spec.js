/* global riot */
var expect = require('chai').expect

var redux = require('redux')
var route = require('riot-route')
var rrr = require('../src/')

var reducers = redux.combineReducers({ router: rrr.reducer })
var middleware = redux.compose(redux.applyMiddleware(rrr.middleware))
var store = redux.createStore(reducers, {}, middleware)

describe('test middleware and reducers', function () {
  it('sets the correct state in redux when changing route', function () {
    route('/foo/bar/baz')
    var state = store.getState()
    expect(state.router).to.eql({ current_url: ['foo', 'bar', 'baz'], previous_url: '' })
  })

  it('retains the previous url in state when changing route', function () {
    route('/')
    var state = store.getState()
    expect(state.router).to.eql({ current_url: [''], previous_url: ['foo', 'bar', 'baz'] })
  })
})
