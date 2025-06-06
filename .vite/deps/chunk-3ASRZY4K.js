import {
  require_react
} from "./chunk-23ZMGCJ2.js";
import {
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@material-ui/core/esm/utils/useForkRef.js
var React = __toESM(require_react());

// node_modules/@material-ui/core/esm/utils/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@material-ui/core/esm/utils/useForkRef.js
function useForkRef(refA, refB) {
  return React.useMemo(function() {
    if (refA == null && refB == null) {
      return null;
    }
    return function(refValue) {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// node_modules/@material-ui/core/esm/utils/useEventCallback.js
var React2 = __toESM(require_react());
var useEnhancedEffect = typeof window !== "undefined" ? React2.useLayoutEffect : React2.useEffect;
function useEventCallback(fn) {
  var ref = React2.useRef(fn);
  useEnhancedEffect(function() {
    ref.current = fn;
  });
  return React2.useCallback(function() {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

export {
  setRef,
  useForkRef,
  useEventCallback
};
//# sourceMappingURL=chunk-3ASRZY4K.js.map
