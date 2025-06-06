import {
  require_hoist_non_react_statics_cjs
} from "./chunk-EU6QCHT3.js";
import {
  require_object_assign,
  require_react
} from "./chunk-23ZMGCJ2.js";
import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol2 = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol2 ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol2 ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol2 ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol2 ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol2 ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol2 ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol2 ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol2 ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol2 ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol2 ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol2 ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol2 ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol2 ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol2 ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol2 ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol2 ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol2 ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@material-ui/utils/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  "node_modules/@material-ui/utils/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/@material-ui/utils/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "node_modules/@material-ui/utils/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// node_modules/@material-ui/utils/esm/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return function() {
      return null;
    };
  }
  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r2 in t)
        ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@material-ui/utils/esm/deepmerge.js
function isPlainObject(item) {
  return item && _typeof(item) === "object" && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function(key) {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// node_modules/@material-ui/utils/esm/elementAcceptingRef.js
var import_prop_types = __toESM(require_prop_types());
function isClassComponent(elementType2) {
  var _elementType$prototyp = elementType2.prototype, prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  var element = props[propName];
  var safePropName = propFullName || propName;
  if (element == null) {
    return null;
  }
  var warningHint;
  var elementType2 = element.type;
  if (typeof elementType2 === "function" && !isClassComponent(elementType2)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + "For more information see https://mui.com/r/caveat-with-refs-guide");
  }
  return null;
}
var elementAcceptingRef = chainPropTypes(import_prop_types.default.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(import_prop_types.default.element.isRequired, acceptingRef);
var elementAcceptingRef_default = elementAcceptingRef;

// node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js
var PropTypes2 = __toESM(require_prop_types());
function isClassComponent2(elementType2) {
  var _elementType$prototyp = elementType2.prototype, prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  var warningHint;
  if (typeof propValue === "function" && !isClassComponent2(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + "For more information see https://mui.com/r/caveat-with-refs-guide");
  }
  return null;
}
var elementTypeAcceptingRef_default = chainPropTypes(PropTypes2.elementType, elementTypeAcceptingRef);

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r2) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r2 || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r2, t) {
  return (r2 = toPropertyKey(r2)) in e ? Object.defineProperty(e, r2, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r2] = t, e;
}

// node_modules/@material-ui/utils/esm/exactProp.js
var specialProperty = "exact-prop: ​";
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return _extends({}, propTypes, _defineProperty({}, specialProperty, function(props) {
    var unsupportedProps = Object.keys(props).filter(function(prop) {
      return !propTypes.hasOwnProperty(prop);
    });
    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function(prop) {
        return "`".concat(prop, "`");
      }).join(", "), ". Please remove them."));
    }
    return null;
  }));
}

// node_modules/@material-ui/utils/esm/getDisplayName.js
var import_react_is = __toESM(require_react_is2());
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || "";
}
function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (_typeof(Component) === "object") {
    switch (Component.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}

// node_modules/@material-ui/utils/esm/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  var propValue = props[propName];
  var safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
  }
  return null;
}

// node_modules/@material-ui/utils/esm/ponyfillGlobal.js
var ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();

// node_modules/@material-ui/utils/esm/refType.js
var import_prop_types2 = __toESM(require_prop_types());
var refType = import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]);
var refType_default = refType;

// node_modules/@material-ui/core/esm/styles/colorManipulator.js
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color2) {
  color2 = color2.substr(1);
  var re = new RegExp(".{1,".concat(color2.length >= 6 ? 2 : 1, "}"), "g");
  var colors = color2.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(function(n) {
      return n + n;
    });
  }
  return colors ? "rgb".concat(colors.length === 4 ? "a" : "", "(").concat(colors.map(function(n, index2) {
    return index2 < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
  }).join(", "), ")") : "";
}
function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
function rgbToHex(color2) {
  if (color2.indexOf("#") === 0) {
    return color2;
  }
  var _decomposeColor = decomposeColor(color2), values2 = _decomposeColor.values;
  return "#".concat(values2.map(function(n) {
    return intToHex(n);
  }).join(""));
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  var _color = color2, values2 = _color.values;
  var h = values2[0];
  var s = values2[1] / 100;
  var l = values2[2] / 100;
  var a = s * Math.min(l, 1 - l);
  var f = function f2(n) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  var type = "rgb";
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  var marker = color2.indexOf("(");
  var type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla"].indexOf(type) === -1) {
    throw new Error(true ? "Material-UI: Unsupported `".concat(color2, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : formatMuiErrorMessage(3, color2));
  }
  var values2 = color2.substring(marker + 1, color2.length - 1).split(",");
  values2 = values2.map(function(value) {
    return parseFloat(value);
  });
  return {
    type,
    values: values2
  };
}
function recomposeColor(color2) {
  var type = color2.type;
  var values2 = color2.values;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map(function(n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = "".concat(values2[1], "%");
    values2[2] = "".concat(values2[2], "%");
  }
  return "".concat(type, "(").concat(values2.join(", "), ")");
}
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  var rgb = color2.type === "hsl" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map(function(val) {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function emphasize(color2) {
  var coefficient = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.15;
  return getLuminance(color2) > 0.5 ? darken(color2, coefficient) : lighten(color2, coefficient);
}
var warnedOnce = false;
function fade(color2, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(["Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.", "", "You should use `import { alpha } from '@material-ui/core/styles'`"].join("\n"));
    }
  }
  return alpha(color2, value);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clamp(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  color2.values[3] = value;
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clamp(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r2, e) {
  if (null == r2)
    return {};
  var t = {};
  for (var n in r2)
    if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n))
        continue;
      t[n] = r2[n];
    }
  return t;
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
  if (null == e)
    return {};
  var o, r2, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r2 = 0; r2 < n.length; r2++)
      o = n[r2], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// node_modules/@material-ui/core/esm/styles/transitions.js
var easing = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
var transitions_default = {
  easing,
  duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["all"];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options$duration = options.duration, durationOption = _options$duration === void 0 ? duration.standard : _options$duration, _options$easing = options.easing, easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing, _options$delay = options.delay, delay = _options$delay === void 0 ? 0 : _options$delay, other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);
    if (true) {
      var isString = function isString2(value) {
        return typeof value === "string";
      };
      var isNumber = function isNumber2(value) {
        return !isNaN(parseFloat(value));
      };
      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error('Material-UI: Argument "duration" must be a number or a string but found '.concat(durationOption, "."));
      }
      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }
      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(","), "]."));
      }
    }
    return (Array.isArray(props) ? props : [props]).map(function(animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === "string" ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === "string" ? delay : formatMs(delay));
    }).join(",");
  },
  getAutoHeightDuration: function getAutoHeightDuration(height2) {
    if (!height2) {
      return 0;
    }
    var constant = height2 / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};

// node_modules/@material-ui/core/esm/styles/createBreakpoints.js
var keys = ["xs", "sm", "md", "lg", "xl"];
function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values, values2 = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values, _breakpoints$unit = breakpoints.unit, unit = _breakpoints$unit === void 0 ? "px" : _breakpoints$unit, _breakpoints$step = breakpoints.step, step = _breakpoints$step === void 0 ? 5 : _breakpoints$step, other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);
  function up2(key) {
    var value = typeof values2[key] === "number" ? values2[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }
  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values2[keys[endIndex]];
    if (endIndex === keys.length) {
      return up2("xs");
    }
    var value = typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }
  function between(start, end) {
    var endIndex = keys.indexOf(end);
    if (endIndex === keys.length - 1) {
      return up2(start);
    }
    return "@media (min-width:".concat(typeof values2[start] === "number" ? values2[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values2[keys[endIndex + 1]] === "number" ? values2[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }
  function only(key) {
    return between(key, key);
  }
  var warnedOnce4 = false;
  function width2(key) {
    if (true) {
      if (!warnedOnce4) {
        warnedOnce4 = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", "Use the `theme.breakpoints.values` instead."].join("\n"));
      }
    }
    return values2[key];
  }
  return _extends({
    keys,
    values: values2,
    up: up2,
    down,
    between,
    only,
    width: width2
  }, other);
}

// node_modules/@material-ui/core/esm/styles/createMixins.js
function createMixins(breakpoints, spacing2, mixins) {
  var _toolbar;
  return _extends({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      console.warn(["Material-UI: theme.mixins.gutters() is deprecated.", "You can use the source of the mixin directly:", "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n"));
      return _extends({
        paddingLeft: spacing2(2),
        paddingRight: spacing2(2)
      }, styles, _defineProperty({}, breakpoints.up("sm"), _extends({
        paddingLeft: spacing2(3),
        paddingRight: spacing2(3)
      }, styles[breakpoints.up("sm")])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, _defineProperty(_toolbar, "".concat(breakpoints.up("xs"), " and (orientation: landscape)"), {
      minHeight: 48
    }), _defineProperty(_toolbar, breakpoints.up("sm"), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

// node_modules/@material-ui/core/esm/colors/common.js
var common = {
  black: "#000",
  white: "#fff"
};
var common_default = common;

// node_modules/@material-ui/core/esm/colors/grey.js
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#d5d5d5",
  A200: "#aaaaaa",
  A400: "#303030",
  A700: "#616161"
};
var grey_default = grey;

// node_modules/@material-ui/core/esm/colors/indigo.js
var indigo = {
  50: "#e8eaf6",
  100: "#c5cae9",
  200: "#9fa8da",
  300: "#7986cb",
  400: "#5c6bc0",
  500: "#3f51b5",
  600: "#3949ab",
  700: "#303f9f",
  800: "#283593",
  900: "#1a237e",
  A100: "#8c9eff",
  A200: "#536dfe",
  A400: "#3d5afe",
  A700: "#304ffe"
};
var indigo_default = indigo;

// node_modules/@material-ui/core/esm/colors/pink.js
var pink = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
  A100: "#ff80ab",
  A200: "#ff4081",
  A400: "#f50057",
  A700: "#c51162"
};
var pink_default = pink;

// node_modules/@material-ui/core/esm/colors/red.js
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
var red_default = red;

// node_modules/@material-ui/core/esm/colors/orange.js
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
var orange_default = orange;

// node_modules/@material-ui/core/esm/colors/blue.js
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
var blue_default = blue;

// node_modules/@material-ui/core/esm/colors/green.js
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
var green_default = green;

// node_modules/@material-ui/core/esm/styles/createPalette.js
var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.54)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)",
    // Text hints.
    hint: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common_default.white,
    default: grey_default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common_default.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    hint: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: grey_default[800],
    default: "#303030"
  },
  action: {
    active: common_default.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function createPalette(palette2) {
  var _palette$primary = palette2.primary, primary = _palette$primary === void 0 ? {
    light: indigo_default[300],
    main: indigo_default[500],
    dark: indigo_default[700]
  } : _palette$primary, _palette$secondary = palette2.secondary, secondary = _palette$secondary === void 0 ? {
    light: pink_default.A200,
    main: pink_default.A400,
    dark: pink_default.A700
  } : _palette$secondary, _palette$error = palette2.error, error = _palette$error === void 0 ? {
    light: red_default[300],
    main: red_default[500],
    dark: red_default[700]
  } : _palette$error, _palette$warning = palette2.warning, warning2 = _palette$warning === void 0 ? {
    light: orange_default[300],
    main: orange_default[500],
    dark: orange_default[700]
  } : _palette$warning, _palette$info = palette2.info, info = _palette$info === void 0 ? {
    light: blue_default[300],
    main: blue_default[500],
    dark: blue_default[700]
  } : _palette$info, _palette$success = palette2.success, success = _palette$success === void 0 ? {
    light: green_default[300],
    main: green_default[500],
    dark: green_default[700]
  } : _palette$success, _palette$type = palette2.type, type = _palette$type === void 0 ? "light" : _palette$type, _palette$contrastThre = palette2.contrastThreshold, contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre, _palette$tonalOffset = palette2.tonalOffset, tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset, other = _objectWithoutProperties(palette2, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]);
  function getContrastText(background) {
    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (true) {
      var contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  var augmentColor = function augmentColor2(color2) {
    var mainShade = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 700;
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.main) {
      throw new Error(true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : formatMuiErrorMessage(4, mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color2.main), '` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport { green } from "@material-ui/core/colors";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });') : formatMuiErrorMessage(5, JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  var types = {
    dark,
    light
  };
  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }
  var paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: common_default,
    // The palette type, can be light or dark.
    type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, "A400", "A200", "A700"),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning2),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: grey_default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

// node_modules/@material-ui/core/esm/styles/createTypography.js
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var warnedOnce2 = false;
function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce2) {
      console.warn(["Material-UI: The `theme.typography.round` helper is deprecated.", "Head to https://mui.com/r/migration-v4/#theme for a migration path."].join("\n"));
      warnedOnce2 = true;
    }
  }
  return round(value);
}
var caseAllCaps = {
  textTransform: "uppercase"
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette2, typography2) {
  var _ref = typeof typography2 === "function" ? typography2(palette2) : typography2, _ref$fontFamily = _ref.fontFamily, fontFamily2 = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily, _ref$fontSize = _ref.fontSize, fontSize2 = _ref$fontSize === void 0 ? 14 : _ref$fontSize, _ref$fontWeightLight = _ref.fontWeightLight, fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight, _ref$fontWeightRegula = _ref.fontWeightRegular, fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula, _ref$fontWeightMedium = _ref.fontWeightMedium, fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium, _ref$fontWeightBold = _ref.fontWeightBold, fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold, _ref$htmlFontSize = _ref.htmlFontSize, htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize, allVariants = _ref.allVariants, pxToRem2 = _ref.pxToRem, other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);
  if (true) {
    if (typeof fontSize2 !== "number") {
      console.error("Material-UI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize !== "number") {
      console.error("Material-UI: `htmlFontSize` is required to be a number.");
    }
  }
  var coef = fontSize2 / 14;
  var pxToRem = pxToRem2 || function(size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };
  var buildVariant = function buildVariant2(fontWeight2, size, lineHeight2, letterSpacing2, casing) {
    return _extends({
      fontFamily: fontFamily2,
      fontWeight: fontWeight2,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight2
    }, fontFamily2 === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing2 / size), "em")
    } : {}, casing, allVariants);
  };
  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily2,
    fontSize: fontSize2,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
    // No need to clone deep
  });
}

