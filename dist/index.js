/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  route: function route(payload) {
    return { type: 'ROUTER_GO_ACTION', payload: payload };
  },
  routeChanged: function routeChanged(payload) {
    return { type: 'ROUTER_ROUTE_CHANGED', payload: payload };
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reducer = __webpack_require__(3);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(0);

var _actions2 = _interopRequireDefault(_actions);

var _middleware = __webpack_require__(5);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  reducer: _reducer2.default,
  actions: _actions2.default,
  middleware: _middleware2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActionReducer = __webpack_require__(4);

var _reduxActionReducer2 = _interopRequireDefault(_reduxActionReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _reduxActionReducer2.default)(['ROUTER_ROUTE_CHANGED', function (state, payload) {
  return _extends({}, state, { current_url: payload, previous_url: state.current_url });
}])({ current_url: '' });

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var payloadPassThrough = function payloadPassThrough(state, payload) {
    return payload;
};

var createReducer = function createReducer() {
    for (var _len = arguments.length, actionHandlers = Array(_len), _key = 0; _key < _len; _key++) {
        actionHandlers[_key] = arguments[_key];
    }

    return function () {
        var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        var actions = actionHandlers.reduce(function (acc, actionSpec) {
            actionSpec = [].concat(actionSpec);
            var last = actionSpec.slice(-1)[0];
            var actionReducer = typeof last === 'function' ? last : payloadPassThrough;
            var actionTypes = actionReducer === payloadPassThrough ? actionSpec : actionSpec.slice(0, -1);

            actionTypes.forEach(function (actionType) {
                return acc[actionType] = actionReducer;
            });
            return acc;
        }, {});

        return function (state, _ref) {
            var type = _ref.type,
                payload = _ref.payload,
                error = _ref.error;

            if (actions[type]) {
                return actions[type](state, payload, error);
            }

            return typeof state === 'undefined' ? defaultValue : state;
        };
    };
};

exports.default = createReducer;
var whenError = exports.whenError = function whenError() {
    var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : payloadPassThrough;
    return function (state, payload, error) {
        return error ? reducer(state, payload) : state;
    };
};

var whenSuccess = exports.whenSuccess = function whenSuccess() {
    var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : payloadPassThrough;
    return function (state, payload, error) {
        return error ? state : reducer(state, payload);
    };
};

var extendReducer = exports.extendReducer = function extendReducer(reducer) {
    return function () {
        for (var _len2 = arguments.length, actionHandlers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            actionHandlers[_key2] = arguments[_key2];
        }

        return function () {
            var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var extraReducer = createReducer.apply(undefined, actionHandlers)(defaultValue);
            return function (state, action) {
                return extraReducer(reducer(state, action), action);
            };
        };
    };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _riotRoute = __webpack_require__(6);

var _riotRoute2 = _interopRequireDefault(_riotRoute);

var _actions = __webpack_require__(0);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// URL separator for riot router
var separator = '/';

function riotRouterMiddleware(_ref) {
  var dispatch = _ref.dispatch;
  var getState = _ref.getState;

  // listen for riot router changes - re-dispatch with routeChanged
  (0, _riotRoute2.default)(function () {
    var args = Array.prototype.slice.call(arguments);
    dispatch(_actions2.default.routeChanged(args));
  });

  // set the base route separator
  _riotRoute2.default.base(separator);

  // start listening to routes immediately
  _riotRoute2.default.start(true);

  return function (next) {
    return function (action) {
      // allow everything except ROUTER_GO_ACTION through
      if (action.type !== 'ROUTER_GO_ACTION') {
        next(action);
      }
    };
  };
}
module.exports = riotRouterMiddleware;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_riot_observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_riot_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_riot_observable__);


/**
 * Simple client-side router
 * @module riot-route
 */

var RE_ORIGIN = /^.+?\/\/+[^/]+/;
var EVENT_LISTENER = 'EventListener';
var REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER;
var ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER;
var HAS_ATTRIBUTE = 'hasAttribute';
var POPSTATE = 'popstate';
var HASHCHANGE = 'hashchange';
var TRIGGER = 'trigger';
var MAX_EMIT_STACK_LEVEL = 3;
var win = typeof window != 'undefined' && window;
var doc = typeof document != 'undefined' && document;
var hist = win && history;
var loc = win && (hist.location || win.location);
var prot = Router.prototype;
var clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click';
var central = __WEBPACK_IMPORTED_MODULE_0_riot_observable___default()();

var started = false;
var routeFound = false;
var debouncedEmit;
var base;
var current;
var parser;
var secondParser;
var emitStack = [];
var emitStackLevel = 0;

/**
 * Default parser. You can replace it via router.parser method.
 * @param {string} path - current path (normalized)
 * @returns {array} array
 */
function DEFAULT_PARSER(path) {
  return path.split(/[/?#]/)
}

/**
 * Default parser (second). You can replace it via router.parser method.
 * @param {string} path - current path (normalized)
 * @param {string} filter - filter string (normalized)
 * @returns {array} array
 */
function DEFAULT_SECOND_PARSER(path, filter) {
  var f = filter
    .replace(/\?/g, '\\?')
    .replace(/\*/g, '([^/?#]+?)')
    .replace(/\.\./, '.*');
  var re = new RegExp(("^" + f + "$"));
  var args = path.match(re);

  if (args) { return args.slice(1) }
}

/**
 * Simple/cheap debounce implementation
 * @param   {function} fn - callback
 * @param   {number} delay - delay in seconds
 * @returns {function} debounced function
 */
function debounce(fn, delay) {
  var t;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, delay);
  }
}

/**
 * Set the window listeners to trigger the routes
 * @param {boolean} autoExec - see route.start
 */
function start(autoExec) {
  debouncedEmit = debounce(emit, 1);
  win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
  win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
  doc[ADD_EVENT_LISTENER](clickEvent, click);
  if (autoExec) { emit(true); }
}

/**
 * Router class
 */
function Router() {
  this.$ = [];
  __WEBPACK_IMPORTED_MODULE_0_riot_observable___default()(this); // make it observable
  central.on('stop', this.s.bind(this));
  central.on('emit', this.e.bind(this));
}

function normalize(path) {
  return path.replace(/^\/|\/$/, '')
}

function isString(str) {
  return typeof str == 'string'
}

/**
 * Get the part after domain name
 * @param {string} href - fullpath
 * @returns {string} path from root
 */
function getPathFromRoot(href) {
  return (href || loc.href).replace(RE_ORIGIN, '')
}

/**
 * Get the part after base
 * @param {string} href - fullpath
 * @returns {string} path from base
 */
function getPathFromBase(href) {
  return base[0] === '#'
    ? (href || loc.href || '').split(base)[1] || ''
    : (loc ? getPathFromRoot(href) : href || '').replace(base, '')
}

function emit(force) {
  // the stack is needed for redirections
  var isRoot = emitStackLevel === 0;
  if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) { return }

  emitStackLevel++;
  emitStack.push(function() {
    var path = getPathFromBase();
    if (force || path !== current) {
      central[TRIGGER]('emit', path);
      current = path;
    }
  });
  if (isRoot) {
    var first;
    while (first = emitStack.shift()) { first(); } // stack increses within this call
    emitStackLevel = 0;
  }
}

