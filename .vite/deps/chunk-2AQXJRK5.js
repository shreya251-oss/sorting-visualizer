import {
  require_react
} from "./chunk-23ZMGCJ2.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@material-ui/core/esm/utils/useControlled.js
var React = __toESM(require_react());
function useControlled(_ref) {
  var controlled = _ref.controlled, defaultProp = _ref.default, name = _ref.name, _ref$state = _ref.state, state = _ref$state === void 0 ? "value" : _ref$state;
  var _React$useRef = React.useRef(controlled !== void 0), isControlled = _React$useRef.current;
  var _React$useState = React.useState(defaultProp), valueState = _React$useState[0], setValue = _React$useState[1];
  var value = isControlled ? controlled : valueState;
  if (true) {
    React.useEffect(function() {
      if (isControlled !== (controlled !== void 0)) {
        console.error(["Material-UI: A component is changing the ".concat(isControlled ? "" : "un", "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? "un" : "", "controlled."), "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled ".concat(name, " ") + "element for the lifetime of the component.", "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [controlled]);
    var _React$useRef2 = React.useRef(defaultProp), defaultValue = _React$useRef2.current;
    React.useEffect(function() {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["Material-UI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  var setValueIfUncontrolled = React.useCallback(function(newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

export {
  useControlled
};
//# sourceMappingURL=chunk-2AQXJRK5.js.map