// node_modules/@material-ui/core/esm/styles/shadows.js
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;
function createShadow() {
  return ["".concat(arguments.length <= 0 ? void 0 : arguments[0], "px ").concat(arguments.length <= 1 ? void 0 : arguments[1], "px ").concat(arguments.length <= 2 ? void 0 : arguments[2], "px ").concat(arguments.length <= 3 ? void 0 : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? void 0 : arguments[4], "px ").concat(arguments.length <= 5 ? void 0 : arguments[5], "px ").concat(arguments.length <= 6 ? void 0 : arguments[6], "px ").concat(arguments.length <= 7 ? void 0 : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? void 0 : arguments[8], "px ").concat(arguments.length <= 9 ? void 0 : arguments[9], "px ").concat(arguments.length <= 10 ? void 0 : arguments[10], "px ").concat(arguments.length <= 11 ? void 0 : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows_default = shadows;

// node_modules/@material-ui/core/esm/styles/shape.js
var shape = {
  borderRadius: 4
};
var shape_default = shape;

// node_modules/@material-ui/system/esm/responsivePropType.js
var import_prop_types3 = __toESM(require_prop_types());
var responsivePropType = true ? import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string, import_prop_types3.default.object, import_prop_types3.default.array]) : {};
var responsivePropType_default = responsivePropType;

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e = 0, n = Array(a); e < a; e++)
    n[e] = r2[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2))
    return _arrayLikeToArray(r2);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"])
    return Array.from(r2);
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r2, a) {
  if (r2) {
    if ("string" == typeof r2)
      return _arrayLikeToArray(r2, a);
    var t = {}.toString.call(r2).slice(8, -1);
    return "Object" === t && r2.constructor && (t = r2.constructor.name), "Map" === t || "Set" === t ? Array.from(r2) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r2, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}

// node_modules/@material-ui/system/esm/breakpoints.js
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@material-ui/system/esm/merge.js
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
    // No need to clone deep, it's way faster.
  });
}
var merge_default = merge;

// node_modules/@material-ui/system/esm/breakpoints.js
var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (true) {
    if (!props.theme) {
      console.error("Material-UI: You are calling a style function without a theme value.");
    }
  }
  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function(acc, item, index2) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index2])] = styleFromPropValue(propValue[index2]);
      return acc;
    }, {});
  }
  if (_typeof(propValue) === "object") {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce(function(acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }
  var output = styleFromPropValue(propValue);
  return output;
}

// node_modules/@material-ui/system/esm/style.js
function getPath(obj, path) {
  if (!path || typeof path !== "string") {
    return null;
  }
  return path.split(".").reduce(function(acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}
function style(options) {
  var prop = options.prop, _options$cssProperty = options.cssProperty, cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty, themeKey = options.themeKey, transform4 = options.transform;
  var fn = function fn2(props) {
    if (props[prop] == null) {
      return null;
    }
    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};
    var styleFromPropValue = function styleFromPropValue2(propValueFinal) {
      var value;
      if (typeof themeMapping === "function") {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;
        if (transform4) {
          value = transform4(value);
        }
      }
      if (cssProperty === false) {
        return value;
      }
      return _defineProperty({}, cssProperty, value);
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = true ? _defineProperty({}, prop, responsivePropType_default) : {};
  fn.filterProps = [prop];
  return fn;
}
var style_default = style;

// node_modules/@material-ui/system/esm/compose.js
function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }
  var fn = function fn2(props) {
    return styles.reduce(function(acc, style2) {
      var output = style2(props);
      if (output) {
        return merge_default(acc, output);
      }
      return acc;
    }, {});
  };
  fn.propTypes = true ? styles.reduce(function(acc, style2) {
    return _extends(acc, style2.propTypes);
  }, {}) : {};
  fn.filterProps = styles.reduce(function(acc, style2) {
    return acc.concat(style2.filterProps);
  }, []);
  return fn;
}
var compose_default = compose;

// node_modules/@material-ui/system/esm/borders.js
function getBorder(value) {
  if (typeof value !== "number") {
    return value;
  }
  return "".concat(value, "px solid");
}
var border = style_default({
  prop: "border",
  themeKey: "borders",
  transform: getBorder
});
var borderTop = style_default({
  prop: "borderTop",
  themeKey: "borders",
  transform: getBorder
});
var borderRight = style_default({
  prop: "borderRight",
  themeKey: "borders",
  transform: getBorder
});
var borderBottom = style_default({
  prop: "borderBottom",
  themeKey: "borders",
  transform: getBorder
});
var borderLeft = style_default({
  prop: "borderLeft",
  themeKey: "borders",
  transform: getBorder
});
var borderColor = style_default({
  prop: "borderColor",
  themeKey: "palette"
});
var borderRadius = style_default({
  prop: "borderRadius",
  themeKey: "shape"
});
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);

// node_modules/@material-ui/system/esm/styleFunctionSx.js
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@material-ui/system/esm/display.js
var displayPrint = style_default({
  prop: "displayPrint",
  cssProperty: false,
  transform: function transform(value) {
    return {
      "@media print": {
        display: value
      }
    };
  }
});
var displayRaw = style_default({
  prop: "display"
});
var overflow = style_default({
  prop: "overflow"
});
var textOverflow = style_default({
  prop: "textOverflow"
});
var visibility = style_default({
  prop: "visibility"
});
var whiteSpace = style_default({
  prop: "whiteSpace"
});
var display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

// node_modules/@material-ui/system/esm/flexbox.js
var flexBasis = style_default({
  prop: "flexBasis"
});
var flexDirection = style_default({
  prop: "flexDirection"
});
var flexWrap = style_default({
  prop: "flexWrap"
});
var justifyContent = style_default({
  prop: "justifyContent"
});
var alignItems = style_default({
  prop: "alignItems"
});
var alignContent = style_default({
  prop: "alignContent"
});
var order = style_default({
  prop: "order"
});
var flex = style_default({
  prop: "flex"
});
var flexGrow = style_default({
  prop: "flexGrow"
});
var flexShrink = style_default({
  prop: "flexShrink"
});
var alignSelf = style_default({
  prop: "alignSelf"
});
var justifyItems = style_default({
  prop: "justifyItems"
});
var justifySelf = style_default({
  prop: "justifySelf"
});
var flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

// node_modules/@material-ui/system/esm/grid.js
var gridGap = style_default({
  prop: "gridGap"
});
var gridColumnGap = style_default({
  prop: "gridColumnGap"
});
var gridRowGap = style_default({
  prop: "gridRowGap"
});
var gridColumn = style_default({
  prop: "gridColumn"
});
var gridRow = style_default({
  prop: "gridRow"
});
var gridAutoFlow = style_default({
  prop: "gridAutoFlow"
});
var gridAutoColumns = style_default({
  prop: "gridAutoColumns"
});
var gridAutoRows = style_default({
  prop: "gridAutoRows"
});
var gridTemplateColumns = style_default({
  prop: "gridTemplateColumns"
});
var gridTemplateRows = style_default({
  prop: "gridTemplateRows"
});
var gridTemplateAreas = style_default({
  prop: "gridTemplateAreas"
});
var gridArea = style_default({
  prop: "gridArea"
});
var grid = compose_default(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

// node_modules/@material-ui/system/esm/palette.js
var color = style_default({
  prop: "color",
  themeKey: "palette"
});
var bgcolor = style_default({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette"
});
var palette = compose_default(color, bgcolor);

// node_modules/@material-ui/system/esm/positions.js
var position = style_default({
  prop: "position"
});
var zIndex = style_default({
  prop: "zIndex",
  themeKey: "zIndex"
});
var top = style_default({
  prop: "top"
});
var right = style_default({
  prop: "right"
});
var bottom = style_default({
  prop: "bottom"
});
var left = style_default({
  prop: "left"
});
var positions_default = compose_default(position, zIndex, top, right, bottom, left);

// node_modules/@material-ui/system/esm/shadows.js
var boxShadow = style_default({
  prop: "boxShadow",
  themeKey: "shadows"
});

// node_modules/@material-ui/system/esm/sizing.js
function transform2(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}
var width = style_default({
  prop: "width",
  transform: transform2
});
var maxWidth = style_default({
  prop: "maxWidth",
  transform: transform2
});
var minWidth = style_default({
  prop: "minWidth",
  transform: transform2
});
var height = style_default({
  prop: "height",
  transform: transform2
});
var maxHeight = style_default({
  prop: "maxHeight",
  transform: transform2
});
var minHeight = style_default({
  prop: "minHeight",
  transform: transform2
});
var sizeWidth = style_default({
  prop: "size",
  cssProperty: "width",
  transform: transform2
});
var sizeHeight = style_default({
  prop: "size",
  cssProperty: "height",
  transform: transform2
});
var boxSizing = style_default({
  prop: "boxSizing"
});
var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

// node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r2) {
  if (Array.isArray(r2))
    return r2;
}

// node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r2, l) {
  var t = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r2)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r3) {
      o = true, n = r3;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r2, e) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e) || _unsupportedIterableToArray(r2, e) || _nonIterableRest();
}

