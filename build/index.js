/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js"
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");


const sendPost = async (url, data, headers = {}) => {
    const response = await fetch(_store_store__WEBPACK_IMPORTED_MODULE_1__.store.origin + url, {
        method: 'POST',
        headers,
        body: data,
    });
    const message = await response.text();
    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockedEmailError: () => (/* binding */ blockedEmailError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const blockedEmailError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headlessError: () => (/* binding */ headlessError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const headlessError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitRateError: () => (/* binding */ limitRateError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const limitRateError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/index.js"
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/@emailjs/browser/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/@emailjs/browser/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,
    EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus,
});


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options, origin = 'https://api.emailjs.com') => {
    if (!options)
        return;
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (serviceID, templateID, templateParams, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = opts.storageProvider || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__.validateTemplateParams)(templateParams);
    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, templateParams)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (serviceID, templateID, form, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, formData)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error') {
        this.status = _status;
        this.text = _text;
    }
}


/***/ },

/***/ "./node_modules/@emailjs/browser/es/store/store.js"
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js");

const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)(),
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildOptions: () => (/* binding */ buildOptions)
/* harmony export */ });
const buildOptions = (options) => {
    if (!options)
        return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebStorage: () => (/* binding */ createWebStorage)
/* harmony export */ });
const createWebStorage = () => {
    if (typeof localStorage === 'undefined')
        return;
    return {
        get: (key) => Promise.resolve(localStorage.getItem(key)),
        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        remove: (key) => Promise.resolve(localStorage.removeItem(key)),
    };
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlockedValueInParams: () => (/* binding */ isBlockedValueInParams)
/* harmony export */ });
/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js");

const isBlockListDisabled = (options) => {
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
    if (isBlockListDisabled(options))
        return false;
    (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string')
        return false;
    return options.list.includes(value);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHeadless: () => (/* binding */ isHeadless)
/* harmony export */ });
const isHeadless = (navigator) => {
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLimitRateHit: () => (/* binding */ isLimitRateHit)
/* harmony export */ });
/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js");

const getLeftTime = async (id, throttle, storage) => {
    const lastTime = Number((await storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
    if (!options.throttle || !storage) {
        return false;
    }
    (0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateBlockListParams: () => (/* binding */ validateBlockListParams)
/* harmony export */ });
const validateBlockListParams = (list, watchVariable) => {
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
const validateForm = (form) => {
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateLimitRateParams: () => (/* binding */ validateLimitRateParams)
/* harmony export */ });
const validateLimitRateParams = (throttle, id) => {
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTemplateParams: () => (/* binding */ validateTemplateParams)
/* harmony export */ });
const validateTemplateParams = (templateParams) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};


/***/ },

/***/ "./src/scripts/ContactForm.js"
/*!************************************!*\
  !*** ./src/scripts/ContactForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* Hallmark · component: contact-form · genre: editorial · theme: custom (Martinez Farming brand)
 * pre-emit critique: P5 H4 E5 S4 R4 V4
 * states applied: default · hover · focus-visible · active · disabled · loading · error · success
 * contrast: pass — raiz-profunda text on white card; red-700 error text; white on raiz-profunda button
 *
 * DEPENDENCIAS (instalar):  npm install @emailjs/browser react-google-recaptcha
 */





/* ------------------------------------------------------------------
   CONFIGURACIÓN — rellena estas claves cuando estén listas.
   Mientras estén vacías, el envío se SIMULA (no se llama a EmailJS) para
   poder probar la UI. En cuanto pongas las 3 claves, se activa el envío real.
   ------------------------------------------------------------------ */

const EMAILJS_SERVICE_ID = ""; // TODO(Daniel)
const EMAILJS_TEMPLATE_ID = ""; // TODO(Daniel)
const EMAILJS_PUBLIC_KEY = ""; // TODO(Daniel)
const RECAPTCHA_SITE_KEY = ""; // TODO(Daniel) — déjalo vacío para ocultar el captcha en dev

// Los nombres de estos campos deben coincidir con las variables del template de EmailJS.
const TEMPLATE_PARAMS = {
  name: "from_name",
  email: "reply_to",
  phone: "phone",
  service: "service",
  message: "message"
};

// Opciones del dropdown — los 4 servicios del cuestionario.
const SERVICE_OPTIONS = ["General Labor", "Vineyard Installations", "Vineyard Management", "Consulting"];
const isConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
const EMPTY = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};

/* ------------------------------------------------------------------
   Validación
   ------------------------------------------------------------------ */
function validateForm(values) {
  const e = {};
  if (!values.name.trim()) e.name = "Please enter your name.";
  if (!values.email.trim()) e.email = "Please enter your email.";else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email address.";
  if (!values.phone.trim()) e.phone = "Please enter your phone number.";else if (!/^[\d\s()+\-.]{7,}$/.test(values.phone)) e.phone = "Enter a valid phone number.";
  if (!values.message.trim()) e.message = "Please enter a message.";
  return e;
}

/* ------------------------------------------------------------------
   Iconos
   ------------------------------------------------------------------ */
const Spinner = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
  className: "h-5 w-5 animate-spin",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
    className: "opacity-90",
    fill: "currentColor",
    d: "M4 12a8 8 0 0 1 8-8V0C5.37 0 0 5.37 0 12h4Z"
  })]
});
const CheckIcon = ({
  className = "h-6 w-6"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
    d: "M20 6 9 17l-5-5"
  })
});
const AlertIcon = ({
  className = "h-5 w-5"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
  className: className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
    d: "M12 8v4M12 16h.01"
  })]
});

/* ------------------------------------------------------------------
   Campo reutilizable
   ------------------------------------------------------------------ */
