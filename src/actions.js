var ROUTER_GO_ACTION = 'ROUTER_GO_ACTION'
var ROUTER_ROUTE_CHANGED = 'ROUTER_ROUTE_CHANGED'

module.exports = {
  ROUTER_GO_ACTION: ROUTER_GO_ACTION,
  ROUTER_ROUTE_CHANGED: ROUTER_ROUTE_CHANGED,

  route: route,
  routeChanged: routeChanged
}

// dispatch this to change the route
function route (url) {
  return {
    type: ROUTER_GO_ACTION,
    data: url
  }
}

// dispatched by the middleware
function routeChanged (url) {
  return {
    type: 'ROUTER_ROUTE_CHANGED',
    data: url
  }
}
