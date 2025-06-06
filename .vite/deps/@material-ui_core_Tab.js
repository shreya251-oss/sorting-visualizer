import {
  ButtonBase_default
} from "./chunk-UOM7BKR5.js";
import "./chunk-TLFT7UJV.js";
import "./chunk-NPKHIS34.js";
import "./chunk-3ASRZY4K.js";
import "./chunk-2LJNSQHW.js";
import {
  capitalize
} from "./chunk-YYFBBRLJ.js";
import {
  _defineProperty,
  _extends,
  _objectWithoutProperties,
  clsx_m_default,
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

// node_modules/@material-ui/core/esm/Tab/Tab.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@material-ui/core/esm/utils/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  var propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== "undefined") {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }
  return null;
}

// node_modules/@material-ui/core/esm/Tab/Tab.js
var styles = function styles2(theme) {
  var _extends2;
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72,
      position: "relative",
      boxSizing: "border-box",
      minHeight: 48,
      flexShrink: 0,
      padding: "6px 12px"
    }, _defineProperty(_extends2, theme.breakpoints.up("sm"), {
      padding: "6px 24px"
    }), _defineProperty(_extends2, "overflow", "hidden"), _defineProperty(_extends2, "whiteSpace", "normal"), _defineProperty(_extends2, "textAlign", "center"), _defineProperty(_extends2, theme.breakpoints.up("sm"), {
      minWidth: 160
    }), _extends2)),
    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      "& $wrapper > *:first-child": {
        marginBottom: 6
      }
    },
    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
      color: "inherit",
      opacity: 0.7,
      "&$selected": {
        opacity: 1
      },
      "&$disabled": {
        opacity: 0.5
      }
    },
    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      "&$selected": {
        color: theme.palette.primary.main
      },
      "&$disabled": {
        color: theme.palette.text.disabled
      }
    },
    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      "&$selected": {
        color: theme.palette.secondary.main
      },
      "&$disabled": {
        color: theme.palette.text.disabled
      }
    },
    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},
    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},
    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    },
    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    },
    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      flexDirection: "column"
    }
  };
};
var Tab = React.forwardRef(function Tab2(props, ref) {
  var classes = props.classes, className = props.className, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, fullWidth = props.fullWidth, icon = props.icon, indicator = props.indicator, label = props.label, onChange = props.onChange, onClick = props.onClick, onFocus = props.onFocus, selected = props.selected, selectionFollowsFocus = props.selectionFollowsFocus, _props$textColor = props.textColor, textColor = _props$textColor === void 0 ? "inherit" : _props$textColor, value = props.value, _props$wrapped = props.wrapped, wrapped = _props$wrapped === void 0 ? false : _props$wrapped, other = _objectWithoutProperties(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);
  var handleClick = function handleClick2(event) {
    if (onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  var handleFocus = function handleFocus2(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return React.createElement(ButtonBase_default, _extends({
    focusRipple: !disableFocusRipple,
    className: clsx_m_default(classes.root, classes["textColor".concat(capitalize(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), React.createElement("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
true ? Tab.propTypes = {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp,
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
   * If `true`, the tab will be disabled.
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: import_prop_types.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: import_prop_types.default.bool,
  /**
   * @ignore
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * The icon element.
   */
  icon: import_prop_types.default.node,
  /**
   * @ignore
   * For server-side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: import_prop_types.default.node,
  /**
   * The label element.
   */
  label: import_prop_types.default.node,
  /**
   * @ignore
   */
  onChange: import_prop_types.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types.default.func,
  /**
   * @ignore
   */
  selected: import_prop_types.default.bool,
  /**
   * @ignore
   */
  selectionFollowsFocus: import_prop_types.default.bool,
  /**
   * @ignore
   */
  textColor: import_prop_types.default.oneOf(["secondary", "primary", "inherit"]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: import_prop_types.default.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped: import_prop_types.default.bool
} : void 0;
var Tab_default = withStyles_default(styles, {
  name: "MuiTab"
})(Tab);
export {
  Tab_default as default
};
//# sourceMappingURL=@material-ui_core_Tab.js.map
