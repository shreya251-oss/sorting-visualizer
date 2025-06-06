import {
  useControlled
} from "./chunk-2AQXJRK5.js";
import {
  ownerDocument
} from "./chunk-P6D724GQ.js";
import {
  useTheme
} from "./chunk-KP7XZ5NQ.js";
import {
  useIsFocusVisible
} from "./chunk-TLFT7UJV.js";
import {
  useEventCallback,
  useForkRef
} from "./chunk-3ASRZY4K.js";
import "./chunk-2LJNSQHW.js";
import {
  capitalize
} from "./chunk-YYFBBRLJ.js";
import {
  _extends,
  _objectWithoutProperties,
  _slicedToArray,
  _toConsumableArray,
  alpha,
  chainPropTypes,
  clsx_m_default,
  darken,
  lighten,
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

// node_modules/@material-ui/core/esm/Slider/Slider.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Slider/ValueLabel.js
var React = __toESM(require_react());
var styles = function styles2(theme) {
  return {
    thumb: {
      "&$open": {
        "& $offset": {
          transform: "scale(1) translateY(-10px)"
        }
      }
    },
    open: {},
    offset: _extends({
      zIndex: 1
    }, theme.typography.body2, {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.2,
      transition: theme.transitions.create(["transform"], {
        duration: theme.transitions.duration.shortest
      }),
      top: -34,
      transformOrigin: "bottom center",
      transform: "scale(0)",
      position: "absolute"
    }),
    circle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "currentColor",
      transform: "rotate(-45deg)"
    },
    label: {
      color: theme.palette.primary.contrastText,
      transform: "rotate(45deg)"
    }
  };
};
function ValueLabel(props) {
  var children = props.children, classes = props.classes, className = props.className, open = props.open, value = props.value, valueLabelDisplay = props.valueLabelDisplay;
  if (valueLabelDisplay === "off") {
    return children;
  }
  return React.cloneElement(children, {
    className: clsx_m_default(children.props.className, (open || valueLabelDisplay === "on") && classes.open, classes.thumb)
  }, React.createElement("span", {
    className: clsx_m_default(classes.offset, className)
  }, React.createElement("span", {
    className: classes.circle
  }, React.createElement("span", {
    className: classes.label
  }, value))));
}
var ValueLabel_default = withStyles_default(styles, {
  name: "PrivateValueLabel"
})(ValueLabel);

