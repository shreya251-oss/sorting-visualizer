import {
  _extends,
  _objectWithoutProperties,
  chainPropTypes,
  clsx_m_default,
  require_prop_types,
  withStyles_default
} from "./chunk-LJE4UF3L.js";
import {
  require_react
} from "./chunk-23ZMGCJ2.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@material-ui/core/esm/Paper/Paper.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var styles = function styles2(theme) {
  var elevations = {};
  theme.shadows.forEach(function(shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return _extends({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create("box-shadow")
    },
    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = React.forwardRef(function Paper2(props, ref) {
  var classes = props.classes, className = props.className, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, _props$square = props.square, square = _props$square === void 0 ? false : _props$square, _props$elevation = props.elevation, elevation = _props$elevation === void 0 ? 1 : _props$elevation, _props$variant = props.variant, variant = _props$variant === void 0 ? "elevation" : _props$variant, other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation", "variant"]);
  return React.createElement(Component, _extends({
    className: clsx_m_default(classes.root, className, variant === "outlined" ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref
  }, other));
});
true ? Paper.propTypes = {
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: chainPropTypes(import_prop_types.default.number, function(props) {
    var classes = props.classes, elevation = props.elevation;
    if (classes === void 0) {
      return null;
    }
    if (elevation != null && classes["elevation".concat(elevation)] === void 0) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   */
  square: import_prop_types.default.bool,
  /**
   * The variant to use.
   */
  variant: import_prop_types.default.oneOf(["elevation", "outlined"])
} : void 0;
var Paper_default = withStyles_default(styles, {
  name: "MuiPaper"
})(Paper);

export {
  Paper_default
};
//# sourceMappingURL=chunk-GYDJD24S.js.map
