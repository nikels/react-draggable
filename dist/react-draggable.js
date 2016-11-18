(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react"), require("react-dom"));
	else
		root["ReactDraggable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1).default;
	module.exports.DraggableCore = __webpack_require__(9).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(8);
	
	var _shims = __webpack_require__(6);
	
	var _DraggableCore = __webpack_require__(9);
	
	var _DraggableCore2 = _interopRequireDefault(_DraggableCore);
	
	var _log = __webpack_require__(11);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// $FlowIgnore
	
	
	/*:: import type {DraggableEventHandler} from './utils/types';*/
	/*:: type DraggableState = {
	  dragging: boolean,
	  dragged: boolean,
	  x: number, y: number,
	  slackX: number, slackY: number,
	  isElementSVG: boolean
	};*/
	
	
	//
	// Define <Draggable>
	//
	
	/*:: type ConstructorProps = {
	  position: { x: number, y: number },
	  defaultPosition: { x: number, y: number }
	};*/
	
	var Draggable = function (_React$Component) {
	  _inherits(Draggable, _React$Component);
	
	  function Draggable(props /*: ConstructorProps*/) {
	    _classCallCheck(this, Draggable);
	
	    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));
	
	    _this.onDragStart = function (e, coreData) {
	      (0, _log2.default)('Draggable: onDragStart: %j', coreData);
	
	      // Short-circuit if user's callback killed it.
	      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_this, coreData));
	      // Kills start event on core as well, so move handlers are never bound.
	      if (shouldStart === false) return false;
	
	      _this.setState({ dragging: true, dragged: true });
	    };
	
	    _this.onDrag = function (e, coreData) {
	      if (!_this.state.dragging) return false;
	      (0, _log2.default)('Draggable: onDrag: %j', coreData);
	
	      var uiData = (0, _positionFns.createDraggableData)(_this, coreData);
	
	      var newState /*: $Shape<DraggableState>*/ = {
	        x: uiData.x,
	        y: uiData.y
	      };
	
	      // Keep within bounds.
	      if (_this.props.bounds) {
	        // Save original x and y.
	        var _x = newState.x,
	            _y = newState.y;
	
	        // Add slack to the values used to calculate bound position. This will ensure that if
	        // we start removing slack, the element won't react to it right away until it's been
	        // completely removed.
	
	        newState.x += _this.state.slackX;
	        newState.y += _this.state.slackY;
	
	        // Get bound position. This will ceil/floor the x and y within the boundaries.
	        // $FlowBug
	
	        // Recalculate slack by noting how much was shaved by the boundPosition handler.
	        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_this, newState.x, newState.y);
	
	        var _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);
	
	        newState.x = _getBoundPosition2[0];
	        newState.y = _getBoundPosition2[1];
	        newState.slackX = _this.state.slackX + (_x - newState.x);
	        newState.slackY = _this.state.slackY + (_y - newState.y);
	
	        // Update the event we fire to reflect what really happened after bounds took effect.
	        uiData.x = _x;
	        uiData.y = _y;
	        uiData.deltaX = newState.x - _this.state.x;
	        uiData.deltaY = newState.y - _this.state.y;
	      }
	
	      // Short-circuit if user's callback killed it.
	      var shouldUpdate = _this.props.onDrag(e, uiData);
	      if (shouldUpdate === false) return false;
	
	      _this.setState(newState);
	    };
	
	    _this.onDragStop = function (e, coreData) {
	      if (!_this.state.dragging) return false;
	
	      // Short-circuit if user's callback killed it.
	      var shouldStop = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_this, coreData));
	      if (shouldStop === false) return false;
	
	      (0, _log2.default)('Draggable: onDragStop: %j', coreData);
	
	      var newState /*: $Shape<DraggableState>*/ = {
	        dragging: false,
	        slackX: 0,
	        slackY: 0
	      };
	
	      // If this is a controlled component, the result of this operation will be to
	      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
	      var controlled = Boolean(_this.props.position);
	      if (controlled) {
	        var _this$props$position = _this.props.position,
	            _x2 = _this$props$position.x,
	            _y2 = _this$props$position.y;
	
	        newState.x = _x2;
	        newState.y = _y2;
	      }
	
	      _this.setState(newState);
	    };
	
	    _this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,
	
	      // Whether or not we have been dragged before.
	      dragged: false,
	
	      // Current transform x and y.
	      x: props.position ? props.position.x : props.defaultPosition.x,
	      y: props.position ? props.position.y : props.defaultPosition.y,
	
	      // Used for compensating for out-of-bounds drags
	      slackX: 0, slackY: 0,
	
	      // Can only determine if SVG after mounting
	      isElementSVG: false
	    };
	    return _this;
	  }
	
	  _createClass(Draggable, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
	        // eslint-disable-next-line
	        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Check to see if the element passed is an instanceof SVGElement
	      if (typeof SVGElement !== 'undefined' && _reactDom2.default.findDOMNode(this) instanceof SVGElement) {
	        this.setState({ isElementSVG: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps /*: Object*/) {
	      // Set x/y if position has changed
	      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
	        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
	    }
	  }, {
	    key: 'render',
	    value: function render() /*: React.Element<any>*/ {
	      var _classNames;
	
	      var style = {},
	          svgTransform = null;
	
	      // If this is controlled, we don't want to move it - unless it's dragging.
	      var controlled = Boolean(this.props.position);
	      var draggable = !controlled || this.state.dragging;
	
	      var position = this.props.position || this.props.defaultPosition;
	      var transformOpts = {
	        // Set left if horizontal drag is enabled
	        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : position.x,
	
	        // Set top if vertical drag is enabled
	        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : position.y
	      };
	
	      // If this element was SVG, we use the `transform` attribute.
	      if (this.state.isElementSVG) {
	        svgTransform = (0, _domFns.createSVGTransform)(transformOpts);
	      } else {
	        // Add a CSS transform to move the element around. This allows us to move the element around
	        // without worrying about whether or not it is relatively or absolutely positioned.
	        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	        // has a clean slate.
	        style = (0, _domFns.createCSSTransform)(transformOpts);
	      }
	
	      var _props = this.props,
	          defaultClassName = _props.defaultClassName,
	          defaultClassNameDragging = _props.defaultClassNameDragging,
	          defaultClassNameDragged = _props.defaultClassNameDragged;
	
	      // Mark with class while dragging
	
	      var className = (0, _classnames2.default)(this.props.children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));
	
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.createElement(
	        _DraggableCore2.default,
	        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
	        _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	          className: className,
	          style: _extends({}, this.props.children.props.style, style),
	          transform: svgTransform
	        })
	      );
	    }
	  }]);
	
	  return Draggable;
	}(_react2.default.Component);
	
	Draggable.displayName = 'Draggable';
	Draggable.propTypes = _extends({}, _DraggableCore2.default.propTypes, {
	
	  /**
	   * `axis` determines which axis the draggable can move.
	   *
	   *  Note that all callbacks will still return data as normal. This only
	   *  controls flushing to the DOM.
	   *
	   * 'both' allows movement horizontally and vertically.
	   * 'x' limits movement to horizontal axis.
	   * 'y' limits movement to vertical axis.
	   * 'none' limits all movement.
	   *
	   * Defaults to 'both'.
	   */
	  axis: _react.PropTypes.oneOf(['both', 'x', 'y', 'none']),
	
	  /**
	   * `bounds` determines the range of movement available to the element.
	   * Available values are:
	   *
	   * 'parent' restricts movement within the Draggable's parent node.
	   *
	   * Alternatively, pass an object with the following properties, all of which are optional:
	   *
	   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	   *
	   * All values are in px.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable bounds={{right: 300, bottom: 300}}>
	   *              <div>Content</div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	    left: _react.PropTypes.number,
	    right: _react.PropTypes.number,
	    top: _react.PropTypes.number,
	    bottom: _react.PropTypes.number
	  }), _react.PropTypes.string, _react.PropTypes.oneOf([false])]),
	
	  defaultClassName: _react.PropTypes.string,
	  defaultClassNameDragging: _react.PropTypes.string,
	  defaultClassNameDragged: _react.PropTypes.string,
	
	  /**
	   * `defaultPosition` specifies the x and y that the dragged item should start at
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  defaultPosition: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  }),
	
	  /**
	   * `position`, if present, defines the current position of the element.
	   *
	   *  This is similar to how form elements in React work - if no `position` is supplied, the component
	   *  is uncontrolled.
	   *
	   * Example:
	   *
	   * ```jsx
	   *      let App = React.createClass({
	   *          render: function () {
	   *              return (
	   *                  <Draggable position={{x: 25, y: 25}}>
	   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	   *                  </Draggable>
	   *              );
	   *          }
	   *      });
	   * ```
	   */
	  position: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number
	  }),
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	});
	Draggable.defaultProps = _extends({}, _DraggableCore2.default.defaultProps, {
	  axis: 'both',
	  bounds: false,
	  defaultClassName: 'react-draggable',
	  defaultClassNameDragging: 'react-draggable-dragging',
	  defaultClassNameDragged: 'react-draggable-dragged',
	  defaultPosition: { x: 0, y: 0 },
	  position: null
	});
	exports.default = Draggable;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.matchesSelector = matchesSelector;
	exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
	exports.addEvent = addEvent;
	exports.removeEvent = removeEvent;
	exports.outerHeight = outerHeight;
	exports.outerWidth = outerWidth;
	exports.innerHeight = innerHeight;
	exports.innerWidth = innerWidth;
	exports.offsetXYFromParent = offsetXYFromParent;
	exports.createCSSTransform = createCSSTransform;
	exports.createSVGTransform = createSVGTransform;
	exports.getTouch = getTouch;
	exports.getTouchIdentifier = getTouchIdentifier;
	exports.addUserSelectStyles = addUserSelectStyles;
	exports.removeUserSelectStyles = removeUserSelectStyles;
	exports.styleHacks = styleHacks;
	
	var _shims = __webpack_require__(6);
	
	var _getPrefix = __webpack_require__(7);
	
	var _getPrefix2 = _interopRequireDefault(_getPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/*:: import type {ControlPosition} from './types';*/
	
	
	var matchesSelectorFunc = '';
	function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
	  if (!matchesSelectorFunc) {
	    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
	      // $FlowIgnore: Doesn't think elements are indexable
	      return (0, _shims.isFunction)(el[method]);
	    });
	  }
	
	  // $FlowIgnore: Doesn't think elements are indexable
	  return el[matchesSelectorFunc].call(el, selector);
	}
	
	// Works up the tree to the draggable itself attempting to match selector.
	function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
	  var node = el;
	  do {
	    if (matchesSelector(node, selector)) return true;
	    if (node === baseNode) return false;
	    node = node.parentNode;
	  } while (node);
	
	  return false;
	}
	
	function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.attachEvent) {
	    el.attachEvent('on' + event, handler);
	  } else if (el.addEventListener) {
	    el.addEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = handler;
	  }
	}
	
	function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
	  if (!el) {
	    return;
	  }
	  if (el.detachEvent) {
	    el.detachEvent('on' + event, handler);
	  } else if (el.removeEventListener) {
	    el.removeEventListener(event, handler, true);
	  } else {
	    // $FlowIgnore: Doesn't think elements are indexable
	    el['on' + event] = null;
	  }
	}
	
	function outerHeight(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetTop which is including margin. See getBoundPosition
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height += (0, _shims.int)(computedStyle.borderTopWidth);
	  height += (0, _shims.int)(computedStyle.borderBottomWidth);
	  return height;
	}
	
	function outerWidth(node /*: HTMLElement*/) /*: number*/ {
	  // This is deliberately excluding margin for our calculations, since we are using
	  // offsetLeft which is including margin. See getBoundPosition
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width += (0, _shims.int)(computedStyle.borderLeftWidth);
	  width += (0, _shims.int)(computedStyle.borderRightWidth);
	  return width;
	}
	function innerHeight(node /*: HTMLElement*/) /*: number*/ {
	  var height = node.clientHeight;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  height -= (0, _shims.int)(computedStyle.paddingTop);
	  height -= (0, _shims.int)(computedStyle.paddingBottom);
	  return height;
	}
	
	function innerWidth(node /*: HTMLElement*/) /*: number*/ {
	  var width = node.clientWidth;
	  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
	  width -= (0, _shims.int)(computedStyle.paddingLeft);
	  width -= (0, _shims.int)(computedStyle.paddingRight);
	  return width;
	}
	
	// Get from offsetParent
	function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
	  var isBody = offsetParent === offsetParent.ownerDocument.body;
	  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
	
	  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
	  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
	
	  return { x: x, y: y };
	}
	
	function createCSSTransform(_ref) /*: Object*/ {
	  var x = _ref.x,
	      y = _ref.y;
	
	  // Replace unitless items with px
	  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix2.default), 'translate(' + x + 'px,' + y + 'px)');
	}
	
	function createSVGTransform(_ref3) /*: string*/ {
	  var x = _ref3.x,
	      y = _ref3.y;
	
	  return 'translate(' + x + ',' + y + ')';
	}
	
	function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
	  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
	    return identifier === t.identifier;
	  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
	    return identifier === t.identifier;
	  });
	}
	
	function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
	  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
	  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
	}
	
	// User-select Hacks:
	//
	// Useful for preventing blue highlights all over everything when dragging.
	var userSelectPrefix = (0, _getPrefix.getPrefix)('user-select');
	var userSelect = (0, _getPrefix.browserPrefixToStyle)('user-select', userSelectPrefix);
	var userSelectStyle = ';' + userSelect + ': none;';
	var userSelectReplaceRegExp = new RegExp(';?' + userSelect + ': none;'); // leading ; not present on IE
	
	// Note we're passing `document` b/c we could be iframed
	function addUserSelectStyles(body /*: HTMLElement*/) {
	  var style = body.getAttribute('style') || '';
	  body.setAttribute('style', style + userSelectStyle);
	}
	
	function removeUserSelectStyles(body /*: HTMLElement*/) {
	  var style = body.getAttribute('style') || '';
	  body.setAttribute('style', style.replace(userSelectReplaceRegExp, ''));
	}
	
	function styleHacks() /*: Object*/ {
	  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Workaround IE pointer events; see #51
	  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	  return _extends({
	    touchAction: 'none'
	  }, childStyle);
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findInArray = findInArray;
	exports.isFunction = isFunction;
	exports.isNum = isNum;
	exports.int = int;
	exports.dontSetMe = dontSetMe;
	
	// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
	  for (var i = 0, length = array.length; i < length; i++) {
	    if (callback.apply(callback, [array[i], i, array])) return array[i];
	  }
	}
	
	function isFunction(func /*: any*/) /*: boolean*/ {
	  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	}
	
	function isNum(num /*: any*/) /*: boolean*/ {
	  return typeof num === 'number' && !isNaN(num);
	}
	
	function int(a /*: string*/) /*: number*/ {
	  return parseInt(a, 10);
	}
	
	function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
	  if (props[propName]) {
	    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPrefix = getPrefix;
	exports.browserPrefixToKey = browserPrefixToKey;
	exports.browserPrefixToStyle = browserPrefixToStyle;
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	function getPrefix() /*: string*/ {
	  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
	
	  // Checking specifically for 'window.document' is for pseudo-browser server-side
	  // environments that define 'window' as the global context.
	  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
	  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
	
	  var style = window.document.documentElement.style;
	
	  if (prop in style) return '';
	
	  for (var i = 0; i < prefixes.length; i++) {
	    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
	  }
	
	  return '';
	}
	
	function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
	}
	
	function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
	  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
	}
	
	function kebabToTitleCase(str /*: string*/) /*: string*/ {
	  var out = '';
	  var shouldCapitalize = true;
	  for (var i = 0; i < str.length; i++) {
	    if (shouldCapitalize) {
	      out += str[i].toUpperCase();
	      shouldCapitalize = false;
	    } else if (str[i] === '-') {
	      shouldCapitalize = true;
	    } else {
	      out += str[i];
	    }
	  }
	  return out;
	}
	
	// Default export is the prefix itself, like 'Moz', 'Webkit', etc
	// Note that you may have to re-test for certain things; for instance, Chrome 50
	// can handle unprefixed `transform`, but not unprefixed `user-select`
	exports.default = getPrefix();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getBoundPosition = getBoundPosition;
	exports.snapToGrid = snapToGrid;
	exports.canDragX = canDragX;
	exports.canDragY = canDragY;
	exports.getControlPosition = getControlPosition;
	exports.createCoreData = createCoreData;
	exports.createDraggableData = createDraggableData;
	
	var _shims = __webpack_require__(6);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domFns = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*:: import type Draggable from '../Draggable';*/
	/*:: import type {Bounds, ControlPosition, DraggableData} from './types';*/
	/*:: import type DraggableCore from '../DraggableCore';*/
	function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
	  // If no bounds, short-circuit and move on
	  if (!draggable.props.bounds) return [x, y];
	
	  // Clone new bounds
	  var bounds = draggable.props.bounds;
	
	  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
	  var node = _reactDom2.default.findDOMNode(draggable);
	
	  if (typeof bounds === 'string') {
	    var ownerDocument = node.ownerDocument;
	
	    var ownerWindow = ownerDocument.defaultView;
	    var boundNode = void 0;
	    if (bounds === 'parent') {
	      boundNode = node.parentNode;
	    } else {
	      boundNode = ownerDocument.querySelector(bounds);
	      if (!boundNode) throw new Error('Bounds selector "' + bounds + '" could not find an element.');
	    }
	    var nodeStyle = ownerWindow.getComputedStyle(node);
	    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
	    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	    bounds = {
	      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft),
	      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop),
	      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft,
	      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop
	    };
	  }
	
	  // Keep x and y below right and bottom limits...
	  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
	  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
	
	  // But above left and top limits.
	  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
	  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
	
	  return [x, y];
	}
	
	function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
	  var x = Math.round(pendingX / grid[0]) * grid[0];
	  var y = Math.round(pendingY / grid[1]) * grid[1];
	  return [x, y];
	}
	
	function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
	}
	
	function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
	  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
	}
	
	// Get {x, y} positions from event.
	function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
	  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
	  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
	  var node = _reactDom2.default.findDOMNode(draggableCore);
	  // User can provide an offsetParent if desired.
	  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
	  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent);
	}
	
	// Create an data object exposed by <DraggableCore>'s events
	function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
	  var state = draggable.state;
	  var isStart = !(0, _shims.isNum)(state.lastX);
	
	  if (isStart) {
	    // If this is our first move, use the x and y as last coords.
	    return {
	      node: _reactDom2.default.findDOMNode(draggable),
	      deltaX: 0, deltaY: 0,
	      lastX: x, lastY: y,
	      x: x, y: y
	    };
	  } else {
	    // Otherwise calculate proper values.
	    return {
	      node: _reactDom2.default.findDOMNode(draggable),
	      deltaX: x - state.lastX, deltaY: y - state.lastY,
	      lastX: state.lastX, lastY: state.lastY,
	      x: x, y: y
	    };
	  }
	}
	
	// Create an data exposed by <Draggable>'s events
	function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
	  return {
	    node: coreData.node,
	    x: draggable.state.x + coreData.deltaX,
	    y: draggable.state.y + coreData.deltaY,
	    deltaX: coreData.deltaX,
	    deltaY: coreData.deltaY,
	    lastX: draggable.state.x,
	    lastY: draggable.state.y
	  };
	}
	
	// A lot faster than stringify/parse
	function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
	  return {
	    left: bounds.left,
	    top: bounds.top,
	    right: bounds.right,
	    bottom: bounds.bottom
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domFns = __webpack_require__(5);
	
	var _positionFns = __webpack_require__(8);
	
	var _shims = __webpack_require__(6);
	
	var _log = __webpack_require__(11);
	
	var _log2 = _interopRequireDefault(_log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Simple abstraction for dragging events names.
	/*:: import type {EventHandler} from './utils/types';*/
	var eventsFor = {
	  touch: {
	    start: 'touchstart',
	    move: 'touchmove',
	    stop: 'touchend'
	  },
	  mouse: {
	    start: 'mousedown',
	    move: 'mousemove',
	    stop: 'mouseup'
	  }
	};
	
	// Default to mouse events.
	var dragEventFor = eventsFor.mouse;
	
	/*:: type CoreState = {
	  dragging: boolean,
	  lastX: number,
	  lastY: number,
	  touchIdentifier: ?number
	};*/
	
	
	//
	// Define <DraggableCore>.
	//
	// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
	// work well with libraries that require more control over the element.
	//
	
	/*:: type DomNode = {
	  ownerDocument: any
	};*/
	
	var DraggableCore = function (_React$Component) {
	  _inherits(DraggableCore, _React$Component);
	
	  function DraggableCore() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DraggableCore);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.domNode = {
	      ownerDocument: {
	        body: undefined,
	        defaultView: undefined
	      }
	    }, _this.state = {
	      dragging: false,
	      // Used while dragging to determine deltas.
	      lastX: NaN, lastY: NaN,
	      touchIdentifier: null
	    }, _this.handleDragStart = function (e) {
	      // Make it possible to attach event handlers on top of this one.
	      _this.props.onMouseDown(e);
	
	      // Only accept left-clicks.
	      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
	
	      // Get nodes. Be sure to grab relative document (could be iframed)
	      var ownerDocument = _this.domNode.ownerDocument;
	
	      // Short circuit if handle or cancel prop was provided and selector doesn't match.
	
	      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, _this.domNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, _this.domNode)) {
	        return;
	      }
	
	      // Set touch identifier in component state if this is a touch event. This allows us to
	      // distinguish between individual touches on multitouch screens by identifying which
	      // touchpoint was set to this element.
	      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
	      _this.setState({ touchIdentifier: touchIdentifier });
	
	      // Get the current drag point from the event. This is used as the offset.
	      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _this);
	      if (position == null) return; // not possible but satisfies flow
	      var x = position.x,
	          y = position.y;
	
	      // Create an event object with all the data parents need to make a decision here.
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      (0, _log2.default)('DraggableCore: handleDragStart: %j', coreEvent);
	
	      // Call event handler. If it returns explicit false, cancel.
	      (0, _log2.default)('calling', _this.props.onStart);
	      var shouldUpdate = _this.props.onStart(e, coreEvent);
	      if (shouldUpdate === false) return;
	
	      // Add a style to the body to disable user-select. This prevents text from
	      // being selected all over the page.
	      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument.body);
	
	      // Initiate dragging. Set the current x and y as offsets
	      // so we know how much we've moved during the drag. This allows us
	      // to drag elements around even if they have been moved, without issue.
	      _this.setState({
	        dragging: true,
	
	        lastX: x,
	        lastY: y
	      });
	
	      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
	      // this element. We use different events depending on whether or not we have detected that this
	      // is a touch-capable device.
	      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
	      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
	    }, _this.handleDrag = function (e) {
	
	      // Get the current drag point from the event. This is used as the offset.
	      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;
	
	      // Snap to grid if prop has been provided
	
	      if (x !== x) debugger;
	
	      if (Array.isArray(_this.props.grid)) {
	        var deltaX = x - _this.state.lastX,
	            deltaY = y - _this.state.lastY;
	
	        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
	
	        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
	
	        deltaX = _snapToGrid2[0];
	        deltaY = _snapToGrid2[1];
	
	        if (!deltaX && !deltaY) return; // skip useless drag
	        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
	      }
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	
	      (0, _log2.default)('DraggableCore: handleDrag: %j', coreEvent);
	
	      // Call event handler. If it returns explicit false, trigger end.
	      var shouldUpdate = _this.props.onDrag(e, coreEvent);
	      if (shouldUpdate === false) {
	        try {
	          // $FlowIgnore
	          _this.handleDragStop(new MouseEvent('mouseup'));
	        } catch (err) {
	          // Old browsers
	          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
	          // I see why this insanity was deprecated
	          // $FlowIgnore
	          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	          _this.handleDragStop(event);
	        }
	        return;
	      }
	
	      _this.setState({
	        lastX: x,
	        lastY: y
	      });
	    }, _this.handleDragStop = function (e) {
	      if (!_this.state.dragging) return;
	
	      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _this);
	      if (position == null) return;
	      var x = position.x,
	          y = position.y;
	
	      var coreEvent = (0, _positionFns.createCoreData)(_this, x, y);
	      var ownerDocument = _this.domNode.ownerDocument;
	
	      // Remove user-select hack
	
	      if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
	
	      (0, _log2.default)('DraggableCore: handleDragStop: %j', coreEvent);
	
	      // Reset the el.
	      _this.setState({
	        dragging: false,
	        lastX: NaN,
	        lastY: NaN
	      });
	
	      // Call event handler
	      _this.props.onStop(e, coreEvent);
	
	      // Remove event handlers
	      (0, _log2.default)('DraggableCore: Removing handlers');
	      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
	      (0, _domFns.removeEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
	    }, _this.onMouseDown = function (e) {
	      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
	
	      return _this.handleDragStart(e);
	    }, _this.onMouseUp = function (e) {
	      dragEventFor = eventsFor.mouse;
	
	      return _this.handleDragStop(e);
	    }, _this.onTouchStart = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStart(e);
	    }, _this.onTouchEnd = function (e) {
	      // We're on a touch device now, so change the event handlers
	      dragEventFor = eventsFor.touch;
	
	      return _this.handleDragStop(e);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	   * `domNode`, reference to underlying dom node
	   */
	
	
	  _createClass(DraggableCore, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
	      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
	      var ownerDocument = this.domNode.ownerDocument;
	
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
	      (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
	      if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument.body);
	    }
	
	    // Same as onMouseDown (start drag), but now consider this a touch device.
	
	  }, {
	    key: 'render',
	    value: function render() /*: React.Element<any>*/ {
	      var _this2 = this;
	
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
	        ref: function ref(node) {
	          _this2.domNode = _reactDom2.default.findDOMNode(node);
	          // console.log('domNode', this.domNode)
	        },
	        style: (0, _domFns.styleHacks)(this.props.children.props.style),
	        // Note: mouseMove handler is attached to document so it will still function
	        // when the user drags quickly and leaves the bounds of the element.
	        onMouseDown: this.onMouseDown.bind(this),
	        onTouchStart: this.onTouchStart.bind(this),
	        onMouseUp: this.onMouseUp.bind(this),
	        onTouchEnd: this.onTouchEnd.bind(this)
	      });
	    }
	  }]);
	
	  return DraggableCore;
	}(_react2.default.Component);
	
	DraggableCore.displayName = 'DraggableCore';
	DraggableCore.propTypes = {
	  /**
	   * `allowAnyClick` allows dragging using any mouse button.
	   * By default, we only accept the left button.
	   *
	   * Defaults to `false`.
	   */
	  allowAnyClick: _react.PropTypes.bool,
	
	  /**
	   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
	   * with the exception of `onMouseDown`, will not fire.
	   */
	  disabled: _react.PropTypes.bool,
	
	  /**
	   * By default, we add 'user-select:none' attributes to the document body
	   * to prevent ugly text selection during drag. If this is causing problems
	   * for your app, set this to `false`.
	   */
	  enableUserSelectHack: _react.PropTypes.bool,
	
	  /**
	   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
	   * instead of using the parent node.
	   */
	  offsetParent: function offsetParent(props, propName) {
	    if (process.browser && props[propName] && props[propName].nodeType !== 1) {
	      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
	    }
	  },
	
	  /**
	   * `grid` specifies the x and y that dragging should snap to.
	   */
	  grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
	
	  /**
	   * `handle` specifies a selector to be used as the handle that initiates drag.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *         return (
	   *            <Draggable handle=".handle">
	   *              <div>
	   *                  <div className="handle">Click me to drag</div>
	   *                  <div>This is some other content</div>
	   *              </div>
	   *           </Draggable>
	   *         );
	   *       }
	   *   });
	   * ```
	   */
	  handle: _react.PropTypes.string,
	
	  /**
	   * `cancel` specifies a selector to be used to prevent drag initialization.
	   *
	   * Example:
	   *
	   * ```jsx
	   *   let App = React.createClass({
	   *       render: function () {
	   *           return(
	   *               <Draggable cancel=".cancel">
	   *                   <div>
	   *                     <div className="cancel">You can't drag from here</div>
	   *                     <div>Dragging here works fine</div>
	   *                   </div>
	   *               </Draggable>
	   *           );
	   *       }
	   *   });
	   * ```
	   */
	  cancel: _react.PropTypes.string,
	
	  /**
	   * Called when dragging starts.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onStart: _react.PropTypes.func,
	
	  /**
	   * Called while dragging.
	   * If this function returns the boolean false, dragging will be canceled.
	   */
	  onDrag: _react.PropTypes.func,
	
	  /**
	   * Called when dragging stops.
	   * If this function returns the boolean false, the drag will remain active.
	   */
	  onStop: _react.PropTypes.func,
	
	  /**
	   * A workaround option which can be passed if onMouseDown needs to be accessed,
	   * since it'll always be blocked (as there is internal use of onMouseDown)
	   */
	  onMouseDown: _react.PropTypes.func,
	
	  /**
	   * These properties should be defined on the child, not here.
	   */
	  className: _shims.dontSetMe,
	  style: _shims.dontSetMe,
	  transform: _shims.dontSetMe
	};
	DraggableCore.defaultProps = {
	  allowAnyClick: false, // by default only accept left click
	  cancel: null,
	  disabled: false,
	  enableUserSelectHack: true,
	  offsetParent: null,
	  handle: null,
	  grid: null,
	  transform: null,
	  onStart: function onStart() {},
	  onDrag: function onDrag() {},
	  onStop: function onStop() {},
	  onMouseDown: function onMouseDown() {}
	};
	exports.default = DraggableCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = log;
	
	/*eslint no-console:0*/
	function log() {
	  var _console;
	
	  if (true) (_console = console).log.apply(_console, arguments);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi4uL3dlYnBhY2svYm9vdHN0cmFwIGJhMWMyZjJmZWFhMzRiOWRkNmRlIiwiLi4vLi9pbmRleC5qcyIsIi4uLy4vbGliL0RyYWdnYWJsZS5lczYiLCIuLi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9IiwiLi4vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0LWRvbVwiLFwiY29tbW9uanMyXCI6XCJyZWFjdC1kb21cIixcImFtZFwiOlwicmVhY3QtZG9tXCIsXCJyb290XCI6XCJSZWFjdERPTVwifSIsIi4uLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi9saWIvdXRpbHMvZG9tRm5zLmVzNiIsIi4uLy4vbGliL3V0aWxzL3NoaW1zLmVzNiIsIi4uLy4vbGliL3V0aWxzL2dldFByZWZpeC5lczYiLCIuLi8uL2xpYi91dGlscy9wb3NpdGlvbkZucy5lczYiLCIuLi8uL2xpYi9EcmFnZ2FibGVDb3JlLmVzNiIsIi4uLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCIuLi8uL2xpYi91dGlscy9sb2cuZXM2Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIkRyYWdnYWJsZUNvcmUiLCJEcmFnZ2FibGUiLCJwcm9wcyIsIm9uRHJhZ1N0YXJ0IiwiZSIsImNvcmVEYXRhIiwic2hvdWxkU3RhcnQiLCJvblN0YXJ0Iiwic2V0U3RhdGUiLCJkcmFnZ2luZyIsImRyYWdnZWQiLCJvbkRyYWciLCJzdGF0ZSIsInVpRGF0YSIsIm5ld1N0YXRlIiwieCIsInkiLCJib3VuZHMiLCJzbGFja1giLCJzbGFja1kiLCJkZWx0YVgiLCJkZWx0YVkiLCJzaG91bGRVcGRhdGUiLCJvbkRyYWdTdG9wIiwic2hvdWxkU3RvcCIsIm9uU3RvcCIsImNvbnRyb2xsZWQiLCJCb29sZWFuIiwicG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJpc0VsZW1lbnRTVkciLCJjb25zb2xlIiwid2FybiIsIlNWR0VsZW1lbnQiLCJmaW5kRE9NTm9kZSIsIm5leHRQcm9wcyIsInN0eWxlIiwic3ZnVHJhbnNmb3JtIiwiZHJhZ2dhYmxlIiwidHJhbnNmb3JtT3B0cyIsImRlZmF1bHRDbGFzc05hbWUiLCJkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmciLCJkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwiQ2hpbGRyZW4iLCJvbmx5IiwidHJhbnNmb3JtIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJheGlzIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSIsImxlZnQiLCJudW1iZXIiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJvdXRlckhlaWdodCIsIm91dGVyV2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJvZmZzZXRYWUZyb21QYXJlbnQiLCJjcmVhdGVDU1NUcmFuc2Zvcm0iLCJjcmVhdGVTVkdUcmFuc2Zvcm0iLCJnZXRUb3VjaCIsImdldFRvdWNoSWRlbnRpZmllciIsImFkZFVzZXJTZWxlY3RTdHlsZXMiLCJyZW1vdmVVc2VyU2VsZWN0U3R5bGVzIiwic3R5bGVIYWNrcyIsIm1hdGNoZXNTZWxlY3RvckZ1bmMiLCJlbCIsInNlbGVjdG9yIiwibWV0aG9kIiwiY2FsbCIsImJhc2VOb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJldmVudCIsImhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb21wdXRlZFN0eWxlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJldnQiLCJvZmZzZXRQYXJlbnQiLCJpc0JvZHkiLCJib2R5Iiwib2Zmc2V0UGFyZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJzY3JvbGxMZWZ0IiwiY2xpZW50WSIsInNjcm9sbFRvcCIsImlkZW50aWZpZXIiLCJ0YXJnZXRUb3VjaGVzIiwidCIsImNoYW5nZWRUb3VjaGVzIiwidXNlclNlbGVjdFByZWZpeCIsInVzZXJTZWxlY3QiLCJ1c2VyU2VsZWN0U3R5bGUiLCJ1c2VyU2VsZWN0UmVwbGFjZVJlZ0V4cCIsIlJlZ0V4cCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjaGlsZFN0eWxlIiwidG91Y2hBY3Rpb24iLCJmaW5kSW5BcnJheSIsImlzRnVuY3Rpb24iLCJpc051bSIsImludCIsImRvbnRTZXRNZSIsImFycmF5IiwiY2FsbGJhY2siLCJpIiwibGVuZ3RoIiwiYXBwbHkiLCJmdW5jIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJudW0iLCJpc05hTiIsImEiLCJwYXJzZUludCIsInByb3BOYW1lIiwiY29tcG9uZW50TmFtZSIsIkVycm9yIiwiZ2V0UHJlZml4IiwiYnJvd3NlclByZWZpeFRvS2V5IiwiYnJvd3NlclByZWZpeFRvU3R5bGUiLCJwcmVmaXhlcyIsInByb3AiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInByZWZpeCIsImtlYmFiVG9UaXRsZUNhc2UiLCJ0b0xvd2VyQ2FzZSIsInN0ciIsIm91dCIsInNob3VsZENhcGl0YWxpemUiLCJ0b1VwcGVyQ2FzZSIsImdldEJvdW5kUG9zaXRpb24iLCJzbmFwVG9HcmlkIiwiY2FuRHJhZ1giLCJjYW5EcmFnWSIsImdldENvbnRyb2xQb3NpdGlvbiIsImNyZWF0ZUNvcmVEYXRhIiwiY3JlYXRlRHJhZ2dhYmxlRGF0YSIsImNsb25lQm91bmRzIiwib3duZXJXaW5kb3ciLCJib3VuZE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwibm9kZVN0eWxlIiwiYm91bmROb2RlU3R5bGUiLCJvZmZzZXRMZWZ0IiwibWFyZ2luTGVmdCIsIm9mZnNldFRvcCIsIm1hcmdpblRvcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJncmlkIiwicGVuZGluZ1giLCJwZW5kaW5nWSIsInJvdW5kIiwidG91Y2hJZGVudGlmaWVyIiwiZHJhZ2dhYmxlQ29yZSIsInRvdWNoT2JqIiwiaXNTdGFydCIsImxhc3RYIiwibGFzdFkiLCJldmVudHNGb3IiLCJ0b3VjaCIsInN0YXJ0IiwibW92ZSIsInN0b3AiLCJtb3VzZSIsImRyYWdFdmVudEZvciIsImRvbU5vZGUiLCJ1bmRlZmluZWQiLCJOYU4iLCJoYW5kbGVEcmFnU3RhcnQiLCJvbk1vdXNlRG93biIsImFsbG93QW55Q2xpY2siLCJidXR0b24iLCJkaXNhYmxlZCIsInRhcmdldCIsIk5vZGUiLCJoYW5kbGUiLCJjYW5jZWwiLCJjb3JlRXZlbnQiLCJlbmFibGVVc2VyU2VsZWN0SGFjayIsImhhbmRsZURyYWciLCJoYW5kbGVEcmFnU3RvcCIsIkFycmF5IiwiaXNBcnJheSIsIk1vdXNlRXZlbnQiLCJlcnIiLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50Iiwib25Nb3VzZVVwIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsInJlZiIsImJpbmQiLCJib29sIiwicHJvY2VzcyIsImJyb3dzZXIiLCJub2RlVHlwZSIsImFycmF5T2YiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7bUJDakxkOE8sRzs7QUFEeEI7QUFDZSxVQUFTQSxHQUFULEdBQTJCO0FBQUE7O0FBQ3hDLE9BQUksSUFBSixFQUFpQyxxQkFBUUEsR0FBUjtBQUNsQyxFIiwiZmlsZSI6Ii4vZGlzdC9yZWFjdC1kcmFnZ2FibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdERyYWdnYWJsZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdERyYWdnYWJsZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdLCByb290W1wiUmVhY3RET01cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJhMWMyZjJmZWFhMzRiOWRkNmRlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9EcmFnZ2FibGUnKS5kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMuRHJhZ2dhYmxlQ29yZSA9IHJlcXVpcmUoJy4vbGliL0RyYWdnYWJsZUNvcmUnKS5kZWZhdWx0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vICRGbG93SWdub3JlXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlQ1NTVHJhbnNmb3JtLCBjcmVhdGVTVkdUcmFuc2Zvcm19IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcbmltcG9ydCB7Y2FuRHJhZ1gsIGNhbkRyYWdZLCBjcmVhdGVEcmFnZ2FibGVEYXRhLCBnZXRCb3VuZFBvc2l0aW9ufSBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uRm5zJztcbmltcG9ydCB7ZG9udFNldE1lfSBmcm9tICcuL3V0aWxzL3NoaW1zJztcbmltcG9ydCBEcmFnZ2FibGVDb3JlIGZyb20gJy4vRHJhZ2dhYmxlQ29yZSc7XG5pbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcbmltcG9ydCB0eXBlIHtEcmFnZ2FibGVFdmVudEhhbmRsZXJ9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xuXG50eXBlIERyYWdnYWJsZVN0YXRlID0ge1xuICBkcmFnZ2luZzogYm9vbGVhbixcbiAgZHJhZ2dlZDogYm9vbGVhbixcbiAgeDogbnVtYmVyLCB5OiBudW1iZXIsXG4gIHNsYWNrWDogbnVtYmVyLCBzbGFja1k6IG51bWJlcixcbiAgaXNFbGVtZW50U1ZHOiBib29sZWFuXG59O1xuXG50eXBlIENvbnN0cnVjdG9yUHJvcHMgPSB7XG4gIHBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0sXG4gIGRlZmF1bHRQb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9XG59O1xuXG4vL1xuLy8gRGVmaW5lIDxEcmFnZ2FibGU+XG4vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGUnO1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQWNjZXB0cyBhbGwgcHJvcHMgPERyYWdnYWJsZUNvcmU+IGFjY2VwdHMuXG4gICAgLi4uRHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBgYXhpc2AgZGV0ZXJtaW5lcyB3aGljaCBheGlzIHRoZSBkcmFnZ2FibGUgY2FuIG1vdmUuXG4gICAgICpcbiAgICAgKiAgTm90ZSB0aGF0IGFsbCBjYWxsYmFja3Mgd2lsbCBzdGlsbCByZXR1cm4gZGF0YSBhcyBub3JtYWwuIFRoaXMgb25seVxuICAgICAqICBjb250cm9scyBmbHVzaGluZyB0byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogJ2JvdGgnIGFsbG93cyBtb3ZlbWVudCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkuXG4gICAgICogJ3gnIGxpbWl0cyBtb3ZlbWVudCB0byBob3Jpem9udGFsIGF4aXMuXG4gICAgICogJ3knIGxpbWl0cyBtb3ZlbWVudCB0byB2ZXJ0aWNhbCBheGlzLlxuICAgICAqICdub25lJyBsaW1pdHMgYWxsIG1vdmVtZW50LlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gJ2JvdGgnLlxuICAgICAqL1xuICAgIGF4aXM6IFByb3BUeXBlcy5vbmVPZihbJ2JvdGgnLCAneCcsICd5JywgJ25vbmUnXSksXG5cbiAgICAvKipcbiAgICAgKiBgYm91bmRzYCBkZXRlcm1pbmVzIHRoZSByYW5nZSBvZiBtb3ZlbWVudCBhdmFpbGFibGUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogQXZhaWxhYmxlIHZhbHVlcyBhcmU6XG4gICAgICpcbiAgICAgKiAncGFyZW50JyByZXN0cmljdHMgbW92ZW1lbnQgd2l0aGluIHRoZSBEcmFnZ2FibGUncyBwYXJlbnQgbm9kZS5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzLCBhbGwgb2Ygd2hpY2ggYXJlIG9wdGlvbmFsOlxuICAgICAqXG4gICAgICoge2xlZnQ6IExFRlRfQk9VTkQsIHJpZ2h0OiBSSUdIVF9CT1VORCwgYm90dG9tOiBCT1RUT01fQk9VTkQsIHRvcDogVE9QX0JPVU5EfVxuICAgICAqXG4gICAgICogQWxsIHZhbHVlcyBhcmUgaW4gcHguXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgYm91bmRzPXt7cmlnaHQ6IDMwMCwgYm90dG9tOiAzMDB9fT5cbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5Db250ZW50PC9kaXY+XG4gICAgICogICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgKTtcbiAgICAgKiAgICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBib3VuZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgcmlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICB9KSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICBdKSxcblxuICAgIGRlZmF1bHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogYGRlZmF1bHRQb3NpdGlvbmAgc3BlY2lmaWVzIHRoZSB4IGFuZCB5IHRoYXQgdGhlIGRyYWdnZWQgaXRlbSBzaG91bGQgc3RhcnQgYXRcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGRlZmF1bHRQb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICAgICAgKTtcbiAgICAgKiAgICAgICAgICB9XG4gICAgICogICAgICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBkZWZhdWx0UG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogYHBvc2l0aW9uYCwgaWYgcHJlc2VudCwgZGVmaW5lcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqICBUaGlzIGlzIHNpbWlsYXIgdG8gaG93IGZvcm0gZWxlbWVudHMgaW4gUmVhY3Qgd29yayAtIGlmIG5vIGBwb3NpdGlvbmAgaXMgc3VwcGxpZWQsIHRoZSBjb21wb25lbnRcbiAgICAgKiAgaXMgdW5jb250cm9sbGVkLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgcG9zaXRpb249e3t4OiAyNSwgeTogMjV9fT5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkkgc3RhcnQgd2l0aCB0cmFuc2Zvcm1YOiAyNXB4IGFuZCB0cmFuc2Zvcm1ZOiAyNXB4OzwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICAgICAgICk7XG4gICAgICogICAgICAgICAgfVxuICAgICAqICAgICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogZG9udFNldE1lLFxuICAgIHN0eWxlOiBkb250U2V0TWUsXG4gICAgdHJhbnNmb3JtOiBkb250U2V0TWVcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLkRyYWdnYWJsZUNvcmUuZGVmYXVsdFByb3BzLFxuICAgIGF4aXM6ICdib3RoJyxcbiAgICBib3VuZHM6IGZhbHNlLFxuICAgIGRlZmF1bHRDbGFzc05hbWU6ICdyZWFjdC1kcmFnZ2FibGUnLFxuICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZycsXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6ICdyZWFjdC1kcmFnZ2FibGUtZHJhZ2dlZCcsXG4gICAgZGVmYXVsdFBvc2l0aW9uOiB7eDogMCwgeTogMH0sXG4gICAgcG9zaXRpb246IG51bGxcbiAgfTtcblxuICBzdGF0ZTogRHJhZ2dhYmxlU3RhdGU7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IENvbnN0cnVjdG9yUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgYXJlIGN1cnJlbnRseSBkcmFnZ2luZy5cbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblxuICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgaGF2ZSBiZWVuIGRyYWdnZWQgYmVmb3JlLlxuICAgICAgZHJhZ2dlZDogZmFsc2UsXG5cbiAgICAgIC8vIEN1cnJlbnQgdHJhbnNmb3JtIHggYW5kIHkuXG4gICAgICB4OiBwcm9wcy5wb3NpdGlvbiA/IHByb3BzLnBvc2l0aW9uLnggOiBwcm9wcy5kZWZhdWx0UG9zaXRpb24ueCxcbiAgICAgIHk6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueSA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi55LFxuXG4gICAgICAvLyBVc2VkIGZvciBjb21wZW5zYXRpbmcgZm9yIG91dC1vZi1ib3VuZHMgZHJhZ3NcbiAgICAgIHNsYWNrWDogMCwgc2xhY2tZOiAwLFxuXG4gICAgICAvLyBDYW4gb25seSBkZXRlcm1pbmUgaWYgU1ZHIGFmdGVyIG1vdW50aW5nXG4gICAgICBpc0VsZW1lbnRTVkc6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucG9zaXRpb24gJiYgISh0aGlzLnByb3BzLm9uRHJhZyB8fCB0aGlzLnByb3BzLm9uU3RvcCkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKCdBIGBwb3NpdGlvbmAgd2FzIGFwcGxpZWQgdG8gdGhpcyA8RHJhZ2dhYmxlPiwgd2l0aG91dCBkcmFnIGhhbmRsZXJzLiBUaGlzIHdpbGwgbWFrZSB0aGlzICcgK1xuICAgICAgICAnY29tcG9uZW50IGVmZmVjdGl2ZWx5IHVuZHJhZ2dhYmxlLiBQbGVhc2UgYXR0YWNoIGBvbkRyYWdgIG9yIGBvblN0b3BgIGhhbmRsZXJzIHNvIHlvdSBjYW4gYWRqdXN0IHRoZSAnICtcbiAgICAgICAgJ2Bwb3NpdGlvbmAgb2YgdGhpcyBlbGVtZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaXMgYW4gaW5zdGFuY2VvZiBTVkdFbGVtZW50XG4gICAgaWYodHlwZW9mIFNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWxlbWVudFNWRzogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wczogT2JqZWN0KSB7XG4gICAgLy8gU2V0IHgveSBpZiBwb3NpdGlvbiBoYXMgY2hhbmdlZFxuICAgIGlmIChuZXh0UHJvcHMucG9zaXRpb24gJiZcbiAgICAgICAgKCF0aGlzLnByb3BzLnBvc2l0aW9uIHx8XG4gICAgICAgICAgbmV4dFByb3BzLnBvc2l0aW9uLnggIT09IHRoaXMucHJvcHMucG9zaXRpb24ueCB8fFxuICAgICAgICAgIG5leHRQcm9wcy5wb3NpdGlvbi55ICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uLnlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgeDogbmV4dFByb3BzLnBvc2l0aW9uLngsIHk6IG5leHRQcm9wcy5wb3NpdGlvbi55IH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nOiBmYWxzZX0pOyAvLyBwcmV2ZW50cyBpbnZhcmlhbnQgaWYgdW5tb3VudGVkIHdoaWxlIGRyYWdnaW5nXG4gIH1cblxuICBvbkRyYWdTdGFydDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVEYXRhKSA9PiB7XG4gICAgbG9nKCdEcmFnZ2FibGU6IG9uRHJhZ1N0YXJ0OiAlaicsIGNvcmVEYXRhKTtcblxuICAgIC8vIFNob3J0LWNpcmN1aXQgaWYgdXNlcidzIGNhbGxiYWNrIGtpbGxlZCBpdC5cbiAgICBjb25zdCBzaG91bGRTdGFydCA9IHRoaXMucHJvcHMub25TdGFydChlLCBjcmVhdGVEcmFnZ2FibGVEYXRhKHRoaXMsIGNvcmVEYXRhKSk7XG4gICAgLy8gS2lsbHMgc3RhcnQgZXZlbnQgb24gY29yZSBhcyB3ZWxsLCBzbyBtb3ZlIGhhbmRsZXJzIGFyZSBuZXZlciBib3VuZC5cbiAgICBpZiAoc2hvdWxkU3RhcnQgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZzogdHJ1ZSwgZHJhZ2dlZDogdHJ1ZX0pO1xuICB9O1xuXG4gIG9uRHJhZzogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVEYXRhKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgbG9nKCdEcmFnZ2FibGU6IG9uRHJhZzogJWonLCBjb3JlRGF0YSk7XG5cbiAgICBjb25zdCB1aURhdGEgPSBjcmVhdGVEcmFnZ2FibGVEYXRhKHRoaXMsIGNvcmVEYXRhKTtcblxuICAgIGNvbnN0IG5ld1N0YXRlOiAkU2hhcGU8RHJhZ2dhYmxlU3RhdGU+ID0ge1xuICAgICAgeDogdWlEYXRhLngsXG4gICAgICB5OiB1aURhdGEueVxuICAgIH07XG5cbiAgICAvLyBLZWVwIHdpdGhpbiBib3VuZHMuXG4gICAgaWYgKHRoaXMucHJvcHMuYm91bmRzKSB7XG4gICAgICAvLyBTYXZlIG9yaWdpbmFsIHggYW5kIHkuXG4gICAgICBjb25zdCB7eCwgeX0gPSBuZXdTdGF0ZTtcblxuICAgICAgLy8gQWRkIHNsYWNrIHRvIHRoZSB2YWx1ZXMgdXNlZCB0byBjYWxjdWxhdGUgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBpZlxuICAgICAgLy8gd2Ugc3RhcnQgcmVtb3Zpbmcgc2xhY2ssIHRoZSBlbGVtZW50IHdvbid0IHJlYWN0IHRvIGl0IHJpZ2h0IGF3YXkgdW50aWwgaXQncyBiZWVuXG4gICAgICAvLyBjb21wbGV0ZWx5IHJlbW92ZWQuXG4gICAgICBuZXdTdGF0ZS54ICs9IHRoaXMuc3RhdGUuc2xhY2tYO1xuICAgICAgbmV3U3RhdGUueSArPSB0aGlzLnN0YXRlLnNsYWNrWTtcblxuICAgICAgLy8gR2V0IGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgY2VpbC9mbG9vciB0aGUgeCBhbmQgeSB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuXG4gICAgICAvLyAkRmxvd0J1Z1xuICAgICAgW25ld1N0YXRlLngsIG5ld1N0YXRlLnldID0gZ2V0Qm91bmRQb3NpdGlvbih0aGlzLCBuZXdTdGF0ZS54LCBuZXdTdGF0ZS55KTtcblxuICAgICAgLy8gUmVjYWxjdWxhdGUgc2xhY2sgYnkgbm90aW5nIGhvdyBtdWNoIHdhcyBzaGF2ZWQgYnkgdGhlIGJvdW5kUG9zaXRpb24gaGFuZGxlci5cbiAgICAgIG5ld1N0YXRlLnNsYWNrWCA9IHRoaXMuc3RhdGUuc2xhY2tYICsgKHggLSBuZXdTdGF0ZS54KTtcbiAgICAgIG5ld1N0YXRlLnNsYWNrWSA9IHRoaXMuc3RhdGUuc2xhY2tZICsgKHkgLSBuZXdTdGF0ZS55KTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBldmVudCB3ZSBmaXJlIHRvIHJlZmxlY3Qgd2hhdCByZWFsbHkgaGFwcGVuZWQgYWZ0ZXIgYm91bmRzIHRvb2sgZWZmZWN0LlxuICAgICAgdWlEYXRhLnggPSB4O1xuICAgICAgdWlEYXRhLnkgPSB5O1xuICAgICAgdWlEYXRhLmRlbHRhWCA9IG5ld1N0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gICAgICB1aURhdGEuZGVsdGFZID0gbmV3U3RhdGUueSAtIHRoaXMuc3RhdGUueTtcbiAgICB9XG5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gdGhpcy5wcm9wcy5vbkRyYWcoZSwgdWlEYXRhKTtcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG5cbiAgb25EcmFnU3RvcDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVEYXRhKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG4gICAgY29uc3Qgc2hvdWxkU3RvcCA9IHRoaXMucHJvcHMub25TdG9wKGUsIGNyZWF0ZURyYWdnYWJsZURhdGEodGhpcywgY29yZURhdGEpKTtcbiAgICBpZiAoc2hvdWxkU3RvcCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxvZygnRHJhZ2dhYmxlOiBvbkRyYWdTdG9wOiAlaicsIGNvcmVEYXRhKTtcblxuICAgIGNvbnN0IG5ld1N0YXRlOiAkU2hhcGU8RHJhZ2dhYmxlU3RhdGU+ID0ge1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgc2xhY2tYOiAwLFxuICAgICAgc2xhY2tZOiAwXG4gICAgfTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBjb250cm9sbGVkIGNvbXBvbmVudCwgdGhlIHJlc3VsdCBvZiB0aGlzIG9wZXJhdGlvbiB3aWxsIGJlIHRvXG4gICAgLy8gcmV2ZXJ0IGJhY2sgdG8gdGhlIG9sZCBwb3NpdGlvbi4gV2UgZXhwZWN0IGEgaGFuZGxlciBvbiBgb25EcmFnU3RvcGAsIGF0IHRoZSBsZWFzdC5cbiAgICBjb25zdCBjb250cm9sbGVkID0gQm9vbGVhbih0aGlzLnByb3BzLnBvc2l0aW9uKTtcbiAgICBpZiAoY29udHJvbGxlZCkge1xuICAgICAgY29uc3Qge3gsIHl9ID0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcbiAgICAgIG5ld1N0YXRlLnggPSB4O1xuICAgICAgbmV3U3RhdGUueSA9IHk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiB7XG4gICAgbGV0IHN0eWxlID0ge30sIHN2Z1RyYW5zZm9ybSA9IG51bGw7XG5cbiAgICAvLyBJZiB0aGlzIGlzIGNvbnRyb2xsZWQsIHdlIGRvbid0IHdhbnQgdG8gbW92ZSBpdCAtIHVubGVzcyBpdCdzIGRyYWdnaW5nLlxuICAgIGNvbnN0IGNvbnRyb2xsZWQgPSBCb29sZWFuKHRoaXMucHJvcHMucG9zaXRpb24pO1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9ICFjb250cm9sbGVkIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmc7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucHJvcHMucG9zaXRpb24gfHwgdGhpcy5wcm9wcy5kZWZhdWx0UG9zaXRpb247XG4gICAgY29uc3QgdHJhbnNmb3JtT3B0cyA9IHtcbiAgICAgIC8vIFNldCBsZWZ0IGlmIGhvcml6b250YWwgZHJhZyBpcyBlbmFibGVkXG4gICAgICB4OiBjYW5EcmFnWCh0aGlzKSAmJiBkcmFnZ2FibGUgP1xuICAgICAgICB0aGlzLnN0YXRlLnggOlxuICAgICAgICBwb3NpdGlvbi54LFxuXG4gICAgICAvLyBTZXQgdG9wIGlmIHZlcnRpY2FsIGRyYWcgaXMgZW5hYmxlZFxuICAgICAgeTogY2FuRHJhZ1kodGhpcykgJiYgZHJhZ2dhYmxlID9cbiAgICAgICAgdGhpcy5zdGF0ZS55IDpcbiAgICAgICAgcG9zaXRpb24ueVxuICAgIH07XG5cbiAgICAvLyBJZiB0aGlzIGVsZW1lbnQgd2FzIFNWRywgd2UgdXNlIHRoZSBgdHJhbnNmb3JtYCBhdHRyaWJ1dGUuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFbGVtZW50U1ZHKSB7XG4gICAgICBzdmdUcmFuc2Zvcm0gPSBjcmVhdGVTVkdUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBhIENTUyB0cmFuc2Zvcm0gdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmQuIFRoaXMgYWxsb3dzIHVzIHRvIG1vdmUgdGhlIGVsZW1lbnQgYXJvdW5kXG4gICAgICAvLyB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHdoZXRoZXIgb3Igbm90IGl0IGlzIHJlbGF0aXZlbHkgb3IgYWJzb2x1dGVseSBwb3NpdGlvbmVkLlxuICAgICAgLy8gSWYgdGhlIGl0ZW0geW91IGFyZSBkcmFnZ2luZyBhbHJlYWR5IGhhcyBhIHRyYW5zZm9ybSBzZXQsIHdyYXAgaXQgaW4gYSA8c3Bhbj4gc28gPERyYWdnYWJsZT5cbiAgICAgIC8vIGhhcyBhIGNsZWFuIHNsYXRlLlxuICAgICAgc3R5bGUgPSBjcmVhdGVDU1NUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cyk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgZGVmYXVsdENsYXNzTmFtZSxcbiAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyxcbiAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBNYXJrIHdpdGggY2xhc3Mgd2hpbGUgZHJhZ2dpbmdcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJyksIGRlZmF1bHRDbGFzc05hbWUsIHtcbiAgICAgIFtkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmddOiB0aGlzLnN0YXRlLmRyYWdnaW5nLFxuICAgICAgW2RlZmF1bHRDbGFzc05hbWVEcmFnZ2VkXTogdGhpcy5zdGF0ZS5kcmFnZ2VkXG4gICAgfSk7XG5cbiAgICAvLyBSZXVzZSB0aGUgY2hpbGQgcHJvdmlkZWRcbiAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ2dhYmxlQ29yZSB7Li4udGhpcy5wcm9wc30gb25TdGFydD17dGhpcy5vbkRyYWdTdGFydH0gb25EcmFnPXt0aGlzLm9uRHJhZ30gb25TdG9wPXt0aGlzLm9uRHJhZ1N0b3B9PlxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogey4uLnRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuc3R5bGUsIC4uLnN0eWxlfSxcbiAgICAgICAgICB0cmFuc2Zvcm06IHN2Z1RyYW5zZm9ybVxuICAgICAgICB9KX1cbiAgICAgIDwvRHJhZ2dhYmxlQ29yZT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRHJhZ2dhYmxlLmVzNiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwiLFwicm9vdFwiOlwiUmVhY3RET01cIn1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBAZmxvd1xuaW1wb3J0IHtmaW5kSW5BcnJheSwgaXNGdW5jdGlvbiwgaW50fSBmcm9tICcuL3NoaW1zJztcbmltcG9ydCBicm93c2VyUHJlZml4LCB7Z2V0UHJlZml4LCBicm93c2VyUHJlZml4VG9TdHlsZSwgYnJvd3NlclByZWZpeFRvS2V5fSBmcm9tICcuL2dldFByZWZpeCc7XG5cbmltcG9ydCB0eXBlIHtDb250cm9sUG9zaXRpb259IGZyb20gJy4vdHlwZXMnO1xuXG5sZXQgbWF0Y2hlc1NlbGVjdG9yRnVuYyA9ICcnO1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3RvcihlbDogTm9kZSwgc2VsZWN0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIW1hdGNoZXNTZWxlY3RvckZ1bmMpIHtcbiAgICBtYXRjaGVzU2VsZWN0b3JGdW5jID0gZmluZEluQXJyYXkoW1xuICAgICAgJ21hdGNoZXMnLFxuICAgICAgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnbW96TWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdtc01hdGNoZXNTZWxlY3RvcicsXG4gICAgICAnb01hdGNoZXNTZWxlY3RvcidcbiAgICBdLCBmdW5jdGlvbihtZXRob2Qpe1xuICAgICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oZWxbbWV0aG9kXSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gIHJldHVybiBlbFttYXRjaGVzU2VsZWN0b3JGdW5jXS5jYWxsKGVsLCBzZWxlY3Rvcik7XG59XG5cbi8vIFdvcmtzIHVwIHRoZSB0cmVlIHRvIHRoZSBkcmFnZ2FibGUgaXRzZWxmIGF0dGVtcHRpbmcgdG8gbWF0Y2ggc2VsZWN0b3IuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGVsOiBOb2RlLCBzZWxlY3Rvcjogc3RyaW5nLCBiYXNlTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xuICBsZXQgbm9kZSA9IGVsO1xuICBkbyB7XG4gICAgaWYgKG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3RvcikpIHJldHVybiB0cnVlO1xuICAgIGlmIChub2RlID09PSBiYXNlTm9kZSkgcmV0dXJuIGZhbHNlO1xuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH0gd2hpbGUgKG5vZGUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KGVsOiA/Tm9kZSwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcbiAgfSBlbHNlIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuICAgIGVsWydvbicgKyBldmVudF0gPSBoYW5kbGVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudChlbDogP05vZGUsIGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGlmICghZWwpIHsgcmV0dXJuOyB9XG4gIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG4gIH0gZWxzZSBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcbiAgICBlbFsnb24nICsgZXZlbnRdID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJIZWlnaHQobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcbiAgLy8gb2Zmc2V0VG9wIHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG4gIGxldCBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJXaWR0aChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIC8vIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGV4Y2x1ZGluZyBtYXJnaW4gZm9yIG91ciBjYWxjdWxhdGlvbnMsIHNpbmNlIHdlIGFyZSB1c2luZ1xuICAvLyBvZmZzZXRMZWZ0IHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG4gIGxldCB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyTGVmdFdpZHRoKTtcbiAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbm5lckhlaWdodChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIGxldCBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBoZWlnaHQgLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCk7XG4gIGhlaWdodCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgcmV0dXJuIGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlubmVyV2lkdGgobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICBsZXQgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIHdpZHRoIC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdMZWZ0KTtcbiAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgcmV0dXJuIHdpZHRoO1xufVxuXG4vLyBHZXQgZnJvbSBvZmZzZXRQYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXRYWUZyb21QYXJlbnQoZXZ0OiB7Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9LCBvZmZzZXRQYXJlbnQ6IEhUTUxFbGVtZW50KTogQ29udHJvbFBvc2l0aW9uIHtcbiAgY29uc3QgaXNCb2R5ID0gb2Zmc2V0UGFyZW50ID09PSBvZmZzZXRQYXJlbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICBjb25zdCBvZmZzZXRQYXJlbnRSZWN0ID0gaXNCb2R5ID8ge2xlZnQ6IDAsIHRvcDogMH0gOiBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3QgeCA9IGV2dC5jbGllbnRYICsgb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQgLSBvZmZzZXRQYXJlbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IHkgPSBldnQuY2xpZW50WSArIG9mZnNldFBhcmVudC5zY3JvbGxUb3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcDtcblxuICByZXR1cm4ge3gsIHl9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ1NTVHJhbnNmb3JtKHt4LCB5fToge3g6IG51bWJlciwgeTogbnVtYmVyfSk6IE9iamVjdCB7XG4gIC8vIFJlcGxhY2UgdW5pdGxlc3MgaXRlbXMgd2l0aCBweFxuICByZXR1cm4ge1ticm93c2VyUHJlZml4VG9LZXkoJ3RyYW5zZm9ybScsIGJyb3dzZXJQcmVmaXgpXTogJ3RyYW5zbGF0ZSgnICsgeCArICdweCwnICsgeSArICdweCknfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNWR1RyYW5zZm9ybSh7eCwgeX06IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pOiBzdHJpbmcge1xuICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaChlOiBNb3VzZVRvdWNoRXZlbnQsIGlkZW50aWZpZXI6IG51bWJlcik6ID97Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9IHtcbiAgcmV0dXJuIChlLnRhcmdldFRvdWNoZXMgJiYgZmluZEluQXJyYXkoZS50YXJnZXRUb3VjaGVzLCB0ID0+IGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcikpIHx8XG4gICAgICAgICAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBmaW5kSW5BcnJheShlLmNoYW5nZWRUb3VjaGVzLCB0ID0+IGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJZGVudGlmaWVyKGU6IE1vdXNlVG91Y2hFdmVudCk6ID9udW1iZXIge1xuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlc1swXSkgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xuICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyO1xufVxuXG4vLyBVc2VyLXNlbGVjdCBIYWNrczpcbi8vXG4vLyBVc2VmdWwgZm9yIHByZXZlbnRpbmcgYmx1ZSBoaWdobGlnaHRzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcgd2hlbiBkcmFnZ2luZy5cbmNvbnN0IHVzZXJTZWxlY3RQcmVmaXggPSBnZXRQcmVmaXgoJ3VzZXItc2VsZWN0Jyk7XG5jb25zdCB1c2VyU2VsZWN0ID0gYnJvd3NlclByZWZpeFRvU3R5bGUoJ3VzZXItc2VsZWN0JywgdXNlclNlbGVjdFByZWZpeCk7XG5jb25zdCB1c2VyU2VsZWN0U3R5bGUgPSBgOyR7dXNlclNlbGVjdH06IG5vbmU7YDtcbmNvbnN0IHVzZXJTZWxlY3RSZXBsYWNlUmVnRXhwID0gbmV3IFJlZ0V4cChgOz8ke3VzZXJTZWxlY3R9OiBub25lO2ApOyAvLyBsZWFkaW5nIDsgbm90IHByZXNlbnQgb24gSUVcblxuLy8gTm90ZSB3ZSdyZSBwYXNzaW5nIGBkb2N1bWVudGAgYi9jIHdlIGNvdWxkIGJlIGlmcmFtZWRcbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyU2VsZWN0U3R5bGVzKGJvZHk6IEhUTUxFbGVtZW50KSB7XG4gIGNvbnN0IHN0eWxlID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykgfHwgJyc7XG4gIGJvZHkuc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlICsgdXNlclNlbGVjdFN0eWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoYm9keTogSFRNTEVsZW1lbnQpIHtcbiAgY29uc3Qgc3R5bGUgPSBib2R5LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJztcbiAgYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUucmVwbGFjZSh1c2VyU2VsZWN0UmVwbGFjZVJlZ0V4cCwgJycpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlSGFja3MoY2hpbGRTdHlsZTogT2JqZWN0ID0ge30pOiBPYmplY3Qge1xuICAvLyBXb3JrYXJvdW5kIElFIHBvaW50ZXIgZXZlbnRzOyBzZWUgIzUxXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL3JlYWN0LWRyYWdnYWJsZS9pc3N1ZXMvNTEjaXNzdWVjb21tZW50LTEwMzQ4ODI3OFxuICByZXR1cm4ge1xuICAgIHRvdWNoQWN0aW9uOiAnbm9uZScsXG4gICAgLi4uY2hpbGRTdHlsZVxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3V0aWxzL2RvbUZucy5lczYiLCIvLyBAZmxvd1xuLy8gQGNyZWRpdHMgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcm9nb3pobmlrb2ZmL2E0M2NmZWQyN2M0MWU0ZTY4Y2RjXG5leHBvcnQgZnVuY3Rpb24gZmluZEluQXJyYXkoYXJyYXk6IEFycmF5PGFueT4gfCBUb3VjaExpc3QsIGNhbGxiYWNrOiBGdW5jdGlvbik6IGFueSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChjYWxsYmFjay5hcHBseShjYWxsYmFjaywgW2FycmF5W2ldLCBpLCBhcnJheV0pKSByZXR1cm4gYXJyYXlbaV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bShudW06IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG51bSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnQoYTogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbnRTZXRNZShwcm9wczogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBjb21wb25lbnROYW1lOiBzdHJpbmcpIHtcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEludmFsaWQgcHJvcCAke3Byb3BOYW1lfSBwYXNzZWQgdG8gJHtjb21wb25lbnROYW1lfSAtIGRvIG5vdCBzZXQgdGhpcywgc2V0IGl0IG9uIHRoZSBjaGlsZC5gKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3V0aWxzL3NoaW1zLmVzNiIsIi8vIEBmbG93XG5jb25zdCBwcmVmaXhlcyA9IFsnTW96JywgJ1dlYmtpdCcsICdPJywgJ21zJ107XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlZml4KHByb3A6IHN0cmluZz0ndHJhbnNmb3JtJyk6IHN0cmluZyB7XG4gIC8vIENoZWNraW5nIHNwZWNpZmljYWxseSBmb3IgJ3dpbmRvdy5kb2N1bWVudCcgaXMgZm9yIHBzZXVkby1icm93c2VyIHNlcnZlci1zaWRlXG4gIC8vIGVudmlyb25tZW50cyB0aGF0IGRlZmluZSAnd2luZG93JyBhcyB0aGUgZ2xvYmFsIGNvbnRleHQuXG4gIC8vIEUuZy4gUmVhY3QtcmFpbHMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yYWlscy9wdWxsLzg0KVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnJztcblxuICBjb25zdCBzdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbiAgaWYgKHByb3AgaW4gc3R5bGUpIHJldHVybiAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGJyb3dzZXJQcmVmaXhUb0tleShwcm9wLCBwcmVmaXhlc1tpXSkgaW4gc3R5bGUpIHJldHVybiBwcmVmaXhlc1tpXTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJQcmVmaXhUb0tleShwcm9wOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHByZWZpeCA/IGAke3ByZWZpeH0ke2tlYmFiVG9UaXRsZUNhc2UocHJvcCl9YCA6IHByb3A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyUHJlZml4VG9TdHlsZShwcm9wOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHByZWZpeCA/IGAtJHtwcmVmaXgudG9Mb3dlckNhc2UoKX0tJHtwcm9wfWAgOiBwcm9wO1xufVxuXG5mdW5jdGlvbiBrZWJhYlRvVGl0bGVDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IG91dCA9ICcnO1xuICBsZXQgc2hvdWxkQ2FwaXRhbGl6ZSA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNob3VsZENhcGl0YWxpemUpIHtcbiAgICAgIG91dCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICAgIHNob3VsZENhcGl0YWxpemUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJy0nKSB7XG4gICAgICBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ICs9IHN0cltpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLy8gRGVmYXVsdCBleHBvcnQgaXMgdGhlIHByZWZpeCBpdHNlbGYsIGxpa2UgJ01veicsICdXZWJraXQnLCBldGNcbi8vIE5vdGUgdGhhdCB5b3UgbWF5IGhhdmUgdG8gcmUtdGVzdCBmb3IgY2VydGFpbiB0aGluZ3M7IGZvciBpbnN0YW5jZSwgQ2hyb21lIDUwXG4vLyBjYW4gaGFuZGxlIHVucHJlZml4ZWQgYHRyYW5zZm9ybWAsIGJ1dCBub3QgdW5wcmVmaXhlZCBgdXNlci1zZWxlY3RgXG5leHBvcnQgZGVmYXVsdCBnZXRQcmVmaXgoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi91dGlscy9nZXRQcmVmaXguZXM2IiwiLy8gQGZsb3dcbmltcG9ydCB7aXNOdW0sIGludH0gZnJvbSAnLi9zaGltcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Z2V0VG91Y2gsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0LCBvZmZzZXRYWUZyb21QYXJlbnQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0fSBmcm9tICcuL2RvbUZucyc7XG5cbmltcG9ydCB0eXBlIERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUnO1xuaW1wb3J0IHR5cGUge0JvdW5kcywgQ29udHJvbFBvc2l0aW9uLCBEcmFnZ2FibGVEYXRhfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB0eXBlIERyYWdnYWJsZUNvcmUgZnJvbSAnLi4vRHJhZ2dhYmxlQ29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3VuZFBvc2l0aW9uKGRyYWdnYWJsZTogRHJhZ2dhYmxlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xuICAvLyBJZiBubyBib3VuZHMsIHNob3J0LWNpcmN1aXQgYW5kIG1vdmUgb25cbiAgaWYgKCFkcmFnZ2FibGUucHJvcHMuYm91bmRzKSByZXR1cm4gW3gsIHldO1xuXG4gIC8vIENsb25lIG5ldyBib3VuZHNcbiAgbGV0IHtib3VuZHN9ID0gZHJhZ2dhYmxlLnByb3BzO1xuICBib3VuZHMgPSB0eXBlb2YgYm91bmRzID09PSAnc3RyaW5nJyA/IGJvdW5kcyA6IGNsb25lQm91bmRzKGJvdW5kcyk7XG4gIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGUpO1xuXG4gIGlmICh0eXBlb2YgYm91bmRzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHtvd25lckRvY3VtZW50fSA9IG5vZGU7XG4gICAgY29uc3Qgb3duZXJXaW5kb3cgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIGxldCBib3VuZE5vZGU7XG4gICAgaWYgKGJvdW5kcyA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIGJvdW5kTm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmROb2RlID0gb3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvdW5kcyk7XG4gICAgICBpZiAoIWJvdW5kTm9kZSkgdGhyb3cgbmV3IEVycm9yKCdCb3VuZHMgc2VsZWN0b3IgXCInICsgYm91bmRzICsgJ1wiIGNvdWxkIG5vdCBmaW5kIGFuIGVsZW1lbnQuJyk7XG4gICAgfVxuICAgIGNvbnN0IG5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgYm91bmROb2RlU3R5bGUgPSBvd25lcldpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJvdW5kTm9kZSk7XG4gICAgLy8gQ29tcHV0ZSBib3VuZHMuIFRoaXMgaXMgYSBwYWluIHdpdGggcGFkZGluZyBhbmQgb2Zmc2V0cyBidXQgdGhpcyBnZXRzIGl0IGV4YWN0bHkgcmlnaHQuXG4gICAgYm91bmRzID0ge1xuICAgICAgbGVmdDogLW5vZGUub2Zmc2V0TGVmdCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nTGVmdCkgK1xuICAgICAgICAgICAgaW50KG5vZGVTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICsgaW50KG5vZGVTdHlsZS5tYXJnaW5MZWZ0KSxcbiAgICAgIHRvcDogLW5vZGUub2Zmc2V0VG9wICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdUb3ApICtcbiAgICAgICAgICAgIGludChub2RlU3R5bGUuYm9yZGVyVG9wV2lkdGgpICsgaW50KG5vZGVTdHlsZS5tYXJnaW5Ub3ApLFxuICAgICAgcmlnaHQ6IGlubmVyV2lkdGgoYm91bmROb2RlKSAtIG91dGVyV2lkdGgobm9kZSkgLSBub2RlLm9mZnNldExlZnQsXG4gICAgICBib3R0b206IGlubmVySGVpZ2h0KGJvdW5kTm9kZSkgLSBvdXRlckhlaWdodChub2RlKSAtIG5vZGUub2Zmc2V0VG9wXG4gICAgfTtcbiAgfVxuXG4gIC8vIEtlZXAgeCBhbmQgeSBiZWxvdyByaWdodCBhbmQgYm90dG9tIGxpbWl0cy4uLlxuICBpZiAoaXNOdW0oYm91bmRzLnJpZ2h0KSkgeCA9IE1hdGgubWluKHgsIGJvdW5kcy5yaWdodCk7XG4gIGlmIChpc051bShib3VuZHMuYm90dG9tKSkgeSA9IE1hdGgubWluKHksIGJvdW5kcy5ib3R0b20pO1xuXG4gIC8vIEJ1dCBhYm92ZSBsZWZ0IGFuZCB0b3AgbGltaXRzLlxuICBpZiAoaXNOdW0oYm91bmRzLmxlZnQpKSB4ID0gTWF0aC5tYXgoeCwgYm91bmRzLmxlZnQpO1xuICBpZiAoaXNOdW0oYm91bmRzLnRvcCkpIHkgPSBNYXRoLm1heCh5LCBib3VuZHMudG9wKTtcblxuICByZXR1cm4gW3gsIHldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc25hcFRvR3JpZChncmlkOiBbbnVtYmVyLCBudW1iZXJdLCBwZW5kaW5nWDogbnVtYmVyLCBwZW5kaW5nWTogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIGNvbnN0IHggPSBNYXRoLnJvdW5kKHBlbmRpbmdYIC8gZ3JpZFswXSkgKiBncmlkWzBdO1xuICBjb25zdCB5ID0gTWF0aC5yb3VuZChwZW5kaW5nWSAvIGdyaWRbMV0pICogZ3JpZFsxXTtcbiAgcmV0dXJuIFt4LCB5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkRyYWdYKGRyYWdnYWJsZTogRHJhZ2dhYmxlKTogYm9vbGVhbiB7XG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5EcmFnWShkcmFnZ2FibGU6IERyYWdnYWJsZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICdib3RoJyB8fCBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ3knO1xufVxuXG4vLyBHZXQge3gsIHl9IHBvc2l0aW9ucyBmcm9tIGV2ZW50LlxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyb2xQb3NpdGlvbihlOiBNb3VzZVRvdWNoRXZlbnQsIHRvdWNoSWRlbnRpZmllcjogP251bWJlciwgZHJhZ2dhYmxlQ29yZTogRHJhZ2dhYmxlQ29yZSk6ID9Db250cm9sUG9zaXRpb24ge1xuICBjb25zdCB0b3VjaE9iaiA9IHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInID8gZ2V0VG91Y2goZSwgdG91Y2hJZGVudGlmaWVyKSA6IG51bGw7XG4gIGlmICh0eXBlb2YgdG91Y2hJZGVudGlmaWVyID09PSAnbnVtYmVyJyAmJiAhdG91Y2hPYmopIHJldHVybiBudWxsOyAvLyBub3QgdGhlIHJpZ2h0IHRvdWNoXG4gIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShkcmFnZ2FibGVDb3JlKTtcbiAgLy8gVXNlciBjYW4gcHJvdmlkZSBhbiBvZmZzZXRQYXJlbnQgaWYgZGVzaXJlZC5cbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZHJhZ2dhYmxlQ29yZS5wcm9wcy5vZmZzZXRQYXJlbnQgfHwgbm9kZS5vZmZzZXRQYXJlbnQgfHwgbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIHJldHVybiBvZmZzZXRYWUZyb21QYXJlbnQodG91Y2hPYmogfHwgZSwgb2Zmc2V0UGFyZW50KTtcbn1cblxuLy8gQ3JlYXRlIGFuIGRhdGEgb2JqZWN0IGV4cG9zZWQgYnkgPERyYWdnYWJsZUNvcmU+J3MgZXZlbnRzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29yZURhdGEoZHJhZ2dhYmxlOiBEcmFnZ2FibGVDb3JlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IERyYWdnYWJsZURhdGEge1xuICBjb25zdCBzdGF0ZSA9IGRyYWdnYWJsZS5zdGF0ZTtcbiAgY29uc3QgaXNTdGFydCA9ICFpc051bShzdGF0ZS5sYXN0WCk7XG5cbiAgaWYgKGlzU3RhcnQpIHtcbiAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBtb3ZlLCB1c2UgdGhlIHggYW5kIHkgYXMgbGFzdCBjb29yZHMuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGU6IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRyYWdnYWJsZSksXG4gICAgICBkZWx0YVg6IDAsIGRlbHRhWTogMCxcbiAgICAgIGxhc3RYOiB4LCBsYXN0WTogeSxcbiAgICAgIHg6IHgsIHk6IHlcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSBjYWxjdWxhdGUgcHJvcGVyIHZhbHVlcy5cbiAgICByZXR1cm4ge1xuICAgICAgbm9kZTogUmVhY3RET00uZmluZERPTU5vZGUoZHJhZ2dhYmxlKSxcbiAgICAgIGRlbHRhWDogeCAtIHN0YXRlLmxhc3RYLCBkZWx0YVk6IHkgLSBzdGF0ZS5sYXN0WSxcbiAgICAgIGxhc3RYOiBzdGF0ZS5sYXN0WCwgbGFzdFk6IHN0YXRlLmxhc3RZLFxuICAgICAgeDogeCwgeTogeVxuICAgIH07XG4gIH1cbn1cblxuLy8gQ3JlYXRlIGFuIGRhdGEgZXhwb3NlZCBieSA8RHJhZ2dhYmxlPidzIGV2ZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURyYWdnYWJsZURhdGEoZHJhZ2dhYmxlOiBEcmFnZ2FibGUsIGNvcmVEYXRhOiBEcmFnZ2FibGVEYXRhKTogRHJhZ2dhYmxlRGF0YSB7XG4gIHJldHVybiB7XG4gICAgbm9kZTogY29yZURhdGEubm9kZSxcbiAgICB4OiBkcmFnZ2FibGUuc3RhdGUueCArIGNvcmVEYXRhLmRlbHRhWCxcbiAgICB5OiBkcmFnZ2FibGUuc3RhdGUueSArIGNvcmVEYXRhLmRlbHRhWSxcbiAgICBkZWx0YVg6IGNvcmVEYXRhLmRlbHRhWCxcbiAgICBkZWx0YVk6IGNvcmVEYXRhLmRlbHRhWSxcbiAgICBsYXN0WDogZHJhZ2dhYmxlLnN0YXRlLngsXG4gICAgbGFzdFk6IGRyYWdnYWJsZS5zdGF0ZS55XG4gIH07XG59XG5cbi8vIEEgbG90IGZhc3RlciB0aGFuIHN0cmluZ2lmeS9wYXJzZVxuZnVuY3Rpb24gY2xvbmVCb3VuZHMoYm91bmRzOiBCb3VuZHMpOiBCb3VuZHMge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGJvdW5kcy5sZWZ0LFxuICAgIHRvcDogYm91bmRzLnRvcCxcbiAgICByaWdodDogYm91bmRzLnJpZ2h0LFxuICAgIGJvdHRvbTogYm91bmRzLmJvdHRvbVxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3V0aWxzL3Bvc2l0aW9uRm5zLmVzNiIsIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHttYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8sIGFkZEV2ZW50LCByZW1vdmVFdmVudCwgYWRkVXNlclNlbGVjdFN0eWxlcywgZ2V0VG91Y2hJZGVudGlmaWVyLFxuICAgICAgICByZW1vdmVVc2VyU2VsZWN0U3R5bGVzLCBzdHlsZUhhY2tzfSBmcm9tICcuL3V0aWxzL2RvbUZucyc7XG5pbXBvcnQge2NyZWF0ZUNvcmVEYXRhLCBnZXRDb250cm9sUG9zaXRpb24sIHNuYXBUb0dyaWR9IGZyb20gJy4vdXRpbHMvcG9zaXRpb25GbnMnO1xuaW1wb3J0IHtkb250U2V0TWV9IGZyb20gJy4vdXRpbHMvc2hpbXMnO1xuaW1wb3J0IGxvZyBmcm9tICcuL3V0aWxzL2xvZyc7XG5cbmltcG9ydCB0eXBlIHtFdmVudEhhbmRsZXJ9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xuXG4vLyBTaW1wbGUgYWJzdHJhY3Rpb24gZm9yIGRyYWdnaW5nIGV2ZW50cyBuYW1lcy5cbmNvbnN0IGV2ZW50c0ZvciA9IHtcbiAgdG91Y2g6IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIHN0b3A6ICd0b3VjaGVuZCdcbiAgfSxcbiAgbW91c2U6IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgc3RvcDogJ21vdXNldXAnXG4gIH1cbn07XG5cbi8vIERlZmF1bHQgdG8gbW91c2UgZXZlbnRzLlxubGV0IGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcblxudHlwZSBDb3JlU3RhdGUgPSB7XG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICBsYXN0WDogbnVtYmVyLFxuICBsYXN0WTogbnVtYmVyLFxuICB0b3VjaElkZW50aWZpZXI6ID9udW1iZXJcbn07XG5cbnR5cGUgRG9tTm9kZSA9IHtcbiAgb3duZXJEb2N1bWVudDogYW55XG59O1xuXG4vL1xuLy8gRGVmaW5lIDxEcmFnZ2FibGVDb3JlPi5cbi8vXG4vLyA8RHJhZ2dhYmxlQ29yZT4gaXMgZm9yIGFkdmFuY2VkIHVzYWdlIG9mIDxEcmFnZ2FibGU+LiBJdCBtYWludGFpbnMgbWluaW1hbCBpbnRlcm5hbCBzdGF0ZSBzbyBpdCBjYW5cbi8vIHdvcmsgd2VsbCB3aXRoIGxpYnJhcmllcyB0aGF0IHJlcXVpcmUgbW9yZSBjb250cm9sIG92ZXIgdGhlIGVsZW1lbnQuXG4vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVDb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRHJhZ2dhYmxlQ29yZSc7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBgYWxsb3dBbnlDbGlja2AgYWxsb3dzIGRyYWdnaW5nIHVzaW5nIGFueSBtb3VzZSBidXR0b24uXG4gICAgICogQnkgZGVmYXVsdCwgd2Ugb25seSBhY2NlcHQgdGhlIGxlZnQgYnV0dG9uLlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBhbGxvd0FueUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIGBkaXNhYmxlZGAsIGlmIHRydWUsIHN0b3BzIHRoZSA8RHJhZ2dhYmxlPiBmcm9tIGRyYWdnaW5nLiBBbGwgaGFuZGxlcnMsXG4gICAgICogd2l0aCB0aGUgZXhjZXB0aW9uIG9mIGBvbk1vdXNlRG93bmAsIHdpbGwgbm90IGZpcmUuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgd2UgYWRkICd1c2VyLXNlbGVjdDpub25lJyBhdHRyaWJ1dGVzIHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgICogdG8gcHJldmVudCB1Z2x5IHRleHQgc2VsZWN0aW9uIGR1cmluZyBkcmFnLiBJZiB0aGlzIGlzIGNhdXNpbmcgcHJvYmxlbXNcbiAgICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogYG9mZnNldFBhcmVudGAsIGlmIHNldCwgdXNlcyB0aGUgcGFzc2VkIERPTSBub2RlIHRvIGNvbXB1dGUgZHJhZyBvZmZzZXRzXG4gICAgICogaW5zdGVhZCBvZiB1c2luZyB0aGUgcGFyZW50IG5vZGUuXG4gICAgICovXG4gICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgcHJvcHNbcHJvcE5hbWVdICYmIHByb3BzW3Byb3BOYW1lXS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RyYWdnYWJsZVxcJ3Mgb2Zmc2V0UGFyZW50IG11c3QgYmUgYSBET00gTm9kZS4nKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogYGdyaWRgIHNwZWNpZmllcyB0aGUgeCBhbmQgeSB0aGF0IGRyYWdnaW5nIHNob3VsZCBzbmFwIHRvLlxuICAgICAqL1xuICAgIGdyaWQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuXG4gICAgLyoqXG4gICAgICogYGhhbmRsZWAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCBhcyB0aGUgaGFuZGxlIHRoYXQgaW5pdGlhdGVzIGRyYWcuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLmhhbmRsZVwiPlxuICAgICAqICAgICAgICAgICAgICA8ZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW5kbGVcIj5DbGljayBtZSB0byBkcmFnPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgaXMgc29tZSBvdGhlciBjb250ZW50PC9kaXY+XG4gICAgICogICAgICAgICAgICAgIDwvZGl2PlxuICAgICAqICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgaGFuZGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogYGNhbmNlbGAgc3BlY2lmaWVzIGEgc2VsZWN0b3IgdG8gYmUgdXNlZCB0byBwcmV2ZW50IGRyYWcgaW5pdGlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgICByZXR1cm4oXG4gICAgICogICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGNhbmNlbD1cIi5jYW5jZWxcIj5cbiAgICAgKiAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW5jZWxcIj5Zb3UgY2FuJ3QgZHJhZyBmcm9tIGhlcmU8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXY+RHJhZ2dpbmcgaGVyZSB3b3JrcyBmaW5lPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICAgKTtcbiAgICAgKiAgICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBjYW5jZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBkcmFnZ2luZyBzdGFydHMuXG4gICAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCBkcmFnZ2luZyB3aWxsIGJlIGNhbmNlbGVkLlxuICAgICAqL1xuICAgIG9uU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoaWxlIGRyYWdnaW5nLlxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cbiAgICAgKi9cbiAgICBvbkRyYWc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RvcHMuXG4gICAgICogSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBib29sZWFuIGZhbHNlLCB0aGUgZHJhZyB3aWxsIHJlbWFpbiBhY3RpdmUuXG4gICAgICovXG4gICAgb25TdG9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEEgd29ya2Fyb3VuZCBvcHRpb24gd2hpY2ggY2FuIGJlIHBhc3NlZCBpZiBvbk1vdXNlRG93biBuZWVkcyB0byBiZSBhY2Nlc3NlZCxcbiAgICAgKiBzaW5jZSBpdCdsbCBhbHdheXMgYmUgYmxvY2tlZCAoYXMgdGhlcmUgaXMgaW50ZXJuYWwgdXNlIG9mIG9uTW91c2VEb3duKVxuICAgICAqL1xuICAgIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcbiAgICBzdHlsZTogZG9udFNldE1lLFxuICAgIHRyYW5zZm9ybTogZG9udFNldE1lXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbGxvd0FueUNsaWNrOiBmYWxzZSwgLy8gYnkgZGVmYXVsdCBvbmx5IGFjY2VwdCBsZWZ0IGNsaWNrXG4gICAgY2FuY2VsOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBlbmFibGVVc2VyU2VsZWN0SGFjazogdHJ1ZSxcbiAgICBvZmZzZXRQYXJlbnQ6IG51bGwsXG4gICAgaGFuZGxlOiBudWxsLFxuICAgIGdyaWQ6IG51bGwsXG4gICAgdHJhbnNmb3JtOiBudWxsLFxuICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKCl7fSxcbiAgICBvbkRyYWc6IGZ1bmN0aW9uKCl7fSxcbiAgICBvblN0b3A6IGZ1bmN0aW9uKCl7fSxcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24oKXt9XG4gIH07XG5cbiAgLyoqXG4gICAqIGBkb21Ob2RlYCwgcmVmZXJlbmNlIHRvIHVuZGVybHlpbmcgZG9tIG5vZGVcbiAgICovXG4gIGRvbU5vZGU6IERvbU5vZGUgPSB7XG4gICAgb3duZXJEb2N1bWVudDoge1xuICAgICAgYm9keTogdW5kZWZpbmVkLFxuICAgICAgZGVmYXVsdFZpZXc6IHVuZGVmaW5lZFxuICAgIH1cbiAgfTtcblxuICBzdGF0ZTogQ29yZVN0YXRlID0ge1xuICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAvLyBVc2VkIHdoaWxlIGRyYWdnaW5nIHRvIGRldGVybWluZSBkZWx0YXMuXG4gICAgbGFzdFg6IE5hTiwgbGFzdFk6IE5hTixcbiAgICB0b3VjaElkZW50aWZpZXI6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgYW55IGxlZnRvdmVyIGV2ZW50IGhhbmRsZXJzLiBSZW1vdmUgYm90aCB0b3VjaCBhbmQgbW91c2UgaGFuZGxlcnMgaW4gY2FzZVxuICAgIC8vIHNvbWUgYnJvd3NlciBxdWlyayBjYXVzZWQgYSB0b3VjaCBldmVudCB0byBmaXJlIGR1cmluZyBhIG1vdXNlIG1vdmUsIG9yIHZpY2UgdmVyc2EuXG4gICAgY29uc3Qge293bmVyRG9jdW1lbnR9ID0gdGhpcy5kb21Ob2RlXG4gICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcyhvd25lckRvY3VtZW50LmJvZHkpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ1N0YXJ0OiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgLy8gTWFrZSBpdCBwb3NzaWJsZSB0byBhdHRhY2ggZXZlbnQgaGFuZGxlcnMgb24gdG9wIG9mIHRoaXMgb25lLlxuICAgIHRoaXMucHJvcHMub25Nb3VzZURvd24oZSk7XG5cbiAgICAvLyBPbmx5IGFjY2VwdCBsZWZ0LWNsaWNrcy5cbiAgICBpZiAoIXRoaXMucHJvcHMuYWxsb3dBbnlDbGljayAmJiB0eXBlb2YgZS5idXR0b24gPT09ICdudW1iZXInICYmIGUuYnV0dG9uICE9PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBHZXQgbm9kZXMuIEJlIHN1cmUgdG8gZ3JhYiByZWxhdGl2ZSBkb2N1bWVudCAoY291bGQgYmUgaWZyYW1lZClcbiAgICBjb25zdCB7b3duZXJEb2N1bWVudH0gPSB0aGlzLmRvbU5vZGU7XG5cbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIGhhbmRsZSBvciBjYW5jZWwgcHJvcCB3YXMgcHJvdmlkZWQgYW5kIHNlbGVjdG9yIGRvZXNuJ3QgbWF0Y2guXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgICghKGUudGFyZ2V0IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5Ob2RlKSkgfHxcbiAgICAgICh0aGlzLnByb3BzLmhhbmRsZSAmJiAhbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCB0aGlzLnByb3BzLmhhbmRsZSwgdGhpcy5kb21Ob2RlKSkgfHxcbiAgICAgICh0aGlzLnByb3BzLmNhbmNlbCAmJiBtYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8oZS50YXJnZXQsIHRoaXMucHJvcHMuY2FuY2VsLCB0aGlzLmRvbU5vZGUpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNldCB0b3VjaCBpZGVudGlmaWVyIGluIGNvbXBvbmVudCBzdGF0ZSBpZiB0aGlzIGlzIGEgdG91Y2ggZXZlbnQuIFRoaXMgYWxsb3dzIHVzIHRvXG4gICAgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBpbmRpdmlkdWFsIHRvdWNoZXMgb24gbXVsdGl0b3VjaCBzY3JlZW5zIGJ5IGlkZW50aWZ5aW5nIHdoaWNoXG4gICAgLy8gdG91Y2hwb2ludCB3YXMgc2V0IHRvIHRoaXMgZWxlbWVudC5cbiAgICBjb25zdCB0b3VjaElkZW50aWZpZXIgPSBnZXRUb3VjaElkZW50aWZpZXIoZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dG91Y2hJZGVudGlmaWVyfSk7XG5cbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZHJhZyBwb2ludCBmcm9tIHRoZSBldmVudC4gVGhpcyBpcyB1c2VkIGFzIHRoZSBvZmZzZXQuXG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRDb250cm9sUG9zaXRpb24oZSwgdG91Y2hJZGVudGlmaWVyLCB0aGlzKTtcbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkgcmV0dXJuOyAvLyBub3QgcG9zc2libGUgYnV0IHNhdGlzZmllcyBmbG93XG4gICAgY29uc3Qge3gsIHl9ID0gcG9zaXRpb247XG5cbiAgICAvLyBDcmVhdGUgYW4gZXZlbnQgb2JqZWN0IHdpdGggYWxsIHRoZSBkYXRhIHBhcmVudHMgbmVlZCB0byBtYWtlIGEgZGVjaXNpb24gaGVyZS5cbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcblxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZ1N0YXJ0OiAlaicsIGNvcmVFdmVudCk7XG5cbiAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXIuIElmIGl0IHJldHVybnMgZXhwbGljaXQgZmFsc2UsIGNhbmNlbC5cbiAgICBsb2coJ2NhbGxpbmcnLCB0aGlzLnByb3BzLm9uU3RhcnQpO1xuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9IHRoaXMucHJvcHMub25TdGFydChlLCBjb3JlRXZlbnQpO1xuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAvLyBBZGQgYSBzdHlsZSB0byB0aGUgYm9keSB0byBkaXNhYmxlIHVzZXItc2VsZWN0LiBUaGlzIHByZXZlbnRzIHRleHQgZnJvbVxuICAgIC8vIGJlaW5nIHNlbGVjdGVkIGFsbCBvdmVyIHRoZSBwYWdlLlxuICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSBhZGRVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQuYm9keSk7XG5cbiAgICAvLyBJbml0aWF0ZSBkcmFnZ2luZy4gU2V0IHRoZSBjdXJyZW50IHggYW5kIHkgYXMgb2Zmc2V0c1xuICAgIC8vIHNvIHdlIGtub3cgaG93IG11Y2ggd2UndmUgbW92ZWQgZHVyaW5nIHRoZSBkcmFnLiBUaGlzIGFsbG93cyB1c1xuICAgIC8vIHRvIGRyYWcgZWxlbWVudHMgYXJvdW5kIGV2ZW4gaWYgdGhleSBoYXZlIGJlZW4gbW92ZWQsIHdpdGhvdXQgaXNzdWUuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkcmFnZ2luZzogdHJ1ZSxcblxuICAgICAgbGFzdFg6IHgsXG4gICAgICBsYXN0WTogeVxuICAgIH0pO1xuXG4gICAgLy8gQWRkIGV2ZW50cyB0byB0aGUgZG9jdW1lbnQgZGlyZWN0bHkgc28gd2UgY2F0Y2ggd2hlbiB0aGUgdXNlcidzIG1vdXNlL3RvdWNoIG1vdmVzIG91dHNpZGUgb2ZcbiAgICAvLyB0aGlzIGVsZW1lbnQuIFdlIHVzZSBkaWZmZXJlbnQgZXZlbnRzIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB3ZSBoYXZlIGRldGVjdGVkIHRoYXQgdGhpc1xuICAgIC8vIGlzIGEgdG91Y2gtY2FwYWJsZSBkZXZpY2UuXG4gICAgYWRkRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgYWRkRXZlbnQob3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICB9O1xuXG4gIGhhbmRsZURyYWc6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcbiAgICBsZXQge3gsIHl9ID0gcG9zaXRpb247XG5cbiAgICAvLyBTbmFwIHRvIGdyaWQgaWYgcHJvcCBoYXMgYmVlbiBwcm92aWRlZFxuICAgIGlmICh4ICE9PSB4KSBkZWJ1Z2dlcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZ3JpZCkpIHtcbiAgICAgIGxldCBkZWx0YVggPSB4IC0gdGhpcy5zdGF0ZS5sYXN0WCwgZGVsdGFZID0geSAtIHRoaXMuc3RhdGUubGFzdFk7XG4gICAgICBbZGVsdGFYLCBkZWx0YVldID0gc25hcFRvR3JpZCh0aGlzLnByb3BzLmdyaWQsIGRlbHRhWCwgZGVsdGFZKTtcbiAgICAgIGlmICghZGVsdGFYICYmICFkZWx0YVkpIHJldHVybjsgLy8gc2tpcCB1c2VsZXNzIGRyYWdcbiAgICAgIHggPSB0aGlzLnN0YXRlLmxhc3RYICsgZGVsdGFYLCB5ID0gdGhpcy5zdGF0ZS5sYXN0WSArIGRlbHRhWTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcblxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZzogJWonLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uRHJhZyhlLCBjb3JlRXZlbnQpO1xuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAkRmxvd0lnbm9yZVxuICAgICAgICB0aGlzLmhhbmRsZURyYWdTdG9wKG5ldyBNb3VzZUV2ZW50KCdtb3VzZXVwJykpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIE9sZCBicm93c2Vyc1xuICAgICAgICBjb25zdCBldmVudCA9ICgoZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk6IGFueSk6IE1vdXNlVG91Y2hFdmVudCk7XG4gICAgICAgIC8vIEkgc2VlIHdoeSB0aGlzIGluc2FuaXR5IHdhcyBkZXByZWNhdGVkXG4gICAgICAgIC8vICRGbG93SWdub3JlXG4gICAgICAgIGV2ZW50LmluaXRNb3VzZUV2ZW50KCdtb3VzZXVwJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZXZlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGFzdFg6IHgsXG4gICAgICBsYXN0WTogeVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZURyYWdTdG9wOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcbiAgICBjb25zdCB7b3duZXJEb2N1bWVudH0gPSB0aGlzLmRvbU5vZGVcblxuICAgIC8vIFJlbW92ZSB1c2VyLXNlbGVjdCBoYWNrXG4gICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMob3duZXJEb2N1bWVudC5ib2R5KTtcblxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZ1N0b3A6ICVqJywgY29yZUV2ZW50KTtcblxuICAgIC8vIFJlc2V0IHRoZSBlbC5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIGxhc3RYOiBOYU4sXG4gICAgICBsYXN0WTogTmFOXG4gICAgfSk7XG5cbiAgICAvLyBDYWxsIGV2ZW50IGhhbmRsZXJcbiAgICB0aGlzLnByb3BzLm9uU3RvcChlLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGhhbmRsZXJzXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBSZW1vdmluZyBoYW5kbGVycycpO1xuICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xuICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGRyYWdFdmVudEZvci5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgfTtcblxuICBvbk1vdXNlRG93bjogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTsgLy8gb24gdG91Y2hzY3JlZW4gbGFwdG9wcyB3ZSBjb3VsZCBzd2l0Y2ggYmFjayB0byBtb3VzZVxuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xuICB9O1xuXG4gIG9uTW91c2VVcDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcblxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xuICB9O1xuXG4gIC8vIFNhbWUgYXMgb25Nb3VzZURvd24gKHN0YXJ0IGRyYWcpLCBidXQgbm93IGNvbnNpZGVyIHRoaXMgYSB0b3VjaCBkZXZpY2UuXG4gIG9uVG91Y2hTdGFydDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcblxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdGFydChlKTtcbiAgfTtcblxuICBvblRvdWNoRW5kOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZSk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LkVsZW1lbnQ8YW55PiB7XG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0YylcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcbiAgICAgIHJlZjogKG5vZGUpID0+IHtcbiAgICAgICAgdGhpcy5kb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUobm9kZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RvbU5vZGUnLCB0aGlzLmRvbU5vZGUpXG4gICAgICB9LFxuICAgICAgc3R5bGU6IHN0eWxlSGFja3ModGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy5zdHlsZSksXG4gICAgICAvLyBOb3RlOiBtb3VzZU1vdmUgaGFuZGxlciBpcyBhdHRhY2hlZCB0byBkb2N1bWVudCBzbyBpdCB3aWxsIHN0aWxsIGZ1bmN0aW9uXG4gICAgICAvLyB3aGVuIHRoZSB1c2VyIGRyYWdzIHF1aWNrbHkgYW5kIGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSxcbiAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKSxcbiAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSxcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRHJhZ2dhYmxlQ29yZS5lczYiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQGZsb3dcbi8qZXNsaW50IG5vLWNvbnNvbGU6MCovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2coLi4uYXJnczogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5EUkFHR0FCTEVfREVCVUcpIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3V0aWxzL2xvZy5lczYiXSwic291cmNlUm9vdCI6IiJ9