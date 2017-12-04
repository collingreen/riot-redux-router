export default {
  route: payload => ({ type: 'ROUTER_GO_ACTION', payload }),
  routeChanged: payload => ({ type: 'ROUTER_ROUTE_CHANGED', payload })
}