function click(e) {
  if (
    e.which !== 1 // not left click
    || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
    || e.defaultPrevented // or default prevented
  ) { return }

  var el = e.target;
  while (el && el.nodeName !== 'A') { el = el.parentNode; }

  if (
    !el || el.nodeName !== 'A' // not A tag
    || el[HAS_ATTRIBUTE]('download') // has download attr
    || !el[HAS_ATTRIBUTE]('href') // has no href attr
    || el.target && el.target !== '_self' // another window or frame
    || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) === -1 // cross origin
  ) { return }

  if (el.href !== loc.href
    && (
      el.href.split('#')[0] === loc.href.split('#')[0] // internal jump
      || base[0] !== '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
      || base[0] === '#' && el.href.split(base)[0] !== loc.href.split(base)[0] // outside of #base
      || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
    )) { return }

  e.preventDefault();
}

/**
 * Go to the path
 * @param {string} path - destination path
 * @param {string} title - page title
 * @param {boolean} shouldReplace - use replaceState or pushState
 * @returns {boolean} - route not found flag
 */
function go(path, title, shouldReplace) {
  // Server-side usage: directly execute handlers for the path
  if (!hist) { return central[TRIGGER]('emit', getPathFromBase(path)) }

  path = base + normalize(path);
  title = title || doc.title;
  // browsers ignores the second parameter `title`
  shouldReplace
    ? hist.replaceState(null, title, path)
    : hist.pushState(null, title, path);
  // so we need to set it manually
  doc.title = title;
  routeFound = false;
  emit();
  return routeFound
}

/**
 * Go to path or set action
 * a single string:                go there
 * two strings:                    go there with setting a title
 * two strings and boolean:        replace history with setting a title
 * a single function:              set an action on the default route
 * a string/RegExp and a function: set an action on the route
 * @param {(string|function)} first - path / action / filter
 * @param {(string|RegExp|function)} second - title / action
 * @param {boolean} third - replace flag
 */
prot.m = function(first, second, third) {
  if (isString(first) && (!second || isString(second))) { go(first, second, third || false); }
  else if (second) { this.r(first, second); }
  else { this.r('@', first); }
};

/**
 * Stop routing
 */
prot.s = function() {
  this.off('*');
  this.$ = [];
};

/**
 * Emit
 * @param {string} path - path
 */
prot.e = function(path) {
  this.$.concat('@').some(function(filter) {
    var args = (filter === '@' ? parser : secondParser)(normalize(path), normalize(filter));
    if (typeof args != 'undefined') {
      this[TRIGGER].apply(null, [filter].concat(args));
      return routeFound = true // exit from loop
    }
  }, this);
};

/**
 * Register route
 * @param {string} filter - filter for matching to url
 * @param {function} action - action to register
 */
prot.r = function(filter, action) {
  if (filter !== '@') {
    filter = '/' + normalize(filter);
    this.$.push(filter);
  }
  this.on(filter, action);
};

var mainRouter = new Router();
var route = mainRouter.m.bind(mainRouter);

/**
 * Create a sub router
 * @returns {function} the method of a new Router object
 */
route.create = function() {
  var newSubRouter = new Router();
  // assign sub-router's main method
  var router = newSubRouter.m.bind(newSubRouter);
  // stop only this sub-router
  router.stop = newSubRouter.s.bind(newSubRouter);
  return router
};

/**
 * Set the base of url
 * @param {(str|RegExp)} arg - a new base or '#' or '#!'
 */
route.base = function(arg) {
  base = arg || '#';
  current = getPathFromBase(); // recalculate current path
};

/** Exec routing right now **/
route.exec = function() {
  emit(true);
};

/**
 * Replace the default router to yours
 * @param {function} fn - your parser function
 * @param {function} fn2 - your secondParser function
 */
route.parser = function(fn, fn2) {
  if (!fn && !fn2) {
    // reset parser for testing...
    parser = DEFAULT_PARSER;
    secondParser = DEFAULT_SECOND_PARSER;
  }
  if (fn) { parser = fn; }
  if (fn2) { secondParser = fn2; }
};

/**
 * Helper function to get url query as an object
 * @returns {object} parsed query
 */
route.query = function() {
  var q = {};
  var href = loc.href || current;
  href.replace(/[?&](.+?)=([^&]*)/g, function(_, k, v) { q[k] = v; });
  return q
};

/** Stop routing **/
route.stop = function () {
  if (started) {
    if (win) {
      win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
      win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
      doc[REMOVE_EVENT_LISTENER](clickEvent, click);
    }
    central[TRIGGER]('stop');
    started = false;
  }
};

/**
 * Start routing
 * @param {boolean} autoExec - automatically exec after starting if true
 */
route.start = function (autoExec) {
  if (!started) {
    if (win) {
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        start(autoExec);
      }
      else {
        document.onreadystatechange = function () {
          if (document.readyState === 'interactive') {
            // the timeout is needed to solve
            // a weird safari bug https://github.com/riot/route/issues/33
            setTimeout(function() { start(autoExec); }, 1);
          }
        };
      }
    }
    started = true;
  }
};

/** Prepare the router **/
route.base();
route.parser();

/* harmony default export */ __webpack_exports__["default"] = (route);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

