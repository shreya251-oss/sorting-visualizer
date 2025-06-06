import {
  createSvgIcon,
  debounce,
  ownerWindow,
  require_react_is
} from "./chunk-CKMKRAM7.js";
import "./chunk-P6D724GQ.js";
import {
  useTheme
} from "./chunk-KP7XZ5NQ.js";
import {
  ButtonBase_default
} from "./chunk-UOM7BKR5.js";
import "./chunk-TLFT7UJV.js";
import "./chunk-NPKHIS34.js";
import {
  useEventCallback
} from "./chunk-3ASRZY4K.js";
import "./chunk-2LJNSQHW.js";
import {
  capitalize
} from "./chunk-YYFBBRLJ.js";
import {
  _defineProperty,
  _extends,
  _objectWithoutProperties,
  clsx_m_default,
  refType_default,
  require_prop_types,
  withStyles_default
} from "./chunk-LJE4UF3L.js";
import "./chunk-EU6QCHT3.js";
import {
  require_react
} from "./chunk-23ZMGCJ2.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@material-ui/core/esm/Tabs/Tabs.js
var React6 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/utils/scrollLeft.js
var cachedType;
function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }
  var dummy = document.createElement("div");
  var container = document.createElement("div");
  container.style.width = "10px";
  container.style.height = "1px";
  dummy.appendChild(container);
  dummy.dir = "rtl";
  dummy.style.fontSize = "14px";
  dummy.style.width = "4px";
  dummy.style.height = "1px";
  dummy.style.position = "absolute";
  dummy.style.top = "-1000px";
  dummy.style.overflow = "scroll";
  document.body.appendChild(dummy);
  cachedType = "reverse";
  if (dummy.scrollLeft > 0) {
    cachedType = "default";
  } else {
    dummy.scrollLeft = 1;
    if (dummy.scrollLeft === 0) {
      cachedType = "negative";
    }
  }
  document.body.removeChild(dummy);
  return cachedType;
}
function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft;
  if (direction !== "rtl") {
    return scrollLeft;
  }
  var type = detectScrollType();
  switch (type) {
    case "negative":
      return element.scrollWidth - element.clientWidth + scrollLeft;
    case "reverse":
      return element.scrollWidth - element.clientWidth - scrollLeft;
    default:
      return scrollLeft;
  }
}

// node_modules/@material-ui/core/esm/internal/animate.js
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : function() {
  };
  var _options$ease = options.ease, ease = _options$ease === void 0 ? easeInOutSin : _options$ease, _options$duration = options.duration, duration = _options$duration === void 0 ? 300 : _options$duration;
  var start = null;
  var from = element[property];
  var cancelled = false;
  var cancel = function cancel2() {
    cancelled = true;
  };
  var step = function step2(timestamp) {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start === null) {
      start = timestamp;
    }
    var time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(function() {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step2);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}

