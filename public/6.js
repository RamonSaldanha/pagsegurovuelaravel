(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Pricing.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pages/Pricing.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_authMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/authMixin */ "./resources/js/mixins/authMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: '',
      email: '',
      password: '',
      "password_confirmation": '',
      errors: {
        name: '',
        email: '',
        password: '',
        'password_confirmation': ''
      }
    };
  },
  mixins: [_mixins_authMixin__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Pricing.vue?vue&type=template&id=45cad680&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pages/Pricing.vue?vue&type=template&id=45cad680& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row text-center" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", [_vm._v("Não paga nada")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-grid gap-2" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-lg btn-outline-primary",
                      attrs: { to: "/join" }
                    },
                    [_vm._v("Experimente grátis")]
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", [_vm._v("R$ 29,9 por mês")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-grid gap-2" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-lg btn-primary",
                      attrs: { to: "/join" }
                    },
                    [_vm._v("Adquirir licença")]
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(5),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", [_vm._v("R$ 21,90 por mês")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-grid gap-2" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-lg btn-primary",
                      attrs: { to: "/join" }
                    },
                    [_vm._v("Adquirir licença")]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
      },
      [
        _c("h1", { staticClass: "display-4" }, [_vm._v("Preços")]),
        _vm._v(" "),
        _c("p", { staticClass: "lead" }, [
          _vm._v(
            "\n\t\t\tCompare os preços e encontre um plano que se adeque ao seu orçamento.\n\t\t"
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "my-0 font-weight-normal" }, [_vm._v("Grátis")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "card-title pricing-card-title d-flex" }, [
      _c("div", { staticClass: "m-auto d-flex" }, [
        _vm._v("\n\t\t\t\t\t\t\t\tR$ 00\n\t\t\t\t\t\t\t\t"),
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c("div", { staticClass: "text-muted centavos mr-5" }, [
            _vm._v(",00")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-muted meses mr-4" }, [
            _vm._v("7 dias")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "my-0 font-weight-normal" }, [_vm._v("3 meses")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "card-title pricing-card-title d-flex" }, [
      _c("div", { staticClass: "m-auto d-flex" }, [
        _vm._v("\n\t\t\t\t\t\t\t\tR$ 89\n\t\t\t\t\t\t\t"),
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c("div", { staticClass: "text-muted centavos mr-5" }, [
            _vm._v(",70")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-muted meses mr-1" }, [
            _vm._v("3 meses")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "my-0 font-weight-normal" }, [_vm._v("6 meses")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", { staticClass: "card-title pricing-card-title d-flex" }, [
      _c("div", { staticClass: "m-auto d-flex" }, [
        _vm._v("\n\t\t\t\t\t\t\t\tR$ 131\n\t\t\t\t\t\t\t\t"),
        _c("div", { staticClass: "d-flex flex-column" }, [
          _c("div", { staticClass: "text-muted centavos mr-5" }, [
            _vm._v(",40")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-muted meses mr-1" }, [
            _vm._v("6 meses")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Pages/Pricing.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Pages/Pricing.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pricing_vue_vue_type_template_id_45cad680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pricing.vue?vue&type=template&id=45cad680& */ "./resources/js/components/Pages/Pricing.vue?vue&type=template&id=45cad680&");
/* harmony import */ var _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pricing.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pricing_vue_vue_type_template_id_45cad680___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pricing_vue_vue_type_template_id_45cad680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Pricing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Pricing.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Pages/Pricing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Pricing.vue?vue&type=template&id=45cad680&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Pages/Pricing.vue?vue&type=template&id=45cad680& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_45cad680___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pricing.vue?vue&type=template&id=45cad680& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pages/Pricing.vue?vue&type=template&id=45cad680&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_45cad680___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_vue_vue_type_template_id_45cad680___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);