// node_modules/@material-ui/system/esm/memoize.js
function memoize(fn) {
  var cache3 = {};
  return function(arg) {
    if (cache3[arg] === void 0) {
      cache3[arg] = fn(arg);
    }
    return cache3[arg];
  };
}

// node_modules/@material-ui/system/esm/spacing.js
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties = memoize(function(prop) {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  var _prop$split = prop.split(""), _prop$split2 = _slicedToArray(_prop$split, 2), a = _prop$split2[0], b = _prop$split2[1];
  var property = properties[a];
  var direction = directions[b] || "";
  return Array.isArray(direction) ? direction.map(function(dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY"];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;
  if (typeof themeSpacing === "number") {
    return function(abs) {
      if (true) {
        if (typeof abs !== "number") {
          console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs, "."));
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return function(abs) {
      if (true) {
        if (abs > themeSpacing.length - 1) {
          console.error(["Material-UI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join("\n"));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (true) {
    console.error(["Material-UI: The `theme.spacing` value (".concat(themeSpacing, ") is invalid."), "It should be a number, an array or a function."].join("\n"));
  }
  return function() {
    return void 0;
  };
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  var abs = Math.abs(propValue);
  var transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return "-".concat(transformed);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return function(propValue) {
    return cssProperties.reduce(function(acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}
function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function(prop) {
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }
    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }).reduce(merge_default, {});
}
spacing.propTypes = true ? spacingKeys.reduce(function(obj, key) {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;

// node_modules/@material-ui/system/esm/typography.js
var fontFamily = style_default({
  prop: "fontFamily",
  themeKey: "typography"
});
var fontSize = style_default({
  prop: "fontSize",
  themeKey: "typography"
});
var fontStyle = style_default({
  prop: "fontStyle",
  themeKey: "typography"
});
var fontWeight = style_default({
  prop: "fontWeight",
  themeKey: "typography"
});
var letterSpacing = style_default({
  prop: "letterSpacing"
});
var lineHeight = style_default({
  prop: "lineHeight"
});
var textAlign = style_default({
  prop: "textAlign"
});
var typography = compose_default(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

// node_modules/@material-ui/core/esm/styles/createSpacing.js
var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 8;
  if (spacingInput.mui) {
    return spacingInput;
  }
  var transform4 = createUnarySpacing({
    spacing: spacingInput
  });
  var spacing2 = function spacing3() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }
    if (args.length === 0) {
      return transform4(1);
    }
    if (args.length === 1) {
      return transform4(args[0]);
    }
    return args.map(function(argument) {
      if (typeof argument === "string") {
        return argument;
      }
      var output = transform4(argument);
      return typeof output === "number" ? "".concat(output, "px") : output;
    }).join(" ");
  };
  Object.defineProperty(spacing2, "unit", {
    get: function get2() {
      if (true) {
        if (!warnOnce || false) {
          console.error(["Material-UI: theme.spacing.unit usage has been deprecated.", "It will be removed in v5.", "You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.", "", "You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother."].join("\n"));
        }
        warnOnce = true;
      }
      return spacingInput;
    }
  });
  spacing2.mui = true;
  return spacing2;
}

// node_modules/@material-ui/core/esm/styles/zIndex.js
var zIndex2 = {
  mobileStepper: 1e3,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex_default = zIndex2;

// node_modules/@material-ui/core/esm/styles/createTheme.js
function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints, breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints, _options$mixins = options.mixins, mixinsInput = _options$mixins === void 0 ? {} : _options$mixins, _options$palette = options.palette, paletteInput = _options$palette === void 0 ? {} : _options$palette, spacingInput = options.spacing, _options$typography = options.typography, typographyInput = _options$typography === void 0 ? {} : _options$typography, other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);
  var palette2 = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing2 = createSpacing(spacingInput);
  var muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    mixins: createMixins(breakpoints, spacing2, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette2,
    props: {},
    // Provide default props
    shadows: shadows_default,
    typography: createTypography(palette2, typographyInput),
    spacing: spacing2,
    shape: shape_default,
    transitions: transitions_default,
    zIndex: zIndex_default
  }, other);
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  muiTheme = args.reduce(function(acc, argument) {
    return deepmerge(acc, argument);
  }, muiTheme);
  if (true) {
    var pseudoClasses2 = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
    var traverse = function traverse2(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
      var key;
      for (key in node) {
        var child = node[key];
        if (depth === 1) {
          if (key.indexOf("Mui") === 0 && child) {
            traverse2(child, key, depth + 1);
          }
        } else if (pseudoClasses2.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), "You can not override it like this: ", JSON.stringify(node, null, 2), "", "Instead, you need to use the $ruleName syntax:", JSON.stringify({
              root: _defineProperty({}, "&$".concat(key), child)
            }, null, 2), "", "https://mui.com/r/pseudo-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    traverse(muiTheme.overrides);
  }
  return muiTheme;
}
var warnedOnce3 = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce3) {
      warnedOnce3 = true;
      console.error(["Material-UI: the createMuiTheme function was renamed to createTheme.", "", "You should use `import { createTheme } from '@material-ui/core/styles'`"].join("\n"));
    }
  }
  return createTheme.apply(void 0, arguments);
}
var createTheme_default = createTheme;

// node_modules/@material-ui/styles/esm/ThemeProvider/nested.js
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";

// node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js
var pseudoClasses = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal, disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba, _options$productionPr = options.productionPrefix, productionPrefix = _options$productionPr === void 0 ? "jss" : _options$productionPr, _options$seed = options.seed, seed = _options$seed === void 0 ? "" : _options$seed;
  var seedPrefix = seed === "" ? "" : "".concat(seed, "-");
  var ruleCounter = 0;
  var getNextCounterId = function getNextCounterId2() {
    ruleCounter += 1;
    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(["Material-UI: You might have a memory leak.", "The ruleCounter is not supposed to grow that much."].join(""));
      }
    }
    return ruleCounter;
  };
  return function(rule, styleSheet) {
    var name = styleSheet.options.name;
    if (name && name.indexOf("Mui") === 0 && !styleSheet.options.link && !disableGlobal) {
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }
      var prefix2 = "".concat(seedPrefix).concat(name, "-").concat(rule.key);
      if (!styleSheet.options.theme[nested_default] || seed !== "") {
        return prefix2;
      }
      return "".concat(prefix2, "-").concat(getNextCounterId());
    }
    if (false) {
      return "".concat(seedPrefix).concat(productionPrefix).concat(getNextCounterId());
    }
    var suffix = "".concat(rule.key, "-").concat(getNextCounterId());
    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }
    return "".concat(seedPrefix).concat(suffix);
  };
}

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/is-in-browser/dist/module.js
var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof2(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof2(document)) === "object" && document.nodeType === 9;
var module_default = isBrowser;

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r2) {
  for (var t = 0; t < r2.length; t++) {
    var o = r2[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r2, t) {
  return r2 && _defineProperties(e.prototype, r2), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/jss/dist/jss.esm.js
var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style2) {
  if (style2 == null || typeof style2 !== "object")
    return style2;
  if (Array.isArray(style2))
    return style2.map(cloneStyle);
  if (style2.constructor !== plainObjectConstrurctor)
    return style2;
  var newStyle = {};
  for (var name in style2) {
    newStyle[name] = cloneStyle(style2[name]);
  }
  return newStyle;
}
function createRule(name, decl, options) {
  if (name === void 0) {
    name = "unnamed";
  }
  var jss2 = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss2.plugins.onCreateRule(name, declCopy, options);
  if (rule)
    return rule;
  if (name[0] === "@") {
    true ? tiny_warning_esm_default(false, "[JSS] Unknown rule " + name) : void 0;
  }
  return null;
}
var join = function join2(value, by) {
  var result = "";
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "!important")
      break;
    if (result)
      result += by;
    result += value[i];
  }
  return result;
};
var toCssValue = function toCssValue2(value) {
  if (!Array.isArray(value))
    return value;
  var cssValue = "";
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === "!important")
        break;
      if (cssValue)
        cssValue += ", ";
      cssValue += join(value[i], " ");
    }
  } else
    cssValue = join(value, ", ");
  if (value[value.length - 1] === "!important") {
    cssValue += " !important";
  }
  return cssValue;
};
function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: "",
      space: ""
    };
  }
  return {
    linebreak: "\n",
    space: " "
  };
}
function indentStr(str, indent) {
  var result = "";
  for (var index2 = 0; index2 < indent; index2++) {
    result += "  ";
  }
  return result + str;
}
function toCss(selector, style2, options) {
  if (options === void 0) {
    options = {};
  }
  var result = "";
  if (!style2)
    return result;
  var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style2.fallbacks;
  if (options.format === false) {
    indent = -Infinity;
  }
  var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
  if (selector)
    indent++;
  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index2 = 0; index2 < fallbacks.length; index2++) {
        var fallback = fallbacks[index2];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            if (result)
              result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          if (result)
            result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }
  for (var _prop2 in style2) {
    var _value2 = style2[_prop2];
    if (_value2 != null && _prop2 !== "fallbacks") {
      if (result)
        result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  }
  if (!result && !options.allowEmpty)
    return result;
  if (!selector)
    return result;
  indent--;
  if (result)
    result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr("}", indent);
}
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
var escape = function(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
};
var BaseStyleRule = function() {
  function BaseStyleRule2(key, style2, options) {
    this.type = "style";
    this.isProcessed = false;
    var sheet = options.sheet, Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style2;
    if (sheet)
      this.renderer = sheet.renderer;
    else if (Renderer)
      this.renderer = new Renderer();
  }
  var _proto = BaseStyleRule2.prototype;
  _proto.prop = function prop(name, value, options) {
    if (value === void 0)
      return this.style[name];
    var force = options ? options.force : false;
    if (!force && this.style[name] === value)
      return this;
    var newValue = value;
    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }
    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style;
    if (isEmpty && !isDefined && !force)
      return this;
    var remove = isEmpty && isDefined;
    if (remove)
      delete this.style[name];
    else
      this.style[name] = newValue;
    if (this.renderable && this.renderer) {
      if (remove)
        this.renderer.removeProperty(this.renderable, name);
      else
        this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }
    var sheet = this.options.sheet;
    if (sheet && sheet.attached) {
      true ? tiny_warning_esm_default(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
    }
    return this;
  };
  return BaseStyleRule2;
}();
var StyleRule = function(_BaseStyleRule) {
  _inheritsLoose(StyleRule2, _BaseStyleRule);
  function StyleRule2(key, style2, options) {
    var _this;
    _this = _BaseStyleRule.call(this, key, style2, options) || this;
    var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }
    return _this;
  }
  var _proto2 = StyleRule2.prototype;
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;
    if (renderer) {
      var json = this.toJSON();
      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }
    return this;
  };
  _proto2.toJSON = function toJSON() {
    var json = {};
    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== "object")
        json[prop] = value;
      else if (Array.isArray(value))
        json[prop] = toCssValue(value);
    }
    return json;
  };
  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };
  _createClass(StyleRule2, [{
    key: "selector",
    set: function set2(selector) {
      if (selector === this.selectorText)
        return;
      this.selectorText = selector;
      var renderer = this.renderer, renderable = this.renderable;
      if (!renderable || !renderer)
        return;
      var hasChanged = renderer.setSelector(renderable, selector);
      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    },
    get: function get2() {
      return this.selectorText;
    }
  }]);
  return StyleRule2;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style2, options) {
    if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
      return null;
    }
    return new StyleRule(key, style2, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
var ConditionalRule = function() {
  function ConditionalRule2(key, styles, options) {
    this.type = "conditional";
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : "unknown";
    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }
    this.rules.process();
  }
  var _proto = ConditionalRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.addRule = function addRule(name, style2, options) {
    var rule = this.rules.add(name, style2, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style2, options) {
    var newRule = this.rules.replace(name, style2, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions.indent;
    if (options.children == null)
      options.children = defaultToStringOptions.children;
    if (options.children === false) {
      return this.query + " {}";
    }
    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
  };
  return ConditionalRule2;
}();
var keyRegExp = /@container|@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule2(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
var KeyframesRule = function() {
  function KeyframesRule2(key, frames, options) {
    this.type = "keyframes";
    this.at = "@keyframes";
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);
    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = "noname";
      true ? tiny_warning_esm_default(false, "[JSS] Bad keyframes name " + key) : void 0;
    }
    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }
    this.rules.process();
  }
  var _proto = KeyframesRule2.prototype;
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null)
      options.indent = defaultToStringOptions$1.indent;
    if (options.children == null)
      options.children = defaultToStringOptions$1.children;
    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }
    var children = this.rules.toString(options);
    if (children)
      children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };
  return KeyframesRule2;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;