function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  textarea,
  options,
  placeholder,
  ...rest
}) {
  const base = "w-full rounded-md border bg-white px-4 py-3 text-raiz-profunda placeholder:text-stone-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo/60";
  const tone = error ? "border-red-400 focus:border-red-500" : "border-stone-300 hover:border-stone-400 focus:border-olivar-vivo";
  const shared = {
    id,
    name: id,
    value,
    onChange,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${id}-error` : undefined
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
      htmlFor: id,
      className: "mb-1.5 block text-sm font-medium text-raiz-profunda",
      children: label
    }), options ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
        ...shared,
        className: `${base} ${tone} appearance-none pr-10 ${!value ? "text-stone-400" : ""}`,
        ...rest,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
          value: "",
          children: placeholder || "Select an option"
        }), options.map(o => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
          value: o,
          className: "text-raiz-profunda",
          children: o
        }, o))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
        className: "pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
          d: "m6 9 6 6 6-6"
        })
      })]
    }) : textarea ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
      ...shared,
      placeholder: placeholder,
      className: `${base} ${tone} min-h-[8rem] resize-y`,
      ...rest
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      ...shared,
      type: type,
      placeholder: placeholder,
      className: `${base} ${tone}`,
      ...rest
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
      id: `${id}-error`,
      className: "mt-1.5 flex items-center gap-1.5 text-xs text-red-700",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AlertIcon, {
        className: "h-3.5 w-3.5 shrink-0"
      }), " ", error]
    })]
  });
}

/* ------------------------------------------------------------------
   CONTACT FORM
   ------------------------------------------------------------------ */
function ContactForm() {
  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(EMPTY);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | loading | success | error
  const [captchaToken, setCaptchaToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const recaptchaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setValues(v => ({
      ...v,
      [name]: value
    }));
    if (errors[name]) setErrors(er => ({
      ...er,
      [name]: undefined
    }));
  };
  const resetCaptcha = () => {
    if (recaptchaRef.current) recaptchaRef.current.reset();
    setCaptchaToken(null);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const found = validateForm(values);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    if (RECAPTCHA_SITE_KEY && !captchaToken) {
      setErrors({
        captcha: "Please confirm you're not a robot."
      });
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      if (isConfigured) {
        await _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          [TEMPLATE_PARAMS.name]: values.name,
          [TEMPLATE_PARAMS.email]: values.email,
          [TEMPLATE_PARAMS.phone]: values.phone,
          [TEMPLATE_PARAMS.service]: values.service,
          [TEMPLATE_PARAMS.message]: values.message,
          "g-recaptcha-response": captchaToken || ""
        }, {
          publicKey: EMAILJS_PUBLIC_KEY
        });
      } else {
        // EmailJS sin configurar — envío simulado para probar la UI.
        console.warn("ContactForm: EmailJS sin configurar — envío simulado.");
        await new Promise(r => setTimeout(r, 900));
      }
      setStatus("success");
      setValues(EMPTY);
      resetCaptcha();
    } catch (err) {
      console.error("ContactForm: error al enviar", err);
      setStatus("error");
      resetCaptcha();
    }
  };

  // ---- Estado de éxito ----
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-olivar-vivo/15 text-olivar-vivo",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CheckIcon, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        className: "font-display text-2xl text-raiz-profunda",
        children: "Thank you \u2014 message sent"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "mt-2 text-stone-600",
        children: "We'll be in touch shortly. Gracias por escribirnos."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        type: "button",
        onClick: () => setStatus("idle"),
        className: "mt-6 inline-flex items-center rounded-md border border-stone-300 px-5 py-2.5 text-sm font-bold text-raiz-profunda transition-colors hover:border-olivar-vivo hover:text-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 active:scale-[0.98]",
        children: "Send another message"
      })]
    });
  }
  const loading = status === "loading";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
    onSubmit: handleSubmit,
    noValidate: true,
    className: "mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo",
        children: "Contact us"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        className: "mt-1 font-display text-2xl text-raiz-profunda sm:text-3xl",
        children: "Let's grow together"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "mt-2 text-sm text-stone-600",
        children: "Tell us about your vineyard and we'll get back to you."
      })]
    }), status === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      role: "alert",
      className: "mb-5 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AlertIcon, {
        className: "mt-0.5 h-4 w-4 shrink-0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        children: "Something went wrong sending your message. Please try again, or call us at 805-423-9303."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Field, {
        id: "name",
        label: "Name",
        value: values.name,
        onChange: handleChange,
        error: errors.name,
        autoComplete: "name",
        placeholder: "Your name",
        disabled: loading
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "grid gap-4 sm:grid-cols-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Field, {
          id: "email",
          label: "Email",
          type: "email",
          value: values.email,
          onChange: handleChange,
          error: errors.email,
          autoComplete: "email",
          placeholder: "you@email.com",
          disabled: loading
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Field, {
          id: "phone",
          label: "Phone",
          type: "tel",
          value: values.phone,
          onChange: handleChange,
          error: errors.phone,
          autoComplete: "tel",
          placeholder: "(805) 000-0000",
          disabled: loading
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Field, {
        id: "service",
        label: "Service of interest",
        value: values.service,
        onChange: handleChange,
        options: SERVICE_OPTIONS,
        placeholder: "Select a service (optional)",
        disabled: loading
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Field, {
        id: "message",
        label: "Message",
        textarea: true,
        value: values.message,
        onChange: handleChange,
        error: errors.message,
        placeholder: "How can we help?",
        disabled: loading
      }), RECAPTCHA_SITE_KEY && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__["default"], {
          ref: recaptchaRef,
          sitekey: RECAPTCHA_SITE_KEY,
          onChange: token => {
            setCaptchaToken(token);
            if (errors.captcha) setErrors(er => ({
              ...er,
              captcha: undefined
            }));
          },
          onExpired: () => setCaptchaToken(null)
        }), errors.captcha && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "mt-1.5 flex items-center gap-1.5 text-xs text-red-700",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AlertIcon, {
            className: "h-3.5 w-3.5 shrink-0"
          }), " ", errors.captcha]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        type: "submit",
        disabled: loading,
        className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-raiz-profunda px-6 py-3.5 font-sans font-bold text-white transition-colors hover:bg-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60",
        children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Spinner, {}), " Sending\u2026"]
        }) : "Send message"
      }), !isConfigured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        className: "text-center text-[11px] text-stone-400",
        children: "Modo demo: el env\xEDo se simula hasta configurar EmailJS."
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ },

/***/ "./src/scripts/Footer.js"
/*!*******************************!*\
  !*** ./src/scripts/Footer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* Hallmark · component: footer · genre: editorial · theme: custom (Martinez Farming brand)
 * pre-emit critique: P5 H4 E4 S4 R5 V4
 * states applied: default · hover · focus-visible · active (links, social, back-to-top)
 * states N/A: loading · error · success (footer has no async surface)
 * contrast: pass — white/tierra-suave text on noche-vinedo; noche-honda bottom band
 */



/* ------------------------------------------------------------------
   DATOS — edita aquí, no en el markup.
   ------------------------------------------------------------------ */

// Estampado de apoyo (media library). TODO(Daniel): si al migrar a producción
// re-subes el archivo, la carpeta AAAA/MM puede cambiar — actualiza esta ruta.
// Alternativa más robusta: pásalo desde functions.php con wp_localize_script.

const STAMP_URL = "/wp-content/uploads/2026/06/Estampados-MF_4-scaled.png";

// Imagotipo secundario (versión CLARA — el footer es de fondo oscuro/azul).
const LOGO_URL = "/wp-content/uploads/2026/06/MF_Imagotipo_secundario-scaled.png";
const CONTACT = {
  phone: "805-423-9303",
  phoneHref: "tel:+18054239303",
  email: "martinezfarming@yahoo.com",
  // TODO: pendiente migrar a correo de dominio
  emailHref: "mailto:martinezfarming@yahoo.com",
  location: "Paso Robles, CA",
  mapsHref: "#" // TODO(Daniel): enlace externo de Google Maps
};
const SOCIALS = [{
  name: "Instagram",
  href: "https://instagram.com/martinez_farming",
  icon: "instagram"
}, {
  name: "Facebook",
  href: "https://facebook.com/MartinezFarming",
  icon: "facebook"
}, {
  name: "YouTube",
  href: "https://youtube.com/@MartinezFarmingLLC",
  icon: "youtube"
}, {
  name: "TikTok",
  href: "#",
  icon: "tiktok"
} // TODO(Daniel): URL de TikTok
];
const EXPLORE = [{
  label: "Home",
  href: "/"
}, {
  label: "About",
  href: "/about"
}, {
  label: "Services",
  href: "/services"
}, {
  label: "Contact Us",
  href: "/contact"
}];
const SERVICES = [{
  name: "General Labor",
  href: "/services/general-labor"
}, {
  name: "Vineyard Installations",
  href: "/services/vineyard-installations"
}, {
  name: "Vineyard Management",
  href: "/services/vineyard-management"
}, {
  name: "Consulting",
  href: "/services/consulting"
}];

// Área de servicio (cuestionario): Central Coast.
const SERVICE_AREA = "San Luis Obispo · Monterey · Santa Barbara counties";

/* ------------------------------------------------------------------
   ICONOS — SVG inline (mismo set que el Navbar; mantiene el componente
   autocontenido). Más adelante puedes extraer un módulo Icons compartido.
   ------------------------------------------------------------------ */

const Icon = ({
  name,
  className = "h-4 w-4"
}) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  };
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "phone":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        ...stroke,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
        })
      });
    case "mail":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        ...common,
        ...stroke,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "2",
          y: "4",
          width: "20",
          height: "16",
          rx: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "m22 7-10 6L2 7"
        })]
      });
    case "pin":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        ...common,
        ...stroke,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "12",
          cy: "10",
          r: "3"
        })]
      });
    case "arrow-up":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        ...stroke,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M12 19V5M5 12l7-7 7 7"
        })
      });
    case "award":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        ...common,
        ...stroke,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "12",
          cy: "8",
          r: "6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M8.21 13.89 7 22l5-3 5 3-1.21-8.12"
        })]
      });
    case "instagram":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "2",
          y: "2",
          width: "20",
          height: "20",
          rx: "5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "17.5",
          cy: "6.5",
          r: "1",
          fill: "currentColor",
          stroke: "none"
        })]
      });
    case "facebook":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"
        })
      });
    case "youtube":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M23 12s0-3.2-.41-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.08 12 5.08 12 5.08s-7.3 0-8.83.41a2.5 2.5 0 0 0-1.76 1.77C1 8.8 1 12 1 12s0 3.2.41 4.74a2.5 2.5 0 0 0 1.76 1.77c1.53.41 8.83.41 8.83.41s7.3 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.02V8.98L15.5 12 10 15.02Z"
        })
      });
    case "tiktok":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.5c-1.2.1-2.4-.2-3.5-.8v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3h2.6Z"
        })
      });
    default:
      return null;
  }
};

/* Reutilizable: enlace de columna con micro-interacción de acento olivo. */
const ColLink = ({
  href,
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
  href: href,
  className: "group inline-flex items-center gap-2 py-1.5 text-sm text-tierra-suave/85 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none rounded-sm",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    className: "h-px w-0 bg-olivar-vivo transition-all duration-200 group-hover:w-4"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    children: children
  })]
});
const ColHeading = ({
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
  className: "mb-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white",
  children: children
});

/* ------------------------------------------------------------------
   FOOTER
   ------------------------------------------------------------------ */

function Footer() {
  const scrollTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  const year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
    className: "relative overflow-hidden bg-noche-vinedo font-sans text-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": "true",
      className: "pointer-events-none absolute inset-0 bg-repeat",
      style: {
        backgroundImage: `url("${STAMP_URL}")`,
        backgroundSize: "auto 200px",
        opacity: 0.12
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "h-1 w-full bg-olivar-vivo/70"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative mx-auto max-w-7xl px-4 sm:px-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "lg:col-span-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/",
            className: "group inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo",
            "aria-label": "Martinez Farming \u2014 inicio",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: LOGO_URL,
              alt: "Martinez Farming",
              className: "h-12 w-auto transition-opacity group-hover:opacity-90"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "mt-6 max-w-sm font-display text-lg leading-snug text-tierra-suave",
            children: "We don't just grow grapes. We grow trust."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mt-6 inline-flex items-start gap-2.5 rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
              name: "award",
              className: "mt-0.5 h-4 w-4 shrink-0 text-olivar-vivo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
              className: "text-xs leading-snug text-tierra-suave",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "font-bold text-white",
                children: "2026 SLO County Wine Award"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Winegrape Grower of the Year"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "mt-6 flex items-center gap-2",
            children: SOCIALS.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: s.href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": s.name,
              className: "grid h-9 w-9 place-items-center rounded-full bg-white/5 text-tierra-suave transition-colors hover:bg-olivar-vivo hover:text-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-95",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
                name: s.icon,
                className: "h-4 w-4"
              })
            }, s.name))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
          className: "lg:col-span-2",
          "aria-label": "Footer \u2014 explore",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Explore"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "flex flex-col",
            children: EXPLORE.map(l => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColLink, {
                href: l.href,
                children: l.label
              })
            }, l.label))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
          className: "lg:col-span-3",
          "aria-label": "Footer \u2014 services",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "flex flex-col",
            children: SERVICES.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColLink, {
                href: s.href,
                children: s.name
              })
            }, s.name))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "lg:col-span-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Reach us"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
            className: "flex flex-col gap-3 text-sm text-tierra-suave/85",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: CONTACT.phoneHref,
                className: "group inline-flex items-center gap-2.5 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
                  name: "phone",
                  className: "h-4 w-4 text-olivar-vivo"
                }), " ", CONTACT.phone]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: CONTACT.emailHref,
                className: "group inline-flex items-center gap-2.5 break-all transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
                  name: "mail",
                  className: "h-4 w-4 shrink-0 text-olivar-vivo"
                }), " ", CONTACT.email]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: CONTACT.mapsHref,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group inline-flex items-start gap-2.5 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
                  name: "pin",
                  className: "mt-0.5 h-4 w-4 shrink-0 text-olivar-vivo"
                }), " ", CONTACT.location]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
            className: "mt-4 text-xs leading-relaxed text-tierra-suave/60",
            children: ["Serving the Central Coast", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), SERVICE_AREA]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "relative -mx-4 border-t border-white/10 bg-noche-honda/60 px-4 sm:-mx-6 sm:px-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex flex-col items-center justify-between gap-3 py-5 text-xs text-tierra-suave/70 sm:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
            children: ["\xA9 ", year, " Martinez Farming LLC. All rights reserved."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "Crafted by 828 Marketing Solutions"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              type: "button",
              onClick: scrollTop,
              "aria-label": "Volver arriba",
              className: "inline-flex items-center gap-1.5 rounded-sm border border-white/15 px-2.5 py-1.5 text-tierra-suave transition-colors hover:border-olivar-vivo hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-noche-honda active:scale-95",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
                name: "arrow-up",
                className: "h-3.5 w-3.5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "hidden sm:inline",
                children: "Top"
              })]
            })]
          })]
        })
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ },

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* Hallmark · component: navbar · genre: editorial · theme: custom (Martinez Farming brand)
 * pre-emit critique: P5 H4 E5 S4 R5 V4
 * states applied: default · hover · focus-visible · active · open/expanded · mobile-open · disabled-ready
 * states N/A for navigation: loading · error · success (no async surface)
 * contrast: pass — text-white on raiz-profunda, raiz-profunda on tierra-suave, raiz-profunda on white
 */



/* ------------------------------------------------------------------
   DATOS — edita aquí, no en el markup.
   ------------------------------------------------------------------ */

// Imagotipo secundario (media library). Debe ser la versión CLARA del logo,
// porque la nav es de fondo oscuro (morado). TODO(Daniel): si re-subes el
// archivo en producción, la carpeta AAAA/MM puede cambiar — actualiza la ruta.

const LOGO_URL = "/wp-content/uploads/2026/06/MF_Imagotipo_secundario-scaled.png";

// TODO(Daniel): el correo está pendiente de migrar de Yahoo a uno de dominio.
const CONTACT = {
  phone: "805-423-9303",
  phoneHref: "tel:+18054239303",
  email: "martinezfarming@yahoo.com",
  emailHref: "mailto:martinezfarming@yahoo.com",
  // TODO(Daniel): pega aquí el enlace externo de Google Maps que mencionaste.
  mapsHref: "#",
  mapsLabel: "Paso Robles, CA"
};

// Handles confirmados del cuestionario. TODO: confirmar URL de TikTok.
const SOCIALS = [{
  name: "Instagram",
  href: "https://instagram.com/martinez_farming",
  icon: "instagram"
}, {
  name: "Facebook",
  href: "https://facebook.com/MartinezFarming",
  icon: "facebook"
}, {
  name: "YouTube",
  href: "https://youtube.com/@MartinezFarmingLLC",
  icon: "youtube"
}, {
  name: "TikTok",
  href: "#",
  icon: "tiktok"
} // TODO(Daniel): URL de TikTok
];
const NAV_LINKS = [{
  label: "Home",
  href: "/"
}, {
  label: "About",
  href: "/about"
},
// Services se renderiza aparte (tiene dropdown).
{
  label: "Contact Us",
  href: "/contact",
  cta: true
}];

// Los 4 servicios del cuestionario (copy del cliente, en inglés).
// TODO(Daniel): confirma los slugs de las páginas de servicio.
const SERVICES = [{
  name: "General Labor",
  desc: "Skilled field crews",
  href: "/services/general-labor"
}, {
  name: "Vineyard Installations",
  desc: "New & established vineyards",
  href: "/services/vineyard-installations"
}, {
  name: "Vineyard Management",
  desc: "Season-round stewardship",
  href: "/services/vineyard-management"
}, {
  name: "Consulting",
  desc: "Expert guidance",
  href: "/services/consulting"
}];

/* ------------------------------------------------------------------
   ICONOS — SVG inline para no añadir dependencias al theme.
   ------------------------------------------------------------------ */

const Icon = ({
  name,
  className = "h-4 w-4"
}) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  };
  switch (name) {
    case "phone":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
        })
      });
    case "mail":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "2",
          y: "4",
          width: "20",
          height: "16",
          rx: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "m22 7-10 6L2 7"
        })]
      });
    case "pin":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "12",
          cy: "10",
          r: "3"
        })]
      });
    case "chevron":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "m6 9 6 6 6-6"
        })
      });
    case "menu":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M3 6h18M3 12h18M3 18h18"
        })
      });
    case "close":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M18 6 6 18M6 6l12 12"
        })
      });
    case "instagram":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        ...common,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "2",
          y: "2",
          width: "20",
          height: "20",
          rx: "5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
          cx: "17.5",
          cy: "6.5",
          r: "1",
          fill: "currentColor",
          stroke: "none"
        })]
      });
    case "facebook":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"
        })
      });
    case "youtube":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M23 12s0-3.2-.41-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.08 12 5.08 12 5.08s-7.3 0-8.83.41a2.5 2.5 0 0 0-1.76 1.77C1 8.8 1 12 1 12s0 3.2.41 4.74a2.5 2.5 0 0 0 1.76 1.77c1.53.41 8.83.41 8.83.41s7.3 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.02V8.98L15.5 12 10 15.02Z"
        })
      });
    case "tiktok":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        ...common,
        fill: "currentColor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.5c-1.2.1-2.4-.2-3.5-.8v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3h2.6Z"
        })
      });
    default:
      return null;
  }
};

/* ------------------------------------------------------------------
   NAVBAR
   ------------------------------------------------------------------ */

function Navbar() {
  const [topbarVisible, setTopbarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // se oculta al bajar, vuelve al subir
  const [servicesOpen, setServicesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // dropdown desktop
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // menú móvil
  const [mobileServicesOpen, setMobileServicesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // acordeón móvil
  const servicesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  /* --- Topbar: ocultar en scroll down, mostrar en scroll up --- */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 80) setTopbarVisible(true);else if (y > lastY + 4) setTopbarVisible(false);else if (y < lastY - 4) setTopbarVisible(true);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --- Cerrar dropdown al click fuera --- */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onClick = e => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  /* --- Escape cierra todo; bloquear scroll con menú móvil abierto --- */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKey = e => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const closeMobile = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, []);

  // utilidades de foco reutilizables (sobre fondo oscuro / claro)
  const ringDark = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda rounded-sm";
  const ringLight = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raiz-profunda focus-visible:ring-offset-2 focus-visible:ring-offset-tierra-suave rounded-sm";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "fixed inset-x-0 top-0 z-50 font-sans",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `overflow-hidden bg-tierra-suave text-raiz-profunda transition-[max-height,opacity] duration-300 ease-out ${topbarVisible ? "max-h-12 opacity-100" : "max-h-0 opacity-0"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[13px] sm:px-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center gap-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: CONTACT.phoneHref,
            className: `group inline-flex items-center gap-2 transition-colors hover:text-noche-vinedo ${ringLight}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
              name: "phone",
              className: "h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "hidden font-medium sm:inline",
              children: CONTACT.phone
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: CONTACT.emailHref,
            className: `group inline-flex items-center gap-2 transition-colors hover:text-noche-vinedo ${ringLight}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
              name: "mail",
              className: "h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "hidden font-medium md:inline",
              children: CONTACT.email
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: CONTACT.mapsHref,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `group inline-flex items-center gap-1.5 font-medium tracking-wide transition-colors hover:text-noche-vinedo ${ringLight}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
            name: "pin",
            className: "h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "underline-offset-4 group-hover:underline",
            children: CONTACT.mapsLabel
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex items-center gap-1",
          children: SOCIALS.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: s.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": s.name,
            className: `grid h-7 w-7 place-items-center rounded-full text-raiz-profunda/80 transition-all hover:bg-raiz-profunda hover:text-tierra-suave active:scale-95 ${ringLight}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
              name: s.icon,
              className: "h-4 w-4"
            })
          }, s.name))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
      className: "border-b border-white/10 bg-raiz-profunda text-white shadow-[0_1px_24px_rgba(0,0,0,0.18)]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/",
          className: `group flex items-center ${ringDark}`,
          "aria-label": "Martinez Farming \u2014 inicio",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: LOGO_URL,
            alt: "Martinez Farming",
            className: "h-9 w-auto transition-opacity group-hover:opacity-90 sm:h-10"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
          className: "hidden items-center gap-1 lg:flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavItem, {
              href: "/",
              ring: ringDark,
              children: "Home"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavItem, {
              href: "/about",
              ring: ringDark,
              children: "About"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            ref: servicesRef,
            className: "relative",
            onMouseEnter: () => setServicesOpen(true),
            onMouseLeave: () => setServicesOpen(false),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              type: "button",
              "aria-haspopup": "true",
              "aria-expanded": servicesOpen,
              onClick: () => setServicesOpen(v => !v),
              className: `inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white ${ringDark}`,
              children: ["Services", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
                name: "chevron",
                className: `h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: `absolute left-0 top-full w-[22rem] origin-top pt-2 transition-all duration-200 ${servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                className: "overflow-hidden rounded-md border border-black/5 bg-white py-2 text-raiz-profunda shadow-xl",
                children: SERVICES.map(svc => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                    href: svc.href,
                    className: "group flex flex-col gap-0.5 border-l-2 border-transparent px-5 py-2.5 transition-colors hover:border-olivar-vivo hover:bg-tierra-suave/25 focus-visible:bg-tierra-suave/25 focus-visible:outline-none",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "font-display text-[15px] leading-tight text-raiz-profunda transition-colors group-hover:text-noche-vinedo",
                      children: svc.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                      className: "text-xs text-raiz-profunda/55",
                      children: svc.desc
                    })]
                  })
                }, svc.name))
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavItem, {
              href: "/locations",
              ring: ringDark,
              children: "Locations"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            className: "ml-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/contact",
              className: `inline-flex items-center rounded-sm border border-white/35 px-4 py-2 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-raiz-profunda active:scale-[0.98] ${ringDark}`,
              children: "Contact Us"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          type: "button",
          "aria-label": mobileOpen ? "Cerrar menú" : "Abrir menú",
          "aria-expanded": mobileOpen,
          onClick: () => setMobileOpen(v => !v),
          className: `grid h-10 w-10 place-items-center rounded-sm text-white lg:hidden ${ringDark}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
            name: mobileOpen ? "close" : "menu",
            className: "h-6 w-6"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      onClick: closeMobile,
      className: `fixed inset-0 z-40 bg-raiz-honda/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `fixed right-0 top-0 z-50 flex h-full w-[min(20rem,85vw)] flex-col bg-raiz-profunda text-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex h-16 items-center justify-between border-b border-white/10 px-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: LOGO_URL,
          alt: "Martinez Farming",
          className: "h-8 w-auto"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          type: "button",
          "aria-label": "Cerrar men\xFA",
          onClick: closeMobile,
          className: `grid h-10 w-10 place-items-center rounded-sm ${ringDark}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
            name: "close",
            className: "h-6 w-6"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
        className: "flex-1 overflow-y-auto px-3 py-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/",
          onClick: closeMobile,
          className: `block rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`,
          children: "Home"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/about",
          onClick: closeMobile,
          className: `block rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`,
          children: "About"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
          type: "button",
          "aria-expanded": mobileServicesOpen,
          onClick: () => setMobileServicesOpen(v => !v),
          className: `flex w-full items-center justify-between rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`,
          children: ["Services", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
            name: "chevron",
            className: `h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: `overflow-hidden transition-[max-height] duration-300 ease-out ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "ml-3 border-l border-white/15 pl-3",
            children: SERVICES.map(svc => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: svc.href,
                onClick: closeMobile,
                className: `block rounded-sm px-3 py-2.5 hover:bg-white/5 ${ringDark}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "block font-display text-[15px]",
                  children: svc.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "block text-xs text-tierra-suave/70",
                  children: svc.desc
                })]
              })
            }, svc.name))
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/locations",
          onClick: closeMobile,
          className: `block rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`,
          children: "Locations"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/contact",
          onClick: closeMobile,
          className: `mt-4 block rounded-sm border border-olivar-vivo bg-olivar-vivo px-3 py-3 text-center text-base font-bold text-raiz-profunda transition-colors hover:bg-transparent hover:text-olivar-vivo ${ringDark}`,
          children: "Contact Us"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "border-t border-white/10 px-5 py-4 text-sm text-tierra-suave",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: CONTACT.phoneHref,
          className: "flex items-center gap-2 py-1 hover:text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
            name: "phone",
            className: "h-4 w-4"
          }), " ", CONTACT.phone]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: CONTACT.emailHref,
          className: "flex items-center gap-2 py-1 hover:text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
            name: "mail",
            className: "h-4 w-4"
          }), " ", CONTACT.email]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "mt-3 flex items-center gap-2",
          children: SOCIALS.map(s => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: s.href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": s.name,
            className: `grid h-9 w-9 place-items-center rounded-full bg-white/5 transition-colors hover:bg-olivar-vivo hover:text-raiz-profunda ${ringDark}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
              name: s.icon,
              className: "h-4 w-4"
            })
          }, s.name))
        })]
      })]
    })]
  });
}

