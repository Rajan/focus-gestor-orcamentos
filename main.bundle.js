/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Dropdown {
  constructor(budget, state, budgetButton, stateButton) {
    this.budget = budget;
    this.state = state;
    this.budgetButton = budgetButton;
    this.stateButton = stateButton;
  }

  setDropdowns() {
    this.budget = document.getElementsByClassName('module-dropdown-list')[0];
    this.state = document.getElementsByClassName('module-dropdown-list')[1];
  }

  setButtons() {
    this.budgetButton = document.getElementsByClassName('module-dropdown-btn')[0];
    this.stateButton = document.getElementsByClassName('module-dropdown-btn')[1];
  }

  collapseDropdown(element) {
    element.className = 'layout-vertical-list module-dropdown-list is-collapsed';
  }

  hideDropdown(element) {
    element.className = 'layout-vertical-list module-dropdown-list is-hidden';
  }
}

module.exports = Dropdown;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Eu provavelmente não precisaria dessa classe, mas porventura vou utilizar
// Lembrar de complementar a classe no futuro, ou descontinuar a mesma.

class Screensize {
  constructor(width) {
    this.width = width;
  }

  widthChecker() {
    this.width = window.innerWidth;
  }
}

module.exports = Screensize;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_assets_scss_app_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_assets_scss_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_assets_scss_app_scss__);
// Importing CSS


// Import modules
const Dropdown = __webpack_require__(0);
const Screensize = __webpack_require__(1);

(function dropdownHandler() {
  let isBudgetCollapsed = false;
  let isStateCollapsed = false;
  const dropdown = new Dropdown();
  const screensize = new Screensize();

  dropdown.setDropdowns();
  dropdown.setButtons();
  screensize.widthChecker();

  // Dropdown do Orçamento
  (function budgetDropdown() {
    if (screensize.width > 600) {
      dropdownHighres(dropdown.budget, dropdown.budgetButton, isBudgetCollapsed);
    } else {
      dropdownValidator(dropdown.budget, dropdown.state, dropdown.budgetButton, dropdown.stateButton, isBudgetCollapsed, isStateCollapsed);
    }
  })();

  // Dropdown do Estado
  (function stateDropdown() {
    if (screensize.width > 600) {
      dropdownHighres(dropdown.state, dropdown.stateButton, isStateCollapsed);
    } else {
      dropdownValidator(dropdown.state, dropdown.budget, dropdown.stateButton, dropdown.budgetButton, isStateCollapsed, isBudgetCollapsed);
    }
  })();

  // Click events para dropdowns quando a resolução for > 600px
  function dropdownHighres(chosenDropdown, chosenDropdownButton, chosenDropdownCollapsed) {
    chosenDropdownButton.addEventListener('click', () => {
      if (!chosenDropdownCollapsed) {
        // Abre o dropdown do orçamento
        dropdown.collapseDropdown(chosenDropdown);
        chosenDropdownCollapsed = true;
      } else {
        // Fecha o dropdown do orcamento
        dropdown.hideDropdown(chosenDropdown);
        chosenDropdownCollapsed = false;
      }
    });
  }

  // Fecha o dropdown anterior se outro for aberto, caso a resolução seja < 600px
  // Refatorar esta função, está muito complexa, poderia ser mais simples e ter melhor perfomace
  function dropdownValidator(firstChosenDropdown, secondChosenDropdown, firstChosenDropdownButton, secondChosenDropdownButton, firstChosenDropdownCollapsed, secondChosenDropdownCollapsed) {
    firstChosenDropdownButton.addEventListener('click', () => {
      if (!firstChosenDropdownCollapsed) {
        secondChosenDropdownCollapsed = false;
        firstChosenDropdownCollapsed = true;
        dropdown.hideDropdown(secondChosenDropdown);
        dropdown.collapseDropdown(firstChosenDropdown);
      } else {
        dropdown.hideDropdown(firstChosenDropdown);
        firstChosenDropdownCollapsed = false;
      }
    });

    secondChosenDropdownButton.addEventListener('click', () => {
      if (!secondChosenDropdownCollapsed) {
        firstChosenDropdownCollapsed = false;
        secondChosenDropdownCollapsed = true;
        dropdown.hideDropdown(firstChosenDropdown);
        dropdown.collapseDropdown(secondChosenDropdown);
      } else {
        dropdown.hideDropdown(secondChosenDropdown);
        secondChosenDropdownCollapsed = false;
      }
    });
  }
})();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map