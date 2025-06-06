import {
  useTheme
} from "./chunk-KP7XZ5NQ.js";
import {
  ServerStyleSheets,
  StylesProvider,
  ThemeProvider_default,
  _defineProperty,
  _extends,
  alpha,
  createGenerateClassName,
  createMuiTheme,
  createStyles,
  createTheme_default,
  darken,
  decomposeColor,
  deepmerge,
  defaultTheme_default,
  duration,
  easing,
  emphasize,
  fade,
  getContrastRatio,
  getLuminance,
  hexToRgb,
  hslToRgb,
  jssPreset,
  lighten,
  makeStyles,
  recomposeColor,
  rgbToHex,
  styled,
  withStyles_default,
  withThemeCreator
} from "./chunk-LJE4UF3L.js";
import "./chunk-EU6QCHT3.js";
import "./chunk-23ZMGCJ2.js";
import "./chunk-UXIASGQL.js";

// node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js
function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return createTheme_default.apply(void 0, [deepmerge({
    unstable_strictMode: true
  }, options)].concat(args));
}

// node_modules/@material-ui/core/esm/styles/createStyles.js
function createStyles2(styles) {
  return createStyles(styles);
}

// node_modules/@material-ui/core/esm/styles/makeStyles.js
function makeStyles2(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return makeStyles(stylesOrCreator, _extends({
    defaultTheme: defaultTheme_default
  }, options));
}
var makeStyles_default = makeStyles2;

// node_modules/@material-ui/core/esm/styles/cssUtils.js
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length) {
  return parseFloat(length);
}
function convertLength(baseFontSize) {
  return function(length, toUnit) {
    var fromUnit = getUnit(length);
    if (fromUnit === toUnit) {
      return length;
    }
    var pxLength = toUnitless(length);
    if (fromUnit !== "px") {
      if (fromUnit === "em") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === "rem") {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    }
    var outputLength = pxLength;
    if (toUnit !== "px") {
      if (toUnit === "em") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === "rem") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }
    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size, grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight, pixels = _ref2.pixels, htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty, min = _ref3.min, max = _ref3.max, _ref3$unit = _ref3.unit, unit = _ref3$unit === void 0 ? "rem" : _ref3$unit, _ref3$breakpoints = _ref3.breakpoints, breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints, _ref3$transform = _ref3.transform, transform = _ref3$transform === void 0 ? null : _ref3$transform;
  var output = _defineProperty({}, cssProperty, "".concat(min).concat(unit));
  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function(breakpoint) {
    var value = min + factor * breakpoint;
    if (transform !== null) {
      value = transform(value);
    }
    output["@media (min-width:".concat(breakpoint, "px)")] = _defineProperty({}, cssProperty, "".concat(Math.round(value * 1e4) / 1e4).concat(unit));
  });
  return output;
}

// node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js
function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints, breakpoints = _options$breakpoints === void 0 ? ["sm", "md", "lg"] : _options$breakpoints, _options$disableAlign = options.disableAlign, disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign, _options$factor = options.factor, factor = _options$factor === void 0 ? 2 : _options$factor, _options$variants = options.variants, variants = _options$variants === void 0 ? ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"] : _options$variants;
  var theme = _extends({}, themeInput);
  theme.typography = _extends({}, theme.typography);
  var typography = theme.typography;
  var convert = convertLength(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function(x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function(variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, "rem"));
    if (remFontSize <= 1) {
      return;
    }
    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;
    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error(true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : formatMuiErrorMessage(6));
    }
    if (!isUnitless(lineHeight)) {
      lineHeight = parseFloat(convert(lineHeight, "rem")) / parseFloat(remFontSize);
    }
    var transform = null;
    if (!disableAlign) {
      transform = function transform2(value) {
        return alignProperty({
          size: value,
          grid: fontGrid({
            pixels: 4,
            lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }
    typography[variant] = _extends({}, style, responsiveProperty({
      cssProperty: "fontSize",
      min: minFontSize,
      max: maxFontSize,
      unit: "rem",
      breakpoints: breakpointValues,
      transform
    }));
  });
  return theme;
}

// node_modules/@material-ui/core/esm/styles/styled.js
var styled2 = function styled3(Component) {
  var componentCreator = styled(Component);
  return function(style, options) {
    return componentCreator(style, _extends({
      defaultTheme: defaultTheme_default
    }, options));
  };
};
var styled_default = styled2;

// node_modules/@material-ui/core/esm/styles/withTheme.js
var withTheme = withThemeCreator({
  defaultTheme: defaultTheme_default
});
var withTheme_default = withTheme;
export {
  ThemeProvider_default as MuiThemeProvider,
  ServerStyleSheets,
  StylesProvider,
  ThemeProvider_default as ThemeProvider,
  alpha,
  createGenerateClassName,
  createMuiTheme,
  createStyles2 as createStyles,
  createTheme_default as createTheme,
  darken,
  decomposeColor,
  duration,
  easing,
  emphasize,
  fade,
  getContrastRatio,
  getLuminance,
  hexToRgb,
  hslToRgb,
  jssPreset,
  lighten,
  makeStyles_default as makeStyles,
  recomposeColor,
  responsiveFontSizes,
  rgbToHex,
  styled_default as styled,
  createMuiStrictModeTheme as unstable_createMuiStrictModeTheme,
  useTheme,
  withStyles_default as withStyles,
  withTheme_default as withTheme
};
//# sourceMappingURL=@material-ui_core_styles.js.map