/* Link de nav desktop con subrayado animado (acento olivar). */
function NavItem({
  href,
  children,
  ring
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
    href: href,
    className: `group relative px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white ${ring}`,
    children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "absolute inset-x-3.5 -bottom-px h-0.5 origin-left scale-x-0 bg-olivar-vivo transition-transform duration-200 group-hover:scale-x-100"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "./src/scripts/home.js"
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
() {

/* Home page interactions (vanilla, no React).
   Cada bloque se auto-protege: si el elemento no existe, no hace nada — así es
   seguro que se cargue en todas las páginas vía build/index.js. */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- 1. Reveal on enter ---------- */
function initReveals() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px"
  });
  els.forEach(el => io.observe(el));
}

/* ---------- 2. Count-up ---------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;
  const run = el => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    if (isNaN(target)) return;
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = String(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) {
    counters.forEach(run);
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        run(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.6
  });
  counters.forEach(el => io.observe(el));
}

/* ---------- 3. Season cycle (slider <-> scroll) ---------- */
function initSeasonCycle() {
  const track = document.getElementById("season-track");
  const range = document.getElementById("season-range");
  if (!track || !range) return;
  const stages = track.querySelectorAll(".season-stage");
  if (!stages.length) return;
  let syncing = false;

  // range -> scroll
  range.addEventListener("input", () => {
    syncing = true;
    const idx = parseInt(range.value, 10);
    track.scrollTo({
      left: stages[idx].offsetLeft - track.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth"
    });
    window.setTimeout(() => syncing = false, 400);
  });

  // scroll -> range
  let ticking = false;
  track.addEventListener("scroll", () => {
    if (syncing || ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      if (String(idx) !== range.value) range.value = String(idx);
      ticking = false;
    });
  }, {
    passive: true
  });
}