var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
  if (typeof val === "string") {
    return val.replace(refRegExp, function(match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }
      true ? tiny_warning_esm_default(false, '[JSS] Referenced keyframes rule "' + name + '" is not defined.') : void 0;
      return match;
    });
  }
  return val;
};
var replaceRef = function replaceRef2(style2, prop, keyframes) {
  var value = style2[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);
  if (refKeyframe !== value) {
    style2[prop] = refKeyframe;
  }
};
var pluginKeyframesRule = {
  onCreateRule: function onCreateRule3(key, frames, options) {
    return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style2, rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return style2;
    if ("animation-name" in style2)
      replaceRef(style2, "animation-name", sheet.keyframes);
    if ("animation" in style2)
      replaceRef(style2, "animation", sheet.keyframes);
    return style2;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;
    if (!sheet) {
      return val;
    }
    switch (prop) {
      case "animation":
        return findReferencedKeyframe(val, sheet.keyframes);
      case "animation-name":
        return findReferencedKeyframe(val, sheet.keyframes);
      default:
        return val;
    }
  }
};
var KeyframeRule = function(_BaseStyleRule) {
  _inheritsLoose(KeyframeRule2, _BaseStyleRule);
  function KeyframeRule2() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }
  var _proto = KeyframeRule2.prototype;
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };
  return KeyframeRule2;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule4(key, style2, options) {
    if (options.parent && options.parent.type === "keyframes") {
      return new KeyframeRule(key, style2, options);
    }
    return null;
  }
};
var FontFaceRule = function() {
  function FontFaceRule2(key, style2, options) {
    this.type = "font-face";
    this.at = "@font-face";
    this.isProcessed = false;
    this.key = key;
    this.style = style2;
    this.options = options;
  }
  var _proto = FontFaceRule2.prototype;
  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (Array.isArray(this.style)) {
      var str = "";
      for (var index2 = 0; index2 < this.style.length; index2++) {
        str += toCss(this.at, this.style[index2]);
        if (this.style[index2 + 1])
          str += linebreak;
      }
      return str;
    }
    return toCss(this.at, this.style, options);
  };
  return FontFaceRule2;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule5(key, style2, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style2, options) : null;
  }
};
var ViewportRule = function() {
  function ViewportRule2(key, style2, options) {
    this.type = "viewport";
    this.at = "@viewport";
    this.isProcessed = false;
    this.key = key;
    this.style = style2;
    this.options = options;
  }
  var _proto = ViewportRule2.prototype;
  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };
  return ViewportRule2;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule6(key, style2, options) {
    return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style2, options) : null;
  }
};
var SimpleRule = function() {
  function SimpleRule2(key, value, options) {
    this.type = "simple";
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  var _proto = SimpleRule2.prototype;
  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = "";
      for (var index2 = 0; index2 < this.value.length; index2++) {
        str += this.key + " " + this.value[index2] + ";";
        if (this.value[index2 + 1])
          str += "\n";
      }
      return str;
    }
    return this.key + " " + this.value + ";";
  };
  return SimpleRule2;
}();
var keysMap = {
  "@charset": true,
  "@import": true,
  "@namespace": true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule7(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */
};
var RuleList = function() {
  function RuleList2(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  var _proto = RuleList2.prototype;
  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss2 = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
    var options = _extends({
      classes: this.classes,
      parent,
      sheet,
      jss: jss2,
      Renderer,
      generateId,
      scoped,
      name,
      keyframes: this.keyframes,
      selector: void 0
    }, ruleOptions);
    var key = name;
    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    }
    this.raw[key] = decl;
    if (key in this.classes) {
      options.selector = "." + escape(this.classes[key]);
    }
    var rule = createRule(key, decl, options);
    if (!rule)
      return null;
    this.register(rule);
    var index2 = options.index === void 0 ? this.index.length : options.index;
    this.index.splice(index2, 0, rule);
    return rule;
  };
  _proto.replace = function replace(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);
    if (oldRule) {
      this.remove(oldRule);
    }
    var options = ruleOptions;
    if (oldIndex !== -1)
      options = _extends({}, ruleOptions, {
        index: oldIndex
      });
    return this.add(name, decl, options);
  };
  _proto.get = function get2(nameOrSelector) {
    return this.map[nameOrSelector];
  };
  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  };
  _proto.process = function process2() {
    var plugins3 = this.options.jss.plugins;
    this.index.slice(0).forEach(plugins3.onProcessRule, plugins3);
  };
  _proto.register = function register(rule) {
    this.map[rule.key] = rule;
    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id)
        this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };
  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];
    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };
  _proto.update = function update2() {
    var name;
    var data;
    var options;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
      name = arguments.length <= 0 ? void 0 : arguments[0];
      data = arguments.length <= 1 ? void 0 : arguments[1];
      options = arguments.length <= 2 ? void 0 : arguments[2];
    } else {
      data = arguments.length <= 0 ? void 0 : arguments[0];
      options = arguments.length <= 1 ? void 0 : arguments[1];
      name = null;
    }
    if (name) {
      this.updateOne(this.get(name), data, options);
    } else {
      for (var index2 = 0; index2 < this.index.length; index2++) {
        this.updateOne(this.index[index2], data, options);
      }
    }
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }
    var _this$options2 = this.options, plugins3 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
    if (rule.rules instanceof RuleList2) {
      rule.rules.update(data, options);
      return;
    }
    var style2 = rule.style;
    plugins3.onUpdate(data, rule, sheet, options);
    if (options.process && style2 && style2 !== rule.style) {
      plugins3.onProcessStyle(rule.style, rule, sheet);
      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style2[prop];
        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      }
      for (var _prop in style2) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style2[_prop];
        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  };
  _proto.toString = function toString(options) {
    var str = "";
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    for (var index2 = 0; index2 < this.index.length; index2++) {
      var rule = this.index[index2];
      var css2 = rule.toString(options);
      if (!css2 && !link)
        continue;
      if (str)
        str += linebreak;
      str += css2;
    }
    return str;
  };
  return RuleList2;
}();
var StyleSheet = function() {
  function StyleSheet2(styles, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });
    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }
    this.rules = new RuleList(this.options);
    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }
    this.rules.process();
  }
  var _proto = StyleSheet2.prototype;
  _proto.attach = function attach2() {
    if (this.attached)
      return this;
    if (this.renderer)
      this.renderer.attach();
    this.attached = true;
    if (!this.deployed)
      this.deploy();
    return this;
  };
  _proto.detach = function detach2() {
    if (!this.attached)
      return this;
    if (this.renderer)
      this.renderer.detach();
    this.attached = false;
    return this;
  };
  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue;
    if (this.attached && !queue)
      this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule)
      return null;
    this.options.jss.plugins.onProcessRule(rule);
    if (this.attached) {
      if (!this.deployed)
        return rule;
      if (queue)
        queue.push(rule);
      else {
        this.insertRule(rule);
        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = void 0;
        }
      }
      return rule;
    }
    this.deployed = false;
    return rule;
  };
  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule)
      return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);
    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }
    if (this.attached) {
      if (!this.deployed)
        return newRule;
      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }
      return newRule;
    }
    this.deployed = false;
    return newRule;
  };
  _proto.insertRule = function insertRule2(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  };
  _proto.addRules = function addRules(styles, options) {
    var added = [];
    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule)
        added.push(rule);
    }
    return added;
  };
  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
  };
  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === "object" ? name : this.rules.get(name);
    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }
    this.rules.remove(rule);
    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }
    return true;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.deploy = function deploy() {
    if (this.renderer)
      this.renderer.deploy();
    this.deployed = true;
    return this;
  };
  _proto.update = function update2() {
    var _this$rules;
    (_this$rules = this.rules).update.apply(_this$rules, arguments);
    return this;
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return StyleSheet2;
}();
var PluginsRegistry = function() {
  function PluginsRegistry2() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }
  var _proto = PluginsRegistry2.prototype;
  _proto.onCreateRule = function onCreateRule8(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule)
        return rule;
    }
    return null;
  };
  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed)
      return;
    var sheet = rule.options.sheet;
    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }
    if (rule.style)
      this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };
  _proto.onProcessStyle = function onProcessStyle2(style2, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  };
  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  };
  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  };
  _proto.onChangeValue = function onChangeValue2(value, prop, rule) {
    var processedValue = value;
    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }
    return processedValue;
  };
  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: "external"
      };
    }
    var plugins3 = this.plugins[options.queue];
    if (plugins3.indexOf(newPlugin) !== -1) {
      return;
    }
    plugins3.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          true ? tiny_warning_esm_default(false, '[JSS] Unknown hook "' + name + '".') : void 0;
        }
      }
      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };
  return PluginsRegistry2;
}();
var SheetsRegistry = function() {
  function SheetsRegistry2() {
    this.registry = [];
  }
  var _proto = SheetsRegistry2.prototype;
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index2 = sheet.options.index;
    if (registry.indexOf(sheet) !== -1)
      return;
    if (registry.length === 0 || index2 >= this.index) {
      registry.push(sheet);
      return;
    }
    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index2) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  };
  _proto.reset = function reset() {
    this.registry = [];
  };
  _proto.remove = function remove(sheet) {
    var index2 = this.registry.indexOf(sheet);
    this.registry.splice(index2, 1);
  };
  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose(_ref, ["attached"]);
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    var css2 = "";
    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css2)
        css2 += linebreak;
      css2 += sheet.toString(options);
    }
    return css2;
  };
  _createClass(SheetsRegistry2, [{
    key: "index",
    /**
     * Current highest index number.
     */
    get: function get2() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);
  return SheetsRegistry2;
}();
var sheets = new SheetsRegistry();
var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
if (globalThis$1[ns] == null)
  globalThis$1[ns] = 0;
var moduleId = globalThis$1[ns]++;
var maxRules = 1e10;
var createGenerateId = function createGenerateId2(options) {
  if (options === void 0) {
    options = {};
  }
  var ruleCounter = 0;
  var generateId = function generateId2(rule, sheet) {
    ruleCounter += 1;
    if (ruleCounter > maxRules) {
      true ? tiny_warning_esm_default(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
    }
    var jssId = "";
    var prefix2 = "";
    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix2 = sheet.options.classNamePrefix;
      }
      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }
    if (options.minify) {
      return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
    }
    return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
  };
  return generateId;
};
var memoize2 = function memoize3(fn) {
  var value;
  return function() {
    if (!value)
      value = fn();
    return value;
  };
};
var getPropertyValue = function getPropertyValue2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    return "";
  }
};
var setProperty = function setProperty2(cssRule, prop, value) {
  try {
    var cssValue = value;
    if (Array.isArray(value)) {
      cssValue = toCssValue(value);
    }
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      var indexOfImportantFlag = cssValue ? cssValue.indexOf("!important") : -1;
      var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
      cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? "important" : "");
    }
  } catch (err) {
    return false;
  }
  return true;
};
var removeProperty = function removeProperty2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    true ? tiny_warning_esm_default(false, '[JSS] DOMException "' + err.message + '" was thrown. Tried to remove property "' + prop + '".') : void 0;
  }
};
var setSelector = function setSelector2(cssRule, selectorText) {
  cssRule.selectorText = selectorText;
  return cssRule.selectorText === selectorText;
};
var getHead = memoize2(function() {
  return document.querySelector("head");
});
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}
function findPrevNode(options) {
  var registry = sheets.registry;
  if (registry.length > 0) {
    var sheet = findHigherSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    }
    sheet = findHighestSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  }
  var insertionPoint = options.insertionPoint;
  if (insertionPoint && typeof insertionPoint === "string") {
    var comment = findCommentNode(insertionPoint);
    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    }
    true ? tiny_warning_esm_default(false, '[JSS] Insertion point "' + insertionPoint + '" not found.') : void 0;
  }
  return false;
}
function insertStyle(style2, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);
  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style2, nextNode.node);
    return;
  }
  if (insertionPoint && typeof insertionPoint.nodeType === "number") {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode)
      parentNode.insertBefore(style2, insertionPointElement.nextSibling);
    else
      true ? tiny_warning_esm_default(false, "[JSS] Insertion point is not in the DOM.") : void 0;
    return;
  }
  getHead().appendChild(style2);
}
var getNonce = memoize2(function() {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute("content") : null;
});
var _insertRule = function insertRule(container, rule, index2) {
  try {
    if ("insertRule" in container) {
      container.insertRule(rule, index2);
    } else if ("appendRule" in container) {
      container.appendRule(rule);
    }
  } catch (err) {
    true ? tiny_warning_esm_default(false, "[JSS] " + err.message) : void 0;
    return false;
  }
  return container.cssRules[index2];
};
var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index2) {
  var maxIndex = container.cssRules.length;
  if (index2 === void 0 || index2 > maxIndex) {
    return maxIndex;
  }
  return index2;
};
var createStyle = function createStyle2() {
  var el2 = document.createElement("style");
  el2.textContent = "\n";
  return el2;
};
var DomRenderer = function() {
  function DomRenderer2(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    if (sheet)
      sheets.add(sheet);
    this.sheet = sheet;
    var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
    this.element = element || createStyle();
    this.element.setAttribute("data-jss", "");
    if (media)
      this.element.setAttribute("media", media);
    if (meta)
      this.element.setAttribute("data-meta", meta);
    var nonce = getNonce();
    if (nonce)
      this.element.setAttribute("nonce", nonce);
  }
  var _proto = DomRenderer2.prototype;
  _proto.attach = function attach2() {
    if (this.element.parentNode || !this.sheet)
      return;
    insertStyle(this.element, this.sheet.options);
    var deployed = Boolean(this.sheet && this.sheet.deployed);
    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };
  _proto.detach = function detach2() {
    if (!this.sheet)
      return;
    var parentNode = this.element.parentNode;
    if (parentNode)
      parentNode.removeChild(this.element);
    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = "\n";
    }
  };
  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet)
      return;
    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }
    this.element.textContent = "\n" + sheet.toString() + "\n";
  };
  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  };
  _proto.insertRule = function insertRule2(rule, index2, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }
    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;
      if (rule.type === "conditional" || rule.type === "keyframes") {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);
        if (latestNativeParent === false) {
          return false;
        }
        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }
      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }
    var ruleStr = rule.toString();
    if (!ruleStr)
      return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
    if (nativeRule === false) {
      return false;
    }
    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };
  _proto.refCssRule = function refCssRule(rule, index2, cssRule) {
    rule.renderable = cssRule;
    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules.splice(index2, 0, cssRule);
    }
  };
  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return true;
  };
  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  };
  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index2 = this.indexOf(cssRule);
    if (index2 === -1)
      return false;
    this.element.sheet.deleteRule(index2);
    this.cssRules.splice(index2, 1);
    return this.insertRule(rule, index2);
  };
  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };
  return DomRenderer2;
}();
var instanceCounter = 0;
var Jss = function() {
  function Jss2(options) {
    this.id = instanceCounter++;
    this.version = "10.10.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId,
      Renderer: module_default ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });
    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: "internal"
      });
    }
    this.setup(options);
  }
  var _proto = Jss2.prototype;
  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }
    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }
    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }
    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }
    if (options.insertionPoint != null)
      this.options.insertionPoint = options.insertionPoint;
    if ("Renderer" in options) {
      this.options.Renderer = options.Renderer;
    }
    if (options.plugins)
      this.use.apply(this, options.plugins);
    return this;
  };
  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, index2 = _options.index;
    if (typeof index2 !== "number") {
      index2 = sheets.index === 0 ? 0 : sheets.index + 1;
    }
    var sheet = new StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index2
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };
  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  };
  _proto.createRule = function createRule$1(name, style2, options) {
    if (style2 === void 0) {
      style2 = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof name === "object") {
      return this.createRule(void 0, name, style2);
    }
    var ruleOptions = _extends({}, options, {
      name,
      jss: this,
      Renderer: this.options.Renderer
    });
    if (!ruleOptions.generateId)
      ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes)
      ruleOptions.classes = {};
    if (!ruleOptions.keyframes)
      ruleOptions.keyframes = {};
    var rule = createRule(name, style2, ruleOptions);
    if (rule)
      this.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.use = function use() {
    var _this = this;
    for (var _len = arguments.length, plugins3 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins3[_key] = arguments[_key];
    }
    plugins3.forEach(function(plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };
  return Jss2;
}();
var createJss = function createJss2(options) {
  return new Jss(options);
};
var SheetsManager = function() {
  function SheetsManager2() {
    this.length = 0;
    this.sheets = /* @__PURE__ */ new WeakMap();
  }
  var _proto = SheetsManager2.prototype;
  _proto.get = function get2(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };
  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key))
      return;
    this.length++;
    this.sheets.set(key, {
      sheet,
      refs: 0
    });
  };
  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);
    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }
      entry.refs++;
      return entry.sheet;
    }
    tiny_warning_esm_default(false, "[JSS] SheetsManager: can't find sheet to manage");
    return void 0;
  };
  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);
    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0)
          entry.sheet.detach();
      }
    } else {
      tiny_warning_esm_default(false, "SheetsManager: can't find sheet to unmanage");
    }
  };
  _createClass(SheetsManager2, [{
    key: "size",
    get: function get2() {
      return this.length;
    }
  }]);
  return SheetsManager2;
}();
var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
function getDynamicStyles(styles) {
  var to = null;
  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;
    if (type === "function") {
      if (!to)
        to = {};
      to[key] = value;
    } else if (type === "object" && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to)
          to = {};
        to[key] = extracted;
      }
    }
  }
  return to;
}
var index = createJss();

