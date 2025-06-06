import {
  useControlled
} from "./chunk-2AQXJRK5.js";
import {
  Paper_default
} from "./chunk-GYDJD24S.js";
import {
  createSvgIcon,
  debounce,
  ownerWindow,
  require_react_is
} from "./chunk-CKMKRAM7.js";
import {
  ownerDocument
} from "./chunk-P6D724GQ.js";
import {
  useTheme as useTheme2
} from "./chunk-KP7XZ5NQ.js";
import {
  Transition_default,
  deprecatedPropType
} from "./chunk-NPKHIS34.js";
import {
  setRef,
  useEventCallback,
  useForkRef
} from "./chunk-3ASRZY4K.js";
import {
  require_react_dom
} from "./chunk-2LJNSQHW.js";
import {
  capitalize
} from "./chunk-YYFBBRLJ.js";
import {
  HTMLElementType,
  _classCallCheck,
  _createClass,
  _defineProperty,
  _extends,
  _objectWithoutProperties,
  _slicedToArray,
  _toConsumableArray,
  _typeof,
  chainPropTypes,
  clsx_m_default,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  exactProp,
  getThemeProps,
  mergeClasses,
  refType_default,
  require_prop_types,
  useTheme,
  withStyles_default,
  zIndex_default
} from "./chunk-LJE4UF3L.js";
import "./chunk-EU6QCHT3.js";
import {
  require_react
} from "./chunk-23ZMGCJ2.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@material-ui/core/esm/TextField/TextField.js
var React29 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Input/Input.js
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/InputBase/InputBase.js
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/FormControl/formControlState.js
function formControlState(_ref3) {
  var props = _ref3.props, states = _ref3.states, muiFormControl = _ref3.muiFormControl;
  return states.reduce(function(acc, state) {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

// node_modules/@material-ui/core/esm/FormControl/FormControlContext.js
var React = __toESM(require_react());
var FormControlContext = React.createContext();
if (true) {
  FormControlContext.displayName = "FormControlContext";
}
function useFormControl() {
  return React.useContext(FormControlContext);
}
var FormControlContext_default = FormControlContext;

// node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}
var useEnhancedEffect = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
var TextareaAutosize = React2.forwardRef(function TextareaAutosize2(props, ref) {
  var onChange = props.onChange, rows = props.rows, rowsMax = props.rowsMax, rowsMinProp = props.rowsMin, maxRowsProp = props.maxRows, _props$minRows = props.minRows, minRowsProp = _props$minRows === void 0 ? 1 : _props$minRows, style = props.style, value = props.value, other = _objectWithoutProperties(props, ["onChange", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "style", "value"]);
  var maxRows = maxRowsProp || rowsMax;
  var minRows = rows || rowsMinProp || minRowsProp;
  var _React$useRef = React2.useRef(value != null), isControlled = _React$useRef.current;
  var inputRef = React2.useRef(null);
  var handleRef = useForkRef(ref, inputRef);
  var shadowRef = React2.useRef(null);
  var renders = React2.useRef(0);
  var _React$useState = React2.useState({}), state = _React$useState[0], setState = _React$useState[1];
  var syncHeight = React2.useCallback(function() {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    var boxSizing = computedStyle["box-sizing"];
    var padding = getStyleValue(computedStyle, "padding-bottom") + getStyleValue(computedStyle, "padding-top");
    var border = getStyleValue(computedStyle, "border-bottom-width") + getStyleValue(computedStyle, "border-top-width");
    var innerHeight = inputShallow.scrollHeight - padding;
    inputShallow.value = "x";
    var singleRowHeight = inputShallow.scrollHeight - padding;
    var outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    var outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function(prevState) {
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow,
          outerHeightStyle
        };
      }
      if (true) {
        if (renders.current === 20) {
          console.error(["Material-UI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join("\n"));
        }
      }
      return prevState;
    });
  }, [maxRows, minRows, props.placeholder]);
  React2.useEffect(function() {
    var handleResize = debounce(function() {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function() {
    syncHeight();
  });
  React2.useEffect(function() {
    renders.current = 0;
  }, [value]);
  var handleChange = function handleChange2(event) {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return React2.createElement(React2.Fragment, null, React2.createElement("textarea", _extends({
    value,
    onChange: handleChange,
    ref: handleRef,
    rows: minRows,
    style: _extends({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? "hidden" : null
    }, style)
  }, other)), React2.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: _extends({}, styles.shadow, style)
  }));
});
true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * Minimum number of rows to display.
   */
  minRows: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types.default.string,
  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rows: deprecatedPropType(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]), "Use `minRows` instead."),
  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: deprecatedPropType(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]), "Use `maxRows` instead."),
  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rowsMin: deprecatedPropType(import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]), "Use `minRows` instead."),
  /**
   * @ignore
   */
  style: import_prop_types.default.object,
  /**
   * @ignore
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string])
} : void 0;
var TextareaAutosize_default = TextareaAutosize;

// node_modules/@material-ui/core/esm/InputBase/utils.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

// node_modules/@material-ui/core/esm/InputBase/InputBase.js
var styles2 = function styles3(theme) {
  var light = theme.palette.type === "light";
  var placeholder = {
    color: "currentColor",
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: "0 !important"
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    "@global": {
      "@keyframes mui-auto-fill": {},
      "@keyframes mui-auto-fill-cancel": {}
    },
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: "1.1876em",
      // Reset (19px), match the native input line-height
      boxSizing: "border-box",
      // Prevent padding issue with fullWidth.
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      "&$disabled": {
        color: theme.palette.text.disabled,
        cursor: "default"
      }
    }),
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},
    /* Styles applied to the root element if the component is focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},
    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      "&$marginDense": {
        paddingTop: 4 - 1
      }
    },
    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: "100%"
    },
    /* Styles applied to the `input` element. */
    input: {
      font: "inherit",
      letterSpacing: "inherit",
      color: "currentColor",
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: "content-box",
      background: "none",
      height: "1.1876em",
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: "transparent",
      display: "block",
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: "100%",
      // Fix IE 11 width issue
      animationName: "mui-auto-fill-cancel",
      animationDuration: "10ms",
      "&::-webkit-input-placeholder": placeholder,
      "&::-moz-placeholder": placeholder,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholder,
      // IE 11
      "&::-ms-input-placeholder": placeholder,
      // Edge
      "&:focus": {
        outline: 0
      },
      // Reset Firefox invalid required input style
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        // Remove the padding when type=search.
        "-webkit-appearance": "none"
      },
      // Show and hide the placeholder logic
      "label[data-shrink=false] + $formControl &": {
        "&::-webkit-input-placeholder": placeholderHidden,
        "&::-moz-placeholder": placeholderHidden,
        // Firefox 19+
        "&:-ms-input-placeholder": placeholderHidden,
        // IE 11
        "&::-ms-input-placeholder": placeholderHidden,
        // Edge
        "&:focus::-webkit-input-placeholder": placeholderVisible,
        "&:focus::-moz-placeholder": placeholderVisible,
        // Firefox 19+
        "&:focus:-ms-input-placeholder": placeholderVisible,
        // IE 11
        "&:focus::-ms-input-placeholder": placeholderVisible
        // Edge
      },
      "&$disabled": {
        opacity: 1
        // Reset iOS opacity
      },
      "&:-webkit-autofill": {
        animationDuration: "5000s",
        animationName: "mui-auto-fill"
      }
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: "auto",
      resize: "none",
      padding: 0
    },
    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      "-moz-appearance": "textfield",
      "-webkit-appearance": "textfield"
    },
    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},
    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},
    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect2 = typeof window === "undefined" ? React3.useEffect : React3.useLayoutEffect;
