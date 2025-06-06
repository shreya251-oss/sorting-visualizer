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
  _extends,
  _objectWithoutProperties,
  alpha,
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

// node_modules/@material-ui/core/esm/Button/Button.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var styles = function styles2(theme) {
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.button, {
      boxSizing: "border-box",
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(["background-color", "box-shadow", "border"], {
        duration: theme.transitions.duration.short
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        },
        "&$disabled": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    }),
    /* Styles applied to the span element that wraps the children. */
    label: {
      width: "100%",
      // Ensure the correct width for iOS Safari
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },
    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: "6px 8px"
    },
    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: "5px 15px",
      border: "1px solid ".concat(theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(alpha(theme.palette.primary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(alpha(theme.palette.secondary.main, 0.5)),
      "&:hover": {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },
    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      "&:hover": {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      "&$focusVisible": {
        boxShadow: theme.shadows[6]
      },
      "&:active": {
        boxShadow: theme.shadows[8]
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },
    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none"
      },
      "&$focusVisible": {
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none"
      },
      "&$disabled": {
        boxShadow: "none"
      }
    },
    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit",
      borderColor: "currentColor"
    },
    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: "4px 5px",
      fontSize: theme.typography.pxToRem(13)
    },
    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: "8px 11px",
      fontSize: theme.typography.pxToRem(15)
    },
    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: "3px 9px",
      fontSize: theme.typography.pxToRem(13)
    },
    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: "7px 21px",
      fontSize: theme.typography.pxToRem(15)
    },
    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: "4px 10px",
      fontSize: theme.typography.pxToRem(13)
    },
    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: "8px 22px",
      fontSize: theme.typography.pxToRem(15)
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},
    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},
    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: "100%"
    },
    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
      "&$iconSizeSmall": {
        marginLeft: -2
      }
    },
    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
      "&$iconSizeSmall": {
        marginRight: -2
      }
    },
    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: 18
      }
    },
    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      "& > *:first-child": {
        fontSize: 20
      }
    },
    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: 22
      }
    }
  };
};
var Button = React.forwardRef(function Button2(props, ref) {
  var children = props.children, classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "default" : _props$color, _props$component = props.component, component = _props$component === void 0 ? "button" : _props$component, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$disableElevati = props.disableElevation, disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati, _props$disableFocusRi = props.disableFocusRipple, disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi, endIconProp = props.endIcon, focusVisibleClassName = props.focusVisibleClassName, _props$fullWidth = props.fullWidth, fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, startIconProp = props.startIcon, _props$type = props.type, type = _props$type === void 0 ? "button" : _props$type, _props$variant = props.variant, variant = _props$variant === void 0 ? "text" : _props$variant, other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);
  var startIcon = startIconProp && React.createElement("span", {
    className: clsx_m_default(classes.startIcon, classes["iconSize".concat(capitalize(size))])
  }, startIconProp);
  var endIcon = endIconProp && React.createElement("span", {
    className: clsx_m_default(classes.endIcon, classes["iconSize".concat(capitalize(size))])
  }, endIconProp);
  return React.createElement(ButtonBase_default, _extends({
    className: clsx_m_default(classes.root, classes[variant], className, color === "inherit" ? classes.colorInherit : color !== "default" && classes["".concat(variant).concat(capitalize(color))], size !== "medium" && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_m_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other), React.createElement("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the button.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types.default.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, no elevation is used.
   */
  disableElevation: import_prop_types.default.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: import_prop_types.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: import_prop_types.default.bool,
  /**
   * Element placed after the children.
   */
  endIcon: import_prop_types.default.node,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: import_prop_types.default.string,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: import_prop_types.default.oneOf(["large", "medium", "small"]),
  /**
   * Element placed before the children.
   */
  startIcon: import_prop_types.default.node,
  /**
   * @ignore
   */
  type: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["button", "reset", "submit"]), import_prop_types.default.string]),
  /**
   * The variant to use.
   */
  variant: import_prop_types.default.oneOf(["contained", "outlined", "text"])
} : void 0;
var Button_default = withStyles_default(styles, {
  name: "MuiButton"
})(Button);
export {
  Button_default as default
};
//# sourceMappingURL=@material-ui_core_Button.js.map