// node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js
var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
var functionPlugin = function functionPlugin2() {
  return {
    onCreateRule: function onCreateRule8(name, decl, options) {
      if (typeof decl !== "function")
        return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle2(style2, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule)
        return style2;
      var fnValues = {};
      for (var prop in style2) {
        var value = style2[prop];
        if (typeof value !== "function")
          continue;
        delete style2[prop];
        fnValues[prop] = value;
      }
      rule[fnValuesNs] = fnValues;
      return style2;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs];
      if (fnRule) {
        styleRule.style = fnRule(data) || {};
        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === "function") {
              true ? tiny_warning_esm_default(false, "[JSS] Function values inside function rules are not supported.") : void 0;
              break;
            }
          }
        }
      }
      var fnValues = styleRule[fnValuesNs];
      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};
var jss_plugin_rule_value_function_esm_default = functionPlugin;

// node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
var at = "@global";
var atPrefix = "@global ";
var GlobalContainerRule = function() {
  function GlobalContainerRule2(key, styles, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }
    this.rules.process();
  }
  var _proto = GlobalContainerRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.addRule = function addRule(name, style2, options) {
    var rule = this.rules.add(name, style2, options);
    if (rule)
      this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style2, options) {
    var newRule = this.rules.replace(name, style2, options);
    if (newRule)
      this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return GlobalContainerRule2;
}();
var GlobalPrefixedRule = function() {
  function GlobalPrefixedRule2(key, style2, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style2, _extends({}, options, {
      parent: this
    }));
  }
  var _proto2 = GlobalPrefixedRule2.prototype;
  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : "";
  };
  return GlobalPrefixedRule2;
}();
var separatorRegExp = /\s*,\s*/g;
function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = "";
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1])
      scoped += ", ";
  }
  return scoped;
}
function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options, style2 = rule.style;
  var rules = style2 ? style2[at] : null;
  if (!rules)
    return;
  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }
  delete style2[at];
}
function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options, style2 = rule.style;
  for (var prop in style2) {
    if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
      continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style2[prop], _extends({}, options, {
      selector
    }));
    delete style2[prop];
  }
}
function jssGlobal() {
  function onCreateRule8(name, styles, options) {
    if (!name)
      return null;
    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }
    if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }
    var parent = options.parent;
    if (parent) {
      if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
        options.scoped = false;
      }
    }
    if (!options.selector && options.scoped === false) {
      options.selector = name;
    }
    return null;
  }
  function onProcessRule(rule, sheet) {
    if (rule.type !== "style" || !sheet)
      return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }
  return {
    onCreateRule: onCreateRule8,
    onProcessRule
  };
}
var jss_plugin_global_esm_default = jssGlobal;

// node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js
var separatorRegExp2 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp2 = /\$([\w-]+)/g;
function jssNested() {
  function getReplaceRef(container, sheet) {
    return function(match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);
      if (rule) {
        return rule.selector;
      }
      true ? tiny_warning_esm_default(false, '[JSS] Could not find the referenced rule "' + key + '" in "' + (container.options.meta || container.toString()) + '".') : void 0;
      return key;
    };
  }
  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp2);
    var nestedSelectors = nestedProp.split(separatorRegExp2);
    var result = "";
    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];
      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result)
          result += ", ";
        result += nested.indexOf("&") !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }
    return result;
  }
  function getOptions(rule, container, prevOptions) {
    if (prevOptions)
      return _extends({}, prevOptions, {
        index: prevOptions.index + 1
      });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
    var options = _extends({}, rule.options, {
      nestingLevel,
      index: container.indexOf(rule) + 1
      // We don't need the parent name to be set options for chlid.
    });
    delete options.name;
    return options;
  }
  function onProcessStyle2(style2, rule, sheet) {
    if (rule.type !== "style")
      return style2;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef3;
    for (var prop in style2) {
      var isNested = prop.indexOf("&") !== -1;
      var isNestedConditional = prop[0] === "@";
      if (!isNested && !isNestedConditional)
        continue;
      options = getOptions(styleRule, container, options);
      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector);
        if (!replaceRef3)
          replaceRef3 = getReplaceRef(container, sheet);
        selector = selector.replace(refRegExp2, replaceRef3);
        var name = styleRule.key + "-" + prop;
        if ("replaceRule" in container) {
          container.replaceRule(name, style2[prop], _extends({}, options, {
            selector
          }));
        } else {
          container.addRule(name, style2[prop], _extends({}, options, {
            selector
          }));
        }
      } else if (isNestedConditional) {
        container.addRule(prop, {}, options).addRule(styleRule.key, style2[prop], {
          selector: styleRule.selector
        });
      }
      delete style2[prop];
    }
    return style2;
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var jss_plugin_nested_esm_default = jssNested;

