import {
  Paper_default
} from "./chunk-GYDJD24S.js";
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

// node_modules/@material-ui/core/esm/Card/Card.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: "hidden"
  }
};
var Card = React.forwardRef(function Card2(props, ref) {
  var classes = props.classes, className = props.className, _props$raised = props.raised, raised = _props$raised === void 0 ? false : _props$raised, other = _objectWithoutProperties(props, ["classes", "className", "raised"]);
  return React.createElement(Paper_default, _extends({
    className: clsx_m_default(classes.root, className),
    elevation: raised ? 8 : 1,
    ref
  }, other));
});
true ? Card.propTypes = {
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
   * If `true`, the card will use raised styling.
   */
  raised: import_prop_types.default.bool
} : void 0;
var Card_default = withStyles_default(styles, {
  name: "MuiCard"
})(Card);
export {
  Card_default as default
};
//# sourceMappingURL=@material-ui_core_Card.js.map