/* ---------- 4. Parallax ---------- */
function initParallax() {
  const layers = document.querySelectorAll("[data-parallax]");
  if (!layers.length || reduceMotion) return;
  let ticking = false;
  const update = () => {
    layers.forEach(layer => {
      const section = layer.closest("section") || layer.parentElement;
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      // desplazamiento sutil relativo al centro de la ventana
      const offset = (rect.top - window.innerHeight / 2) * -0.08;
      layer.style.transform = `scale(1.1) translateY(${offset.toFixed(1)}px)`;
    });
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, {
    passive: true
  });
  update();
}
function initHome() {
  initReveals();
  initCounters();
  initSeasonCycle();
  initParallax();
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHome);
} else {
  initHome();
}

/***/ },

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ },

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
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

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
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


/***/ },

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ },

/***/ "./node_modules/object-assign/index.js"
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ },

/***/ "./node_modules/prop-types/checkPropTypes.js"
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ },

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js"
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

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
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
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
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
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
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
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
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
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
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
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
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
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
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
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
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
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
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
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
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
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
            // Iterator will provide entry [k,v] tuples rather than values.
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
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
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


/***/ },

/***/ "./node_modules/prop-types/index.js"
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else // removed by dead control flow
{}


/***/ },

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ },

/***/ "./node_modules/prop-types/lib/has.js"
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
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

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
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


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/index.js"
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ },

/***/ "./node_modules/react-async-script/lib/esm/async-script-loader.js"
/*!************************************************************************!*\
  !*** ./node_modules/react-async-script/lib/esm/async-script-loader.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeAsyncScript)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }




var SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function

var idCount = 0;
function makeAsyncScript(getScriptURL, options) {
  options = options || {};
  return function wrapWithAsyncScript(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";

    var AsyncScriptLoader =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(AsyncScriptLoader, _Component);

      function AsyncScriptLoader(props, context) {
        var _this;

        _this = _Component.call(this, props, context) || this;
        _this.state = {};
        _this.__scriptURL = "";
        return _this;
      }

      var _proto = AsyncScriptLoader.prototype;

      _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
        if (!this.__scriptLoaderID) {
          this.__scriptLoaderID = "async-script-loader-" + idCount++;
        }

        return this.__scriptLoaderID;
      };

      _proto.setupScriptURL = function setupScriptURL() {
        this.__scriptURL = typeof getScriptURL === "function" ? getScriptURL() : getScriptURL;
        return this.__scriptURL;
      };

      _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
        var _this2 = this;

        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry
        this.setState(state, function () {
          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);
        });
      };

      _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {
        var mapEntry = SCRIPT_MAP[this.__scriptURL];

        if (!mapEntry || !mapEntry.loaded) {
          throw new Error("Script is not loaded.");
        }

        for (var obsKey in mapEntry.observers) {
          mapEntry.observers[obsKey](mapEntry);
        }

        delete window[options.callbackName];
      };

      _proto.componentDidMount = function componentDidMount() {
        var _this3 = this;

        var scriptURL = this.setupScriptURL();
        var key = this.asyncScriptLoaderGetScriptLoaderID();
        var _options = options,
            globalName = _options.globalName,
            callbackName = _options.callbackName,
            scriptId = _options.scriptId; // check if global object already attached to window

        if (globalName && typeof window[globalName] !== "undefined") {
          SCRIPT_MAP[scriptURL] = {
            loaded: true,
            observers: {}
          };
        } // check if script loading already


        if (SCRIPT_MAP[scriptURL]) {
          var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then "finish"

          if (entry && (entry.loaded || entry.errored)) {
            this.asyncScriptLoaderHandleLoad(entry);
            return;
          } // if still loading then callback to observer queue


          entry.observers[key] = function (entry) {
            return _this3.asyncScriptLoaderHandleLoad(entry);
          };

          return;
        }
        /*
         * hasn't started loading
         * start the "magic"
         * setup script to load and observers
         */


        var observers = {};

        observers[key] = function (entry) {
          return _this3.asyncScriptLoaderHandleLoad(entry);
        };

        SCRIPT_MAP[scriptURL] = {
          loaded: false,
          observers: observers
        };
        var script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;

        for (var attribute in options.attributes) {
          script.setAttribute(attribute, options.attributes[attribute]);
        }

        if (scriptId) {
          script.id = scriptId;
        }

        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
          if (SCRIPT_MAP[scriptURL]) {
            var mapEntry = SCRIPT_MAP[scriptURL];
            var observersMap = mapEntry.observers;

            for (var obsKey in observersMap) {
              if (func(observersMap[obsKey])) {
                delete observersMap[obsKey];
              }
            }
          }
        };

        if (callbackName && typeof window !== "undefined") {
          window[callbackName] = function () {
            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();
          };
        }

        script.onload = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.loaded = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              if (callbackName) {
                return false;
              }

              observer(mapEntry);
              return true;
            });
          }
        };

        script.onerror = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];

          if (mapEntry) {
            mapEntry.errored = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              observer(mapEntry);
              return true;
            });
          }
        };

        document.body.appendChild(script);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        // Remove tag script
        var scriptURL = this.__scriptURL;

        if (options.removeOnUnmount === true) {
          var allScripts = document.getElementsByTagName("script");

          for (var i = 0; i < allScripts.length; i += 1) {
            if (allScripts[i].src.indexOf(scriptURL) > -1) {
              if (allScripts[i].parentNode) {
                allScripts[i].parentNode.removeChild(allScripts[i]);
              }
            }
          }
        } // Clean the observer entry


        var mapEntry = SCRIPT_MAP[scriptURL];

        if (mapEntry) {
          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];

          if (options.removeOnUnmount === true) {
            delete SCRIPT_MAP[scriptURL];
          }
        }
      };

      _proto.render = function render() {
        var globalName = options.globalName; // remove asyncScriptOnLoad from childProps

        var _this$props = this.props,
            asyncScriptOnLoad = _this$props.asyncScriptOnLoad,
            forwardedRef = _this$props.forwardedRef,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["asyncScriptOnLoad", "forwardedRef"]); // eslint-disable-line no-unused-vars


        if (globalName && typeof window !== "undefined") {
          childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
        }

        childProps.ref = forwardedRef;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, childProps);
      };

      return AsyncScriptLoader;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component); // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.


    var ForwardedComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AsyncScriptLoader, _extends({}, props, {
        forwardedRef: ref
      }));
    });
    ForwardedComponent.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
    ForwardedComponent.propTypes = {
      asyncScriptOnLoad: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
    };
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(ForwardedComponent, WrappedComponent);
  };
}