var InputBase = React3.forwardRef(function InputBase2(props, ref) {
  var ariaDescribedby = props["aria-describedby"], autoComplete = props.autoComplete, autoFocus = props.autoFocus, classes = props.classes, className = props.className, color = props.color, defaultValue = props.defaultValue, disabled = props.disabled, endAdornment = props.endAdornment, error = props.error, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, id = props.id, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$inputProps = props.inputProps, inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps, inputRefProp = props.inputRef, margin = props.margin, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onClick = props.onClick, onFocus = props.onFocus, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, placeholder = props.placeholder, readOnly = props.readOnly, renderSuffix = props.renderSuffix, rows = props.rows, rowsMax = props.rowsMax, rowsMin = props.rowsMin, maxRows = props.maxRows, minRows = props.minRows, startAdornment = props.startAdornment, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, valueProp = props.value, other = _objectWithoutProperties(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "startAdornment", "type", "value"]);
  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  var _React$useRef = React3.useRef(value != null), isControlled = _React$useRef.current;
  var inputRef = React3.useRef();
  var handleInputRefWarning = React3.useCallback(function(instance) {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["Material-UI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `inputRef` prop.", "Make sure the `inputRef` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  var handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = useForkRef(inputRef, handleInputRefProp);
  var _React$useState = React3.useState(false), focused = _React$useState[0], setFocused = _React$useState[1];
  var muiFormControl = useFormControl();
  if (true) {
    React3.useEffect(function() {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }
      return void 0;
    }, [muiFormControl]);
  }
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "margin", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React3.useEffect(function() {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = React3.useCallback(function(obj) {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect2(function() {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  var handleFocus = function handleFocus2(event) {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  var handleBlur = function handleBlur2(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    }
    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  };
  React3.useEffect(function() {
    checkDirty(inputRef.current);
  }, []);
  var handleClick = function handleClick2(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  var InputComponent = inputComponent;
  var inputProps = _extends({}, inputPropsProp, {
    ref: handleInputRef
  });
  if (typeof InputComponent !== "string") {
    inputProps = _extends({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !maxRows && !minRows && !rowsMax && !rowsMin) {
      InputComponent = "textarea";
    } else {
      inputProps = _extends({
        minRows: rows || minRows,
        rowsMax,
        maxRows
      }, inputProps);
      InputComponent = TextareaAutosize_default;
    }
  } else {
    inputProps = _extends({
      type
    }, inputProps);
  }
  var handleAutoFill = function handleAutoFill2(event) {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React3.useEffect(function() {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return React3.createElement("div", _extends({
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(fcs.color || "primary"))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === "dense" && classes.marginDense),
    onClick: handleClick,
    ref
  }, other), startAdornment, React3.createElement(FormControlContext_default.Provider, {
    value: null
  }, React3.createElement(InputComponent, _extends({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    defaultValue,
    disabled: fcs.disabled,
    id,
    onAnimationStart: handleAutoFill,
    name,
    placeholder,
    readOnly,
    required: fcs.required,
    rows,
    value,
    onKeyDown,
    onKeyUp
  }, inputProps, {
    className: clsx_m_default(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === "search" && classes.inputTypeSearch, fcs.margin === "dense" && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
    startAdornment
  })) : null);
});
true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types2.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types2.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types2.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types2.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types2.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types2.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types2.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types2.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types2.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types2.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types2.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types2.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types2.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types2.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types2.default.string,
  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: import_prop_types2.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types2.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types2.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types2.default.bool,
  /**
   * @ignore
   */
  renderSuffix: import_prop_types2.default.func,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types2.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rowsMin: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types2.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types2.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types2.default.any
} : void 0;
var InputBase_default = withStyles_default(styles2, {
  name: "MuiInputBase"
})(InputBase);

// node_modules/@material-ui/core/esm/Input/Input.js
var styles4 = function styles5(theme) {
  var light = theme.palette.type === "light";
  var bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative"
    },
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      "label + &": {
        marginTop: 16
      }
    },
    /* Styles applied to the root element if the component is focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      "&$underline:after": {
        borderBottomColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      "&:after": {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&$focused:after": {
        transform: "scaleX(1)"
      },
      "&$error:after": {
        borderBottomColor: theme.palette.error.main,
        transform: "scaleX(1)"
        // error is always underlined in red
      },
      "&:before": {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: theme.transitions.create("border-bottom-color", {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&:hover:not($disabled):before": {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      "&$disabled:before": {
        borderBottomStyle: "dotted"
      }
    },
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},
    /* Styles applied to the `input` element. */
    input: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},
    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = React4.forwardRef(function Input2(props, ref) {
  var disableUnderline = props.disableUnderline, classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);
  return React4.createElement(InputBase_default, _extends({
    classes: _extends({}, classes, {
      root: clsx_m_default(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types3.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types3.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types3.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types3.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types3.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types3.default.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: import_prop_types3.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types3.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types3.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types3.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types3.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types3.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types3.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types3.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types3.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types3.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types3.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types3.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types3.default.bool,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types3.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types3.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types3.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types3.default.any
} : void 0;
Input.muiName = "Input";
var Input_default = withStyles_default(styles4, {
  name: "MuiInput"
})(Input);

// node_modules/@material-ui/core/esm/FilledInput/FilledInput.js
var React5 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var styles6 = function styles7(theme) {
  var light = theme.palette.type === "light";
  var bottomLineColor = light ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  var backgroundColor = light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)";
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: light ? "rgba(0, 0, 0, 0.13)" : "rgba(255, 255, 255, 0.13)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor
        }
      },
      "&$focused": {
        backgroundColor: light ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)"
      },
      "&$disabled": {
        backgroundColor: light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)"
      }
    },
    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      "&$underline:after": {
        borderBottomColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      "&:after": {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: "absolute",
        right: 0,
        transform: "scaleX(0)",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&$focused:after": {
        transform: "scaleX(1)"
      },
      "&$error:after": {
        borderBottomColor: theme.palette.error.main,
        transform: "scaleX(1)"
        // error is always underlined in red
      },
      "&:before": {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: "absolute",
        right: 0,
        transition: theme.transitions.create("border-bottom-color", {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: "none"
        // Transparent to the hover style.
      },
      "&:hover:before": {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      "&$disabled:before": {
        borderBottomStyle: "dotted"
      }
    },
    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },
    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "27px 12px 10px",
      "&$marginDense": {
        paddingTop: 23,
        paddingBottom: 6
      }
    },
    /* Styles applied to the `input` element. */
    input: {
      padding: "27px 12px 10px",
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
        caretColor: theme.palette.type === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },
    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      "&$inputMarginDense": {
        paddingTop: 10,
        paddingBottom: 11
      }
    },
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },
    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },
    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = React5.forwardRef(function FilledInput2(props, ref) {
  var disableUnderline = props.disableUnderline, classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);
  return React5.createElement(InputBase_default, _extends({
    classes: _extends({}, classes, {
      root: clsx_m_default(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types4.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types4.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types4.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types4.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types4.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: import_prop_types4.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types4.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types4.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types4.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types4.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types4.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types4.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types4.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types4.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types4.default.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types4.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types4.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types4.default.bool,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types4.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types4.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types4.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types4.default.any
} : void 0;
FilledInput.muiName = "Input";
var FilledInput_default = withStyles_default(styles6, {
  name: "MuiFilledInput"
})(FilledInput);

// node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js
var React7 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js
var React6 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var styles8 = function styles9(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden"
    },
    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: "left",
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },
    /* Styles applied to the legend element. */
    legendLabelled: {
      display: "block",
      width: "auto",
      textAlign: "left",
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block"
      }
    },
    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1e3,
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
var NotchedOutline = React6.forwardRef(function NotchedOutline2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, label = props.label, labelWidthProp = props.labelWidth, notched = props.notched, style = props.style, other = _objectWithoutProperties(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);
  var theme = useTheme2();
  var align = theme.direction === "rtl" ? "right" : "left";
  if (label !== void 0) {
    return React6.createElement("fieldset", _extends({
      "aria-hidden": true,
      className: clsx_m_default(classes.root, className),
      ref,
      style
    }, other), React6.createElement("legend", {
      className: clsx_m_default(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? React6.createElement("span", null, label) : React6.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    })));
  }
  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return React6.createElement("fieldset", _extends({
    "aria-hidden": true,
    style: _extends(_defineProperty({}, "padding".concat(capitalize(align)), 8), style),
    className: clsx_m_default(classes.root, className),
    ref
  }, other), React6.createElement("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, React6.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: "&#8203;"
    }
  })));
});
true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types5.default.object,
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * The label.
   */
  label: import_prop_types5.default.node,
  /**
   * The width of the label.
   */
  labelWidth: import_prop_types5.default.number.isRequired,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types5.default.bool.isRequired,
  /**
   * @ignore
   */
  style: import_prop_types5.default.object
} : void 0;
var NotchedOutline_default = withStyles_default(styles8, {
  name: "PrivateNotchedOutline"
})(NotchedOutline);

// node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js
var styles10 = function styles11(theme) {
  var borderColor = theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      "&:hover $notchedOutline": {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        "&:hover $notchedOutline": {
          borderColor
        }
      },
      "&$focused $notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      "&$error $notchedOutline": {
        borderColor: theme.palette.error.main
      },
      "&$disabled $notchedOutline": {
        borderColor: theme.palette.action.disabled
      }
    },
    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      "&$focused $notchedOutline": {
        borderColor: theme.palette.secondary.main
      }
    },
    /* Styles applied to the root element if the component is focused. */
    focused: {},
    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },
    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},
    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "18.5px 14px",
      "&$marginDense": {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },
    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor
    },
    /* Styles applied to the `input` element. */
    input: {
      padding: "18.5px 14px",
      "&:-webkit-autofill": {
        WebkitBoxShadow: theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
        caretColor: theme.palette.type === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },
    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },
    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },
    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = React7.forwardRef(function OutlinedInput2(props, ref) {
  var classes = props.classes, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$inputComponent = props.inputComponent, inputComponent = _props$inputComponent === void 0 ? "input" : _props$inputComponent, label = props.label, _props$labelWidth = props.labelWidth, labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, notched = props.notched, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, other = _objectWithoutProperties(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);
  return React7.createElement(InputBase_default, _extends({
    renderSuffix: function renderSuffix(state) {
      return React7.createElement(NotchedOutline_default, {
        className: classes.notchedOutline,
        label,
        labelWidth,
        notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: _extends({}, classes, {
      root: clsx_m_default(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other));
});
true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types6.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types6.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types6.default.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types6.default.oneOf(["primary", "secondary"]),
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types6.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types6.default.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: import_prop_types6.default.node,
  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: import_prop_types6.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types6.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types6.default.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: import_prop_types6.default.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types6.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label of the input. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: import_prop_types6.default.node,
  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the input label appears with a strike through.
   */
  labelWidth: import_prop_types6.default.number,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types6.default.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: import_prop_types6.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types6.default.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: import_prop_types6.default.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types6.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types6.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types6.default.bool,
  /**
   * If `true`, the `input` element will be required.
   */
  required: import_prop_types6.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: import_prop_types6.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types6.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types6.default.any
} : void 0;
OutlinedInput.muiName = "Input";
var OutlinedInput_default = withStyles_default(styles10, {
  name: "MuiOutlinedInput"
})(OutlinedInput);

// node_modules/@material-ui/core/esm/InputLabel/InputLabel.js
var React10 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/FormControl/useFormControl.js
var React8 = __toESM(require_react());
function useFormControl2() {
  return React8.useContext(FormControlContext_default);
}

// node_modules/@material-ui/core/esm/FormLabel/FormLabel.js
var React9 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var styles12 = function styles13(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      "&$focused": {
        color: theme.palette.primary.main
      },
      "&$disabled": {
        color: theme.palette.text.disabled
      },
      "&$error": {
        color: theme.palette.error.main
      }
    }),
    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      "&$focused": {
        color: theme.palette.secondary.main
      }
    },
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},
    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},
    /* Styles applied to the asterisk element. */
    asterisk: {
      "&$error": {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = React9.forwardRef(function FormLabel2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, color = props.color, _props$component = props.component, Component4 = _props$component === void 0 ? "label" : _props$component, disabled = props.disabled, error = props.error, filled = props.filled, focused = props.focused, required = props.required, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  return React9.createElement(Component4, _extends({
    className: clsx_m_default(classes.root, classes["color".concat(capitalize(fcs.color || "primary"))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref
  }, other), children, fcs.required && React9.createElement("span", {
    "aria-hidden": true,
    className: clsx_m_default(classes.asterisk, fcs.error && classes.error)
  }, " ", "*"));
});
true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types7.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types7.default.object,
  /**
   * @ignore
   */
  className: import_prop_types7.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types7.default.oneOf(["primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types7.default.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: import_prop_types7.default.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: import_prop_types7.default.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: import_prop_types7.default.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: import_prop_types7.default.bool,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: import_prop_types7.default.bool
} : void 0;
var FormLabel_default = withStyles_default(styles12, {
  name: "MuiFormLabel"
})(FormLabel);

// node_modules/@material-ui/core/esm/InputLabel/InputLabel.js
var styles14 = function styles15(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: "block",
      transformOrigin: "top left"
    },
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},
    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},
    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 24px) scale(1)"
    },
    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: "translate(0, 21px) scale(1)"
    },
    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: "translate(0, 1.5px) scale(0.75)",
      transformOrigin: "top left"
    },
    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(["color", "transform"], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },
    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 20px) scale(1)",
      "&$marginDense": {
        transform: "translate(12px, 17px) scale(1)"
      },
      "&$shrink": {
        transform: "translate(12px, 10px) scale(0.75)",
        "&$marginDense": {
          transform: "translate(12px, 7px) scale(0.75)"
        }
      }
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 20px) scale(1)",
      "&$marginDense": {
        transform: "translate(14px, 12px) scale(1)"
      },
      "&$shrink": {
        transform: "translate(14px, -6px) scale(0.75)"
      }
    }
  };
};
var InputLabel = React10.forwardRef(function InputLabel2(props, ref) {
  var classes = props.classes, className = props.className, _props$disableAnimati = props.disableAnimation, disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati, margin = props.margin, shrinkProp = props.shrink, variant = props.variant, other = _objectWithoutProperties(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);
  var muiFormControl = useFormControl2();
  var shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["margin", "variant"]
  });
  return React10.createElement(FormLabel_default, _extends({
    "data-shrink": shrink,
    className: clsx_m_default(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === "dense" && classes.marginDense, {
      "filled": classes.filled,
      "outlined": classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref
  }, other));
});
true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The contents of the `InputLabel`.
   */
  children: import_prop_types8.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types8.default.oneOf(["primary", "secondary"]),
  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: import_prop_types8.default.bool,
  /**
   * If `true`, apply disabled class.
   */
  disabled: import_prop_types8.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: import_prop_types8.default.bool,
  /**
   * If `true`, the input of this label is focused.
   */
  focused: import_prop_types8.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types8.default.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: import_prop_types8.default.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: import_prop_types8.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types8.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputLabel_default = withStyles_default(styles14, {
  name: "MuiInputLabel"
})(InputLabel);