// node_modules/hyphenate-style-name/index.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenate_style_name_default = hyphenateStyleName;

// node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js
function convertCase(style2) {
  var converted = {};
  for (var prop in style2) {
    var key = prop.indexOf("--") === 0 ? prop : hyphenate_style_name_default(prop);
    converted[key] = style2[prop];
  }
  if (style2.fallbacks) {
    if (Array.isArray(style2.fallbacks))
      converted.fallbacks = style2.fallbacks.map(convertCase);
    else
      converted.fallbacks = convertCase(style2.fallbacks);
  }
  return converted;
}
function camelCase() {
  function onProcessStyle2(style2) {
    if (Array.isArray(style2)) {
      for (var index2 = 0; index2 < style2.length; index2++) {
        style2[index2] = convertCase(style2[index2]);
      }
      return style2;
    }
    return convertCase(style2);
  }
  function onChangeValue2(value, prop, rule) {
    if (prop.indexOf("--") === 0) {
      return value;
    }
    var hyphenatedProp = hyphenate_style_name_default(prop);
    if (prop === hyphenatedProp)
      return value;
    rule.prop(hyphenatedProp, value);
    return null;
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_camel_case_esm_default = camelCase;

// node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js
var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
var defaultUnits = {
  // Animation properties
  "animation-delay": ms,
  "animation-duration": ms,
  // Background properties
  "background-position": px,
  "background-position-x": px,
  "background-position-y": px,
  "background-size": px,
  // Border Properties
  border: px,
  "border-bottom": px,
  "border-bottom-left-radius": px,
  "border-bottom-right-radius": px,
  "border-bottom-width": px,
  "border-left": px,
  "border-left-width": px,
  "border-radius": px,
  "border-right": px,
  "border-right-width": px,
  "border-top": px,
  "border-top-left-radius": px,
  "border-top-right-radius": px,
  "border-top-width": px,
  "border-width": px,
  "border-block": px,
  "border-block-end": px,
  "border-block-end-width": px,
  "border-block-start": px,
  "border-block-start-width": px,
  "border-block-width": px,
  "border-inline": px,
  "border-inline-end": px,
  "border-inline-end-width": px,
  "border-inline-start": px,
  "border-inline-start-width": px,
  "border-inline-width": px,
  "border-start-start-radius": px,
  "border-start-end-radius": px,
  "border-end-start-radius": px,
  "border-end-end-radius": px,
  // Margin properties
  margin: px,
  "margin-bottom": px,
  "margin-left": px,
  "margin-right": px,
  "margin-top": px,
  "margin-block": px,
  "margin-block-end": px,
  "margin-block-start": px,
  "margin-inline": px,
  "margin-inline-end": px,
  "margin-inline-start": px,
  // Padding properties
  padding: px,
  "padding-bottom": px,
  "padding-left": px,
  "padding-right": px,
  "padding-top": px,
  "padding-block": px,
  "padding-block-end": px,
  "padding-block-start": px,
  "padding-inline": px,
  "padding-inline-end": px,
  "padding-inline-start": px,
  // Mask properties
  "mask-position-x": px,
  "mask-position-y": px,
  "mask-size": px,
  // Width and height properties
  height: px,
  width: px,
  "min-height": px,
  "max-height": px,
  "min-width": px,
  "max-width": px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  "inset-block": px,
  "inset-block-end": px,
  "inset-block-start": px,
  "inset-inline": px,
  "inset-inline-end": px,
  "inset-inline-start": px,
  // Shadow properties
  "box-shadow": px,
  "text-shadow": px,
  // Column properties
  "column-gap": px,
  "column-rule": px,
  "column-rule-width": px,
  "column-width": px,
  // Font and text properties
  "font-size": px,
  "font-size-delta": px,
  "letter-spacing": px,
  "text-decoration-thickness": px,
  "text-indent": px,
  "text-stroke": px,
  "text-stroke-width": px,
  "word-spacing": px,
  // Motion properties
  motion: px,
  "motion-offset": px,
  // Outline properties
  outline: px,
  "outline-offset": px,
  "outline-width": px,
  // Perspective properties
  perspective: px,
  "perspective-origin-x": percent,
  "perspective-origin-y": percent,
  // Transform properties
  "transform-origin": percent,
  "transform-origin-x": percent,
  "transform-origin-y": percent,
  "transform-origin-z": percent,
  // Transition properties
  "transition-delay": ms,
  "transition-duration": ms,
  // Alignment properties
  "vertical-align": px,
  "flex-basis": px,
  // Some random properties
  "shape-margin": px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  "grid-gap": px,
  "row-gap": px,
  "grid-row-gap": px,
  "grid-column-gap": px,
  "grid-template-rows": px,
  "grid-template-columns": px,
  "grid-auto-rows": px,
  "grid-auto-columns": px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  "box-shadow-x": px,
  "box-shadow-y": px,
  "box-shadow-blur": px,
  "box-shadow-spread": px,
  "font-line-height": px,
  "text-shadow-x": px,
  "text-shadow-y": px,
  "text-shadow-blur": px
};
function addCamelCasedVersion(obj) {
  var regExp2 = /(-[a-z])/g;
  var replace = function replace2(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp2, replace)] = obj[key];
  }
  return newObj;
}
var units = addCamelCasedVersion(defaultUnits);
function iterate(prop, value, options) {
  if (value == null)
    return value;
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === "object") {
    if (prop === "fallbacks") {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === "number" && isNaN(value) === false) {
    var unit = options[prop] || units[prop];
    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
    }
    return value.toString();
  }
  return value;
}
function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }
  var camelCasedOptions = addCamelCasedVersion(options);
  function onProcessStyle2(style2, rule) {
    if (rule.type !== "style")
      return style2;
    for (var prop in style2) {
      style2[prop] = iterate(prop, style2[prop], camelCasedOptions);
    }
    return style2;
  }
  function onChangeValue2(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_default_unit_esm_default = defaultUnit;

// node_modules/css-vendor/dist/css-vendor.esm.js
var js = "";
var css = "";
var vendor = "";
var browser = "";
var isTouch = module_default && "ontouchstart" in document.documentElement;
if (module_default) {
  jsCssMap = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  };
  _document$createEleme = document.createElement("p"), style2 = _document$createEleme.style;
  testProp = "Transform";
  for (key in jsCssMap) {
    if (key + testProp in style2) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
  if (js === "Webkit" && "msHyphens" in style2) {
    js = "ms";
    css = jsCssMap.ms;
    browser = "edge";
  }
  if (js === "Webkit" && "-apple-trailing-word" in style2) {
    vendor = "apple";
  }
}
var jsCssMap;
var _document$createEleme;
var style2;
var testProp;
var key;
var prefix = {
  js,
  css,
  vendor,
  browser,
  isTouch
};
function supportedKeyframes(key) {
  if (key[1] === "-")
    return key;
  if (prefix.js === "ms")
    return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}
var appearence = {
  noPrefill: ["appearance"],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== "appearance")
      return false;
    if (prefix.js === "ms")
      return "-webkit-" + prop;
    return prefix.css + prop;
  }
};
var colorAdjust = {
  noPrefill: ["color-adjust"],
  supportedProperty: function supportedProperty2(prop) {
    if (prop !== "color-adjust")
      return false;
    if (prefix.js === "Webkit")
      return prefix.css + "print-" + prop;
    return prop;
  }
};
var regExp = /[-\s]+(.)?/g;
function toUpper(match, c) {
  return c ? c.toUpperCase() : "";
}
function camelize(str) {
  return str.replace(regExp, toUpper);
}
function pascalize(str) {
  return camelize("-" + str);
}
var mask = {
  noPrefill: ["mask"],
  supportedProperty: function supportedProperty3(prop, style2) {
    if (!/^mask/.test(prop))
      return false;
    if (prefix.js === "Webkit") {
      var longhand = "mask-image";
      if (camelize(longhand) in style2) {
        return prop;
      }
      if (prefix.js + pascalize(longhand) in style2) {
        return prefix.css + prop;
      }
    }
    return prop;
  }
};
var textOrientation = {
  noPrefill: ["text-orientation"],
  supportedProperty: function supportedProperty4(prop) {
    if (prop !== "text-orientation")
      return false;
    if (prefix.vendor === "apple" && !prefix.isTouch) {
      return prefix.css + prop;
    }
    return prop;
  }
};
var transform3 = {
  noPrefill: ["transform"],
  supportedProperty: function supportedProperty5(prop, style2, options) {
    if (prop !== "transform")
      return false;
    if (options.transform) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var transition = {
  noPrefill: ["transition"],
  supportedProperty: function supportedProperty6(prop, style2, options) {
    if (prop !== "transition")
      return false;
    if (options.transition) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var writingMode = {
  noPrefill: ["writing-mode"],
  supportedProperty: function supportedProperty7(prop) {
    if (prop !== "writing-mode")
      return false;
    if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var userSelect = {
  noPrefill: ["user-select"],
  supportedProperty: function supportedProperty8(prop) {
    if (prop !== "user-select")
      return false;
    if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var breakPropsOld = {
  supportedProperty: function supportedProperty9(prop, style2) {
    if (!/^break-/.test(prop))
      return false;
    if (prefix.js === "Webkit") {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style2 ? prefix.css + "column-" + prop : false;
    }
    if (prefix.js === "Moz") {
      var _jsProp = "page" + pascalize(prop);
      return _jsProp in style2 ? "page-" + prop : false;
    }
    return false;
  }
};
var inlineLogicalOld = {
  supportedProperty: function supportedProperty10(prop, style2) {
    if (!/^(border|margin|padding)-inline/.test(prop))
      return false;
    if (prefix.js === "Moz")
      return prop;
    var newProp = prop.replace("-inline", "");
    return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
  }
};
var unprefixed = {
  supportedProperty: function supportedProperty11(prop, style2) {
    return camelize(prop) in style2 ? prop : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty12(prop, style2) {
    var pascalized = pascalize(prop);
    if (prop[0] === "-")
      return prop;
    if (prop[0] === "-" && prop[1] === "-")
      return prop;
    if (prefix.js + pascalized in style2)
      return prefix.css + prop;
    if (prefix.js !== "Webkit" && "Webkit" + pascalized in style2)
      return "-webkit-" + prop;
    return false;
  }
};
var scrollSnap = {
  supportedProperty: function supportedProperty13(prop) {
    if (prop.substring(0, 11) !== "scroll-snap")
      return false;
    if (prefix.js === "ms") {
      return "" + prefix.css + prop;
    }
    return prop;
  }
};
var overscrollBehavior = {
  supportedProperty: function supportedProperty14(prop) {
    if (prop !== "overscroll-behavior")
      return false;
    if (prefix.js === "ms") {
      return prefix.css + "scroll-chaining";
    }
    return prop;
  }
};
var propMap = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
  // 'align-self' is handled by 'align-self' plugin.
};
var flex2012 = {
  supportedProperty: function supportedProperty15(prop, style2) {
    var newProp = propMap[prop];
    if (!newProp)
      return false;
    return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
  }
};
var propMap$1 = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
};
var propKeys = Object.keys(propMap$1);
var prefixCss = function prefixCss2(p) {
  return prefix.css + p;
};
var flex2009 = {
  supportedProperty: function supportedProperty16(prop, style2, _ref) {
    var multiple = _ref.multiple;
    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];
      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
      }
      if (!multiple)
        return false;
      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style2)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};
var plugins2 = [appearence, colorAdjust, mask, textOrientation, transform3, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins2.filter(function(p) {
  return p.supportedProperty;
}).map(function(p) {
  return p.supportedProperty;
});
var noPrefill = plugins2.filter(function(p) {
  return p.noPrefill;
}).reduce(function(a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);
var el;
var cache2 = {};
if (module_default) {
  el = document.createElement("p");
  computed = window.getComputedStyle(document.documentElement, "");
  for (key$1 in computed) {
    if (!isNaN(key$1))
      cache2[computed[key$1]] = computed[key$1];
  }
  noPrefill.forEach(function(x) {
    return delete cache2[x];
  });
}
var computed;
var key$1;
function supportedProperty17(prop, options) {
  if (options === void 0) {
    options = {};
  }
  if (!el)
    return prop;
  if (cache2[prop] != null) {
    return cache2[prop];
  }
  if (prop === "transition" || prop === "transform") {
    options[prop] = prop in el.style;
  }
  for (var i = 0; i < propertyDetectors.length; i++) {
    cache2[prop] = propertyDetectors[i](prop, el.style, options);
    if (cache2[prop])
      break;
  }
  try {
    el.style[prop] = "";
  } catch (err) {
    return false;
  }
  return cache2[prop];
}
var cache$1 = {};
var transitionProperties = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
function prefixTransitionCallback(match, p1, p2) {
  if (p1 === "var")
    return "var";
  if (p1 === "all")
    return "all";
  if (p2 === "all")
    return ", all";
  var prefixedValue = p1 ? supportedProperty17(p1) : ", " + supportedProperty17(p2);
  if (!prefixedValue)
    return p1 || p2;
  return prefixedValue;
}
if (module_default)
  el$1 = document.createElement("p");
function supportedValue(property, value) {
  var prefixedValue = value;
  if (!el$1 || property === "content")
    return value;
  if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  }
  var cacheKey = property + prefixedValue;
  if (cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  }
  try {
    el$1.style[property] = prefixedValue;
  } catch (err) {
    cache$1[cacheKey] = false;
    return false;
  }
  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === "") {
    prefixedValue = prefix.css + prefixedValue;
    if (prefixedValue === "-ms-flex")
      el$1.style[property] = "-ms-flexbox";
    el$1.style[property] = prefixedValue;
    if (el$1.style[property] === "") {
      cache$1[cacheKey] = false;
      return false;
    }
  }
  el$1.style[property] = "";
  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}

// node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === "keyframes") {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }
  function prefixStyle(style2) {
    for (var prop in style2) {
      var value = style2[prop];
      if (prop === "fallbacks" && Array.isArray(value)) {
        style2[prop] = value.map(prefixStyle);
        continue;
      }
      var changeProp = false;
      var supportedProp = supportedProperty17(prop);
      if (supportedProp && supportedProp !== prop)
        changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value)
        changeValue = true;
      if (changeProp || changeValue) {
        if (changeProp)
          delete style2[prop];
        style2[supportedProp || prop] = supportedValue$1 || value;
      }
    }
    return style2;
  }
  function onProcessStyle2(style2, rule) {
    if (rule.type !== "style")
      return style2;
    return prefixStyle(style2);
  }
  function onChangeValue2(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }
  return {
    onProcessRule,
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_vendor_prefixer_esm_default = jssVendorPrefixer;

// node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
function jssPropsSort() {
  var sort = function sort2(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }
    return prop0.length - prop1.length;
  };
  return {
    onProcessStyle: function onProcessStyle2(style2, rule) {
      if (rule.type !== "style")
        return style2;
      var newStyle = {};
      var props = Object.keys(style2).sort(sort);
      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style2[props[i]];
      }
      return newStyle;
    }
  };
}
var jss_plugin_props_sort_esm_default = jssPropsSort;

// node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js
function jssPreset() {
  return {
    plugins: [
      jss_plugin_rule_value_function_esm_default(),
      jss_plugin_global_esm_default(),
      jss_plugin_nested_esm_default(),
      jss_plugin_camel_case_esm_default(),
      jss_plugin_default_unit_esm_default(),
      // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window === "undefined" ? null : jss_plugin_vendor_prefixer_esm_default(),
      jss_plugin_props_sort_esm_default()
    ]
  };
}

// node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js
var import_react = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var jss = createJss(jssPreset());
var generateClassName = createGenerateClassName();
var sheetsManager = /* @__PURE__ */ new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
var StylesContext = import_react.default.createContext(defaultOptions);
if (true) {
  StylesContext.displayName = "StylesContext";
}
var injectFirstNode;
function StylesProvider(props) {
  var children = props.children, _props$injectFirst = props.injectFirst, injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst, _props$disableGenerat = props.disableGeneration, disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat, localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);
  var outerOptions = import_react.default.useContext(StylesContext);
  var context = _extends({}, outerOptions, {
    disableGeneration
  }, localOptions);
  if (true) {
    if (typeof window === "undefined" && !context.sheetsManager) {
      console.error("Material-UI: You need to use the ServerStyleSheets API when rendering on the server.");
    }
  }
  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error("Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.");
    }
  }
  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error("Material-UI: You cannot use the jss and injectFirst props at the same time.");
    }
  }
  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== "undefined") {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment("mui-inject-first");
      head.insertBefore(injectFirstNode, head.firstChild);
    }
    context.jss = createJss({
      plugins: jssPreset().plugins,
      insertionPoint: injectFirstNode
    });
  }
  return import_react.default.createElement(StylesContext.Provider, {
    value: context
  }, children);
}
true ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types6.default.node.isRequired,
  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: import_prop_types6.default.bool,
  /**
   * JSS's class name generator.
   */
  generateClassName: import_prop_types6.default.func,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: import_prop_types6.default.bool,
  /**
   * JSS's instance.
   */
  jss: import_prop_types6.default.object,
  /**
   * @ignore
   */
  serverGenerateClassName: import_prop_types6.default.func,
  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: import_prop_types6.default.object,
  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: import_prop_types6.default.object,
  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: import_prop_types6.default.object
} : void 0;
if (true) {
  true ? StylesProvider.propTypes = exactProp(StylesProvider.propTypes) : void 0;
}