// node_modules/@material-ui/core/esm/Slider/Slider.js
function asc(a, b) {
  return a - b;
}
function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}
function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function(acc, value, index) {
    var distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null), closestIndex = _values$reduce.index;
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split("e-");
    var matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  var decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  var nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex(_ref) {
  var values = _ref.values, source = _ref.source, newValue = _ref.newValue, index = _ref.index;
  if (values[index] === newValue) {
    return source;
  }
  var output = values.slice();
  output[index] = newValue;
  return output;
}
function focusThumb(_ref2) {
  var sliderRef = _ref2.sliderRef, activeIndex = _ref2.activeIndex, setActive = _ref2.setActive;
  if (!sliderRef.current.contains(document.activeElement) || Number(document.activeElement.getAttribute("data-index")) !== activeIndex) {
    sliderRef.current.querySelector('[role="slider"][data-index="'.concat(activeIndex, '"]')).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
var axisProps = {
  horizontal: {
    offset: function offset(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  "horizontal-reverse": {
    offset: function offset2(percent) {
      return {
        right: "".concat(percent, "%")
      };
    },
    leap: function leap2(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset3(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap3(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};
var Identity = function Identity2(x) {
  return x;
};
var styles3 = function styles4(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 2,
      width: "100%",
      boxSizing: "content-box",
      padding: "13px 0",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      touchAction: "none",
      color: theme.palette.primary.main,
      WebkitTapHighlightColor: "transparent",
      "&$disabled": {
        pointerEvents: "none",
        cursor: "default",
        color: theme.palette.grey[400]
      },
      "&$vertical": {
        width: 2,
        height: "100%",
        padding: "0 13px"
      },
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "20px 0",
        "&$vertical": {
          padding: "0 20px"
        }
      },
      "@media print": {
        colorAdjust: "exact"
      }
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      // TODO v5: move the style here
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    /* Styles applied to the root element if `marks` is provided with at least one label. */
    marked: {
      marginBottom: 20,
      "&$vertical": {
        marginBottom: "auto",
        marginRight: 20
      }
    },
    /* Pseudo-class applied to the root element if `orientation="vertical"`. */
    vertical: {},
    /* Pseudo-class applied to the root and thumb element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the rail element. */
    rail: {
      display: "block",
      position: "absolute",
      width: "100%",
      height: 2,
      borderRadius: 1,
      backgroundColor: "currentColor",
      opacity: 0.38,
      "$vertical &": {
        height: "100%",
        width: 2
      }
    },
    /* Styles applied to the track element. */
    track: {
      display: "block",
      position: "absolute",
      height: 2,
      borderRadius: 1,
      backgroundColor: "currentColor",
      "$vertical &": {
        width: 2
      }
    },
    /* Styles applied to the track element if `track={false}`. */
    trackFalse: {
      "& $track": {
        display: "none"
      }
    },
    /* Styles applied to the track element if `track="inverted"`. */
    trackInverted: {
      "& $track": {
        backgroundColor: (
          // Same logic as the LinearProgress track color
          theme.palette.type === "light" ? lighten(theme.palette.primary.main, 0.62) : darken(theme.palette.primary.main, 0.5)
        )
      },
      "& $rail": {
        opacity: 1
      }
    },
    /* Styles applied to the thumb element. */
    thumb: {
      position: "absolute",
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -5,
      boxSizing: "border-box",
      borderRadius: "50%",
      outline: 0,
      backgroundColor: "currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: theme.transitions.create(["box-shadow"], {
        duration: theme.transitions.duration.shortest
      }),
      "&::after": {
        position: "absolute",
        content: '""',
        borderRadius: "50%",
        // reach 42px hit target (2 * 15 + thumb diameter)
        left: -15,
        top: -15,
        right: -15,
        bottom: -15
      },
      "&$focusVisible,&:hover": {
        boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette.primary.main, 0.16)),
        "@media (hover: none)": {
          boxShadow: "none"
        }
      },
      "&$active": {
        boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette.primary.main, 0.16))
      },
      "&$disabled": {
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -3,
        "&:hover": {
          boxShadow: "none"
        }
      },
      "$vertical &": {
        marginLeft: -5,
        marginBottom: -6
      },
      "$vertical &$disabled": {
        marginLeft: -3,
        marginBottom: -4
      }
    },
    /* Styles applied to the thumb element if `color="primary"`. */
    thumbColorPrimary: {
      // TODO v5: move the style here
    },
    /* Styles applied to the thumb element if `color="secondary"`. */
    thumbColorSecondary: {
      "&$focusVisible,&:hover": {
        boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette.secondary.main, 0.16))
      },
      "&$active": {
        boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette.secondary.main, 0.16))
      }
    },
    /* Pseudo-class applied to the thumb element if it's active. */
    active: {},
    /* Pseudo-class applied to the thumb element if keyboard focused. */
    focusVisible: {},
    /* Styles applied to the thumb label element. */
    valueLabel: {
      // IE 11 centering bug, to remove from the customization demos once no longer supported
      left: "calc(-50% - 4px)"
    },
    /* Styles applied to the mark element. */
    mark: {
      position: "absolute",
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: "currentColor"
    },
    /* Styles applied to the mark element if active (depending on the value). */
    markActive: {
      backgroundColor: theme.palette.background.paper,
      opacity: 0.8
    },
    /* Styles applied to the mark label element. */
    markLabel: _extends({}, theme.typography.body2, {
      color: theme.palette.text.secondary,
      position: "absolute",
      top: 26,
      transform: "translateX(-50%)",
      whiteSpace: "nowrap",
      "$vertical &": {
        top: "auto",
        left: 26,
        transform: "translateY(50%)"
      },
      "@media (pointer: coarse)": {
        top: 40,
        "$vertical &": {
          left: 31
        }
      }
    }),
    /* Styles applied to the mark label element if active (depending on the value). */
    markLabelActive: {
      color: theme.palette.text.primary
    }
  };
};
var Slider = React2.forwardRef(function Slider2(props, ref) {
  var ariaLabel = props["aria-label"], ariaLabelledby = props["aria-labelledby"], ariaValuetext = props["aria-valuetext"], classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$component = props.component, Component = _props$component === void 0 ? "span" : _props$component, defaultValue = props.defaultValue, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, getAriaLabel = props.getAriaLabel, getAriaValueText = props.getAriaValueText, _props$marks = props.marks, marksProp = _props$marks === void 0 ? false : _props$marks, _props$max = props.max, max = _props$max === void 0 ? 100 : _props$max, _props$min = props.min, min = _props$min === void 0 ? 0 : _props$min, name = props.name, onChange = props.onChange, onChangeCommitted = props.onChangeCommitted, onMouseDown = props.onMouseDown, _props$orientation = props.orientation, orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation, _props$scale = props.scale, scale = _props$scale === void 0 ? Identity : _props$scale, _props$step = props.step, step = _props$step === void 0 ? 1 : _props$step, _props$ThumbComponent = props.ThumbComponent, ThumbComponent = _props$ThumbComponent === void 0 ? "span" : _props$ThumbComponent, _props$track = props.track, track = _props$track === void 0 ? "normal" : _props$track, valueProp = props.value, _props$ValueLabelComp = props.ValueLabelComponent, ValueLabelComponent = _props$ValueLabelComp === void 0 ? ValueLabel_default : _props$ValueLabelComp, _props$valueLabelDisp = props.valueLabelDisplay, valueLabelDisplay = _props$valueLabelDisp === void 0 ? "off" : _props$valueLabelDisp, _props$valueLabelForm = props.valueLabelFormat, valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm, other = _objectWithoutProperties(props, ["aria-label", "aria-labelledby", "aria-valuetext", "classes", "className", "color", "component", "defaultValue", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "ThumbComponent", "track", "value", "ValueLabelComponent", "valueLabelDisplay", "valueLabelFormat"]);
  var theme = useTheme();
  var touchId = React2.useRef();
  var _React$useState = React2.useState(-1), active = _React$useState[0], setActive = _React$useState[1];
  var _React$useState2 = React2.useState(-1), open = _React$useState2[0], setOpen = _React$useState2[1];
  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Slider"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), valueDerived = _useControlled2[0], setValueState = _useControlled2[1];
  var range = Array.isArray(valueDerived);
  var values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(function(value) {
    return clamp(value, min, max);
  });
  var marks = marksProp === true && step !== null ? _toConsumableArray(Array(Math.floor((max - min) / step) + 1)).map(function(_, index) {
    return {
      value: min + step * index
    };
  }) : marksProp || [];
  var _useIsFocusVisible = useIsFocusVisible(), isFocusVisible = _useIsFocusVisible.isFocusVisible, onBlurVisible = _useIsFocusVisible.onBlurVisible, focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState3 = React2.useState(-1), focusVisible = _React$useState3[0], setFocusVisible = _React$useState3[1];
  var sliderRef = React2.useRef();
  var handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  var handleRef = useForkRef(ref, handleFocusRef);
  var handleFocus = useEventCallback(function(event) {
    var index = Number(event.currentTarget.getAttribute("data-index"));
    if (isFocusVisible(event)) {
      setFocusVisible(index);
    }
    setOpen(index);
  });
  var handleBlur = useEventCallback(function() {
    if (focusVisible !== -1) {
      setFocusVisible(-1);
      onBlurVisible();
    }
    setOpen(-1);
  });
  var handleMouseOver = useEventCallback(function(event) {
    var index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  });
  var handleMouseLeave = useEventCallback(function() {
    setOpen(-1);
  });
  var isRtl = theme.direction === "rtl";
  var handleKeyDown = useEventCallback(function(event) {
    var index = Number(event.currentTarget.getAttribute("data-index"));
    var value = values[index];
    var tenPercents = (max - min) / 10;
    var marksValues = marks.map(function(mark) {
      return mark.value;
    });
    var marksIndex = marksValues.indexOf(value);
    var newValue;
    var increaseKey = isRtl ? "ArrowLeft" : "ArrowRight";
    var decreaseKey = isRtl ? "ArrowRight" : "ArrowLeft";
    switch (event.key) {
      case "Home":
        newValue = min;
        break;
      case "End":
        newValue = max;
        break;
      case "PageUp":
        if (step) {
          newValue = value + tenPercents;
        }
        break;
      case "PageDown":
        if (step) {
          newValue = value - tenPercents;
        }
        break;
      case increaseKey:
      case "ArrowUp":
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }
        break;
      case decreaseKey:
      case "ArrowDown":
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }
        break;
      default:
        return;
    }
    event.preventDefault();
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    }
    newValue = clamp(newValue, min, max);
    if (range) {
      var previousValue = newValue;
      newValue = setValueIndex({
        values,
        source: valueDerived,
        newValue,
        index
      }).sort(asc);
      focusThumb({
        sliderRef,
        activeIndex: newValue.indexOf(previousValue)
      });
    }
    setValueState(newValue);
    setFocusVisible(index);
    if (onChange) {
      onChange(event, newValue);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  var previousIndex = React2.useRef();
  var axis = orientation;
  if (isRtl && orientation !== "vertical") {
    axis += "-reverse";
  }
  var getFingerNewValue = function getFingerNewValue2(_ref3) {
    var finger = _ref3.finger, _ref3$move = _ref3.move, move = _ref3$move === void 0 ? false : _ref3$move, values2 = _ref3.values, source = _ref3.source;
    var slider = sliderRef.current;
    var _slider$getBoundingCl = slider.getBoundingClientRect(), width = _slider$getBoundingCl.width, height = _slider$getBoundingCl.height, bottom = _slider$getBoundingCl.bottom, left = _slider$getBoundingCl.left;
    var percent;
    if (axis.indexOf("vertical") === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    var newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      var marksValues = marks.map(function(mark) {
        return mark.value;
      });
      var closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    var activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      var previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source,
        newValue,
        index: activeIndex
      }).sort(asc);
      activeIndex = newValue.indexOf(previousValue);
      previousIndex.current = activeIndex;
    }
    return {
      newValue,
      activeIndex
    };
  };
  var handleTouchMove = useEventCallback(function(event) {
    var finger = trackFinger(event, touchId);
    if (!finger) {
      return;
    }
    var _getFingerNewValue = getFingerNewValue({
      finger,
      move: true,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue.newValue, activeIndex = _getFingerNewValue.activeIndex;
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
  });
  var handleTouchEnd = useEventCallback(function(event) {
    var finger = trackFinger(event, touchId);
    if (!finger) {
      return;
    }
    var _getFingerNewValue2 = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue2.newValue;
    setActive(-1);
    if (event.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
    touchId.current = void 0;
    var doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  });
  var handleTouchStart = useEventCallback(function(event) {
    event.preventDefault();
    var touch = event.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    var finger = trackFinger(event, touchId);
    var _getFingerNewValue3 = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue3.newValue, activeIndex = _getFingerNewValue3.activeIndex;
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
    var doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  React2.useEffect(function() {
    var slider = sliderRef.current;
    slider.addEventListener("touchstart", handleTouchStart);
    var doc = ownerDocument(slider);
    return function() {
      slider.removeEventListener("touchstart", handleTouchStart);
      doc.removeEventListener("mousemove", handleTouchMove);
      doc.removeEventListener("mouseup", handleTouchEnd);
      doc.removeEventListener("touchmove", handleTouchMove);
      doc.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);
  var handleMouseDown = useEventCallback(function(event) {
    if (onMouseDown) {
      onMouseDown(event);
    }
    event.preventDefault();
    var finger = trackFinger(event, touchId);
    var _getFingerNewValue4 = getFingerNewValue({
      finger,
      values,
      source: valueDerived
    }), newValue = _getFingerNewValue4.newValue, activeIndex = _getFingerNewValue4.activeIndex;
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (onChange) {
      onChange(event, newValue);
    }
    var doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  });
  var trackOffset = valueToPercent(range ? values[0] : min, min, max);
  var trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
  var trackStyle = _extends({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));
  return React2.createElement(Component, _extends({
    ref: handleRef,
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(color))], className, disabled && classes.disabled, marks.length > 0 && marks.some(function(mark) {
      return mark.label;
    }) && classes.marked, track === false && classes.trackFalse, orientation === "vertical" && classes.vertical, track === "inverted" && classes.trackInverted),
    onMouseDown: handleMouseDown
  }, other), React2.createElement("span", {
    className: classes.rail
  }), React2.createElement("span", {
    className: classes.track,
    style: trackStyle
  }), React2.createElement("input", {
    value: values.join(","),
    name,
    type: "hidden"
  }), marks.map(function(mark, index) {
    var percent = valueToPercent(mark.value, min, max);
    var style = axisProps[axis].offset(percent);
    var markActive;
    if (track === false) {
      markActive = values.indexOf(mark.value) !== -1;
    } else {
      markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
    }
    return React2.createElement(React2.Fragment, {
      key: mark.value
    }, React2.createElement("span", {
      style,
      "data-index": index,
      className: clsx_m_default(classes.mark, markActive && classes.markActive)
    }), mark.label != null ? React2.createElement("span", {
      "aria-hidden": true,
      "data-index": index,
      style,
      className: clsx_m_default(classes.markLabel, markActive && classes.markLabelActive)
    }, mark.label) : null);
  }), values.map(function(value, index) {
    var percent = valueToPercent(value, min, max);
    var style = axisProps[axis].offset(percent);
    return React2.createElement(ValueLabelComponent, {
      key: index,
      valueLabelFormat,
      valueLabelDisplay,
      className: classes.valueLabel,
      value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
      index,
      open: open === index || active === index || valueLabelDisplay === "on",
      disabled
    }, React2.createElement(ThumbComponent, {
      className: clsx_m_default(classes.thumb, classes["thumbColor".concat(capitalize(color))], active === index && classes.active, disabled && classes.disabled, focusVisible === index && classes.focusVisible),
      tabIndex: disabled ? null : 0,
      role: "slider",
      style,
      "data-index": index,
      "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      "aria-valuenow": scale(value),
      "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave
    }));
  }));
});
true ? Slider.propTypes = {
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types.default.string, function(props) {
    var range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("Material-UI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types.default.string, function(props) {
    var range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("Material-UI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types.default.oneOf(["primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.number)]),
  /**
   * If `true`, the slider will be disabled.
   */
  disabled: import_prop_types.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   *
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   *
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types.default.func,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks will be spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   */
  marks: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.array]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: import_prop_types.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: import_prop_types.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number | number[]} value The new value.
   */
  onChange: import_prop_types.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {object} event The event source of the callback.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types.default.func,
  /**
   * The slider orientation.
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   */
  scale: import_prop_types.default.func,
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   */
  step: import_prop_types.default.number,
  /**
   * The component used to display the value label.
   */
  ThumbComponent: import_prop_types.default.elementType,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   */
  track: import_prop_types.default.oneOf(["normal", false, "inverted"]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.arrayOf(import_prop_types.default.number)]),
  /**
   * The value label component.
   */
  ValueLabelComponent: import_prop_types.default.elementType,
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   */
  valueLabelDisplay: import_prop_types.default.oneOf(["on", "auto", "off"]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   */
  valueLabelFormat: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func])
} : void 0;
var Slider_default = withStyles_default(styles3, {
  name: "MuiSlider"
})(Slider);
export {
  Slider_default as default
};
//# sourceMappingURL=@material-ui_core_Slider.js.map
