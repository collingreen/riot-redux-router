/* global riot */
const expect = require('chai').expect
import route from 'riot-route'
import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
import { reducer, middleware as rrrMiddleware } from '../modules/'

const reducers = combineReducers({ router: reducer })
const middleware = compose(applyMiddleware(rrrMiddleware))
const store = createStore(reducers, {}, middleware)

describe('test middleware and reducers', function () {
  it('sets the correct state in redux when changing route', function () {
    route('/foo/bar/baz')
    const state = store.getState()
    expect(state.router).to.eql({ current_url: 'foo/bar/baz', previous_url: '' })
  })

  it('retains the previous url in state when changing route', function () {
    route('/')
    const state = store.getState()
    expect(state.router).to.eql({ current_url: '', previous_url: 'foo/bar/baz' })
  })
})