;(function(window, undefined) {var observable = function(el) {

  /**
   * Extend the original object or create a new empty one
   * @type { Object }
   */

  el = el || {}

  /**
   * Private variables
   */
  var callbacks = {},
    slice = Array.prototype.slice

  /**
   * Public Api
   */

  // extend the el object adding the observable methods
  Object.defineProperties(el, {
    /**
     * Listen to the given `event` ands
     * execute the `callback` each time an event is triggered.
     * @param  { String } event - event id
     * @param  { Function } fn - callback function
     * @returns { Object } el
     */
    on: {
      value: function(event, fn) {
        if (typeof fn == 'function')
          (callbacks[event] = callbacks[event] || []).push(fn)
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Removes the given `event` listeners
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    off: {
      value: function(event, fn) {
        if (event == '*' && !fn) callbacks = {}
        else {
          if (fn) {
            var arr = callbacks[event]
            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
              if (cb == fn) arr.splice(i--, 1)
            }
          } else delete callbacks[event]
        }
        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Listen to the given `event` and
     * execute the `callback` at most once
     * @param   { String } event - event id
     * @param   { Function } fn - callback function
     * @returns { Object } el
     */
    one: {
      value: function(event, fn) {
        function on() {
          el.off(event, on)
          fn.apply(el, arguments)
        }
        return el.on(event, on)
      },
      enumerable: false,
      writable: false,
      configurable: false
    },

    /**
     * Execute all callback functions that listen to
     * the given `event`
     * @param   { String } event - event id
     * @returns { Object } el
     */
    trigger: {
      value: function(event) {

        // getting the arguments
        var arglen = arguments.length - 1,
          args = new Array(arglen),
          fns,
          fn,
          i

        for (i = 0; i < arglen; i++) {
          args[i] = arguments[i + 1] // skip first argument
        }

        fns = slice.call(callbacks[event] || [], 0)

        for (i = 0; fn = fns[i]; ++i) {
          fn.apply(el, args)
        }

        if (callbacks['*'] && event != '*')
          el.trigger.apply(el, ['*', event].concat(args))

        return el
      },
      enumerable: false,
      writable: false,
      configurable: false
    }
  })

  return el

}
  /* istanbul ignore next */
  // support CommonJS, AMD & browser
  if (true)
    module.exports = observable
  else if (typeof define === 'function' && define.amd)
    define(function() { return observable })
  else
    window.observable = observable

})(typeof window != 'undefined' ? window : undefined);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmY2YzFkMTYwZDVlNGYyMGI1MTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1hY3Rpb24tcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmlvdC1yb3V0ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Jpb3Qtb2JzZXJ2YWJsZS9kaXN0L29ic2VydmFibGUuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJvdXRlIiwicGF5bG9hZCIsInR5cGUiLCJyb3V0ZUNoYW5nZWQiLCJyZWR1Y2VyIiwiYWN0aW9ucyIsIm1pZGRsZXdhcmUiLCJzdGF0ZSIsImN1cnJlbnRfdXJsIiwicHJldmlvdXNfdXJsIiwic2VwYXJhdG9yIiwicmlvdFJvdXRlck1pZGRsZXdhcmUiLCJfcmVmIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImFyZ3MiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImJhc2UiLCJzdGFydCIsIm5leHQiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFF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Q0E7O0FBRUEsQ0FBQyxxRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJmNmMxZDE2MGQ1ZTRmMjBiNTE2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdXRlOiAocGF5bG9hZCkgPT4gKHsgdHlwZTogJ1JPVVRFUl9HT19BQ1RJT04nLCBwYXlsb2FkIH0pLFxuICByb3V0ZUNoYW5nZWQ6IChwYXlsb2FkKSA9PiAoeyB0eXBlOiAnUk9VVEVSX1JPVVRFX0NIQU5HRUQnLCBwYXlsb2FkIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy5qcyIsImltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZSdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlZHVjZXIsXG4gIGFjdGlvbnMsXG4gIG1pZGRsZXdhcmVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJ3JlZHV4LWFjdGlvbi1yZWR1Y2VyJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJlZHVjZXIoXG4gIFsnUk9VVEVSX1JPVVRFX0NIQU5HRUQnLCAoc3RhdGUsIHBheWxvYWQpID0+XG4gICAgKHsgLi4uc3RhdGUsIGN1cnJlbnRfdXJsOiBwYXlsb2FkLCBwcmV2aW91c191cmw6IHN0YXRlLmN1cnJlbnRfdXJsIH0pXVxuKSh7IGN1cnJlbnRfdXJsOiAnJyB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBwYXlsb2FkUGFzc1Rocm91Z2ggPSBmdW5jdGlvbiBwYXlsb2FkUGFzc1Rocm91Z2goc3RhdGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gcGF5bG9hZDtcbn07XG5cbnZhciBjcmVhdGVSZWR1Y2VyID0gZnVuY3Rpb24gY3JlYXRlUmVkdWNlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYWN0aW9uSGFuZGxlcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYWN0aW9uSGFuZGxlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblxuICAgICAgICB2YXIgYWN0aW9ucyA9IGFjdGlvbkhhbmRsZXJzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhY3Rpb25TcGVjKSB7XG4gICAgICAgICAgICBhY3Rpb25TcGVjID0gW10uY29uY2F0KGFjdGlvblNwZWMpO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSBhY3Rpb25TcGVjLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb25SZWR1Y2VyID0gdHlwZW9mIGxhc3QgPT09ICdmdW5jdGlvbicgPyBsYXN0IDogcGF5bG9hZFBhc3NUaHJvdWdoO1xuICAgICAgICAgICAgdmFyIGFjdGlvblR5cGVzID0gYWN0aW9uUmVkdWNlciA9PT0gcGF5bG9hZFBhc3NUaHJvdWdoID8gYWN0aW9uU3BlYyA6IGFjdGlvblNwZWMuc2xpY2UoMCwgLTEpO1xuXG4gICAgICAgICAgICBhY3Rpb25UeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY1thY3Rpb25UeXBlXSA9IGFjdGlvblJlZHVjZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBfcmVmKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gX3JlZi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yID0gX3JlZi5lcnJvcjtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uc1t0eXBlXShzdGF0ZSwgcGF5bG9hZCwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IHN0YXRlO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWR1Y2VyO1xudmFyIHdoZW5FcnJvciA9IGV4cG9ydHMud2hlbkVycm9yID0gZnVuY3Rpb24gd2hlbkVycm9yKCkge1xuICAgIHZhciByZWR1Y2VyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBwYXlsb2FkUGFzc1Rocm91Z2g7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgcGF5bG9hZCwgZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yID8gcmVkdWNlcihzdGF0ZSwgcGF5bG9hZCkgOiBzdGF0ZTtcbiAgICB9O1xufTtcblxudmFyIHdoZW5TdWNjZXNzID0gZXhwb3J0cy53aGVuU3VjY2VzcyA9IGZ1bmN0aW9uIHdoZW5TdWNjZXNzKCkge1xuICAgIHZhciByZWR1Y2VyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBwYXlsb2FkUGFzc1Rocm91Z2g7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgcGF5bG9hZCwgZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yID8gc3RhdGUgOiByZWR1Y2VyKHN0YXRlLCBwYXlsb2FkKTtcbiAgICB9O1xufTtcblxudmFyIGV4dGVuZFJlZHVjZXIgPSBleHBvcnRzLmV4dGVuZFJlZHVjZXIgPSBmdW5jdGlvbiBleHRlbmRSZWR1Y2VyKHJlZHVjZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFjdGlvbkhhbmRsZXJzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIGFjdGlvbkhhbmRsZXJzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblxuICAgICAgICAgICAgdmFyIGV4dHJhUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIuYXBwbHkodW5kZWZpbmVkLCBhY3Rpb25IYW5kbGVycykoZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHRyYVJlZHVjZXIocmVkdWNlcihzdGF0ZSwgYWN0aW9uKSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtYWN0aW9uLXJlZHVjZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJvdXRlIGZyb20gJ3Jpb3Qtcm91dGUnXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5cbi8vIFVSTCBzZXBhcmF0b3IgZm9yIHJpb3Qgcm91dGVyXG5jb25zdCBzZXBhcmF0b3IgPSAnLydcblxuZnVuY3Rpb24gcmlvdFJvdXRlck1pZGRsZXdhcmUgKF9yZWYpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoXG4gIGNvbnN0IGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZVxuXG4gIC8vIGxpc3RlbiBmb3IgcmlvdCByb3V0ZXIgY2hhbmdlcyAtIHJlLWRpc3BhdGNoIHdpdGggcm91dGVDaGFuZ2VkXG4gIHJvdXRlKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgIGRpc3BhdGNoKGFjdGlvbnMucm91dGVDaGFuZ2VkKGFyZ3MpKVxuICB9KVxuXG4gIC8vIHNldCB0aGUgYmFzZSByb3V0ZSBzZXBhcmF0b3JcbiAgcm91dGUuYmFzZShzZXBhcmF0b3IpXG5cbiAgLy8gc3RhcnQgbGlzdGVuaW5nIHRvIHJvdXRlcyBpbW1lZGlhdGVseVxuICByb3V0ZS5zdGFydCh0cnVlKVxuXG4gIHJldHVybiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgIC8vIGFsbG93IGV2ZXJ5dGhpbmcgZXhjZXB0IFJPVVRFUl9HT19BQ1RJT04gdGhyb3VnaFxuICAgIGlmIChhY3Rpb24udHlwZSAhPT0gJ1JPVVRFUl9HT19BQ1RJT04nKSB7XG4gICAgICBuZXh0KGFjdGlvbilcbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gcmlvdFJvdXRlck1pZGRsZXdhcmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9taWRkbGV3YXJlLmpzIiwiaW1wb3J0IG9ic2VydmFibGUgZnJvbSAncmlvdC1vYnNlcnZhYmxlJztcblxuLyoqXG4gKiBTaW1wbGUgY2xpZW50LXNpZGUgcm91dGVyXG4gKiBAbW9kdWxlIHJpb3Qtcm91dGVcbiAqL1xuXG52YXIgUkVfT1JJR0lOID0gL14uKz9cXC9cXC8rW14vXSsvO1xudmFyIEVWRU5UX0xJU1RFTkVSID0gJ0V2ZW50TGlzdGVuZXInO1xudmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9ICdyZW1vdmUnICsgRVZFTlRfTElTVEVORVI7XG52YXIgQUREX0VWRU5UX0xJU1RFTkVSID0gJ2FkZCcgKyBFVkVOVF9MSVNURU5FUjtcbnZhciBIQVNfQVRUUklCVVRFID0gJ2hhc0F0dHJpYnV0ZSc7XG52YXIgUE9QU1RBVEUgPSAncG9wc3RhdGUnO1xudmFyIEhBU0hDSEFOR0UgPSAnaGFzaGNoYW5nZSc7XG52YXIgVFJJR0dFUiA9ICd0cmlnZ2VyJztcbnZhciBNQVhfRU1JVF9TVEFDS19MRVZFTCA9IDM7XG52YXIgd2luID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3c7XG52YXIgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnICYmIGRvY3VtZW50O1xudmFyIGhpc3QgPSB3aW4gJiYgaGlzdG9yeTtcbnZhciBsb2MgPSB3aW4gJiYgKGhpc3QubG9jYXRpb24gfHwgd2luLmxvY2F0aW9uKTtcbnZhciBwcm90ID0gUm91dGVyLnByb3RvdHlwZTtcbnZhciBjbGlja0V2ZW50ID0gZG9jICYmIGRvYy5vbnRvdWNoc3RhcnQgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xudmFyIGNlbnRyYWwgPSBvYnNlcnZhYmxlKCk7XG5cbnZhciBzdGFydGVkID0gZmFsc2U7XG52YXIgcm91dGVGb3VuZCA9IGZhbHNlO1xudmFyIGRlYm91bmNlZEVtaXQ7XG52YXIgYmFzZTtcbnZhciBjdXJyZW50O1xudmFyIHBhcnNlcjtcbnZhciBzZWNvbmRQYXJzZXI7XG52YXIgZW1pdFN0YWNrID0gW107XG52YXIgZW1pdFN0YWNrTGV2ZWwgPSAwO1xuXG4vKipcbiAqIERlZmF1bHQgcGFyc2VyLiBZb3UgY2FuIHJlcGxhY2UgaXQgdmlhIHJvdXRlci5wYXJzZXIgbWV0aG9kLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBjdXJyZW50IHBhdGggKG5vcm1hbGl6ZWQpXG4gKiBAcmV0dXJucyB7YXJyYXl9IGFycmF5XG4gKi9cbmZ1bmN0aW9uIERFRkFVTFRfUEFSU0VSKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguc3BsaXQoL1svPyNdLylcbn1cblxuLyoqXG4gKiBEZWZhdWx0IHBhcnNlciAoc2Vjb25kKS4gWW91IGNhbiByZXBsYWNlIGl0IHZpYSByb3V0ZXIucGFyc2VyIG1ldGhvZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gY3VycmVudCBwYXRoIChub3JtYWxpemVkKVxuICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIGZpbHRlciBzdHJpbmcgKG5vcm1hbGl6ZWQpXG4gKiBAcmV0dXJucyB7YXJyYXl9IGFycmF5XG4gKi9cbmZ1bmN0aW9uIERFRkFVTFRfU0VDT05EX1BBUlNFUihwYXRoLCBmaWx0ZXIpIHtcbiAgdmFyIGYgPSBmaWx0ZXJcbiAgICAucmVwbGFjZSgvXFw/L2csICdcXFxcPycpXG4gICAgLnJlcGxhY2UoL1xcKi9nLCAnKFteLz8jXSs/KScpXG4gICAgLnJlcGxhY2UoL1xcLlxcLi8sICcuKicpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKChcIl5cIiArIGYgKyBcIiRcIikpO1xuICB2YXIgYXJncyA9IHBhdGgubWF0Y2gocmUpO1xuXG4gIGlmIChhcmdzKSB7IHJldHVybiBhcmdzLnNsaWNlKDEpIH1cbn1cblxuLyoqXG4gKiBTaW1wbGUvY2hlYXAgZGVib3VuY2UgaW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gZm4gLSBjYWxsYmFja1xuICogQHBhcmFtICAge251bWJlcn0gZGVsYXkgLSBkZWxheSBpbiBzZWNvbmRzXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IGRlYm91bmNlZCBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgZGVsYXkpIHtcbiAgdmFyIHQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgIHQgPSBzZXRUaW1lb3V0KGZuLCBkZWxheSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdGhlIHdpbmRvdyBsaXN0ZW5lcnMgdG8gdHJpZ2dlciB0aGUgcm91dGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9FeGVjIC0gc2VlIHJvdXRlLnN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHN0YXJ0KGF1dG9FeGVjKSB7XG4gIGRlYm91bmNlZEVtaXQgPSBkZWJvdW5jZShlbWl0LCAxKTtcbiAgd2luW0FERF9FVkVOVF9MSVNURU5FUl0oUE9QU1RBVEUsIGRlYm91bmNlZEVtaXQpO1xuICB3aW5bQUREX0VWRU5UX0xJU1RFTkVSXShIQVNIQ0hBTkdFLCBkZWJvdW5jZWRFbWl0KTtcbiAgZG9jW0FERF9FVkVOVF9MSVNURU5FUl0oY2xpY2tFdmVudCwgY2xpY2spO1xuICBpZiAoYXV0b0V4ZWMpIHsgZW1pdCh0cnVlKTsgfVxufVxuXG4vKipcbiAqIFJvdXRlciBjbGFzc1xuICovXG5mdW5jdGlvbiBSb3V0ZXIoKSB7XG4gIHRoaXMuJCA9IFtdO1xuICBvYnNlcnZhYmxlKHRoaXMpOyAvLyBtYWtlIGl0IG9ic2VydmFibGVcbiAgY2VudHJhbC5vbignc3RvcCcsIHRoaXMucy5iaW5kKHRoaXMpKTtcbiAgY2VudHJhbC5vbignZW1pdCcsIHRoaXMuZS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXlxcL3xcXC8kLywgJycpXG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIEdldCB0aGUgcGFydCBhZnRlciBkb21haW4gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgLSBmdWxscGF0aFxuICogQHJldHVybnMge3N0cmluZ30gcGF0aCBmcm9tIHJvb3RcbiAqL1xuZnVuY3Rpb24gZ2V0UGF0aEZyb21Sb290KGhyZWYpIHtcbiAgcmV0dXJuIChocmVmIHx8IGxvYy5ocmVmKS5yZXBsYWNlKFJFX09SSUdJTiwgJycpXG59XG5cbi8qKlxuICogR2V0IHRoZSBwYXJ0IGFmdGVyIGJhc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIC0gZnVsbHBhdGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHBhdGggZnJvbSBiYXNlXG4gKi9cbmZ1bmN0aW9uIGdldFBhdGhGcm9tQmFzZShocmVmKSB7XG4gIHJldHVybiBiYXNlWzBdID09PSAnIydcbiAgICA/IChocmVmIHx8IGxvYy5ocmVmIHx8ICcnKS5zcGxpdChiYXNlKVsxXSB8fCAnJ1xuICAgIDogKGxvYyA/IGdldFBhdGhGcm9tUm9vdChocmVmKSA6IGhyZWYgfHwgJycpLnJlcGxhY2UoYmFzZSwgJycpXG59XG5cbmZ1bmN0aW9uIGVtaXQoZm9yY2UpIHtcbiAgLy8gdGhlIHN0YWNrIGlzIG5lZWRlZCBmb3IgcmVkaXJlY3Rpb25zXG4gIHZhciBpc1Jvb3QgPSBlbWl0U3RhY2tMZXZlbCA9PT0gMDtcbiAgaWYgKE1BWF9FTUlUX1NUQUNLX0xFVkVMIDw9IGVtaXRTdGFja0xldmVsKSB7IHJldHVybiB9XG5cbiAgZW1pdFN0YWNrTGV2ZWwrKztcbiAgZW1pdFN0YWNrLnB1c2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBhdGggPSBnZXRQYXRoRnJvbUJhc2UoKTtcbiAgICBpZiAoZm9yY2UgfHwgcGF0aCAhPT0gY3VycmVudCkge1xuICAgICAgY2VudHJhbFtUUklHR0VSXSgnZW1pdCcsIHBhdGgpO1xuICAgICAgY3VycmVudCA9IHBhdGg7XG4gICAgfVxuICB9KTtcbiAgaWYgKGlzUm9vdCkge1xuICAgIHZhciBmaXJzdDtcbiAgICB3aGlsZSAoZmlyc3QgPSBlbWl0U3RhY2suc2hpZnQoKSkgeyBmaXJzdCgpOyB9IC8vIHN0YWNrIGluY3Jlc2VzIHdpdGhpbiB0aGlzIGNhbGxcbiAgICBlbWl0U3RhY2tMZXZlbCA9IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xpY2soZSkge1xuICBpZiAoXG4gICAgZS53aGljaCAhPT0gMSAvLyBub3QgbGVmdCBjbGlja1xuICAgIHx8IGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSAvLyBvciBtZXRhIGtleXNcbiAgICB8fCBlLmRlZmF1bHRQcmV2ZW50ZWQgLy8gb3IgZGVmYXVsdCBwcmV2ZW50ZWRcbiAgKSB7IHJldHVybiB9XG5cbiAgdmFyIGVsID0gZS50YXJnZXQ7XG4gIHdoaWxlIChlbCAmJiBlbC5ub2RlTmFtZSAhPT0gJ0EnKSB7IGVsID0gZWwucGFyZW50Tm9kZTsgfVxuXG4gIGlmIChcbiAgICAhZWwgfHwgZWwubm9kZU5hbWUgIT09ICdBJyAvLyBub3QgQSB0YWdcbiAgICB8fCBlbFtIQVNfQVRUUklCVVRFXSgnZG93bmxvYWQnKSAvLyBoYXMgZG93bmxvYWQgYXR0clxuICAgIHx8ICFlbFtIQVNfQVRUUklCVVRFXSgnaHJlZicpIC8vIGhhcyBubyBocmVmIGF0dHJcbiAgICB8fCBlbC50YXJnZXQgJiYgZWwudGFyZ2V0ICE9PSAnX3NlbGYnIC8vIGFub3RoZXIgd2luZG93IG9yIGZyYW1lXG4gICAgfHwgZWwuaHJlZi5pbmRleE9mKGxvYy5ocmVmLm1hdGNoKFJFX09SSUdJTilbMF0pID09PSAtMSAvLyBjcm9zcyBvcmlnaW5cbiAgKSB7IHJldHVybiB9XG5cbiAgaWYgKGVsLmhyZWYgIT09IGxvYy5ocmVmXG4gICAgJiYgKFxuICAgICAgZWwuaHJlZi5zcGxpdCgnIycpWzBdID09PSBsb2MuaHJlZi5zcGxpdCgnIycpWzBdIC8vIGludGVybmFsIGp1bXBcbiAgICAgIHx8IGJhc2VbMF0gIT09ICcjJyAmJiBnZXRQYXRoRnJvbVJvb3QoZWwuaHJlZikuaW5kZXhPZihiYXNlKSAhPT0gMCAvLyBvdXRzaWRlIG9mIGJhc2VcbiAgICAgIHx8IGJhc2VbMF0gPT09ICcjJyAmJiBlbC5ocmVmLnNwbGl0KGJhc2UpWzBdICE9PSBsb2MuaHJlZi5zcGxpdChiYXNlKVswXSAvLyBvdXRzaWRlIG9mICNiYXNlXG4gICAgICB8fCAhZ28oZ2V0UGF0aEZyb21CYXNlKGVsLmhyZWYpLCBlbC50aXRsZSB8fCBkb2MudGl0bGUpIC8vIHJvdXRlIG5vdCBmb3VuZFxuICAgICkpIHsgcmV0dXJuIH1cblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8qKlxuICogR28gdG8gdGhlIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gZGVzdGluYXRpb24gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gcGFnZSB0aXRsZVxuICogQHBhcmFtIHtib29sZWFufSBzaG91bGRSZXBsYWNlIC0gdXNlIHJlcGxhY2VTdGF0ZSBvciBwdXNoU3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHJvdXRlIG5vdCBmb3VuZCBmbGFnXG4gKi9cbmZ1bmN0aW9uIGdvKHBhdGgsIHRpdGxlLCBzaG91bGRSZXBsYWNlKSB7XG4gIC8vIFNlcnZlci1zaWRlIHVzYWdlOiBkaXJlY3RseSBleGVjdXRlIGhhbmRsZXJzIGZvciB0aGUgcGF0aFxuICBpZiAoIWhpc3QpIHsgcmV0dXJuIGNlbnRyYWxbVFJJR0dFUl0oJ2VtaXQnLCBnZXRQYXRoRnJvbUJhc2UocGF0aCkpIH1cblxuICBwYXRoID0gYmFzZSArIG5vcm1hbGl6ZShwYXRoKTtcbiAgdGl0bGUgPSB0aXRsZSB8fCBkb2MudGl0bGU7XG4gIC8vIGJyb3dzZXJzIGlnbm9yZXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIgYHRpdGxlYFxuICBzaG91bGRSZXBsYWNlXG4gICAgPyBoaXN0LnJlcGxhY2VTdGF0ZShudWxsLCB0aXRsZSwgcGF0aClcbiAgICA6IGhpc3QucHVzaFN0YXRlKG51bGwsIHRpdGxlLCBwYXRoKTtcbiAgLy8gc28gd2UgbmVlZCB0byBzZXQgaXQgbWFudWFsbHlcbiAgZG9jLnRpdGxlID0gdGl0bGU7XG4gIHJvdXRlRm91bmQgPSBmYWxzZTtcbiAgZW1pdCgpO1xuICByZXR1cm4gcm91dGVGb3VuZFxufVxuXG4vKipcbiAqIEdvIHRvIHBhdGggb3Igc2V0IGFjdGlvblxuICogYSBzaW5nbGUgc3RyaW5nOiAgICAgICAgICAgICAgICBnbyB0aGVyZVxuICogdHdvIHN0cmluZ3M6ICAgICAgICAgICAgICAgICAgICBnbyB0aGVyZSB3aXRoIHNldHRpbmcgYSB0aXRsZVxuICogdHdvIHN0cmluZ3MgYW5kIGJvb2xlYW46ICAgICAgICByZXBsYWNlIGhpc3Rvcnkgd2l0aCBzZXR0aW5nIGEgdGl0bGVcbiAqIGEgc2luZ2xlIGZ1bmN0aW9uOiAgICAgICAgICAgICAgc2V0IGFuIGFjdGlvbiBvbiB0aGUgZGVmYXVsdCByb3V0ZVxuICogYSBzdHJpbmcvUmVnRXhwIGFuZCBhIGZ1bmN0aW9uOiBzZXQgYW4gYWN0aW9uIG9uIHRoZSByb3V0ZVxuICogQHBhcmFtIHsoc3RyaW5nfGZ1bmN0aW9uKX0gZmlyc3QgLSBwYXRoIC8gYWN0aW9uIC8gZmlsdGVyXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwfGZ1bmN0aW9uKX0gc2Vjb25kIC0gdGl0bGUgLyBhY3Rpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdGhpcmQgLSByZXBsYWNlIGZsYWdcbiAqL1xucHJvdC5tID0gZnVuY3Rpb24oZmlyc3QsIHNlY29uZCwgdGhpcmQpIHtcbiAgaWYgKGlzU3RyaW5nKGZpcnN0KSAmJiAoIXNlY29uZCB8fCBpc1N0cmluZyhzZWNvbmQpKSkgeyBnbyhmaXJzdCwgc2Vjb25kLCB0aGlyZCB8fCBmYWxzZSk7IH1cbiAgZWxzZSBpZiAoc2Vjb25kKSB7IHRoaXMucihmaXJzdCwgc2Vjb25kKTsgfVxuICBlbHNlIHsgdGhpcy5yKCdAJywgZmlyc3QpOyB9XG59O1xuXG4vKipcbiAqIFN0b3Agcm91dGluZ1xuICovXG5wcm90LnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vZmYoJyonKTtcbiAgdGhpcy4kID0gW107XG59O1xuXG4vKipcbiAqIEVtaXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gcGF0aFxuICovXG5wcm90LmUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHRoaXMuJC5jb25jYXQoJ0AnKS5zb21lKGZ1bmN0aW9uKGZpbHRlcikge1xuICAgIHZhciBhcmdzID0gKGZpbHRlciA9PT0gJ0AnID8gcGFyc2VyIDogc2Vjb25kUGFyc2VyKShub3JtYWxpemUocGF0aCksIG5vcm1hbGl6ZShmaWx0ZXIpKTtcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbVFJJR0dFUl0uYXBwbHkobnVsbCwgW2ZpbHRlcl0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIHJldHVybiByb3V0ZUZvdW5kID0gdHJ1ZSAvLyBleGl0IGZyb20gbG9vcFxuICAgIH1cbiAgfSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHJvdXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsdGVyIC0gZmlsdGVyIGZvciBtYXRjaGluZyB0byB1cmxcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGFjdGlvbiAtIGFjdGlvbiB0byByZWdpc3RlclxuICovXG5wcm90LnIgPSBmdW5jdGlvbihmaWx0ZXIsIGFjdGlvbikge1xuICBpZiAoZmlsdGVyICE9PSAnQCcpIHtcbiAgICBmaWx0ZXIgPSAnLycgKyBub3JtYWxpemUoZmlsdGVyKTtcbiAgICB0aGlzLiQucHVzaChmaWx0ZXIpO1xuICB9XG4gIHRoaXMub24oZmlsdGVyLCBhY3Rpb24pO1xufTtcblxudmFyIG1haW5Sb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG52YXIgcm91dGUgPSBtYWluUm91dGVyLm0uYmluZChtYWluUm91dGVyKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBzdWIgcm91dGVyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSBtZXRob2Qgb2YgYSBuZXcgUm91dGVyIG9iamVjdFxuICovXG5yb3V0ZS5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5ld1N1YlJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgLy8gYXNzaWduIHN1Yi1yb3V0ZXIncyBtYWluIG1ldGhvZFxuICB2YXIgcm91dGVyID0gbmV3U3ViUm91dGVyLm0uYmluZChuZXdTdWJSb3V0ZXIpO1xuICAvLyBzdG9wIG9ubHkgdGhpcyBzdWItcm91dGVyXG4gIHJvdXRlci5zdG9wID0gbmV3U3ViUm91dGVyLnMuYmluZChuZXdTdWJSb3V0ZXIpO1xuICByZXR1cm4gcm91dGVyXG59O1xuXG4vKipcbiAqIFNldCB0aGUgYmFzZSBvZiB1cmxcbiAqIEBwYXJhbSB7KHN0cnxSZWdFeHApfSBhcmcgLSBhIG5ldyBiYXNlIG9yICcjJyBvciAnIyEnXG4gKi9cbnJvdXRlLmJhc2UgPSBmdW5jdGlvbihhcmcpIHtcbiAgYmFzZSA9IGFyZyB8fCAnIyc7XG4gIGN1cnJlbnQgPSBnZXRQYXRoRnJvbUJhc2UoKTsgLy8gcmVjYWxjdWxhdGUgY3VycmVudCBwYXRoXG59O1xuXG4vKiogRXhlYyByb3V0aW5nIHJpZ2h0IG5vdyAqKi9cbnJvdXRlLmV4ZWMgPSBmdW5jdGlvbigpIHtcbiAgZW1pdCh0cnVlKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB0aGUgZGVmYXVsdCByb3V0ZXIgdG8geW91cnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0geW91ciBwYXJzZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuMiAtIHlvdXIgc2Vjb25kUGFyc2VyIGZ1bmN0aW9uXG4gKi9cbnJvdXRlLnBhcnNlciA9IGZ1bmN0aW9uKGZuLCBmbjIpIHtcbiAgaWYgKCFmbiAmJiAhZm4yKSB7XG4gICAgLy8gcmVzZXQgcGFyc2VyIGZvciB0ZXN0aW5nLi4uXG4gICAgcGFyc2VyID0gREVGQVVMVF9QQVJTRVI7XG4gICAgc2Vjb25kUGFyc2VyID0gREVGQVVMVF9TRUNPTkRfUEFSU0VSO1xuICB9XG4gIGlmIChmbikgeyBwYXJzZXIgPSBmbjsgfVxuICBpZiAoZm4yKSB7IHNlY29uZFBhcnNlciA9IGZuMjsgfVxufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHVybCBxdWVyeSBhcyBhbiBvYmplY3RcbiAqIEByZXR1cm5zIHtvYmplY3R9IHBhcnNlZCBxdWVyeVxuICovXG5yb3V0ZS5xdWVyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcSA9IHt9O1xuICB2YXIgaHJlZiA9IGxvYy5ocmVmIHx8IGN1cnJlbnQ7XG4gIGhyZWYucmVwbGFjZSgvWz8mXSguKz8pPShbXiZdKikvZywgZnVuY3Rpb24oXywgaywgdikgeyBxW2tdID0gdjsgfSk7XG4gIHJldHVybiBxXG59O1xuXG4vKiogU3RvcCByb3V0aW5nICoqL1xucm91dGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHN0YXJ0ZWQpIHtcbiAgICBpZiAod2luKSB7XG4gICAgICB3aW5bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXShQT1BTVEFURSwgZGVib3VuY2VkRW1pdCk7XG4gICAgICB3aW5bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXShIQVNIQ0hBTkdFLCBkZWJvdW5jZWRFbWl0KTtcbiAgICAgIGRvY1tSRU1PVkVfRVZFTlRfTElTVEVORVJdKGNsaWNrRXZlbnQsIGNsaWNrKTtcbiAgICB9XG4gICAgY2VudHJhbFtUUklHR0VSXSgnc3RvcCcpO1xuICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydCByb3V0aW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9FeGVjIC0gYXV0b21hdGljYWxseSBleGVjIGFmdGVyIHN0YXJ0aW5nIGlmIHRydWVcbiAqL1xucm91dGUuc3RhcnQgPSBmdW5jdGlvbiAoYXV0b0V4ZWMpIHtcbiAgaWYgKCFzdGFydGVkKSB7XG4gICAgaWYgKHdpbikge1xuICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICBzdGFydChhdXRvRXhlYyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgICAvLyB0aGUgdGltZW91dCBpcyBuZWVkZWQgdG8gc29sdmVcbiAgICAgICAgICAgIC8vIGEgd2VpcmQgc2FmYXJpIGJ1ZyBodHRwczovL2dpdGh1Yi5jb20vcmlvdC9yb3V0ZS9pc3N1ZXMvMzNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHN0YXJ0KGF1dG9FeGVjKTsgfSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFydGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuLyoqIFByZXBhcmUgdGhlIHJvdXRlciAqKi9cbnJvdXRlLmJhc2UoKTtcbnJvdXRlLnBhcnNlcigpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Jpb3Qtcm91dGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjsoZnVuY3Rpb24od2luZG93LCB1bmRlZmluZWQpIHt2YXIgb2JzZXJ2YWJsZSA9IGZ1bmN0aW9uKGVsKSB7XG5cbiAgLyoqXG4gICAqIEV4dGVuZCB0aGUgb3JpZ2luYWwgb2JqZWN0IG9yIGNyZWF0ZSBhIG5ldyBlbXB0eSBvbmVcbiAgICogQHR5cGUgeyBPYmplY3QgfVxuICAgKi9cblxuICBlbCA9IGVsIHx8IHt9XG5cbiAgLyoqXG4gICAqIFByaXZhdGUgdmFyaWFibGVzXG4gICAqL1xuICB2YXIgY2FsbGJhY2tzID0ge30sXG4gICAgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxuICAvKipcbiAgICogUHVibGljIEFwaVxuICAgKi9cblxuICAvLyBleHRlbmQgdGhlIGVsIG9iamVjdCBhZGRpbmcgdGhlIG9ic2VydmFibGUgbWV0aG9kc1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlbCwge1xuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byB0aGUgZ2l2ZW4gYGV2ZW50YCBhbmRzXG4gICAgICogZXhlY3V0ZSB0aGUgYGNhbGxiYWNrYCBlYWNoIHRpbWUgYW4gZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICAgICAqIEBwYXJhbSAgeyBTdHJpbmcgfSBldmVudCAtIGV2ZW50IGlkXG4gICAgICogQHBhcmFtICB7IEZ1bmN0aW9uIH0gZm4gLSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZWxcbiAgICAgKi9cbiAgICBvbjoge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKGV2ZW50LCBmbikge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgKGNhbGxiYWNrc1tldmVudF0gPSBjYWxsYmFja3NbZXZlbnRdIHx8IFtdKS5wdXNoKGZuKVxuICAgICAgICByZXR1cm4gZWxcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gYGV2ZW50YCBsaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0gICB7IFN0cmluZyB9IGV2ZW50IC0gZXZlbnQgaWRcbiAgICAgKiBAcGFyYW0gICB7IEZ1bmN0aW9uIH0gZm4gLSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZWxcbiAgICAgKi9cbiAgICBvZmY6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbihldmVudCwgZm4pIHtcbiAgICAgICAgaWYgKGV2ZW50ID09ICcqJyAmJiAhZm4pIGNhbGxiYWNrcyA9IHt9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgdmFyIGFyciA9IGNhbGxiYWNrc1tldmVudF1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBjYjsgY2IgPSBhcnIgJiYgYXJyW2ldOyArK2kpIHtcbiAgICAgICAgICAgICAgaWYgKGNiID09IGZuKSBhcnIuc3BsaWNlKGktLSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgZGVsZXRlIGNhbGxiYWNrc1tldmVudF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIHRoZSBnaXZlbiBgZXZlbnRgIGFuZFxuICAgICAqIGV4ZWN1dGUgdGhlIGBjYWxsYmFja2AgYXQgbW9zdCBvbmNlXG4gICAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBldmVudCAtIGV2ZW50IGlkXG4gICAgICogQHBhcmFtICAgeyBGdW5jdGlvbiB9IGZuIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGVsXG4gICAgICovXG4gICAgb25lOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oZXZlbnQsIGZuKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uKCkge1xuICAgICAgICAgIGVsLm9mZihldmVudCwgb24pXG4gICAgICAgICAgZm4uYXBwbHkoZWwsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWwub24oZXZlbnQsIG9uKVxuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIGFsbCBjYWxsYmFjayBmdW5jdGlvbnMgdGhhdCBsaXN0ZW4gdG9cbiAgICAgKiB0aGUgZ2l2ZW4gYGV2ZW50YFxuICAgICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gZXZlbnQgLSBldmVudCBpZFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZWxcbiAgICAgKi9cbiAgICB0cmlnZ2VyOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAvLyBnZXR0aW5nIHRoZSBhcmd1bWVudHNcbiAgICAgICAgdmFyIGFyZ2xlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxLFxuICAgICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoYXJnbGVuKSxcbiAgICAgICAgICBmbnMsXG4gICAgICAgICAgZm4sXG4gICAgICAgICAgaVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmdsZW47IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdIC8vIHNraXAgZmlyc3QgYXJndW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIGZucyA9IHNsaWNlLmNhbGwoY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSwgMClcblxuICAgICAgICBmb3IgKGkgPSAwOyBmbiA9IGZuc1tpXTsgKytpKSB7XG4gICAgICAgICAgZm4uYXBwbHkoZWwsIGFyZ3MpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2tzWycqJ10gJiYgZXZlbnQgIT0gJyonKVxuICAgICAgICAgIGVsLnRyaWdnZXIuYXBwbHkoZWwsIFsnKicsIGV2ZW50XS5jb25jYXQoYXJncykpXG5cbiAgICAgICAgcmV0dXJuIGVsXG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBlbFxuXG59XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIC8vIHN1cHBvcnQgQ29tbW9uSlMsIEFNRCAmIGJyb3dzZXJcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JylcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG9ic2VydmFibGVcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIG9ic2VydmFibGUgfSlcbiAgZWxzZVxuICAgIHdpbmRvdy5vYnNlcnZhYmxlID0gb2JzZXJ2YWJsZVxuXG59KSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yaW90LW9ic2VydmFibGUvZGlzdC9vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=