// node_modules/@material-ui/core/esm/FormControl/FormControl.js
var React12 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/utils/isMuiElement.js
var React11 = __toESM(require_react());
function isMuiElement(element, muiNames) {
  return React11.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

// node_modules/@material-ui/core/esm/FormControl/FormControl.js
var styles16 = {
  /* Styles applied to the root element. */
  root: {
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top"
    // Fix alignment issue on Safari.
  },
  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },
  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },
  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: "100%"
  }
};
var FormControl = React12.forwardRef(function FormControl2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$component = props.component, Component4 = _props$component === void 0 ? "div" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, visuallyFocused = props.focused, _props$hiddenLabel = props.hiddenLabel, hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel, _props$margin = props.margin, margin = _props$margin === void 0 ? "none" : _props$margin, _props$required = props.required, required = _props$required === void 0 ? false : _props$required, size = props.size, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);
  var _React$useState = React12.useState(function() {
    var initialAdornedStart = false;
    if (children) {
      React12.Children.forEach(children, function(child) {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        var input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  }), adornedStart = _React$useState[0], setAdornedStart = _React$useState[1];
  var _React$useState2 = React12.useState(function() {
    var initialFilled = false;
    if (children) {
      React12.Children.forEach(children, function(child) {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  }), filled = _React$useState2[0], setFilled = _React$useState2[1];
  var _React$useState3 = React12.useState(false), _focused = _React$useState3[0], setFocused = _React$useState3[1];
  var focused = visuallyFocused !== void 0 ? visuallyFocused : _focused;
  if (disabled && focused) {
    setFocused(false);
  }
  var registerEffect;
  if (true) {
    var registeredInput = React12.useRef(false);
    registerEffect = function registerEffect2() {
      if (registeredInput.current) {
        console.error(["Material-UI: There are multiple InputBase components inside a FormControl.", "This is not supported. It might cause infinite rendering loops.", "Only use one InputBase."].join("\n"));
      }
      registeredInput.current = true;
      return function() {
        registeredInput.current = false;
      };
    };
  }
  var onFilled = React12.useCallback(function() {
    setFilled(true);
  }, []);
  var onEmpty = React12.useCallback(function() {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart,
    setAdornedStart,
    color,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    margin: (size === "small" ? "dense" : void 0) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return React12.createElement(FormControlContext_default.Provider, {
    value: childContext
  }, React12.createElement(Component4, _extends({
    className: clsx_m_default(classes.root, className, margin !== "none" && classes["margin".concat(capitalize(margin))], fullWidth && classes.fullWidth),
    ref
  }, other), children));
});
true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The contents of the form control.
   */
  children: import_prop_types9.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types9.default.object,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types9.default.oneOf(["primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types9.default.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: import_prop_types9.default.bool,
  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: import_prop_types9.default.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: import_prop_types9.default.bool,
  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: import_prop_types9.default.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: import_prop_types9.default.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: import_prop_types9.default.bool,
  /**
   * The size of the text field.
   */
  size: import_prop_types9.default.oneOf(["medium", "small"]),
  /**
   * The variant to use.
   */
  variant: import_prop_types9.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var FormControl_default = withStyles_default(styles16, {
  name: "MuiFormControl"
})(FormControl);

// node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js
var React13 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
var styles17 = function styles18(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: "left",
      marginTop: 3,
      margin: 0,
      "&$disabled": {
        color: theme.palette.text.disabled
      },
      "&$error": {
        color: theme.palette.error.main
      }
    }),
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },
    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },
    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},
    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},
    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = React13.forwardRef(function FormHelperText2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component4 = _props$component === void 0 ? "p" : _props$component, disabled = props.disabled, error = props.error, filled = props.filled, focused = props.focused, margin = props.margin, required = props.required, variant = props.variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "margin", "disabled", "error", "filled", "focused", "required"]
  });
  return React13.createElement(Component4, _extends({
    className: clsx_m_default(classes.root, (fcs.variant === "filled" || fcs.variant === "outlined") && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === "dense" && classes.marginDense),
    ref
  }, other), children === " " ? (
    // eslint-disable-next-line react/no-danger
    React13.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    })
  ) : children);
});
true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: import_prop_types10.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types10.default.object,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types10.default.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: import_prop_types10.default.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: import_prop_types10.default.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: import_prop_types10.default.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: import_prop_types10.default.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: import_prop_types10.default.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: import_prop_types10.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types10.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var FormHelperText_default = withStyles_default(styles17, {
  name: "MuiFormHelperText"
})(FormHelperText);

// node_modules/@material-ui/core/esm/Select/Select.js
var React28 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Select/SelectInput.js
var React24 = __toESM(require_react());
var import_react_is3 = __toESM(require_react_is());
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Menu/Menu.js
var React23 = __toESM(require_react());
var import_react_is2 = __toESM(require_react_is());
var import_prop_types19 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Popover/Popover.js
var React19 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
var ReactDOM4 = __toESM(require_react_dom());