// node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var styles = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props) {
  var onChange = props.onChange, other = _objectWithoutProperties(props, ["onChange"]);
  var scrollbarHeight = React.useRef();
  var nodeRef = React.useRef(null);
  var setMeasurements = function setMeasurements2() {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  React.useEffect(function() {
    var handleResize = debounce(function() {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  React.useEffect(function() {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return React.createElement("div", _extends({
    style: styles,
    ref: nodeRef
  }, other));
}
true ? ScrollbarSize.propTypes = {
  onChange: import_prop_types.default.func.isRequired
} : void 0;

// node_modules/@material-ui/core/esm/Tabs/TabIndicator.js
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var styles2 = function styles3(theme) {
  return {
    root: {
      position: "absolute",
      height: 2,
      bottom: 0,
      width: "100%",
      transition: theme.transitions.create()
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    vertical: {
      height: "100%",
      width: 2,
      right: 0
    }
  };
};
var TabIndicator = React2.forwardRef(function TabIndicator2(props, ref) {
  var classes = props.classes, className = props.className, color = props.color, orientation = props.orientation, other = _objectWithoutProperties(props, ["classes", "className", "color", "orientation"]);
  return React2.createElement("span", _extends({
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(color))], className, orientation === "vertical" && classes.vertical),
    ref
  }, other));
});
true ? TabIndicator.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types2.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * @ignore
   * The color of the tab indicator.
   */
  color: import_prop_types2.default.oneOf(["primary", "secondary"]).isRequired,
  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: import_prop_types2.default.oneOf(["horizontal", "vertical"]).isRequired
} : void 0;
var TabIndicator_default = withStyles_default(styles2, {
  name: "PrivateTabIndicator"
})(TabIndicator);

// node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js
var React5 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js
var React3 = __toESM(require_react());
var KeyboardArrowLeft_default = createSvgIcon(React3.createElement("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft");

// node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js
var React4 = __toESM(require_react());
var KeyboardArrowRight_default = createSvgIcon(React4.createElement("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");

// node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js
var styles4 = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    "&$disabled": {
      opacity: 0
    }
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: "100%",
    height: 40,
    "& svg": {
      transform: "rotate(90deg)"
    }
  },
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};
var _ref = React5.createElement(KeyboardArrowLeft_default, {
  fontSize: "small"
});
var _ref2 = React5.createElement(KeyboardArrowRight_default, {
  fontSize: "small"
});
var TabScrollButton = React5.forwardRef(function TabScrollButton2(props, ref) {
  var classes = props.classes, classNameProp = props.className, direction = props.direction, orientation = props.orientation, disabled = props.disabled, other = _objectWithoutProperties(props, ["classes", "className", "direction", "orientation", "disabled"]);
  return React5.createElement(ButtonBase_default, _extends({
    component: "div",
    className: clsx_m_default(classes.root, classNameProp, disabled && classes.disabled, orientation === "vertical" && classes.vertical),
    ref,
    role: null,
    tabIndex: null
  }, other), direction === "left" ? _ref : _ref2);
});
true ? TabScrollButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types3.default.object,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string,
  /**
   * Which direction should the button indicate?
   */
  direction: import_prop_types3.default.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the element will be disabled.
   */
  disabled: import_prop_types3.default.bool,
  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: import_prop_types3.default.oneOf(["horizontal", "vertical"]).isRequired
} : void 0;
var TabScrollButton_default = withStyles_default(styles4, {
  name: "MuiTabScrollButton"
})(TabScrollButton);

// node_modules/@material-ui/core/esm/Tabs/Tabs.js
var styles5 = function styles6(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: "hidden",
      minHeight: 48,
      WebkitOverflowScrolling: "touch",
      // Add iOS momentum scrolling.
      display: "flex"
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: "column"
    },
    /* Styles applied to the flex container element. */
    flexContainer: {
      display: "flex"
    },
    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
      flexDirection: "column"
    },
    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: "center"
    },
    /* Styles applied to the tablist element. */
    scroller: {
      position: "relative",
      display: "inline-block",
      flex: "1 1 auto",
      whiteSpace: "nowrap"
    },
    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: "hidden",
      width: "100%"
    },
    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: "scroll",
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    },
    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},
    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: _defineProperty({}, theme.breakpoints.down("xs"), {
      display: "none"
    }),
    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs = React6.forwardRef(function Tabs2(props, ref) {
  var ariaLabel = props["aria-label"], ariaLabelledBy = props["aria-labelledby"], action = props.action, _props$centered = props.centered, centered = _props$centered === void 0 ? false : _props$centered, childrenProp = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, _props$indicatorColor = props.indicatorColor, indicatorColor = _props$indicatorColor === void 0 ? "secondary" : _props$indicatorColor, onChange = props.onChange, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, _props$ScrollButtonCo = props.ScrollButtonComponent, ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? TabScrollButton_default : _props$ScrollButtonCo, _props$scrollButtons = props.scrollButtons, scrollButtons = _props$scrollButtons === void 0 ? "auto" : _props$scrollButtons, selectionFollowsFocus = props.selectionFollowsFocus, _props$TabIndicatorPr = props.TabIndicatorProps, TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr, TabScrollButtonProps = props.TabScrollButtonProps, _props$textColor = props.textColor, textColor = _props$textColor === void 0 ? "inherit" : _props$textColor, value = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);
  var theme = useTheme();
  var scrollable = variant === "scrollable";
  var isRtl = theme.direction === "rtl";
  var vertical = orientation === "vertical";
  var scrollStart = vertical ? "scrollTop" : "scrollLeft";
  var start = vertical ? "top" : "left";
  var end = vertical ? "bottom" : "right";
  var clientSize = vertical ? "clientHeight" : "clientWidth";
  var size = vertical ? "height" : "width";
  if (true) {
    if (centered && scrollable) {
      console.error('Material-UI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
    }
  }
  var _React$useState = React6.useState(false), mounted = _React$useState[0], setMounted = _React$useState[1];
  var _React$useState2 = React6.useState({}), indicatorStyle = _React$useState2[0], setIndicatorStyle = _React$useState2[1];
  var _React$useState3 = React6.useState({
    start: false,
    end: false
  }), displayScroll = _React$useState3[0], setDisplayScroll = _React$useState3[1];
  var _React$useState4 = React6.useState({
    overflow: "hidden",
    marginBottom: null
  }), scrollerStyle = _React$useState4[0], setScrollerStyle = _React$useState4[1];
  var valueToIndex = /* @__PURE__ */ new Map();
  var tabsRef = React6.useRef(null);
  var tabListRef = React6.useRef(null);
  var getTabsMeta = function getTabsMeta2() {
    var tabsNode = tabsRef.current;
    var tabsMeta;
    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    var tabMeta;
    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;
      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];
        if (true) {
          if (!tab) {
            console.error(["Material-UI: The value provided to the Tabs component is invalid.", "None of the Tabs' children match with `".concat(value, "`."), valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(", "), ".") : null].join("\n"));
          }
        }
        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  var updateIndicatorState = useEventCallback(function() {
    var _newIndicatorStyle;
    var _getTabsMeta = getTabsMeta(), tabsMeta = _getTabsMeta.tabsMeta, tabMeta = _getTabsMeta.tabMeta;
    var startValue = 0;
    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }
    var newIndicatorStyle = (_newIndicatorStyle = {}, _defineProperty(_newIndicatorStyle, start, startValue), _defineProperty(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);
    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  var scroll = function scroll2(scrollValue) {
    animate(scrollStart, tabsRef.current, scrollValue);
  };
  var moveTabsScroll = function moveTabsScroll2(delta) {
    var scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
      scrollValue *= isRtl && detectScrollType() === "reverse" ? -1 : 1;
    }
    scroll(scrollValue);
  };
  var handleStartScrollClick = function handleStartScrollClick2() {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };
  var handleEndScrollClick = function handleEndScrollClick2() {
    moveTabsScroll(tabsRef.current[clientSize]);
  };
  var handleScrollbarSizeChange = React6.useCallback(function(scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);
  var getConditionalElements = function getConditionalElements2() {
    var conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? React6.createElement(ScrollbarSize, {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === "desktop" || scrollButtons === "on");
    conditionalElements2.scrollButtonStart = showScrollButtons ? React6.createElement(ScrollButtonComponent, _extends({
      orientation,
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start,
      className: clsx_m_default(classes.scrollButtons, scrollButtons !== "on" && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? React6.createElement(ScrollButtonComponent, _extends({
      orientation,
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end,
      className: clsx_m_default(classes.scrollButtons, scrollButtons !== "on" && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    return conditionalElements2;
  };
  var scrollSelectedIntoView = useEventCallback(function() {
    var _getTabsMeta2 = getTabsMeta(), tabsMeta = _getTabsMeta2.tabsMeta, tabMeta = _getTabsMeta2.tabMeta;
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start] < tabsMeta[start]) {
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
      scroll(_nextScrollStart);
    }
  });
  var updateScrollButtonState = useEventCallback(function() {
    if (scrollable && scrollButtons !== "off") {
      var _tabsRef$current = tabsRef.current, scrollTop = _tabsRef$current.scrollTop, scrollHeight = _tabsRef$current.scrollHeight, clientHeight = _tabsRef$current.clientHeight, scrollWidth = _tabsRef$current.scrollWidth, clientWidth = _tabsRef$current.clientWidth;
      var showStartScroll;
      var showEndScroll;
      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction);
        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }
      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  React6.useEffect(function() {
    var handleResize = debounce(function() {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = ownerWindow(tabsRef.current);
    win.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = React6.useCallback(debounce(function() {
    updateScrollButtonState();
  }));
  React6.useEffect(function() {
    return function() {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  React6.useEffect(function() {
    setMounted(true);
  }, []);
  React6.useEffect(function() {
    updateIndicatorState();
    updateScrollButtonState();
  });
  React6.useEffect(function() {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  React6.useImperativeHandle(action, function() {
    return {
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var indicator = React6.createElement(TabIndicator_default, _extends({
    className: classes.indicator,
    orientation,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: _extends({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = React6.Children.map(childrenProp, function(child) {
    if (!React6.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["Material-UI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    var childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return React6.cloneElement(child, {
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue
    });
  });
  var handleKeyDown = function handleKeyDown2(event) {
    var target = event.target;
    var role = target.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    var newFocusTarget = null;
    var previousItemKey = orientation !== "vertical" ? "ArrowLeft" : "ArrowUp";
    var nextItemKey = orientation !== "vertical" ? "ArrowRight" : "ArrowDown";
    if (orientation !== "vertical" && theme.direction === "rtl") {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;
      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;
      case "Home":
        newFocusTarget = tabListRef.current.firstChild;
        break;
      case "End":
        newFocusTarget = tabListRef.current.lastChild;
        break;
      default:
        break;
    }
    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };
  var conditionalElements = getConditionalElements();
  return React6.createElement(Component, _extends({
    className: clsx_m_default(classes.root, className, vertical && classes.vertical),
    ref
  }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, React6.createElement("div", {
    className: clsx_m_default(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    onScroll: handleTabsScroll
  }, React6.createElement("div", {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: clsx_m_default(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
});
true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: refType_default,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": import_prop_types4.default.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": import_prop_types4.default.string,
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: import_prop_types4.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types4.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types4.default.object,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types4.default.elementType,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: import_prop_types4.default.oneOf(["primary", "secondary"]),
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onChange: import_prop_types4.default.func,
  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: import_prop_types4.default.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: import_prop_types4.default.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `desktop` will only present them on medium and larger viewports.
   * - `on` will always present them.
   * - `off` will never present them.
   */
  scrollButtons: import_prop_types4.default.oneOf(["auto", "desktop", "off", "on"]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types4.default.bool,
  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps: import_prop_types4.default.object,
  /**
   * Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.
   */
  TabScrollButtonProps: import_prop_types4.default.object,
  /**
   * Determines the color of the `Tab`.
   */
  textColor: import_prop_types4.default.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: import_prop_types4.default.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: import_prop_types4.default.oneOf(["fullWidth", "scrollable", "standard"])
} : void 0;
var Tabs_default = withStyles_default(styles5, {
  name: "MuiTabs"
})(Tabs);
export {
  Tabs_default as default
};
//# sourceMappingURL=@material-ui_core_Tabs.js.map
