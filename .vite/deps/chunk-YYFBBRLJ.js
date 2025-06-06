// node_modules/@material-ui/core/esm/utils/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? "Material-UI: capitalize(string) expects a string argument." : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
  capitalize
};
//# sourceMappingURL=chunk-YYFBBRLJ.js.map