/***/ },

/***/ "./node_modules/react-google-recaptcha/lib/esm/index.js"
/*!**************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/index.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReCAPTCHA: () => (/* reexport safe */ _recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha-wrapper */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js");
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_recaptcha_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js"
/*!**************************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/recaptcha-wrapper.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js");
/* harmony import */ var react_async_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-async-script */ "./node_modules/react-async-script/lib/esm/async-script-loader.js");


var callbackName = "onloadcallback";
var globalName = "grecaptcha";
function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}
function getURL() {
  var dynamicOptions = getOptions();
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  if (dynamicOptions.enterprise) {
    return "https://" + hostname + "/recaptcha/enterprise.js?onload=" + callbackName + "&render=explicit";
  }
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_async_script__WEBPACK_IMPORTED_MODULE_1__["default"])(getURL, {
  callbackName: callbackName,
  globalName: globalName,
  attributes: getOptions().nonce ? {
    nonce: getOptions().nonce
  } : {}
})(_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ },

/***/ "./node_modules/react-google-recaptcha/lib/esm/recaptcha.js"
/*!******************************************************************!*\
  !*** ./node_modules/react-google-recaptcha/lib/esm/recaptcha.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReCAPTCHA)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _excluded = ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl", "isolated"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ReCAPTCHA = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ReCAPTCHA, _React$Component);
  function ReCAPTCHA() {
    var _this;
    _this = _React$Component.call(this) || this;
    _this.handleExpired = _this.handleExpired.bind(_assertThisInitialized(_this));
    _this.handleErrored = _this.handleErrored.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = ReCAPTCHA.prototype;
  _proto.getCaptchaFunction = function getCaptchaFunction(fnName) {
    if (this.props.grecaptcha) {
      if (this.props.grecaptcha.enterprise) {
        return this.props.grecaptcha.enterprise[fnName];
      }
      return this.props.grecaptcha[fnName];
    }
    return null;
  };
  _proto.getValue = function getValue() {
    var getResponse = this.getCaptchaFunction("getResponse");
    if (getResponse && this._widgetId !== undefined) {
      return getResponse(this._widgetId);
    }
    return null;
  };
  _proto.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }
    return null;
  };
  _proto.execute = function execute() {
    var execute = this.getCaptchaFunction("execute");
    if (execute && this._widgetId !== undefined) {
      return execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  };
  _proto.executeAsync = function executeAsync() {
    var _this2 = this;
    return new Promise(function (resolve, reject) {
      _this2.executionResolve = resolve;
      _this2.executionReject = reject;
      _this2.execute();
    });
  };
  _proto.reset = function reset() {
    var resetter = this.getCaptchaFunction("reset");
    if (resetter && this._widgetId !== undefined) {
      resetter(this._widgetId);
    }
  };
  _proto.forceReset = function forceReset() {
    var resetter = this.getCaptchaFunction("reset");
    if (resetter) {
      resetter();
    }
  };
  _proto.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else {
      this.handleChange(null);
    }
  };
  _proto.handleErrored = function handleErrored() {
    if (this.props.onErrored) {
      this.props.onErrored();
    }
    if (this.executionReject) {
      this.executionReject();
      delete this.executionResolve;
      delete this.executionReject;
    }
  };
  _proto.handleChange = function handleChange(token) {
    if (this.props.onChange) {
      this.props.onChange(token);
    }
    if (this.executionResolve) {
      this.executionResolve(token);
      delete this.executionReject;
      delete this.executionResolve;
    }
  };
  _proto.explicitRender = function explicitRender() {
    var render = this.getCaptchaFunction("render");
    if (render && this._widgetId === undefined) {
      var wrapper = document.createElement("div");
      this._widgetId = render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.handleChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        hl: this.props.hl,
        badge: this.props.badge,
        isolated: this.props.isolated
      });
      this.captcha.appendChild(wrapper);
    }
    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };
  _proto.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };
  _proto.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };
  _proto.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.
    /* eslint-disable no-unused-vars */
    var _this$props = this.props,
      sitekey = _this$props.sitekey,
      onChange = _this$props.onChange,
      theme = _this$props.theme,
      type = _this$props.type,
      tabindex = _this$props.tabindex,
      onExpired = _this$props.onExpired,
      onErrored = _this$props.onErrored,
      size = _this$props.size,
      stoken = _this$props.stoken,
      grecaptcha = _this$props.grecaptcha,
      badge = _this$props.badge,
      hl = _this$props.hl,
      isolated = _this$props.isolated,
      childProps = _objectWithoutPropertiesLoose(_this$props, _excluded);
    /* eslint-enable no-unused-vars */
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({}, childProps, {
      ref: this.handleRecaptchaRef
    }));
  };
  return ReCAPTCHA;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  grecaptcha: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["dark", "light"]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["image", "audio"]),
  tabindex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onExpired: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onErrored: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["compact", "normal", "invisible"]),
  stoken: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  badge: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ReCAPTCHA.defaultProps = {
  onChange: function onChange() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Footer */ "./src/scripts/Footer.js");
/* harmony import */ var _scripts_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/ContactForm */ "./src/scripts/ContactForm.js");
/* harmony import */ var _scripts_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/home */ "./src/scripts/home.js");
/* harmony import */ var _scripts_home__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_home__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







// Monta el Navbar en su contenedor (definido en header.php).

const navbarEl = document.querySelector("#render-navbar");
if (navbarEl) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_5___default().createRoot(navbarEl).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"], {}));
}

// Monta el Footer en su contenedor (definido en footer.php).
const footerEl = document.querySelector("#render-footer");
if (footerEl) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_5___default().createRoot(footerEl).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {}));
}

// Monta el Contact Form donde exista el contenedor (ej. en la página de contacto).
const contactEl = document.querySelector("#render-contact-form");
if (contactEl) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_5___default().createRoot(contactEl).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
}

// Las interacciones del Home (home.js) se auto-inicializan al importarse.
})();

/******/ })()
;
//# sourceMappingURL=index.js.map