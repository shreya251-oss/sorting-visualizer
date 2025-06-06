import {
  Paper_default
} from "./chunk-GYDJD24S.js";
import {
  capitalize
} from "./chunk-YYFBBRLJ.js";
import {
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

// node_modules/@material-ui/core/esm/AppBar/AppBar.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var styles = function styles2(theme) {
  var backgroundColorDefault = theme.palette.type === "light" ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: "fixed",
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute"
      }
    },
    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: "absolute",
      top: 0,
      left: "auto",
      right: 0
    },
    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: "sticky",
      top: 0,
      left: "auto",
      right: 0
    },
    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: "static"
    },
    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: "relative"
    },
    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: "inherit"
    },
    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: "transparent",
      color: "inherit"
    }
  };
};
var AppBar = React.forwardRef(function AppBar2(props, ref) {
  var classes = props.classes, className = props.className, _props$color = props.color, color = _props$color === void 0 ? "primary" : _props$color, _props$position = props.position, position = _props$position === void 0 ? "fixed" : _props$position, other = _objectWithoutProperties(props, ["classes", "className", "color", "position"]);
  return React.createElement(Paper_default, _extends({
    square: true,
    component: "header",
    elevation: 4,
    className: clsx_m_default(classes.root, classes["position".concat(capitalize(position))], classes["color".concat(capitalize(color))], className, position === "fixed" && "mui-fixed"),
    ref
  }, other));
});
true ? AppBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
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
  color: import_prop_types.default.oneOf(["default", "inherit", "primary", "secondary", "transparent"]),
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: import_prop_types.default.oneOf(["absolute", "fixed", "relative", "static", "sticky"])
} : void 0;
var AppBar_default = withStyles_default(styles, {
  name: "MuiAppBar"
})(AppBar);
export {
  AppBar_default as default
};
//# sourceMappingURL=@material-ui_core_AppBar.js.map