// node_modules/@material-ui/core/esm/utils/createChainedFunction.js
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.reduce(function(acc, func) {
    if (func == null) {
      return acc;
    }
    if (true) {
      if (typeof func !== "function") {
        console.error("Material-UI: Invalid Argument Type, must only provide functions, undefined, or null.");
      }
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function() {
  });
}

// node_modules/@material-ui/core/esm/Modal/Modal.js
var React17 = __toESM(require_react());
var ReactDOM3 = __toESM(require_react_dom());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/Portal/Portal.js
var React14 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_prop_types11 = __toESM(require_prop_types());
function getContainer(container) {
  container = typeof container === "function" ? container() : container;
  return ReactDOM.findDOMNode(container);
}
var useEnhancedEffect3 = typeof window !== "undefined" ? React14.useLayoutEffect : React14.useEffect;
var Portal = React14.forwardRef(function Portal2(props, ref) {
  var children = props.children, container = props.container, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, onRendered = props.onRendered;
  var _React$useState = React14.useState(null), mountNode = _React$useState[0], setMountNode = _React$useState[1];
  var handleRef = useForkRef(React14.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect3(function() {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect3(function() {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function() {
        setRef(ref, null);
      };
    }
    return void 0;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect3(function() {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);
  if (disablePortal) {
    if (React14.isValidElement(children)) {
      return React14.cloneElement(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
});
true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types11.default.node,
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types11.default.oneOfType([HTMLElementType, import_prop_types11.default.instanceOf(React14.Component), import_prop_types11.default.func]),
  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: import_prop_types11.default.bool,
  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be removed in v5, the ref can be used instead.
   * @deprecated Use the ref instead.
   */
  onRendered: deprecatedPropType(import_prop_types11.default.func, "Use the ref instead.")
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
var Portal_default = Portal;

// node_modules/@material-ui/core/esm/utils/getScrollbarSize.js
function getScrollbarSize() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.width = "99px";
  scrollDiv.style.height = "99px";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

// node_modules/@material-ui/core/esm/Modal/ModalManager.js
function isOverflowing(container) {
  var doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(node, show) {
  if (show) {
    node.setAttribute("aria-hidden", "true");
  } else {
    node.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)["padding-right"], 10) || 0;
}
function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : void 0;
  var blacklist = [mountNode, currentNode].concat(_toConsumableArray(nodesToExclude));
  var blacklistTagNames = ["TEMPLATE", "SCRIPT", "STYLE"];
  [].forEach.call(container.children, function(node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}
function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function(item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      var scrollbarSize = getScrollbarSize();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: "padding-right",
        el: container
      });
      container.style["padding-right"] = "".concat(getPaddingRight(container) + scrollbarSize, "px");
      fixedNodes = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedNodes, function(node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    }
    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === "HTML" && window.getComputedStyle(parent)["overflow-y"] === "scroll" ? parent : container;
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: "overflow",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  var restore = function restore2() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function(node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty("padding-right");
        }
      });
    }
    restoreStyle.forEach(function(_ref3) {
      var value = _ref3.value, el = _ref3.el, key = _ref3.key;
      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function(node) {
    if (node.getAttribute && node.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
var ModalManager = function() {
  function ModalManager2() {
    _classCallCheck(this, ModalManager2);
    this.modals = [];
    this.containers = [];
  }
  _createClass(ModalManager2, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);
      if (modalIndex !== -1) {
        return modalIndex;
      }
      modalIndex = this.modals.length;
      this.modals.push(modal);
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }
      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.container === container;
      });
      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }
      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);
      if (modalIndex === -1) {
        return modalIndex;
      }
      var containerIndex = findIndexOf(this.containers, function(item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1);
      if (containerInfo.modals.length === 0) {
        if (containerInfo.restore) {
          containerInfo.restore();
        }
        if (modal.modalRef) {
          ariaHidden(modal.modalRef, true);
        }
        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1];
        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }
      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);
  return ModalManager2;
}();

// node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js
var React15 = __toESM(require_react());
var ReactDOM2 = __toESM(require_react_dom());
var import_prop_types12 = __toESM(require_prop_types());
function Unstable_TrapFocus(props) {
  var children = props.children, _props$disableAutoFoc = props.disableAutoFocus, disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$disableEnforce = props.disableEnforceFocus, disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce, _props$disableRestore = props.disableRestoreFocus, disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore, getDoc = props.getDoc, isEnabled = props.isEnabled, open = props.open;
  var ignoreNextEnforceFocus = React15.useRef();
  var sentinelStart = React15.useRef(null);
  var sentinelEnd = React15.useRef(null);
  var nodeToRestore = React15.useRef();
  var rootRef = React15.useRef(null);
  var handleOwnRef = React15.useCallback(function(instance) {
    rootRef.current = ReactDOM2.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(children.ref, handleOwnRef);
  var prevOpenRef = React15.useRef();
  React15.useEffect(function() {
    prevOpenRef.current = open;
  }, [open]);
  if (!prevOpenRef.current && open && typeof window !== "undefined") {
    nodeToRestore.current = getDoc().activeElement;
  }
  React15.useEffect(function() {
    if (!open) {
      return;
    }
    var doc = ownerDocument(rootRef.current);
    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["Material-UI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", -1);
      }
      rootRef.current.focus();
    }
    var contain = function contain2() {
      var rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };
    var loopFocus = function loopFocus2(event) {
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      }
      if (doc.activeElement === rootRef.current) {
        ignoreNextEnforceFocus.current = true;
        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };
    doc.addEventListener("focus", contain, true);
    doc.addEventListener("keydown", loopFocus, true);
    var interval = setInterval(function() {
      contain();
    }, 50);
    return function() {
      clearInterval(interval);
      doc.removeEventListener("focus", contain, true);
      doc.removeEventListener("keydown", loopFocus, true);
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return React15.createElement(React15.Fragment, null, React15.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), React15.cloneElement(children, {
    ref: handleRef
  }), React15.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}
true ? Unstable_TrapFocus.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: import_prop_types12.default.node,
  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: import_prop_types12.default.bool,
  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: import_prop_types12.default.bool,
  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   */
  disableRestoreFocus: import_prop_types12.default.bool,
  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: import_prop_types12.default.func.isRequired,
  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: import_prop_types12.default.func.isRequired,
  /**
   * If `true`, focus will be locked.
   */
  open: import_prop_types12.default.bool.isRequired
} : void 0;
if (true) {
  Unstable_TrapFocus["propTypes"] = exactProp(Unstable_TrapFocus.propTypes);
}
var Unstable_TrapFocus_default = Unstable_TrapFocus;

// node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js
var React16 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
var styles19 = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: "fixed",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: "transparent"
  }
};
var SimpleBackdrop = React16.forwardRef(function SimpleBackdrop2(props, ref) {
  var _props$invisible = props.invisible, invisible = _props$invisible === void 0 ? false : _props$invisible, open = props.open, other = _objectWithoutProperties(props, ["invisible", "open"]);
  return open ? React16.createElement("div", _extends({
    "aria-hidden": true,
    ref
  }, other, {
    style: _extends({}, styles19.root, invisible ? styles19.invisible : {}, other.style)
  })) : null;
});
true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: import_prop_types13.default.bool,
  /**
   * If `true`, the backdrop is open.
   */
  open: import_prop_types13.default.bool.isRequired
} : void 0;
var SimpleBackdrop_default = SimpleBackdrop;

// node_modules/@material-ui/core/esm/Modal/Modal.js
function getContainer2(container) {
  container = typeof container === "function" ? container() : container;
  return ReactDOM3.findDOMNode(container);
}
function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
var styles20 = function styles21(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: "fixed",
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },
    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: "hidden"
    }
  };
};
var Modal = React17.forwardRef(function Modal2(inProps, ref) {
  var theme = useTheme();
  var props = getThemeProps({
    name: "MuiModal",
    props: _extends({}, inProps),
    theme
  });
  var _props$BackdropCompon = props.BackdropComponent, BackdropComponent = _props$BackdropCompon === void 0 ? SimpleBackdrop_default : _props$BackdropCompon, BackdropProps = props.BackdropProps, children = props.children, _props$closeAfterTran = props.closeAfterTransition, closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran, container = props.container, _props$disableAutoFoc = props.disableAutoFocus, disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$disableBackdro = props.disableBackdropClick, disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro, _props$disableEnforce = props.disableEnforceFocus, disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce, _props$disableEscapeK = props.disableEscapeKeyDown, disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK, _props$disablePortal = props.disablePortal, disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal, _props$disableRestore = props.disableRestoreFocus, disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore, _props$disableScrollL = props.disableScrollLock, disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL, _props$hideBackdrop = props.hideBackdrop, hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop, _props$keepMounted = props.keepMounted, keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted, _props$manager = props.manager, manager = _props$manager === void 0 ? defaultManager : _props$manager, onBackdropClick = props.onBackdropClick, onClose = props.onClose, onEscapeKeyDown = props.onEscapeKeyDown, onRendered = props.onRendered, open = props.open, other = _objectWithoutProperties(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);
  var _React$useState = React17.useState(true), exited = _React$useState[0], setExited = _React$useState[1];
  var modal = React17.useRef({});
  var mountNodeRef = React17.useRef(null);
  var modalRef = React17.useRef(null);
  var handleRef = useForkRef(modalRef, ref);
  var hasTransition = getHasTransition(props);
  var getDoc = function getDoc2() {
    return ownerDocument(mountNodeRef.current);
  };
  var getModal = function getModal2() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  var handleMounted = function handleMounted2() {
    manager.mount(getModal(), {
      disableScrollLock
    });
    modalRef.current.scrollTop = 0;
  };
  var handleOpen = useEventCallback(function() {
    var resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = React17.useCallback(function() {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = useEventCallback(function(node) {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (onRendered) {
      onRendered();
    }
    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  var handleClose = React17.useCallback(function() {
    manager.remove(getModal());
  }, [manager]);
  React17.useEffect(function() {
    return function() {
      handleClose();
    };
  }, [handleClose]);
  React17.useEffect(function() {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  var handleEnter = function handleEnter2() {
    setExited(false);
  };
  var handleExited = function handleExited2() {
    setExited(true);
    if (closeAfterTransition) {
      handleClose();
    }
  };
  var handleBackdropClick = function handleBackdropClick2(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (!disableBackdropClick && onClose) {
      onClose(event, "backdropClick");
    }
  };
  var handleKeyDown = function handleKeyDown2(event) {
    if (event.key !== "Escape" || !isTopModal()) {
      return;
    }
    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  var inlineStyle = styles20(theme || {
    zIndex: zIndex_default
  });
  var childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = children.props.tabIndex || "-1";
  }
  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }
  return React17.createElement(Portal_default, {
    ref: handlePortalRef,
    container,
    disablePortal
  }, React17.createElement("div", _extends({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: _extends({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : React17.createElement(BackdropComponent, _extends({
    open,
    onClick: handleBackdropClick
  }, BackdropProps)), React17.createElement(Unstable_TrapFocus_default, {
    disableEnforceFocus,
    disableAutoFocus,
    disableRestoreFocus,
    getDoc,
    isEnabled: isTopModal,
    open
  }, React17.cloneElement(children, childProps))));
});
true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: import_prop_types14.default.elementType,
  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: import_prop_types14.default.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: import_prop_types14.default.bool,
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types14.default.oneOfType([HTMLElementType, import_prop_types14.default.instanceOf(React17.Component), import_prop_types14.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: import_prop_types14.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire `onClose`.
   */
  disableBackdropClick: deprecatedPropType(import_prop_types14.default.bool, "Use the onClose prop with the `reason` argument to filter the `backdropClick` events."),
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: import_prop_types14.default.bool,
  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: import_prop_types14.default.bool,
  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: import_prop_types14.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: import_prop_types14.default.bool,
  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: import_prop_types14.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: import_prop_types14.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: import_prop_types14.default.bool,
  /**
   * @ignore
   */
  manager: import_prop_types14.default.object,
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: deprecatedPropType(import_prop_types14.default.func, "Use the onClose prop with the `reason` argument to handle the `backdropClick` events."),
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types14.default.func,
  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: deprecatedPropType(import_prop_types14.default.func, "Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events."),
  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be removed in v5, the ref can be used instead.
   */
  onRendered: deprecatedPropType(import_prop_types14.default.func, "Use the ref instead."),
  /**
   * If `true`, the modal is open.
   */
  open: import_prop_types14.default.bool.isRequired
} : void 0;
var Modal_default = Modal;

// node_modules/@material-ui/core/esm/Grow/Grow.js
var React18 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/transitions/utils.js
var reflow = function reflow2(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

// node_modules/@material-ui/core/esm/Grow/Grow.js
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}
var styles22 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var Grow = React18.forwardRef(function Grow2(props, ref) {
  var children = props.children, _props$disableStrictM = props.disableStrictModeCompat, disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM, inProp = props.in, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, style = props.style, _props$timeout = props.timeout, timeout = _props$timeout === void 0 ? "auto" : _props$timeout, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Transition_default : _props$TransitionComp, other = _objectWithoutProperties(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var timer = React18.useRef();
  var autoTimeout = React18.useRef();
  var theme = useTheme2();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = React18.useRef(null);
  var foreignRef = useForkRef(children.ref, ref);
  var handleRef = useForkRef(enableStrictModeCompat ? nodeRef : void 0, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback2(callback) {
    return function(nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref3 = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing], _ref22 = _slicedToArray(_ref3, 2), node = _ref22[0], isAppearing = _ref22[1];
        if (isAppearing === void 0) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function(node, isAppearing) {
    reflow(node);
    var _getTransitionProps = getTransitionProps({
      style,
      timeout
    }, {
      mode: "enter"
    }), transitionDuration = _getTransitionProps.duration, delay = _getTransitionProps.delay;
    var duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: duration * 0.666,
      delay
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function(node) {
    var _getTransitionProps2 = getTransitionProps({
      style,
      timeout
    }, {
      mode: "exit"
    }), transitionDuration = _getTransitionProps2.duration, delay = _getTransitionProps2.delay;
    var duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration,
      delay
    }), theme.transitions.create("transform", {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(",");
    node.style.opacity = "0";
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var addEndListener = function addEndListener2(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout === "auto") {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };
  React18.useEffect(function() {
    return function() {
      clearTimeout(timer.current);
    };
  }, []);
  return React18.createElement(TransitionComponent, _extends({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other), function(state, childProps) {
    return React18.cloneElement(children, _extends({
      style: _extends({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles22[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: import_prop_types15.default.element,
  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: import_prop_types15.default.bool,
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: import_prop_types15.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types15.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types15.default.func,
  /**
   * @ignore
   */
  style: import_prop_types15.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.number, import_prop_types15.default.shape({
    appear: import_prop_types15.default.number,
    enter: import_prop_types15.default.number,
    exit: import_prop_types15.default.number
  })])
} : void 0;
Grow.muiSupportAuto = true;
var Grow_default = Grow;

// node_modules/@material-ui/core/esm/Popover/Popover.js
function getOffsetTop(rect, vertical) {
  var offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function(n) {
    return typeof n === "number" ? "".concat(n, "px") : n;
  }).join(" ");
}
function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;
  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }
  return scrollTop;
}
function getAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var styles23 = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the `Paper` component. */
  paper: {
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = React19.forwardRef(function Popover2(props, ref) {
  var action = props.action, anchorEl = props.anchorEl, _props$anchorOrigin = props.anchorOrigin, anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: "top",
    horizontal: "left"
  } : _props$anchorOrigin, anchorPosition = props.anchorPosition, _props$anchorReferenc = props.anchorReference, anchorReference = _props$anchorReferenc === void 0 ? "anchorEl" : _props$anchorReferenc, children = props.children, classes = props.classes, className = props.className, containerProp = props.container, _props$elevation = props.elevation, elevation = _props$elevation === void 0 ? 8 : _props$elevation, getContentAnchorEl = props.getContentAnchorEl, _props$marginThreshol = props.marginThreshold, marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol, onEnter = props.onEnter, onEntered = props.onEntered, onEntering = props.onEntering, onExit = props.onExit, onExited = props.onExited, onExiting = props.onExiting, open = props.open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, _props$transformOrigi = props.transformOrigin, transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: "top",
    horizontal: "left"
  } : _props$transformOrigi, _props$TransitionComp = props.TransitionComponent, TransitionComponent = _props$TransitionComp === void 0 ? Grow_default : _props$TransitionComp, _props$transitionDura = props.transitionDuration, transitionDurationProp = _props$transitionDura === void 0 ? "auto" : _props$transitionDura, _props$TransitionProp = props.TransitionProps, TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp, other = _objectWithoutProperties(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  var paperRef = React19.useRef();
  var getAnchorOffset = React19.useCallback(function(contentAnchorOffset) {
    if (anchorReference === "anchorPosition") {
      if (true) {
        if (!anchorPosition) {
          console.error('Material-UI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.');
        }
      }
      return anchorPosition;
    }
    var resolvedAnchorEl = getAnchorEl(anchorEl);
    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();
    if (true) {
      var box = anchorElement.getBoundingClientRect();
      if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
      }
    }
    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : "center";
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  var getContentAnchorOffset = React19.useCallback(function(element) {
    var contentAnchorOffset = 0;
    if (getContentAnchorEl && anchorReference === "anchorEl") {
      var contentAnchorEl = getContentAnchorEl(element);
      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      }
      if (true) {
        if (anchorOrigin.vertical !== "top") {
          console.error(["Material-UI: You can not change the default `anchorOrigin.vertical` value ", "when also providing the `getContentAnchorEl` prop to the popover component.", "Only use one of the two props.", "Set `getContentAnchorEl` to `null | undefined` or leave `anchorOrigin.vertical` unchanged."].join("\n"));
        }
      }
    }
    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]);
  var getTransformOrigin = React19.useCallback(function(elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = React19.useCallback(function(element) {
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    var anchorOffset = getAnchorOffset(contentAnchorOffset);
    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width;
    var containerWindow = ownerWindow(getAnchorEl(anchorEl));
    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;
      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }
    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(["Material-UI: The popover component is too tall.", "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), "Please consider adding a `max-height` to improve the user-experience."].join("\n"));
      }
    }
    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;
      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;
      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }
    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = React19.useCallback(function() {
    var element = paperRef.current;
    if (!element) {
      return;
    }
    var positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);
  var handleEntering = function handleEntering2(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  var handlePaperRef = React19.useCallback(function(instance) {
    paperRef.current = ReactDOM4.findDOMNode(instance);
  }, []);
  React19.useEffect(function() {
    if (open) {
      setPositioningStyles();
    }
  });
  React19.useImperativeHandle(action, function() {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  React19.useEffect(function() {
    if (!open) {
      return void 0;
    }
    var handleResize = debounce(function() {
      setPositioningStyles();
    });
    window.addEventListener("resize", handleResize);
    return function() {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : void 0);
  return React19.createElement(Modal_default, _extends({
    container,
    open,
    ref,
    BackdropProps: {
      invisible: true
    },
    className: clsx_m_default(classes.root, className)
  }, other), React19.createElement(TransitionComponent, _extends({
    appear: true,
    in: open,
    onEnter,
    onEntered,
    onExit,
    onExited,
    onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: createChainedFunction(handleEntering, TransitionProps.onEntering)
  }), React19.createElement(Paper_default, _extends({
    elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: clsx_m_default(classes.paper, PaperProps.className)
  }), children)));
});
true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: refType_default,
  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes(import_prop_types16.default.oneOfType([HTMLElementType, import_prop_types16.default.func]), function(props) {
    if (props.open && (!props.anchorReference || props.anchorReference === "anchorEl")) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else {
        return new Error(["Material-UI: The `anchorEl` prop provided to the component is invalid.", "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join("\n"));
      }
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: import_prop_types16.default.shape({
    horizontal: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["center", "left", "right"]), import_prop_types16.default.number]).isRequired,
    vertical: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["bottom", "center", "top"]), import_prop_types16.default.number]).isRequired
  }),
  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: import_prop_types16.default.shape({
    left: import_prop_types16.default.number.isRequired,
    top: import_prop_types16.default.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: import_prop_types16.default.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: import_prop_types16.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types16.default.object,
  /**
   * @ignore
   */
  className: import_prop_types16.default.string,
  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types16.default.oneOfType([HTMLElementType, import_prop_types16.default.instanceOf(React19.Component), import_prop_types16.default.func]),
  /**
   * The elevation of the popover.
   */
  elevation: import_prop_types16.default.number,
  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: import_prop_types16.default.func,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: import_prop_types16.default.number,
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: import_prop_types16.default.func,
  /**
   * Callback fired before the component is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: deprecatedPropType(import_prop_types16.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: deprecatedPropType(import_prop_types16.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: deprecatedPropType(import_prop_types16.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired before the component is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: deprecatedPropType(import_prop_types16.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: deprecatedPropType(import_prop_types16.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the component is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: deprecatedPropType(import_prop_types16.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * If `true`, the popover is visible.
   */
  open: import_prop_types16.default.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: import_prop_types16.default.shape({
    component: elementTypeAcceptingRef_default
  }),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: import_prop_types16.default.shape({
    horizontal: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["center", "left", "right"]), import_prop_types16.default.number]).isRequired,
    vertical: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["bottom", "center", "top"]), import_prop_types16.default.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: import_prop_types16.default.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["auto"]), import_prop_types16.default.number, import_prop_types16.default.shape({
    appear: import_prop_types16.default.number,
    enter: import_prop_types16.default.number,
    exit: import_prop_types16.default.number
  })]),
  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: import_prop_types16.default.object
} : void 0;
var Popover_default = withStyles_default(styles23, {
  name: "MuiPopover"
})(Popover);

// node_modules/@material-ui/core/esm/MenuList/MenuList.js
var React22 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types18 = __toESM(require_prop_types());
var ReactDOM5 = __toESM(require_react_dom());

// node_modules/@material-ui/core/esm/List/List.js
var React21 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/List/ListContext.js
var React20 = __toESM(require_react());
var ListContext = React20.createContext({});
if (true) {
  ListContext.displayName = "ListContext";
}
var ListContext_default = ListContext;

// node_modules/@material-ui/core/esm/List/List.js
var styles24 = {
  /* Styles applied to the root element. */
  root: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative"
  },
  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },
  /* Styles applied to the root element if dense. */
  dense: {},
  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = React21.forwardRef(function List2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$component = props.component, Component4 = _props$component === void 0 ? "ul" : _props$component, _props$dense = props.dense, dense = _props$dense === void 0 ? false : _props$dense, _props$disablePadding = props.disablePadding, disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding, subheader = props.subheader, other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
  var context = React21.useMemo(function() {
    return {
      dense
    };
  }, [dense]);
  return React21.createElement(ListContext_default.Provider, {
    value: context
  }, React21.createElement(Component4, _extends({
    className: clsx_m_default(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref
  }, other), subheader, children));
});
true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: import_prop_types17.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types17.default.object.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types17.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types17.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: import_prop_types17.default.bool,
  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: import_prop_types17.default.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types17.default.node
} : void 0;
var List_default = withStyles_default(styles24, {
  name: "MuiList"
})(List);

// node_modules/@material-ui/core/esm/MenuList/MenuList.js
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  var text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}
var useEnhancedEffect4 = typeof window === "undefined" ? React22.useEffect : React22.useLayoutEffect;
var MenuList = React22.forwardRef(function MenuList2(props, ref) {
  var actions = props.actions, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, _props$autoFocusItem = props.autoFocusItem, autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem, children = props.children, className = props.className, _props$disabledItemsF = props.disabledItemsFocusable, disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF, _props$disableListWra = props.disableListWrap, disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra, onKeyDown = props.onKeyDown, _props$variant = props.variant, variant = _props$variant === void 0 ? "selectedMenu" : _props$variant, other = _objectWithoutProperties(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);
  var listRef = React22.useRef(null);
  var textCriteriaRef = React22.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect4(function() {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React22.useImperativeHandle(actions, function() {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        var noExplicitWidth = !listRef.current.style.width;
        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(getScrollbarSize(true), "px");
          listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }
        return listRef.current;
      }
    };
  }, []);
  var handleKeyDown = function handleKeyDown2(event) {
    var list = listRef.current;
    var key = event.key;
    var currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  var handleOwnRef = React22.useCallback(function(instance) {
    listRef.current = ReactDOM5.findDOMNode(instance);
  }, []);
  var handleRef = useForkRef(handleOwnRef, ref);
  var activeItemIndex = -1;
  React22.Children.forEach(children, function(child, index) {
    if (!React22.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = React22.Children.map(children, function(child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return React22.cloneElement(child, newChildProps);
    }
    return child;
  });
  return React22.createElement(List_default, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus: import_prop_types18.default.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem: import_prop_types18.default.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: import_prop_types18.default.node,
  /**
   * @ignore
   */
  className: import_prop_types18.default.string,
  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: import_prop_types18.default.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: import_prop_types18.default.bool,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types18.default.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: import_prop_types18.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var MenuList_default = MenuList;

// node_modules/@material-ui/core/esm/Menu/Menu.js
var ReactDOM6 = __toESM(require_react_dom());
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
var styles25 = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: "calc(100% - 96px)",
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: "touch"
  },
  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = React23.forwardRef(function Menu2(props, ref) {
  var _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus, children = props.children, classes = props.classes, _props$disableAutoFoc = props.disableAutoFocusItem, disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc, _props$MenuListProps = props.MenuListProps, MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps, onClose = props.onClose, onEnteringProp = props.onEntering, open = props.open, _props$PaperProps = props.PaperProps, PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps, PopoverClasses = props.PopoverClasses, _props$transitionDura = props.transitionDuration, transitionDuration = _props$transitionDura === void 0 ? "auto" : _props$transitionDura, _props$TransitionProp = props.TransitionProps;
  _props$TransitionProp = _props$TransitionProp === void 0 ? {} : _props$TransitionProp;
  var onEntering = _props$TransitionProp.onEntering, TransitionProps = _objectWithoutProperties(_props$TransitionProp, ["onEntering"]), _props$variant = props.variant, variant = _props$variant === void 0 ? "selectedMenu" : _props$variant, other = _objectWithoutProperties(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"]);
  var theme = useTheme2();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = React23.useRef(null);
  var contentAnchorRef = React23.useRef(null);
  var getContentAnchorEl = function getContentAnchorEl2() {
    return contentAnchorRef.current;
  };
  var handleEntering = function handleEntering2(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }
    if (onEnteringProp) {
      onEnteringProp(element, isAppearing);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  var handleListKeyDown = function handleListKeyDown2(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  var activeItemIndex = -1;
  React23.Children.map(children, function(child, index) {
    if (!React23.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is2.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = React23.Children.map(children, function(child, index) {
    if (index === activeItemIndex) {
      return React23.cloneElement(child, {
        ref: function ref2(instance) {
          contentAnchorRef.current = ReactDOM6.findDOMNode(instance);
          setRef(child.ref, instance);
        }
      });
    }
    return child;
  });
  return React23.createElement(Popover_default, _extends({
    getContentAnchorEl,
    classes: PopoverClasses,
    onClose,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    anchorOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === "rtl" ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: _extends({}, PaperProps, {
      classes: _extends({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open,
    ref,
    transitionDuration
  }, other), React23.createElement(MenuList_default, _extends({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem,
    variant
  }, MenuListProps, {
    className: clsx_m_default(classes.list, MenuListProps.className)
  }), items));
});
true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: import_prop_types19.default.oneOfType([HTMLElementType, import_prop_types19.default.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: import_prop_types19.default.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: import_prop_types19.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types19.default.object,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: import_prop_types19.default.bool,
  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: import_prop_types19.default.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: import_prop_types19.default.func,
  /**
   * Callback fired before the Menu enters.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: deprecatedPropType(import_prop_types19.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: deprecatedPropType(import_prop_types19.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: deprecatedPropType(import_prop_types19.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired before the Menu exits.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: deprecatedPropType(import_prop_types19.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: deprecatedPropType(import_prop_types19.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * Callback fired when the Menu is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: deprecatedPropType(import_prop_types19.default.func, "Use the `TransitionProps` prop instead."),
  /**
   * If `true`, the menu is visible.
   */
  open: import_prop_types19.default.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: import_prop_types19.default.object,
  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: import_prop_types19.default.object,
  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: import_prop_types19.default.oneOfType([import_prop_types19.default.oneOf(["auto"]), import_prop_types19.default.number, import_prop_types19.default.shape({
    appear: import_prop_types19.default.number,
    enter: import_prop_types19.default.number,
    exit: import_prop_types19.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
   */
  TransitionProps: import_prop_types19.default.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: import_prop_types19.default.oneOf(["menu", "selectedMenu"])
} : void 0;
var Menu_default = withStyles_default(styles25, {
  name: "MuiMenu"
})(Menu);

// node_modules/@material-ui/core/esm/Select/SelectInput.js
function areEqualValues(a, b) {
  if (_typeof(b) === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
var SelectInput = React24.forwardRef(function SelectInput2(props, ref) {
  var ariaLabel = props["aria-label"], autoFocus = props.autoFocus, autoWidth = props.autoWidth, children = props.children, classes = props.classes, className = props.className, defaultValue = props.defaultValue, disabled = props.disabled, displayEmpty = props.displayEmpty, IconComponent = props.IconComponent, inputRefProp = props.inputRef, labelId = props.labelId, _props$MenuProps = props.MenuProps, MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps, multiple = props.multiple, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onClose = props.onClose, onFocus = props.onFocus, onOpen = props.onOpen, openProp = props.open, readOnly = props.readOnly, renderValue = props.renderValue, _props$SelectDisplayP = props.SelectDisplayProps, SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP, tabIndexProp = props.tabIndex, type = props.type, valueProp = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);
  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  }), _useControlled2 = _slicedToArray(_useControlled, 2), value = _useControlled2[0], setValue = _useControlled2[1];
  var inputRef = React24.useRef(null);
  var _React$useState = React24.useState(null), displayNode = _React$useState[0], setDisplayNode = _React$useState[1];
  var _React$useRef = React24.useRef(openProp != null), isOpenControlled = _React$useRef.current;
  var _React$useState2 = React24.useState(), menuMinWidthState = _React$useState2[0], setMenuMinWidthState = _React$useState2[1];
  var _React$useState3 = React24.useState(false), openState = _React$useState3[0], setOpenState = _React$useState3[1];
  var handleRef = useForkRef(ref, inputRefProp);
  React24.useImperativeHandle(handleRef, function() {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value
    };
  }, [displayNode, value]);
  React24.useEffect(function() {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  React24.useEffect(function() {
    if (displayNode) {
      var label = ownerDocument(displayNode).getElementById(labelId);
      if (label) {
        var handler = function handler2() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };
        label.addEventListener("click", handler);
        return function() {
          label.removeEventListener("click", handler);
        };
      }
    }
    return void 0;
  }, [labelId, displayNode]);
  var update = function update2(open2, event) {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open2);
    }
  };
  var handleMouseDown = function handleMouseDown2(event) {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayNode.focus();
    update(true, event);
  };
  var handleClose = function handleClose2(event) {
    update(false, event);
  };
  var childrenArray = React24.Children.toArray(children);
  var handleChange = function handleChange2(event) {
    var index = childrenArray.map(function(child2) {
      return child2.props.value;
    }).indexOf(event.target.value);
    if (index === -1) {
      return;
    }
    var child = childrenArray[index];
    setValue(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  var handleItemClick = function handleItemClick2(child) {
    return function(event) {
      if (!multiple) {
        update(false, event);
      }
      var newValue;
      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);
        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }
      if (child.props.onClick) {
        child.props.onClick(event);
      }
      if (value === newValue) {
        return;
      }
      setValue(newValue);
      if (onChange) {
        event.persist();
        Object.defineProperty(event, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(event, child);
      }
    };
  };
  var handleKeyDown = function handleKeyDown2(event) {
    if (!readOnly) {
      var validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on MacOS, but it's recommended by
        // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  var open = displayNode !== null && (isOpenControlled ? openProp : openState);
  var handleBlur = function handleBlur2(event) {
    if (!open && onBlur) {
      event.persist();
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  var foundMatch = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  var items = childrenArray.map(function(child) {
    if (!React24.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is3.isFragment)(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    var selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(true ? "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`." : formatMuiErrorMessage(2));
      }
      selected = value.some(function(v) {
        return areEqualValues(v, child.props.value);
      });
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (selected) {
      foundMatch = true;
    }
    return React24.cloneElement(child, {
      "aria-selected": selected ? "true" : void 0,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (true) {
    React24.useEffect(function() {
      if (!foundMatch && !multiple && value !== "") {
        var values = childrenArray.map(function(child) {
          return child.props.value;
        });
        console.warn(["Material-UI: You have provided an out-of-range value `".concat(value, "` for the select ").concat(name ? '(name="'.concat(name, '") ') : "", "component."), "Consider providing a value that matches one of the available options or ''.", "The available values are ".concat(values.filter(function(x) {
          return x != null;
        }).map(function(x) {
          return "`".concat(x, "`");
        }).join(", ") || '""', ".")].join("\n"));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }
  if (computeDisplay) {
    display = multiple ? displayMultiple.join(", ") : displaySingle;
  }
  var menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }
  var tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : void 0);
  return React24.createElement(React24.Fragment, null, React24.createElement("div", _extends({
    className: clsx_m_default(
      classes.root,
      // TODO v5: merge root and select
      classes.select,
      classes.selectMenu,
      classes[variant],
      className,
      disabled && classes.disabled
    ),
    ref: setDisplayNode,
    tabIndex,
    role: "button",
    "aria-disabled": disabled ? "true" : void 0,
    "aria-expanded": open ? "true" : void 0,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ? (
    // eslint-disable-next-line react/no-danger
    React24.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: "&#8203;"
      }
    })
  ) : display), React24.createElement("input", _extends({
    value: Array.isArray(value) ? value.join(",") : value,
    name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus
  }, other)), React24.createElement(IconComponent, {
    className: clsx_m_default(classes.icon, classes["icon".concat(capitalize(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), React24.createElement(Menu_default, _extends({
    id: "menu-".concat(name || ""),
    anchorEl: displayNode,
    open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: _extends({
      "aria-labelledby": labelId,
      role: "listbox",
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: _extends({}, MenuProps.PaperProps, {
      style: _extends({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  "aria-label": import_prop_types20.default.string,
  /**
   * @ignore
   */
  autoFocus: import_prop_types20.default.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: import_prop_types20.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: import_prop_types20.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types20.default.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types20.default.string,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types20.default.any,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: import_prop_types20.default.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: import_prop_types20.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types20.default.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType_default,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types20.default.string,
  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: import_prop_types20.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: import_prop_types20.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types20.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types20.default.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: import_prop_types20.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types20.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types20.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types20.default.func,
  /**
   * Control `select` open state.
   */
  open: import_prop_types20.default.bool,
  /**
   * @ignore
   */
  readOnly: import_prop_types20.default.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types20.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types20.default.object,
  /**
   * @ignore
   */
  tabIndex: import_prop_types20.default.oneOfType([import_prop_types20.default.number, import_prop_types20.default.string]),
  /**
   * @ignore
   */
  type: import_prop_types20.default.any,
  /**
   * The input value.
   */
  value: import_prop_types20.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types20.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var SelectInput_default = SelectInput;

// node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js
var React25 = __toESM(require_react());
var ArrowDropDown_default = createSvgIcon(React25.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js
var React27 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js
var React26 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
var NativeSelectInput = React26.forwardRef(function NativeSelectInput2(props, ref) {
  var classes = props.classes, className = props.className, disabled = props.disabled, IconComponent = props.IconComponent, inputRef = props.inputRef, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);
  return React26.createElement(React26.Fragment, null, React26.createElement("select", _extends({
    className: clsx_m_default(
      classes.root,
      // TODO v5: merge root and select
      classes.select,
      classes[variant],
      className,
      disabled && classes.disabled
    ),
    disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : React26.createElement(IconComponent, {
    className: clsx_m_default(classes.icon, classes["icon".concat(capitalize(variant))], disabled && classes.disabled)
  }));
});
true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: import_prop_types21.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types21.default.object.isRequired,
  /**
   * The CSS class name of the select element.
   */
  className: import_prop_types21.default.string,
  /**
   * If `true`, the select will be disabled.
   */
  disabled: import_prop_types21.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types21.default.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType_default,
  /**
   * @ignore
   */
  multiple: import_prop_types21.default.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: import_prop_types21.default.string,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types21.default.func,
  /**
   * The input value.
   */
  value: import_prop_types21.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types21.default.oneOf(["standard", "outlined", "filled"])
} : void 0;
var NativeSelectInput_default = NativeSelectInput;

// node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js
var styles26 = function styles27(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},
    /* Styles applied to the select component `select` class. */
    select: {
      "-moz-appearance": "none",
      // Reset
      "-webkit-appearance": "none",
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: "none",
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: "pointer",
      "&:focus": {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
        borderRadius: 0
        // Reset Chrome style
      },
      // Remove IE 11 arrow
      "&::-ms-expand": {
        display: "none"
      },
      "&$disabled": {
        cursor: "default"
      },
      "&[multiple]": {
        height: "auto"
      },
      "&:not([multiple]) option, &:not([multiple]) optgroup": {
        backgroundColor: theme.palette.background.paper
      },
      "&&": {
        paddingRight: 24
      }
    },
    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      "&&": {
        paddingRight: 32
      }
    },
    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      "&&": {
        paddingRight: 32
      }
    },
    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: "auto",
      // Resets for multpile select with chips
      minHeight: "1.1876em",
      // Required for select\text-field height consistency
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},
    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: "absolute",
      right: 0,
      top: "calc(50% - 12px)",
      // Center vertically
      pointerEvents: "none",
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    },
    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: "rotate(180deg)"
    },
    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },
    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },
    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
      width: "100%"
    }
  };
};
var defaultInput = React27.createElement(Input_default, null);
var NativeSelect = React27.forwardRef(function NativeSelect2(props, ref) {
  var children = props.children, classes = props.classes, _props$IconComponent = props.IconComponent, IconComponent = _props$IconComponent === void 0 ? ArrowDropDown_default : _props$IconComponent, _props$input = props.input, input = _props$input === void 0 ? defaultInput : _props$input, inputProps = props.inputProps, variant = props.variant, other = _objectWithoutProperties(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  return React27.cloneElement(input, _extends({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: NativeSelectInput_default,
    inputProps: _extends({
      children,
      classes,
      IconComponent,
      variant: fcs.variant,
      type: void 0
    }, inputProps, input ? input.props.inputProps : {}),
    ref
  }, other));
});
true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: import_prop_types22.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types22.default.object,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types22.default.elementType,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: import_prop_types22.default.element,
  /**
   * Attributes applied to the `select` element.
   */
  inputProps: import_prop_types22.default.object,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types22.default.func,
  /**
   * The input value. The DOM API casts this to a string.
   */
  value: import_prop_types22.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types22.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
NativeSelect.muiName = "Select";
var NativeSelect_default = withStyles_default(styles26, {
  name: "MuiNativeSelect"
})(NativeSelect);

// node_modules/@material-ui/core/esm/Select/Select.js
var styles28 = styles26;
var _ref = React28.createElement(Input_default, null);
var _ref2 = React28.createElement(FilledInput_default, null);
var Select = React28.forwardRef(function Select2(props, ref) {
  var _props$autoWidth = props.autoWidth, autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth, children = props.children, classes = props.classes, _props$displayEmpty = props.displayEmpty, displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty, _props$IconComponent = props.IconComponent, IconComponent = _props$IconComponent === void 0 ? ArrowDropDown_default : _props$IconComponent, id = props.id, input = props.input, inputProps = props.inputProps, label = props.label, labelId = props.labelId, _props$labelWidth = props.labelWidth, labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth, MenuProps = props.MenuProps, _props$multiple = props.multiple, multiple = _props$multiple === void 0 ? false : _props$multiple, _props$native = props.native, native = _props$native === void 0 ? false : _props$native, onClose = props.onClose, onOpen = props.onOpen, open = props.open, renderValue = props.renderValue, SelectDisplayProps = props.SelectDisplayProps, _props$variant = props.variant, variantProps = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);
  var inputComponent = native ? NativeSelectInput_default : SelectInput_default;
  var muiFormControl = useFormControl2();
  var fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant"]
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: React28.createElement(OutlinedInput_default, {
      label,
      labelWidth
    }),
    filled: _ref2
  }[variant];
  return React28.cloneElement(InputComponent, _extends({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent,
    inputProps: _extends({
      children,
      IconComponent,
      variant,
      type: void 0,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple
    }, native ? {
      id
    } : {
      autoWidth,
      displayEmpty,
      labelId,
      MenuProps,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps: _extends({
        id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? mergeClasses({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select2
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref
  }, other));
});
true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: import_prop_types23.default.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: import_prop_types23.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types23.default.object,
  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types23.default.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty: import_prop_types23.default.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: import_prop_types23.default.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: import_prop_types23.default.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: import_prop_types23.default.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: import_prop_types23.default.object,
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: import_prop_types23.default.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: import_prop_types23.default.string,
  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth: import_prop_types23.default.number,
  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: import_prop_types23.default.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: import_prop_types23.default.bool,
  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: import_prop_types23.default.bool,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: import_prop_types23.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: import_prop_types23.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: import_prop_types23.default.func,
  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: import_prop_types23.default.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types23.default.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: import_prop_types23.default.object,
  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: import_prop_types23.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types23.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
Select.muiName = "Select";
var Select_default = withStyles_default(styles28, {
  name: "MuiSelect"
})(Select);

// node_modules/@material-ui/core/esm/TextField/TextField.js
var variantComponent = {
  standard: Input_default,
  filled: FilledInput_default,
  outlined: OutlinedInput_default
};
var styles29 = {
  /* Styles applied to the root element. */
  root: {}
};
var TextField = React29.forwardRef(function TextField2(props, ref) {
  var autoComplete = props.autoComplete, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus, children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, defaultValue = props.defaultValue, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$error = props.error, error = _props$error === void 0 ? false : _props$error, FormHelperTextProps = props.FormHelperTextProps, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, helperText = props.helperText, hiddenLabel = props.hiddenLabel, id = props.id, InputLabelProps = props.InputLabelProps, inputProps = props.inputProps, InputProps = props.InputProps, inputRef = props.inputRef, label = props.label, _props$multiline = props.multiline, multiline = _props$multiline === void 0 ? false : _props$multiline, name = props.name, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, placeholder = props.placeholder, _props$required = props.required, required = _props$required === void 0 ? false : _props$required, rows = props.rows, rowsMax = props.rowsMax, maxRows = props.maxRows, minRows = props.minRows, _props$select = props.select, select = _props$select === void 0 ? false : _props$select, SelectProps = props.SelectProps, type = props.type, value = props.value, _props$variant = props.variant, variant = _props$variant === void 0 ? "standard" : _props$variant, other = _objectWithoutProperties(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "maxRows", "minRows", "select", "SelectProps", "type", "value", "variant"]);
  if (true) {
    if (select && !children) {
      console.error("Material-UI: `children` must be passed when using the `TextField` component with `select`.");
    }
  }
  var InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    if (label) {
      var _InputLabelProps$requ;
      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = React29.createElement(React29.Fragment, null, label, displayRequired && " *");
    }
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : void 0;
  var inputLabelId = label && id ? "".concat(id, "-label") : void 0;
  var InputComponent = variantComponent[variant];
  var InputElement = React29.createElement(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    rowsMax,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return React29.createElement(FormControl_default, _extends({
    className: clsx_m_default(classes.root, className),
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    ref,
    required,
    color,
    variant
  }, other), label && React29.createElement(InputLabel_default, _extends({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? React29.createElement(Select_default, _extends({
    "aria-describedby": helperTextId,
    id,
    labelId: inputLabelId,
    value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && React29.createElement(FormHelperText_default, _extends({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types24.default.string,
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: import_prop_types24.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types24.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types24.default.object,
  /**
   * @ignore
   */
  className: import_prop_types24.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types24.default.oneOf(["primary", "secondary"]),
  /**
   * The default value of the `input` element.
   */
  defaultValue: import_prop_types24.default.any,
  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: import_prop_types24.default.bool,
  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: import_prop_types24.default.bool,
  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types24.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: import_prop_types24.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types24.default.node,
  /**
   * @ignore
   */
  hiddenLabel: import_prop_types24.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types24.default.string,
  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: import_prop_types24.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types24.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types24.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * The label content.
   */
  label: import_prop_types24.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: import_prop_types24.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]),
  /**
   * Minimum number of rows to display.
   */
  minRows: import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]),
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: import_prop_types24.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types24.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types24.default.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types24.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types24.default.func,
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: import_prop_types24.default.string,
  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: import_prop_types24.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   * @deprecated Use `minRows` instead.
   */
  rows: deprecatedPropType(import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]), "Use `minRows` instead"),
  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: deprecatedPropType(import_prop_types24.default.oneOfType([import_prop_types24.default.number, import_prop_types24.default.string]), "Use `maxRows` instead"),
  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: import_prop_types24.default.bool,
  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: import_prop_types24.default.object,
  /**
   * The size of the text field.
   */
  size: import_prop_types24.default.oneOf(["medium", "small"]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types24.default.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types24.default.any,
  /**
   * The variant to use.
   */
  variant: import_prop_types24.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var TextField_default = withStyles_default(styles29, {
  name: "MuiTextField"
})(TextField);
export {
  TextField_default as default
};
//# sourceMappingURL=@material-ui_core_TextField.js.map