// node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}

// node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js
var import_react2 = __toESM(require_react());
var ServerStyleSheets = function() {
  function ServerStyleSheets2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, ServerStyleSheets2);
    this.options = options;
  }
  _createClass(ServerStyleSheets2, [{
    key: "collect",
    value: function collect(children) {
      var sheetsManager2 = /* @__PURE__ */ new Map();
      this.sheetsRegistry = new SheetsRegistry();
      var generateClassName2 = createGenerateClassName();
      return import_react2.default.createElement(StylesProvider, _extends({
        sheetsManager: sheetsManager2,
        serverGenerateClassName: generateClassName2,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : "";
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return import_react2.default.createElement("style", _extends({
        id: "jss-server-side",
        key: "jss-server-side",
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);
  return ServerStyleSheets2;
}();

// node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
var import_react5 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js
var import_react3 = __toESM(require_react());
var ThemeContext = import_react3.default.createContext(null);
if (true) {
  ThemeContext.displayName = "ThemeContext";
}
var ThemeContext_default = ThemeContext;

// node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var import_react4 = __toESM(require_react());
function useTheme() {
  var theme = import_react4.default.useContext(ThemeContext_default);
  if (true) {
    import_react4.default.useDebugValue(theme);
  }
  return theme;
}

// node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    var mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(["Material-UI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider(props) {
  var children = props.children, localTheme = props.theme;
  var outerTheme = useTheme();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["Material-UI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  var theme = import_react5.default.useMemo(function() {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return import_react5.default.createElement(ThemeContext_default.Provider, {
    value: theme
  }, children);
}
true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types7.default.node.isRequired,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: import_prop_types7.default.oneOfType([import_prop_types7.default.object, import_prop_types7.default.func]).isRequired
} : void 0;
if (true) {
  true ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
}
var ThemeProvider_default = ThemeProvider;

// node_modules/@material-ui/styles/esm/createStyles/createStyles.js
function createStyles(styles) {
  return styles;
}

// node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
function getThemeProps(params) {
  var theme = params.theme, name = params.name, props = params.props;
  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  }
  var defaultProps = theme.props[name];
  var propName;
  for (propName in defaultProps) {
    if (props[propName] === void 0) {
      props[propName] = defaultProps[propName];
    }
  }
  return props;
}

// node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js
var import_react6 = __toESM(require_react());

// node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js
function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var baseClasses = options.baseClasses, newClasses = options.newClasses, Component = options.Component;
  if (!newClasses) {
    return baseClasses;
  }
  var nextClasses = _extends({}, baseClasses);
  if (true) {
    if (typeof newClasses === "string") {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(getDisplayName(Component), " is incorrect."), "You might want to use the className prop instead."].join("\n"));
      return baseClasses;
    }
  }
  Object.keys(newClasses).forEach(function(key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(","), ".")].join("\n"));
      }
      if (newClasses[key] && typeof newClasses[key] !== "string") {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join("\n"));
      }
    }
    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

// node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js
var multiKeyStore = {
  set: function set(cache3, key1, key2, value) {
    var subCache = cache3.get(key1);
    if (!subCache) {
      subCache = /* @__PURE__ */ new Map();
      cache3.set(key1, subCache);
    }
    subCache.set(key2, value);
  },
  get: function get(cache3, key1, key2) {
    var subCache = cache3.get(key1);
    return subCache ? subCache.get(key2) : void 0;
  },
  delete: function _delete(cache3, key1, key2) {
    var subCache = cache3.get(key1);
    subCache.delete(key2);
  }
};
var multiKeyStore_default = multiKeyStore;

// node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;
  if (true) {
    if (indexCounter >= 0) {
      console.warn(["Material-UI: You might have a memory leak.", "The indexCounter is not supposed to grow that much."].join("\n"));
    }
  }
  return indexCounter;
}

// node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js
var noopTheme = {};
var noopTheme_default = noopTheme;

