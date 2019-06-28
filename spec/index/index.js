require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toOfficialAccount__ = __webpack_require__(240);


var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__toOfficialAccount__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_toOfficialAccount_vue__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07bfcc04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_toOfficialAccount_vue__ = __webpack_require__(247);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(241)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07bfcc04"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_toOfficialAccount_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07bfcc04_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_toOfficialAccount_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/toOfficialAccount/toOfficialAccount.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] toOfficialAccount.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07bfcc04", Component.options)
  } else {
    hotAPI.reload("data-v-07bfcc04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 241:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_szDialog_v2__ = __webpack_require__(243);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'to_official_account',
  components: { szDialog: __WEBPACK_IMPORTED_MODULE_0__components_szDialog_v2__["a" /* default */] },
  data: function data() {
    return {
      type: '',
      supportOfficialAccount: false
    };
  },
  onLoad: function onLoad() {
    var queryObj = this.$root.$mp.query;
    this.type = queryObj.type;
    this.$track('page_view', {
      page_name: '预约引导页',
      page_source: this.type,
      abtest: '测试A'
    });
  },

  methods: {
    loadOfficialAccount: function loadOfficialAccount() {
      console.log('loadOfficialAccount');
      this.supportOfficialAccount = true;
    },
    errorOfficialAccount: function errorOfficialAccount() {
      console.log('errorOfficialAccount');
      this.supportOfficialAccount = false;
    }
  }
});

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_szDialog_v2_vue__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_184acb61_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_szDialog_v2_vue__ = __webpack_require__(246);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-184acb61"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_szDialog_v2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_184acb61_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_szDialog_v2_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/szDialog-v2.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] szDialog-v2.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-184acb61", Component.options)
  } else {
    hotAPI.reload("data-v-184acb61", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 244:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'szDialog',
  onLoad: function onLoad() {
    console.log(this.supportOfficialAccount);
  },
  data: function data() {
    return {
      officialAccountShow: false
      // isShowDialog: false
    };
  },

  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    supportOfficialAccount: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dialog"
  }, [(_vm.isShow) ? _c('div', {
    staticClass: "member-dialog"
  }, [_c('div', {
    staticClass: "member-dialog__mask",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.close
    }
  }), _vm._v(" "), _c('official-account', {
    staticClass: "official_account",
    attrs: {
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "load": _vm.loadOfficialAccount
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "member-dialog-body"
  }, [_c('button', {
    staticClass: "member-dialog-body__btn",
    attrs: {
      "open-type": "contact"
    }
  }, [_vm._v("回复“砍价1”关注公众号看报告")])], 1)], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-184acb61", esExports)
  }
}

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "to_off_acc"
  }, [_c('official-account', {
    staticClass: "official_account",
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "load": _vm.loadOfficialAccount,
      "error": _vm.errorOfficialAccount
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('h2', {
    staticClass: "special-text"
  }, [_vm._v("预约体检")]), _vm._v(" "), _c('h2', {
    staticClass: "special-text"
  }, [_vm._v("请进入"), _c('span', {
    staticClass: "color-blue"
  }, [_vm._v("“善诊”")]), _vm._v("公众号")]), _vm._v(" "), _c('div', {
    staticClass: "special-next"
  }, [_vm._v("为了保证您的个人信息安全，\n      "), _c('br'), _vm._v("预约/查看报告以及修改订单需进入公众号操作\n    ")], 1), _vm._v(" "), _c('div', {
    class: {
      'button': true, 'button_show': !_vm.supportOfficialAccount
    }
  }, [_c('button', {
    staticClass: "special-btn",
    attrs: {
      "open-type": "contact",
      "send-message-title": "请按照客服提示预约体检",
      "send-message-path": "../detail/main",
      "send-message-img": "https://static.shanzhen.me/images/mini/wx-cooperate/toOfficialAccount/send-message-img.png",
      "show-message-card": "true"
    }
  }, [_vm._v("回复“预约”进入公众号")])], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom-image"
  }, [_c('img', {
    class: {
      'taller': _vm.supportOfficialAccount
    },
    attrs: {
      "src": "https://static.shanzhen.me/images/mini/wx-cooperate/index/img-b.png"
    }
  })])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07bfcc04", esExports)
  }
}

/***/ })

},[239]);
//# sourceMappingURL=main.js.map