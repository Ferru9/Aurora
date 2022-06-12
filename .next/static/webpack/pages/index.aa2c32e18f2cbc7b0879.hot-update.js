webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextFeature; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/fernandoferrufino/Library/CloudStorage/OneDrive-ThompsonRiversUniversity/University/Main Page/Aurora/src/components/text-feature.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\nfunction TextFeature(_ref) {\n  var subTitle = _ref.subTitle,\n      title = _ref.title,\n      description = _ref.description,\n      btnName = _ref.btnName,\n      _ref$btnURL = _ref.btnURL,\n      btnURL = _ref$btnURL === void 0 ? '#' : _ref$btnURL;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"p\",\n    sx: styles.wrapper.subTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h2\",\n    sx: styles.wrapper.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, title)), description);\n}\n_c = TextFeature;\nvar styles = {\n  card: {\n    display: 'flex',\n    alignItems: 'flex-start',\n    flexDirection: 'column',\n    flexShrink: 0,\n    a: {\n      m: ['0 auto', null, null, 0]\n    }\n  },\n  wrapper: {\n    width: '100%',\n    display: 'flex',\n    flexDirection: 'column',\n    mt: -1,\n    subTitle: {\n      fontSize: [0, null, 1],\n      color: 'primary',\n      textTransform: 'uppercase',\n      fontWeight: '700',\n      mb: [2, 3],\n      lineHeight: 1.5,\n      letterSpacing: ['1.5px', null, '2px']\n    },\n    title: {\n      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],\n      color: 'heading_secondary',\n      lineHeight: [1.3, null, null, null, 1.2],\n      fontWeight: '700',\n      letterSpacing: '-.5px',\n      mb: 5\n    }\n  },\n  description: {\n    fontSize: ['15px', 2, null, null, null, '17px', null, 3],\n    fontWeight: 400,\n    lineHeight: [1.85, null, null, 2, null, '2.2'],\n    color: 'text_secondary',\n    mb: '30px'\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"TextFeature\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlLmpzPzQ2OTkiXSwibmFtZXMiOlsiVGV4dEZlYXR1cmUiLCJzdWJUaXRsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidG5OYW1lIiwiYnRuVVJMIiwic3R5bGVzIiwiY2FyZCIsIndyYXBwZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4U2hyaW5rIiwiYSIsIm0iLCJ3aWR0aCIsIm10IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwibWIiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsT0FNWjtBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLFdBR0MsUUFIREEsV0FHQztBQUFBLE1BRkRDLE9BRUMsUUFGREEsT0FFQztBQUFBLHlCQUREQyxNQUNDO0FBQUEsTUFEREEsTUFDQyw0QkFEUSxHQUNSO0FBQ0QsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlUCxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFFBREgsQ0FERixFQUlFLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsTUFBRSxFQUFFSyxNQUFNLENBQUNFLE9BQVAsQ0FBZU4sS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQURILENBSkYsQ0FERixFQVNHQyxXQVRILENBREY7QUFhRDtLQXBCdUJILFc7QUFzQnhCLElBQU1NLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkUsV0FBTyxFQUFFLE1BREw7QUFFSkMsY0FBVSxFQUFFLFlBRlI7QUFHSkMsaUJBQWEsRUFBRSxRQUhYO0FBSUpDLGNBQVUsRUFBRSxDQUpSO0FBS0pDLEtBQUMsRUFBRTtBQUNEQyxPQUFDLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixDQUF2QjtBQURGO0FBTEMsR0FETztBQVViTixTQUFPLEVBQUU7QUFDUE8sU0FBSyxFQUFFLE1BREE7QUFFUE4sV0FBTyxFQUFFLE1BRkY7QUFHUEUsaUJBQWEsRUFBRSxRQUhSO0FBSVBLLE1BQUUsRUFBRSxDQUFDLENBSkU7QUFLUGYsWUFBUSxFQUFFO0FBQ1JnQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FERjtBQUVSQyxXQUFLLEVBQUUsU0FGQztBQUdSQyxtQkFBYSxFQUFFLFdBSFA7QUFJUkMsZ0JBQVUsRUFBRSxLQUpKO0FBS1JDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTEk7QUFNUkMsZ0JBQVUsRUFBRSxHQU5KO0FBT1JDLG1CQUFhLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixLQUFoQjtBQVBQLEtBTEg7QUFjUHJCLFNBQUssRUFBRTtBQUNMZSxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsTUFBdkIsRUFBK0IsTUFBL0IsRUFBdUMsTUFBdkMsRUFBK0MsSUFBL0MsRUFBcUQsTUFBckQsQ0FETDtBQUVMQyxXQUFLLEVBQUUsbUJBRkY7QUFHTEksZ0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixHQUF4QixDQUhQO0FBSUxGLGdCQUFVLEVBQUUsS0FKUDtBQUtMRyxtQkFBYSxFQUFFLE9BTFY7QUFNTEYsUUFBRSxFQUFFO0FBTkM7QUFkQSxHQVZJO0FBaUNibEIsYUFBVyxFQUFFO0FBQ1hjLFlBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxDQUFULEVBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixNQUE5QixFQUFzQyxJQUF0QyxFQUE0QyxDQUE1QyxDQURDO0FBRVhHLGNBQVUsRUFBRSxHQUZEO0FBR1hFLGNBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQixJQUF0QixFQUE0QixLQUE1QixDQUhEO0FBSVhKLFNBQUssRUFBRSxnQkFKSTtBQUtYRyxNQUFFLEVBQUU7QUFMTztBQWpDQSxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXh0RmVhdHVyZSh7XG4gIHN1YlRpdGxlLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGJ0bk5hbWUsXG4gIGJ0blVSTCA9ICcjJyxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+XG4gICAgICAgICAge3N1YlRpdGxlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgPC9Cb3g+XG4gICAgICB7ZGVzY3JpcHRpb259XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleFNocmluazogMCxcbiAgICBhOiB7XG4gICAgICBtOiBbJzAgYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogLTEsXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgMV0sXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIG1iOiBbMiwgM10sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJzEuNXB4JywgbnVsbCwgJzJweCddLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsICczMHB4JywgJzM2cHgnLCAnNDJweCcsIG51bGwsICc0OHB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXG4gICAgICBtYjogNSxcbiAgICB9LFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiBbJzE1cHgnLCAyLCBudWxsLCBudWxsLCBudWxsLCAnMTdweCcsIG51bGwsIDNdLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgJzIuMiddLFxuICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxuICAgIG1iOiAnMzBweCcsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/text-feature.js\n");

/***/ })

})