// node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js
function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === "function";
  if (true) {
    if (_typeof(stylesOrCreator) !== "object" && !themingEnabled) {
      console.error(["Material-UI: The `styles` argument provided is invalid.", "You need to provide a function generating the styles or a styles object."].join("\n"));
    }
  }
  return {
    create: function create2(theme, name) {
      var styles;
      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === noopTheme_default) {
            console.error(["Material-UI: The `styles` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join("\n"));
          }
        }
        throw err;
      }
      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }
      var overrides = theme.overrides[name];
      var stylesWithOverrides = _extends({}, styles);
      Object.keys(overrides).forEach(function(key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(["Material-UI: You are trying to override a style that does not exist.", "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join("\n"));
          }
        }
        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

// node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js
function getClasses(_ref, classes, Component) {
  var state = _ref.state, stylesOptions = _ref.stylesOptions;
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }
  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  }
  var generate = false;
  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }
  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }
  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }
  return state.cacheClasses.value;
}
function attach(_ref2, props) {
  var state = _ref2.state, theme = _ref2.theme, stylesOptions = _ref2.stylesOptions, stylesCreator = _ref2.stylesCreator, name = _ref2.name;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore_default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore_default.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }
  var options = _extends({}, stylesCreator.options, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === "boolean" ? stylesOptions.flip : theme.direction === "rtl"
  });
  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    var staticSheet;
    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore_default.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }
    var styles = stylesCreator.create(theme, name);
    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
        link: false
      }, options));
      staticSheet.attach();
      if (stylesOptions.sheetsCache) {
        multiKeyStore_default.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }
    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }
    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles);
  }
  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });
    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }
  sheetManager.refs += 1;
}
function update(_ref3, props) {
  var state = _ref3.state;
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}
function detach(_ref4) {
  var state = _ref4.state, theme = _ref4.theme, stylesOptions = _ref4.stylesOptions, stylesCreator = _ref4.stylesCreator;
  if (stylesOptions.disableGeneration) {
    return;
  }
  var sheetManager = multiKeyStore_default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;
  if (sheetManager.refs === 0) {
    multiKeyStore_default.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }
  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);
    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}
function useSynchronousEffect(func, values2) {
  var key = import_react6.default.useRef([]);
  var output;
  var currentKey = import_react6.default.useMemo(function() {
    return {};
  }, values2);
  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }
  import_react6.default.useEffect(
    function() {
      return function() {
        if (output) {
          output();
        }
      };
    },
    [currentKey]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
}
function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var name = options.name, classNamePrefixOption = options.classNamePrefix, Component = options.Component, _options$defaultTheme = options.defaultTheme, defaultTheme2 = _options$defaultTheme === void 0 ? noopTheme_default : _options$defaultTheme, stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);
  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || "makeStyles";
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };
  var useStyles = function useStyles2() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var theme = useTheme() || defaultTheme2;
    var stylesOptions = _extends({}, import_react6.default.useContext(StylesContext), stylesOptions2);
    var instance = import_react6.default.useRef();
    var shouldUpdate = import_react6.default.useRef();
    useSynchronousEffect(function() {
      var current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function() {
        detach(current);
      };
    }, [theme, stylesCreator]);
    import_react6.default.useEffect(function() {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }
      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);
    if (true) {
      import_react6.default.useDebugValue(classes);
    }
    return classes;
  };
  return useStyles;
}

// node_modules/@material-ui/styles/esm/styled/styled.js
var import_react7 = __toESM(require_react());

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/@material-ui/styles/esm/styled/styled.js
var import_prop_types8 = __toESM(require_prop_types());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function(prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}
function styled(Component) {
  var componentCreator = function componentCreator2(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var name = options.name, stylesOptions = _objectWithoutProperties(options, ["name"]);
    if (Component === void 0) {
      throw new Error(["You are calling styled(Component)(style) with an undefined component.", "You may have forgotten to import it."].join("\n"));
    }
    var classNamePrefix = name;
    if (true) {
      if (!name) {
        var displayName = getDisplayName(Component);
        if (displayName !== void 0) {
          classNamePrefix = displayName;
        }
      }
    }
    var stylesOrCreator = typeof style2 === "function" ? function(theme) {
      return {
        root: function root(props) {
          return style2(_extends({
            theme
          }, props));
        }
      };
    } : {
      root: style2
    };
    var useStyles = makeStyles(stylesOrCreator, _extends({
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};
    if (style2.filterProps) {
      filterProps = style2.filterProps;
      delete style2.filterProps;
    }
    if (style2.propTypes) {
      propTypes = style2.propTypes;
      delete style2.propTypes;
    }
    var StyledComponent = import_react7.default.forwardRef(function StyledComponent2(props, ref) {
      var children = props.children, classNameProp = props.className, clone = props.clone, ComponentProp = props.component, other = _objectWithoutProperties(props, ["children", "className", "clone", "component"]);
      var classes = useStyles(props);
      var className = clsx_m_default(classes.root, classNameProp);
      var spread = other;
      if (filterProps) {
        spread = omit(spread, filterProps);
      }
      if (clone) {
        return import_react7.default.cloneElement(children, _extends({
          className: clsx_m_default(children.props.className, className)
        }, spread));
      }
      if (typeof children === "function") {
        return children(_extends({
          className
        }, spread));
      }
      var FinalComponent = ComponentProp || Component;
      return import_react7.default.createElement(FinalComponent, _extends({
        ref,
        className
      }, spread), children);
    });
    true ? StyledComponent.propTypes = _extends({
      /**
       * A render function or node.
       */
      children: import_prop_types8.default.oneOfType([import_prop_types8.default.node, import_prop_types8.default.func]),
      /**
       * @ignore
       */
      className: import_prop_types8.default.string,
      /**
       * If `true`, the component will recycle it's children HTML element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: chainPropTypes(import_prop_types8.default.bool, function(props) {
        if (props.clone && props.component) {
          return new Error("You can not use the clone and component prop at the same time.");
        }
        return null;
      }),
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types8.default.elementType
    }, propTypes) : void 0;
    if (true) {
      StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
    }
    (0, import_hoist_non_react_statics.default)(StyledComponent, Component);
    return StyledComponent;
  };
  return componentCreator;
}

// node_modules/@material-ui/styles/esm/withStyles/withStyles.js
var import_react8 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
var withStyles = function withStyles2(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(Component) {
    var defaultTheme2 = options.defaultTheme, _options$withTheme = options.withTheme, withTheme2 = _options$withTheme === void 0 ? false : _options$withTheme, name = options.name, stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);
    if (true) {
      if (Component === void 0) {
        throw new Error(["You are calling withStyles(styles)(Component) with an undefined component.", "You may have forgotten to import it."].join("\n"));
      }
    }
    var classNamePrefix = name;
    if (true) {
      if (!name) {
        var displayName = getDisplayName(Component);
        if (displayName !== void 0) {
          classNamePrefix = displayName;
        }
      }
    }
    var useStyles = makeStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme2,
      Component,
      name: name || Component.displayName,
      classNamePrefix
    }, stylesOptions));
    var WithStyles = import_react8.default.forwardRef(function WithStyles2(props, ref) {
      var classesProp = props.classes, innerRef = props.innerRef, other = _objectWithoutProperties(props, ["classes", "innerRef"]);
      var classes = useStyles(_extends({}, Component.defaultProps, props));
      var theme;
      var more = other;
      if (typeof name === "string" || withTheme2) {
        theme = useTheme() || defaultTheme2;
        if (name) {
          more = getThemeProps({
            theme,
            name,
            props: other
          });
        }
        if (withTheme2 && !more.theme) {
          more.theme = theme;
        }
      }
      return import_react8.default.createElement(Component, _extends({
        ref: innerRef || ref,
        classes
      }, more));
    });
    true ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types9.default.object,
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: chainPropTypes(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]), function(props) {
        if (props.innerRef == null) {
          return null;
        }
        return null;
      })
    } : void 0;
    if (true) {
      WithStyles.displayName = "WithStyles(".concat(getDisplayName(Component), ")");
    }
    (0, import_hoist_non_react_statics2.default)(WithStyles, Component);
    if (true) {
      WithStyles.Naked = Component;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }
    return WithStyles;
  };
};
var withStyles_default = withStyles;

// node_modules/@material-ui/styles/esm/withTheme/withTheme.js
var import_react9 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
var import_hoist_non_react_statics3 = __toESM(require_hoist_non_react_statics_cjs());
function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var defaultTheme2 = options.defaultTheme;
  var withTheme2 = function withTheme3(Component) {
    if (true) {
      if (Component === void 0) {
        throw new Error(["You are calling withTheme(Component) with an undefined component.", "You may have forgotten to import it."].join("\n"));
      }
    }
    var WithTheme = import_react9.default.forwardRef(function WithTheme2(props, ref) {
      var innerRef = props.innerRef, other = _objectWithoutProperties(props, ["innerRef"]);
      var theme = useTheme() || defaultTheme2;
      return import_react9.default.createElement(Component, _extends({
        theme,
        ref: innerRef || ref
      }, other));
    });
    true ? WithTheme.propTypes = {
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: chainPropTypes(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object]), function(props) {
        if (props.innerRef == null) {
          return null;
        }
        return new Error("Material-UI: The `innerRef` prop is deprecated and will be removed in v5. Refs are now automatically forwarded to the inner component.");
      })
    } : void 0;
    if (true) {
      WithTheme.displayName = "WithTheme(".concat(getDisplayName(Component), ")");
    }
    (0, import_hoist_non_react_statics3.default)(WithTheme, Component);
    if (true) {
      WithTheme.Naked = Component;
    }
    return WithTheme;
  };
  return withTheme2;
}
var withTheme = withThemeCreator();

// node_modules/@material-ui/styles/esm/index.js
if (typeof window !== "undefined") {
  ponyfillGlobal_default["__@material-ui/styles-init__"] = ponyfillGlobal_default["__@material-ui/styles-init__"] || 0;
  if (ponyfillGlobal_default["__@material-ui/styles-init__"] === 1) {
    console.warn(["It looks like there are several instances of `@material-ui/styles` initialized in this application.", "This may cause theme propagation issues, broken class names, specificity issues, and makes your application bigger without a good reason.", "", "See https://mui.com/r/styles-instance-warning for more info."].join("\n"));
  }
  ponyfillGlobal_default["__@material-ui/styles-init__"] += 1;
}

// node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = createTheme_default();
var defaultTheme_default = defaultTheme;

// node_modules/@material-ui/core/esm/styles/withStyles.js
function withStyles3(stylesOrCreator, options) {
  return withStyles_default(stylesOrCreator, _extends({
    defaultTheme: defaultTheme_default
  }, options));
}
var withStyles_default2 = withStyles3;

export {
  chainPropTypes,
  _extends,
  _typeof,
  deepmerge,
  require_prop_types,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  _defineProperty,
  exactProp,
  HTMLElementType,
  refType_default,
  hexToRgb,
  rgbToHex,
  hslToRgb,
  decomposeColor,
  recomposeColor,
  getContrastRatio,
  getLuminance,
  emphasize,
  fade,
  alpha,
  darken,
  lighten,
  _objectWithoutPropertiesLoose,
  _objectWithoutProperties,
  _toConsumableArray,
  _slicedToArray,
  easing,
  duration,
  zIndex_default,
  createMuiTheme,
  createTheme_default,
  createGenerateClassName,
  createStyles,
  getThemeProps,
  _createClass,
  _inheritsLoose,
  _assertThisInitialized,
  jssPreset,
  mergeClasses,
  useTheme,
  StylesProvider,
  makeStyles,
  _classCallCheck,
  ServerStyleSheets,
  clsx_m_default,
  styled,
  ThemeProvider_default,
  withThemeCreator,
  defaultTheme_default,
  withStyles_default2 as withStyles_default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v17.0.2
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@material-ui/utils/esm/index.js:
  (** @license Material-UI v4.11.3
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@material-ui/system/esm/index.js:
  (** @license Material-UI v4.12.2
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

jss/dist/jss.esm.js:
  (**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   *)

@material-ui/styles/esm/index.js:
  (** @license Material-UI v4.11.5
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-LJE4UF3L.js.map
