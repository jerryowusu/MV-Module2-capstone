/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/modules/comments/comment-counter.js":
/*!*************************************************!*\
  !*** ./src/modules/comments/comment-counter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var commentCounter = function commentCounter(commentData) {
  if (commentData.length) {
    return commentData.length;
  }

  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/comments/commentData.js":
/*!*********************************************!*\
  !*** ./src/modules/comments/commentData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");



var CommentData = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function CommentData(username, comment, id) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CommentData);

  this.username = username;
  this.comment = comment;
  this.item_id = id;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentData);

/***/ }),

/***/ "./src/modules/comments/comments-app.js":
/*!**********************************************!*\
  !*** ./src/modules/comments/comments-app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createComment": () => (/* binding */ createComment),
/* harmony export */   "showCommentModal": () => (/* binding */ showCommentModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_cars_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/cars-api */ "./src/modules/home/cars-api.js");
/* harmony import */ var _commentData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentData */ "./src/modules/comments/commentData.js");
/* harmony import */ var _createComments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createComments */ "./src/modules/comments/createComments.js");
/* harmony import */ var _comment_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comment-counter */ "./src/modules/comments/comment-counter.js");






var carApi = new _home_cars_api__WEBPACK_IMPORTED_MODULE_2__["default"]();
var modalContainer = document.querySelector('#modal-container');

var renderComment = function renderComment(dataItem) {
  return "<li class=\"text-lg\">\n        <span>".concat(dataItem.creation_date, "</span> -\n        <span class=\"text-slate-600 mx-2\">").concat(dataItem.username, " : </span>\n        <span>").concat(dataItem.comment, "</span>\n      </li>");
};

var displayCommentCounter = function displayCommentCounter(data) {
  var numberOfComments = (0,_comment_counter__WEBPACK_IMPORTED_MODULE_5__["default"])(data);
  var commentCounterElement = document.querySelector('#modal .comment-counter-header');
  commentCounterElement.textContent = "(".concat(numberOfComments, ")");
};

var displayComment = function displayComment(data) {
  var CommentContainer = document.querySelector('#modal .comment-container');

  if (data.length > 0) {
    var containerString = '';
    data.forEach(function (dataItem) {
      containerString += "".concat(renderComment(dataItem), " \n");
    });
    CommentContainer.innerHTML = containerString;
  } else {
    CommentContainer.innerHTML = '';
  }
};

var createComment = function createComment(event) {
  event.preventDefault();
  var api = new _createComments__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var form = document.querySelector('.form');
  var comBtn = document.querySelector('.form button');
  var id = Number(comBtn.id.split('-')[2]);
  var usernameInput = document.querySelector('.form .input');
  var commentInput = document.querySelector('#modal-container .modal-items form textarea');
  var username = usernameInput.value;
  var comment = commentInput.value;
  var commentObj = new _commentData__WEBPACK_IMPORTED_MODULE_3__["default"](username, comment, id);
  api.addComment(commentObj).then(function () {
    return api.getComment(id);
  }).then(function (data) {
    displayComment(data);
    displayCommentCounter(data);
  });
  form.reset();
};
function showCommentModal(_x) {
  return _showCommentModal.apply(this, arguments);
}

function _showCommentModal() {
  _showCommentModal = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
    var id, form1, api, close;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = Number(e.target.parentNode.parentNode.id);
            _context.next = 3;
            return carApi.getDataPromise().then(function (data) {
              if (modalContainer.classList.contains('hidden')) {
                modalContainer.classList.add('show');
                modalContainer.classList.remove('hidden');
              }

              modalContainer.innerHTML = "\n    <div\n    class=\"relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4\"\n    id=\"modal\"\n  >\n    <div class=\"h-96 img-container\">\n      <img\n        class=\"w-full h-full object-cover\"\n        src=\"".concat(data[id].imgUrl, "\"\n        alt=\"\"\n      />\n      <span id=\"close-modal-btn\" class=\"close\">\n        <i\n          class=\"fas fa-times absolute top-0 right-0 mt-3 mr-3 text-3xl text-white cursor-pointer\"\n        ></i>\n      </span>\n    </div>\n    <h2 class=\"text-center text-xl text-slate-600 py-5 font-bold\">").concat(data[id].make, "</h2>\n    <div class=\"flex justify-between flex-col w-1/2 mx-auto gap-y-5\">\n      <div class=\"flex justify-between w-full mx-auto flex-wrap gap-y-5\">\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Model</h3>\n          <span class=\"text-slate-600\">").concat(data[id].model, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Year</h3>\n          <span class=\"text-slate-600\">").concat(data[id].year, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>horsepower</h3>\n          <span class=\"text-slate-600\">").concat(data[id].horsepower, "</span>\n        </div>\n        <div class=\"w-2/5 flex text-lg justify-center gap-x-4\">\n          <h3>Price</h3>\n          <span class=\"text-slate-600\">$").concat(data[id].price, "</span>\n        </div>\n      </div>\n    </div>\n    <h2 class=\"text-center text-xl py-4 font-bold text-slate-600\">\n      Comments <span class=\"comment-counter-header\"></span>\n    </h2>\n    <ul class=\"comment-container flex justify-center flex-col mx-auto items-center py-2\">\n    </ul>\n    <h2 class=\"text-center py-4 text-xl font-bold text-slate-600\">\n      Add Comment\n    </h2>\n    <form class=\"flex justify-center flex-col mx-auto items-center form\" id='comment-form'>\n\n    <input class=\"px-2 w-1/2 py-2 border-gray-400 rounded-lg h-10 focus:outline-none\n      focus:border-violet-600 input\" placeholder=\"Enter your username\" />\n     <textarea\n        class=\"w-1/2 h-32 px-2 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-violet-600 comment\"\n        placeholder=\"Write your comment here\" type=\"text\" \n      ></textarea>\n      \n      <button\n        id=\"comment-button-").concat(id, "\"\n        class=\"comment-button text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg\"\n        type=\"submit\"\n      >\n        Comment\n      </button>\n    </form>\n    \n  </div>\n    ");
            });

          case 3:
            form1 = document.querySelector('.form');
            form1.addEventListener('submit', createComment); // load comments

            api = new _createComments__WEBPACK_IMPORTED_MODULE_4__["default"]();
            _context.next = 8;
            return api.getComment(id).then(function (commentData) {
              displayComment(commentData);
              displayCommentCounter(commentData);
            })["catch"](function (commentData) {
              displayComment([]);
              displayCommentCounter(commentData);
            });

          case 8:
            close = document.querySelector('#modal-container .modal-items .img-container .close');
            close.addEventListener('click', function () {
              modalContainer.classList.add('hidden');
              modalContainer.classList.remove('show');
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _showCommentModal.apply(this, arguments);
}

/***/ }),

/***/ "./src/modules/comments/createComments.js":
/*!************************************************!*\
  !*** ./src/modules/comments/createComments.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _getComment = /*#__PURE__*/new WeakMap();

var _addComment = /*#__PURE__*/new WeakMap();

var Api = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function Api() {
  var _this = this;

  var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Api);

  _classPrivateFieldInitSpec(this, _getComment, {
    writable: true,
    value: function () {
      var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
        var rootUrl,
            id,
            url,
            response,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rootUrl = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.commentsEndpoint;
                id = _args.length > 1 ? _args[1] : undefined;
                _context.prev = 2;
                url = "".concat(rootUrl, "?item_id=").concat(id);
                _context.next = 6;
                return fetch(url, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 6:
                response = _context.sent;
                return _context.abrupt("return", response.json());

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", []);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  });

  _classPrivateFieldInitSpec(this, _addComment, {
    writable: true,
    value: function () {
      var _value2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
        var url,
            bodyData,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _this.commentsEndpoint;
                bodyData = _args2.length > 1 ? _args2[1] : undefined;
                _context2.next = 4;
                return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(bodyData)
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function value() {
        return _value2.apply(this, arguments);
      }

      return value;
    }()
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "addComment", function (bodyData) {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addComment).call(_this, _this.commentsEndpoint, bodyData);
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getComment", function (id) {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _getComment).call(_this, _this.commentsEndpoint, id);
  });

  this.projectId = 'K2k68wPBsTKAT68ziNEu';
  this.rootEndpoint = _url;
  this.commentsEndpoint = "".concat(_url).concat(this.projectId, "/comments");
});



/***/ }),

/***/ "./src/modules/home/car.js":
/*!*********************************!*\
  !*** ./src/modules/home/car.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Car)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");



var Car = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Car(year, id, horsepower, make, model, price, imgUrl) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Car);

  this.year = year;
  this.id = id;
  this.horsepower = horsepower;
  this.make = make;
  this.model = model;
  this.price = price;
  this.imgUrl = imgUrl;
  this.like = false;
});



/***/ }),

/***/ "./src/modules/home/cars-api.js":
/*!**************************************!*\
  !*** ./src/modules/home/cars-api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarsApi)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car */ "./src/modules/home/car.js");
/* harmony import */ var _home_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-utils */ "./src/modules/home/home-utils.js");







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }




var _formatCars = /*#__PURE__*/new WeakMap();

var _formatData = /*#__PURE__*/new WeakMap();

var CarsApi = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function CarsApi() {
  var _this = this;

  var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://private-anon-66fbb79774-carsapi1.apiary-mock.com/';

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CarsApi);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getDataPromise", function () {
    return _this.dataPromise;
  });

  _classPrivateFieldInitSpec(this, _formatCars, {
    writable: true,
    value: function value(data) {
      var dataObj = {};
      data.forEach(function (car) {
        var id = "".concat(car.id);
        dataObj[id] = car;
      });
      return dataObj;
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getCarEndpointFromId", function (id) {
    return "".concat(_this.allCarsEndpoint, "/").concat(id);
  });

  _classPrivateFieldInitSpec(this, _formatData, {
    writable: true,
    value: function value(data) {
      return data.map(function (obj) {
        var car = new _car__WEBPACK_IMPORTED_MODULE_6__["default"]();
        car.year = obj.year;
        car.id = obj.id;
        car.horsepower = obj.horsepower;
        car.make = obj.make;
        car.model = obj.model;
        car.price = obj.price;
        car.imgUrl = obj.img_url;
        return car;
      });
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getAllCars", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
    var url,
        response,
        data,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _args.length > 0 && _args[0] !== undefined ? _args[0] : _this.allCarsEndpoint;
            _context.next = 3;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            data = data.filter(function (obj) {
              return _this.goodCarsId.includes(obj.id);
            });
            _context.next = 10;
            return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _formatData).call(_this, data);

          case 10:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  this.rootEndpoint = _url;
  this.allCarsEndpoint = "".concat(_url, "cars");
  this.goodCarsId = _home_utils__WEBPACK_IMPORTED_MODULE_7__.goodCarsId;
  this.dataPromise = this.getAllCars().then(function (data) {
    return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _formatCars).call(_this, data);
  });
});



/***/ }),

/***/ "./src/modules/home/home-app.js":
/*!**************************************!*\
  !*** ./src/modules/home/home-app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeApplication": () => (/* binding */ HomeApplication),
/* harmony export */   "getAllCarsCount": () => (/* binding */ getAllCarsCount)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _cars_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cars-api */ "./src/modules/home/cars-api.js");
/* harmony import */ var _home_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-utils */ "./src/modules/home/home-utils.js");
/* harmony import */ var _involvement_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./involvement-api */ "./src/modules/home/involvement-api.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _clearMain = /*#__PURE__*/new WeakMap();

var _createCarElement = /*#__PURE__*/new WeakMap();

var _displayCars = /*#__PURE__*/new WeakMap();

var _updateLikes = /*#__PURE__*/new WeakMap();

var HomeApplication = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomeApplication() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeApplication);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "initialize", function () {
    return _this.getANumberOfCars(24).then(function () {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _updateLikes).call(_this);
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getAllCars", function () {
    return _this.carsApi.getAllCars().then(function (data) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _displayCars).call(_this, data);

      return data;
    });
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "getANumberOfCars", function (number) {
    return _this.carsApi.getAllCars().then(function (data) {
      var toBeDisplayed = data.slice(0, number);

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _displayCars).call(_this, toBeDisplayed);

      return data;
    });
  });

  _classPrivateFieldInitSpec(this, _clearMain, {
    writable: true,
    value: function value() {
      _this.main.innerHTML = '';
    }
  });

  _classPrivateFieldInitSpec(this, _createCarElement, {
    writable: true,
    value: function value(car) {
      return (0,_home_utils__WEBPACK_IMPORTED_MODULE_5__.carRender)(car.id, car.imgUrl, car.make, car.model);
    }
  });

  _classPrivateFieldInitSpec(this, _displayCars, {
    writable: true,
    value: function value(toBeDisplayed) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _clearMain).call(_this);

      var mainContent = toBeDisplayed.reduce(function (content, car) {
        var carElement = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _createCarElement).call(_this, car);

        return "".concat(content, "\n").concat(carElement);
      }, '');
      _this.main.innerHTML = mainContent;
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "toggleHeart", function (e) {
    if (e.currentTarget.classList.contains('heart')) {
      var heartButton = e.currentTarget;
      var heartCount = heartButton.nextSibling.nextSibling.firstChild;
      var id = heartButton.parentNode.parentNode.parentNode.id;
      var data = {};
      data.item_id = Number(id);

      if (heartButton.className === _home_utils__WEBPACK_IMPORTED_MODULE_5__.likeClass) {
        heartButton.className = _home_utils__WEBPACK_IMPORTED_MODULE_5__.unlikeClass;
        heartCount.textContent = +heartCount.textContent - 1;
      } else {
        heartButton.className = _home_utils__WEBPACK_IMPORTED_MODULE_5__.likeClass;
        heartCount.textContent = +heartCount.textContent + 1;

        _this.involvementApi.setLikesData(data);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _updateLikes, {
    writable: true,
    value: function value() {
      _this.involvementApi.getLikesData().then(function (data) {
        var likesElements = document.querySelectorAll('.likes');
        likesElements.forEach(function (like) {
          var id = like.parentNode.parentNode.parentNode.parentNode.id;
          var numberOfLikes = data.find(function (e) {
            return Number(e.item_id) === Number(id);
          });

          if (numberOfLikes === undefined) {
            numberOfLikes = 0;
          } else {
            numberOfLikes = numberOfLikes.likes;
          }

          like.textContent = numberOfLikes;
        });
      });
    }
  });

  this.carsApi = new _cars_api__WEBPACK_IMPORTED_MODULE_4__["default"](); // DOM elements

  this.main = document.querySelector('main');
  this.involvementApi = new _involvement_api__WEBPACK_IMPORTED_MODULE_6__["default"]();
});
function getAllCarsCount() {
  var main = document.querySelector('main');
  return main.childElementCount;
}

/***/ }),

/***/ "./src/modules/home/home-utils.js":
/*!****************************************!*\
  !*** ./src/modules/home/home-utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "likeClass": () => (/* binding */ likeClass),
/* harmony export */   "unlikeClass": () => (/* binding */ unlikeClass),
/* harmony export */   "carRender": () => (/* binding */ carRender),
/* harmony export */   "fileExists": () => (/* binding */ fileExists),
/* harmony export */   "goodCarsId": () => (/* binding */ goodCarsId)
/* harmony export */ });
var likeClass = 'heart fas fa-heart';
var unlikeClass = 'heart far fa-heart';
var carRender = function carRender(id, imgUrl, make, model) {
  var likes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return "<div\n      class=\"car-card flex flex-col gap-2 border-4 rounded-md border-violet-600\" id=\"".concat(id, "\">\n      <div class=\"car-img h-50 object-cover\">\n        <img class=\"w-full\"\n          src=\"").concat(imgUrl, "\"\n          alt=\"").concat(make.toUpperCase(), " ").concat(model.toUpperCase(), "\">\n      </div>\n      <div class=\"car-info flex justify-between p-2 mt-auto\">\n        <h2>").concat(make.toUpperCase(), " ").concat(model.toUpperCase(), "</h2>\n        <div class=\"flex flex-col items-center text-red-600\">\n          <i class=\"").concat(unlikeClass, "\"></i>\n          <span class=\"text-black\"><span class=\"likes\">").concat(likes, "</span> <span>likes</span></span>\n        </div>\n      </div>\n      <div class=\"car-buttons flex flex-col gap-3 p-2 \">\n        <button id=\"model\" class=\"comment-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500\"\n          type=\"button\">Comment</button>\n        <button\n          class=\"reservation-button px-2 py-1 border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500\"\n          type=\"button\">Reservation</button>\n      </div>\n    </div>");
};
function fileExists(imageUrl) {
  var http = new XMLHttpRequest();
  http.open('HEAD', imageUrl, false);
  http.send();
  return Number(http.status) !== 404;
}
var goodCarsId = [1, 5, 7, 8, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 25, 26, 29, 31, 32, 34, 35, 39, 41, 43, 48, 49, 50, 51, 53, 55, 56, 57, 58, 60, 62, 63, 64, 65, 68, 69, 73, 75, 76, 79, 83, 84, 85, 86, 87, 88, 90, 95, 98, 100, 101, 102, 104, 105, 106, 107, 108, 109, 110, 112, 113, 114, 115, 116, 117, 118, 119, 122, 123, 124, 126, 128, 129, 130, 133, 134, 139, 141, 143, 144, 145, 146, 147, 148, 149, 150, 151, 154, 155, 157, 158, 161, 162, 163, 164, 165, 166, 168, 169, 171, 172, 178, 179, 180, 181, 183, 184, 185, 188, 189, 192, 194, 196, 197, 198, 199, 200, 203, 205, 207, 214, 215, 216, 217, 219, 230, 240, 244, 245, 246, 247, 250, 251, 252, 254, 255, 259, 260, 261, 262, 263, 271, 273, 274, 277, 278, 281, 282, 283, 284, 285, 286, 288, 290, 292, 294, 295, 296, 298, 300, 301, 302, 303, 304, 305, 306, 307, 313, 315, 318, 319, 322, 323, 324, 325, 326, 327, 329, 330, 332, 333, 335, 336, 337, 338, 345, 346, 347, 348, 350, 351, 353, 354, 355, 357, 359, 361, 362, 366, 369, 371];

/***/ }),

/***/ "./src/modules/home/involvement-api.js":
/*!*********************************************!*\
  !*** ./src/modules/home/involvement-api.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementApi)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);







function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _getLikes = /*#__PURE__*/new WeakMap();

var _addLike = /*#__PURE__*/new WeakMap();

var InvolvementApi = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function InvolvementApi() {
  var _this = this;

  var _url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InvolvementApi);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "getLikesData", function () {
    return _this.likesData;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "setLikesData", /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(bodyData) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _addLike).call(_this, _this.likesEndpoint, bodyData);

            case 2:
              _context.next = 4;
              return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, _getLikes).call(_this);

            case 4:
              _this.likesData = _context.sent;
              return _context.abrupt("return", _this.likesData);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  _classPrivateFieldInitSpec(this, _getLikes, {
    writable: true,
    value: function () {
      var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
        var url,
            response,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : _this.likesEndpoint;
                _context2.next = 3;
                return fetch(url, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", response.json());

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  });

  _classPrivateFieldInitSpec(this, _addLike, {
    writable: true,
    value: function () {
      var _value2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3() {
        var url,
            bodyData,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : _this.likesEndpoint;
                bodyData = _args3.length > 1 ? _args3[1] : undefined;
                _context3.next = 4;
                return fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(bodyData)
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function value() {
        return _value2.apply(this, arguments);
      }

      return value;
    }()
  });

  this.projectId = 'K2k68wPBsTKAT68ziNEu';
  this.rootEndpoint = _url;
  this.likesEndpoint = "".concat(_url).concat(this.projectId, "/likes");
  this.likesData = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _getLikes).call(this);
});



/***/ }),

/***/ "./src/modules/reservations/involvementAPI.js":
/*!****************************************************!*\
  !*** ./src/modules/reservations/involvementAPI.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setReservedToAPI": () => (/* binding */ setReservedToAPI),
/* harmony export */   "getDataFromInvolvementAPI": () => (/* binding */ getDataFromInvolvementAPI)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reservation_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-counter */ "./src/modules/reservations/reservation-counter.js");



var appId = 'K2k68wPBsTKAT68ziNEu';

var setReservedToAPI = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dataBody) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/reservations"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataBody)
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setReservedToAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getDataFromInvolvementAPI = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id) {
    var url, displayReserves, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/reservations?item_id=").concat(id);
            displayReserves = document.querySelector('.reserved-cars');
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(url);

          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json().then(function (data) {
              var counter = (0,_reservation_counter__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
              var counterContainer = document.querySelector('#counter-span');
              counterContainer.innerHTML = "(".concat(counter, ")");
              displayReserves.innerHTML = data.reduce(function (content, comment) {
                var commentElement = "<li>".concat(comment.date_start, " - ").concat(comment.date_end, " by ").concat(comment.username, "</li>");
                content += commentElement;
                return content;
              }, '');
            });

          case 8:
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            throw new Error('Fetch Data Failed');

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 10]]);
  }));

  return function getDataFromInvolvementAPI(_x2) {
    return _ref2.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./src/modules/reservations/reservation-app.js":
/*!*****************************************************!*\
  !*** ./src/modules/reservations/reservation-app.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showReservationModal)
/* harmony export */ });
/* harmony import */ var _home_cars_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/cars-api */ "./src/modules/home/cars-api.js");
/* harmony import */ var _involvementAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI */ "./src/modules/reservations/involvementAPI.js");


var carApi = new _home_cars_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
var reservationsPopUp = document.createElement('div');
var body = document.querySelector('body');

var clearInputs = function clearInputs() {
  var userNameInput = document.querySelector('#userNameInput');
  var startDateInput = document.querySelector('#startDateInput');
  var endDateInput = document.querySelector('#endDateInput');
  userNameInput.value = '';
  startDateInput.value = '';
  endDateInput.value = '';
};

var saveReservationToApi = function saveReservationToApi(e) {
  var id = e.target.id.split('-').at(-1);
  var userNameInput = document.querySelector('#userNameInput');
  var startDateInput = document.querySelector('#startDateInput');
  var endDateInput = document.querySelector('#endDateInput');
  var dataBody = {
    item_id: id,
    username: userNameInput.value,
    date_start: startDateInput.value,
    date_end: endDateInput.value
  };
  (0,_involvementAPI__WEBPACK_IMPORTED_MODULE_1__.setReservedToAPI)(dataBody).then(function () {
    clearInputs();
    (0,_involvementAPI__WEBPACK_IMPORTED_MODULE_1__.getDataFromInvolvementAPI)(id);
  });
};

function showReservationModal(e) {
  var id = Number(e.target.parentNode.parentNode.id);
  carApi.getDataPromise().then(function (data) {
    reservationsPopUp.classList.add('reservation-container');
    reservationsPopUp.id = 'pop-up';
    reservationsPopUp.hidden = true;
    reservationsPopUp.style.display = 'block';
    var car = data[id];
    reservationsPopUp.innerHTML = "\n    <div class=\"reservation-content relative h-auto modal-items m-auto bg-white border-violet-600 border-solid border-4\" id=\"".concat(id, "\">\n\n    <div class='flex relative justify-between'>\n     <img class=\"flex-1 bg-contain w-78\" src=").concat(car.imgUrl, ">\n     <button class='close absolute top-2 right-2 text-2xl rounded-full px-2 border-violet-700 hover:border-red-500 hover:text-red-500 border-4 bg-white'> X </button>\n    </div>\n    \n    <h2 class='text-center text-xl text-slate-600 py-5 font-bold'>").concat(car.make.toUpperCase(), "</h2>\n\n    <div class=\"flex justify-between items-center flex-col w-1/2 mx-auto gap-y-5\">\n    <div class=\"flex justify-between w-full mx-auto flex-wrap gap-y-5\">\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='model'>Model: </h3>\n         <span class=\"text-slate-600\">").concat(car.model.toUpperCase(), "</span>\n      </div>\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='year'>Year:</h3>\n         <span class=\"text-slate-600\"> ").concat(car.year, "</span>\n      </div>\n      <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='horsepower'>Horsepower:</h3>\n         <span class=\"text-slate-600\"> ").concat(car.horsepower, "</span>\n     </div>\n     <div class='w-2/5 flex text-lg justify-center gap-x-4'>\n         <h3 class='price'>Price: </h3>\n         <span class=\"text-slate-600\">$").concat(car.price, "</span>\n     </div>\n     </div>\n    <div class=\"reserved-cars-container ml-3\">\n     <h2 class= \"reserved-cars-title text-center text-xl py-4 font-bold text-slate-600\"> Reservations <span id=\"counter-span\"></span></h2>\n     <ul class=\"reserved-cars flex justify-center flex-col mx-auto items-center py-2\">\n     </ul>\n    </div>\n    <div class='book-cars w-full max-w-xs ml-3'>\n    <h2 class='book-cars-title text-center py-4 text-xl font-bold text-slate-600'> Add a reservation </h2>\n\n    <form class='form flex justify-center flex-col mx-auto items-center'> \n\n          <input class=\"appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6\" id=\"userNameInput\" type=\"text\" placeholder=\"name\" required>\n\n          <input class='start-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id=\"startDateInput\" type=\"date\" placeholder='start-date'>\n\n          <input class='end-date appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-6' id=\"endDateInput\" type=\"date\" placeholder='end-date'>\n\n          <button class='reserve-car-btn center text-lg px-2 w-40 my-5 h py-1 mx-auto border-2 hover:border-2 hover:shadow-sm hover:text-white hover:bg-sky-500 rounded-lg' type='button' id='reserve-button-").concat(id, "'> Reserve </button>\n        </form>\n    </div>\n    </div>   \n    ");
    body.appendChild(reservationsPopUp);
    var displayReserves = document.querySelector('.reserved-cars');
    (0,_involvementAPI__WEBPACK_IMPORTED_MODULE_1__.getDataFromInvolvementAPI)(id)["catch"](function () {
      displayReserves.textContent = '';
    });
    var reserveCarBtn = document.querySelector('form.form .reserve-car-btn');
    reserveCarBtn.addEventListener('click', saveReservationToApi);
    var closeBtn = document.querySelector('#pop-up .close');
    closeBtn.addEventListener('click', function () {
      body.removeChild(reservationsPopUp);
      reservationsPopUp.style.display = 'none';
    });
  });
}

/***/ }),

/***/ "./src/modules/reservations/reservation-counter.js":
/*!*********************************************************!*\
  !*** ./src/modules/reservations/reservation-counter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var reservationCounter = function reservationCounter(reservation) {
  if (reservation.length) {
    return reservation.length;
  }

  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationCounter);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d44360973806cc15e773.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_home_home_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home/home-app */ "./src/modules/home/home-app.js");
/* harmony import */ var _modules_comments_comments_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments/comments-app */ "./src/modules/comments/comments-app.js");
/* harmony import */ var _modules_reservations_reservation_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservations/reservation-app */ "./src/modules/reservations/reservation-app.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");





var homeApp = new _modules_home_home_app__WEBPACK_IMPORTED_MODULE_1__.HomeApplication();

function registerHomeEvents() {
  var likesButtons = document.querySelectorAll('.heart');
  var allCarsCount = document.querySelector('.cars-nav-element');
  allCarsCount.textContent = (0,_modules_home_home_app__WEBPACK_IMPORTED_MODULE_1__.getAllCarsCount)();
  likesButtons.forEach(function (likeButton) {
    return likeButton.addEventListener('click', homeApp.toggleHeart);
  });
  var commentButtons = document.querySelectorAll('.car-buttons > .comment-button');
  commentButtons.forEach(function (btn) {
    return btn.addEventListener('click', _modules_comments_comments_app__WEBPACK_IMPORTED_MODULE_2__.showCommentModal);
  });
  var reservationButtons = document.querySelectorAll('.reservation-button');
  reservationButtons.forEach(function (btn) {
    return btn.addEventListener('click', _modules_reservations_reservation_app__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });
}

var logoImg = document.querySelector('.logo');
logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_4__;
homeApp.initialize().then(function () {
  registerHomeEvents();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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QU8sQ0FBQ0ssV0FGMkIsQ0FBaEI7QUFBQSxHQUFyQjtBQUtBLE1BQU1DLGNBQWMsR0FBRzFKLFFBQVEsQ0FBQ3FHLGdCQUFULENBQ3JCLGdDQURxQixDQUF2QjtBQUlBcUQsRUFBQUEsY0FBYyxDQUFDN0ksT0FBZixDQUF1QixVQUFDOEksR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQzVHLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCaEIsNEVBQTlCLENBQVQ7QUFBQSxHQUF2QjtBQUVBLE1BQU02SCxrQkFBa0IsR0FBRzVKLFFBQVEsQ0FBQ3FHLGdCQUFULENBQ3pCLHFCQUR5QixDQUEzQjtBQUlBdUQsRUFBQUEsa0JBQWtCLENBQUMvSSxPQUFuQixDQUEyQixVQUFDOEksR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQzVHLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCMkYsNkVBQTlCLENBQVQ7QUFBQSxHQUEzQjtBQUNEOztBQUVELElBQU1tQixPQUFPLEdBQUc3SixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEI7QUFDQTRKLE9BQU8sQ0FBQ0MsR0FBUixHQUFjWCw2Q0FBZDtBQUVBQyxPQUFPLENBQUNXLFVBQVIsR0FBcUJuSSxJQUFyQixDQUEwQixZQUFNO0FBQzlCeUgsRUFBQUEsa0JBQWtCO0FBQ25CLENBRkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMvY29tbWVudC1jb3VudGVyLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudHMvY29tbWVudERhdGEuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50cy9jb21tZW50cy1hcHAuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50cy9jcmVhdGVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWUvY2FyLmpzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZS9jYXJzLWFwaS5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWUvaG9tZS1hcHAuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2hvbWUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lL2ludm9sdmVtZW50LWFwaS5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9ucy9pbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvbi1hcHAuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb24tY291bnRlci5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/ZmU5ZSIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NQcml2YXRlRmllbGRHZXQuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXYtbW9kdWxlczItY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tdi1tb2R1bGVzMi1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL212LW1vZHVsZXMyLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJjb25zdCBjb21tZW50Q291bnRlciA9IChjb21tZW50RGF0YSkgPT4ge1xuICBpZiAoY29tbWVudERhdGEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNvbW1lbnREYXRhLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyO1xuIiwiY2xhc3MgQ29tbWVudERhdGEge1xuICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgY29tbWVudCwgaWQpIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcbiAgICB0aGlzLml0ZW1faWQgPSBpZDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudERhdGE7XG4iLCJpbXBvcnQgQ2Fyc0FwaSBmcm9tICcuLi9ob21lL2NhcnMtYXBpJztcbmltcG9ydCBDb21tZW50RGF0YSBmcm9tICcuL2NvbW1lbnREYXRhJztcbmltcG9ydCBBcGkgZnJvbSAnLi9jcmVhdGVDb21tZW50cyc7XG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50LWNvdW50ZXInO1xuXG5jb25zdCBjYXJBcGkgPSBuZXcgQ2Fyc0FwaSgpO1xuXG5jb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jb250YWluZXInKTtcblxuY29uc3QgcmVuZGVyQ29tbWVudCA9IChkYXRhSXRlbSkgPT4gYDxsaSBjbGFzcz1cInRleHQtbGdcIj5cbiAgICAgICAgPHNwYW4+JHtkYXRhSXRlbS5jcmVhdGlvbl9kYXRlfTwvc3Bhbj4gLVxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwIG14LTJcIj4ke2RhdGFJdGVtLnVzZXJuYW1lfSA6IDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JHtkYXRhSXRlbS5jb21tZW50fTwvc3Bhbj5cbiAgICAgIDwvbGk+YDtcblxuY29uc3QgZGlzcGxheUNvbW1lbnRDb3VudGVyID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbnVtYmVyT2ZDb21tZW50cyA9IGNvbW1lbnRDb3VudGVyKGRhdGEpO1xuICBjb25zdCBjb21tZW50Q291bnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjbW9kYWwgLmNvbW1lbnQtY291bnRlci1oZWFkZXInLFxuICApO1xuXG4gIGNvbW1lbnRDb3VudGVyRWxlbWVudC50ZXh0Q29udGVudCA9IGAoJHtudW1iZXJPZkNvbW1lbnRzfSlgO1xufTtcblxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBDb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsIC5jb21tZW50LWNvbnRhaW5lcicpO1xuICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGNvbnRhaW5lclN0cmluZyA9ICcnO1xuICAgIGRhdGEuZm9yRWFjaCgoZGF0YUl0ZW0pID0+IHtcbiAgICAgIGNvbnRhaW5lclN0cmluZyArPSBgJHtyZW5kZXJDb21tZW50KGRhdGFJdGVtKX0gXFxuYDtcbiAgICB9KTtcblxuICAgIENvbW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gY29udGFpbmVyU3RyaW5nO1xuICB9IGVsc2Uge1xuICAgIENvbW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGFwaSA9IG5ldyBBcGkoKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gIGNvbnN0IGNvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtIGJ1dHRvbicpO1xuICBjb25zdCBpZCA9IE51bWJlcihjb21CdG4uaWQuc3BsaXQoJy0nKVsyXSk7XG4gIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybSAuaW5wdXQnKTtcbiAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI21vZGFsLWNvbnRhaW5lciAubW9kYWwtaXRlbXMgZm9ybSB0ZXh0YXJlYScsXG4gICk7XG5cbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBjb21tZW50ID0gY29tbWVudElucHV0LnZhbHVlO1xuICBjb25zdCBjb21tZW50T2JqID0gbmV3IENvbW1lbnREYXRhKHVzZXJuYW1lLCBjb21tZW50LCBpZCk7XG5cbiAgYXBpXG4gICAgLmFkZENvbW1lbnQoY29tbWVudE9iailcbiAgICAudGhlbigoKSA9PiBhcGkuZ2V0Q29tbWVudChpZCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRpc3BsYXlDb21tZW50KGRhdGEpO1xuICAgICAgZGlzcGxheUNvbW1lbnRDb3VudGVyKGRhdGEpO1xuICAgIH0pO1xuICBmb3JtLnJlc2V0KCk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvd0NvbW1lbnRNb2RhbChlKSB7XG4gIGNvbnN0IGlkID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gIGF3YWl0IGNhckFwaS5nZXREYXRhUHJvbWlzZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpZiAobW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgIDxkaXZcbiAgICBjbGFzcz1cInJlbGF0aXZlIGgtYXV0byBtb2RhbC1pdGVtcyBtLWF1dG8gYmctd2hpdGUgYm9yZGVyLXZpb2xldC02MDAgYm9yZGVyLXNvbGlkIGJvcmRlci00XCJcbiAgICBpZD1cIm1vZGFsXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJoLTk2IGltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz1cIiR7ZGF0YVtpZF0uaW1nVXJsfVwiXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gaWQ9XCJjbG9zZS1tb2RhbC1idG5cIiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3M9XCJmYXMgZmEtdGltZXMgYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBtdC0zIG1yLTMgdGV4dC0zeGwgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgID48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC14bCB0ZXh0LXNsYXRlLTYwMCBweS01IGZvbnQtYm9sZFwiPiR7ZGF0YVtpZF0ubWFrZX08L2gyPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBmbGV4LWNvbCB3LTEvMiBteC1hdXRvIGdhcC15LTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXgtYXV0byBmbGV4LXdyYXAgZ2FwLXktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTRcIj5cbiAgICAgICAgICA8aDM+TW9kZWw8L2gzPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDBcIj4ke2RhdGFbaWRdLm1vZGVsfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNFwiPlxuICAgICAgICAgIDxoMz5ZZWFyPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JHtkYXRhW2lkXS55ZWFyfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNFwiPlxuICAgICAgICAgIDxoMz5ob3JzZXBvd2VyPC9oMz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+JHtkYXRhW2lkXS5ob3JzZXBvd2VyfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNFwiPlxuICAgICAgICAgIDxoMz5QcmljZTwvaDM+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNsYXRlLTYwMFwiPiQke2RhdGFbaWRdLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhsIHB5LTQgZm9udC1ib2xkIHRleHQtc2xhdGUtNjAwXCI+XG4gICAgICBDb21tZW50cyA8c3BhbiBjbGFzcz1cImNvbW1lbnQtY291bnRlci1oZWFkZXJcIj48L3NwYW4+XG4gICAgPC9oMj5cbiAgICA8dWwgY2xhc3M9XCJjb21tZW50LWNvbnRhaW5lciBmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sIG14LWF1dG8gaXRlbXMtY2VudGVyIHB5LTJcIj5cbiAgICA8L3VsPlxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHB5LTQgdGV4dC14bCBmb250LWJvbGQgdGV4dC1zbGF0ZS02MDBcIj5cbiAgICAgIEFkZCBDb21tZW50XG4gICAgPC9oMj5cbiAgICA8Zm9ybSBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbXgtYXV0byBpdGVtcy1jZW50ZXIgZm9ybVwiIGlkPSdjb21tZW50LWZvcm0nPlxuXG4gICAgPGlucHV0IGNsYXNzPVwicHgtMiB3LTEvMiBweS0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIGgtMTAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICBmb2N1czpib3JkZXItdmlvbGV0LTYwMCBpbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiIC8+XG4gICAgIDx0ZXh0YXJlYVxuICAgICAgICBjbGFzcz1cInctMS8yIGgtMzIgcHgtMiBweS0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdmlvbGV0LTYwMCBjb21tZW50XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIGNvbW1lbnQgaGVyZVwiIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIFxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cImNvbW1lbnQtYnV0dG9uLSR7aWR9XCJcbiAgICAgICAgY2xhc3M9XCJjb21tZW50LWJ1dHRvbiB0ZXh0LWxnIHB4LTIgdy00MCBteS01IGggcHktMSBteC1hdXRvIGJvcmRlci0yIGhvdmVyOmJvcmRlci0yIGhvdmVyOnNoYWRvdy1zbSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS01MDAgcm91bmRlZC1sZ1wiXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgPlxuICAgICAgICBDb21tZW50XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgXG4gIDwvZGl2PlxuICAgIGA7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm0xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgZm9ybTEuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlQ29tbWVudCk7XG5cbiAgLy8gbG9hZCBjb21tZW50c1xuICBjb25zdCBhcGkgPSBuZXcgQXBpKCk7XG5cbiAgYXdhaXQgYXBpXG4gICAgLmdldENvbW1lbnQoaWQpXG4gICAgLnRoZW4oKGNvbW1lbnREYXRhKSA9PiB7XG4gICAgICBkaXNwbGF5Q29tbWVudChjb21tZW50RGF0YSk7XG4gICAgICBkaXNwbGF5Q29tbWVudENvdW50ZXIoY29tbWVudERhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChjb21tZW50RGF0YSkgPT4ge1xuICAgICAgZGlzcGxheUNvbW1lbnQoW10pO1xuICAgICAgZGlzcGxheUNvbW1lbnRDb3VudGVyKGNvbW1lbnREYXRhKTtcbiAgICB9KTtcblxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNtb2RhbC1jb250YWluZXIgLm1vZGFsLWl0ZW1zIC5pbWctY29udGFpbmVyIC5jbG9zZScsXG4gICk7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJyxcbiAgKSB7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSAnSzJrNjh3UEJzVEtBVDY4emlORXUnO1xuICAgIHRoaXMucm9vdEVuZHBvaW50ID0gdXJsO1xuICAgIHRoaXMuY29tbWVudHNFbmRwb2ludCA9IGAke3VybH0ke3RoaXMucHJvamVjdElkfS9jb21tZW50c2A7XG4gIH1cblxuICAjZ2V0Q29tbWVudCA9IGFzeW5jIChcbiAgICByb290VXJsID0gdGhpcy5jb21tZW50c0VuZHBvaW50LFxuICAgIGlkLFxuICApID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gYCR7cm9vdFVybH0/aXRlbV9pZD0ke2lkfWA7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gICNhZGRDb21tZW50ID0gYXN5bmMgKFxuICAgIHVybCA9IHRoaXMuY29tbWVudHNFbmRwb2ludCxcbiAgICBib2R5RGF0YSxcbiAgKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5RGF0YSksXG4gICAgfSk7XG4gIH07XG5cbiAgYWRkQ29tbWVudCA9IChib2R5RGF0YSkgPT4gdGhpcy4jYWRkQ29tbWVudCh0aGlzLmNvbW1lbnRzRW5kcG9pbnQsIGJvZHlEYXRhKTtcblxuICBnZXRDb21tZW50ID0gKGlkKSA9PiB0aGlzLiNnZXRDb21tZW50KHRoaXMuY29tbWVudHNFbmRwb2ludCwgaWQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgeWVhcixcbiAgICBpZCxcbiAgICBob3JzZXBvd2VyLFxuICAgIG1ha2UsXG4gICAgbW9kZWwsXG4gICAgcHJpY2UsXG4gICAgaW1nVXJsLFxuICApIHtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmhvcnNlcG93ZXIgPSBob3JzZXBvd2VyO1xuICAgIHRoaXMubWFrZSA9IG1ha2U7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmltZ1VybCA9IGltZ1VybDtcbiAgICB0aGlzLmxpa2UgPSBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IENhciBmcm9tICcuL2Nhcic7XG5pbXBvcnQgeyBnb29kQ2Fyc0lkIH0gZnJvbSAnLi9ob21lLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyc0FwaSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybCA9ICdodHRwczovL3ByaXZhdGUtYW5vbi02NmZiYjc5Nzc0LWNhcnNhcGkxLmFwaWFyeS1tb2NrLmNvbS8nLFxuICApIHtcbiAgICB0aGlzLnJvb3RFbmRwb2ludCA9IHVybDtcbiAgICB0aGlzLmFsbENhcnNFbmRwb2ludCA9IGAke3VybH1jYXJzYDtcbiAgICB0aGlzLmdvb2RDYXJzSWQgPSBnb29kQ2Fyc0lkO1xuICAgIHRoaXMuZGF0YVByb21pc2UgPSB0aGlzLmdldEFsbENhcnMoKS50aGVuKChkYXRhKSA9PiB0aGlzLiNmb3JtYXRDYXJzKGRhdGEpKTtcbiAgfVxuXG4gIGdldERhdGFQcm9taXNlID0gKCkgPT4gdGhpcy5kYXRhUHJvbWlzZTtcblxuICAjZm9ybWF0Q2FycyA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZGF0YU9iaiA9IHt9O1xuICAgIGRhdGEuZm9yRWFjaCgoY2FyKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGAke2Nhci5pZH1gO1xuICAgICAgZGF0YU9ialtpZF0gPSBjYXI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YU9iajtcbiAgfTtcblxuICBnZXRDYXJFbmRwb2ludEZyb21JZCA9IChpZCkgPT4gYCR7dGhpcy5hbGxDYXJzRW5kcG9pbnR9LyR7aWR9YDtcblxuICAjZm9ybWF0RGF0YSA9IChkYXRhKSA9PiBkYXRhLm1hcCgob2JqKSA9PiB7XG4gICAgY29uc3QgY2FyID0gbmV3IENhcigpO1xuICAgIGNhci55ZWFyID0gb2JqLnllYXI7XG4gICAgY2FyLmlkID0gb2JqLmlkO1xuICAgIGNhci5ob3JzZXBvd2VyID0gb2JqLmhvcnNlcG93ZXI7XG4gICAgY2FyLm1ha2UgPSBvYmoubWFrZTtcbiAgICBjYXIubW9kZWwgPSBvYmoubW9kZWw7XG4gICAgY2FyLnByaWNlID0gb2JqLnByaWNlO1xuICAgIGNhci5pbWdVcmwgPSBvYmouaW1nX3VybDtcbiAgICByZXR1cm4gY2FyO1xuICB9KTtcblxuICBnZXRBbGxDYXJzID0gYXN5bmMgKHVybCA9IHRoaXMuYWxsQ2Fyc0VuZHBvaW50KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBkYXRhID0gZGF0YS5maWx0ZXIoKG9iaikgPT4gdGhpcy5nb29kQ2Fyc0lkLmluY2x1ZGVzKG9iai5pZCkpO1xuXG4gICAgZGF0YSA9IGF3YWl0IHRoaXMuI2Zvcm1hdERhdGEoZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcbn1cbiIsImltcG9ydCBDYXJzQXBpIGZyb20gJy4vY2Fycy1hcGknO1xuaW1wb3J0IHtcbiAgY2FyUmVuZGVyLFxuICBsaWtlQ2xhc3MsXG4gIHVubGlrZUNsYXNzLFxufSBmcm9tICcuL2hvbWUtdXRpbHMnO1xuaW1wb3J0IEludm9sdmVtZW50QXBpIGZyb20gJy4vaW52b2x2ZW1lbnQtYXBpJztcblxuZXhwb3J0IGNsYXNzIEhvbWVBcHBsaWNhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2Fyc0FwaSA9IG5ldyBDYXJzQXBpKCk7XG5cbiAgICAvLyBET00gZWxlbWVudHNcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbiAgICB0aGlzLmludm9sdmVtZW50QXBpID0gbmV3IEludm9sdmVtZW50QXBpKCk7XG4gIH1cblxuICBpbml0aWFsaXplID0gKCkgPT4gdGhpcy5nZXRBTnVtYmVyT2ZDYXJzKDI0KS50aGVuKCgpID0+IHRoaXMuI3VwZGF0ZUxpa2VzKCkpO1xuXG4gIGdldEFsbENhcnMgPSAoKSA9PiB0aGlzLmNhcnNBcGkuZ2V0QWxsQ2FycygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICB0aGlzLiNkaXNwbGF5Q2FycyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSk7XG5cbiAgZ2V0QU51bWJlck9mQ2FycyA9IChudW1iZXIpID0+IHRoaXMuY2Fyc0FwaS5nZXRBbGxDYXJzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHRvQmVEaXNwbGF5ZWQgPSBkYXRhLnNsaWNlKDAsIG51bWJlcik7XG5cbiAgICB0aGlzLiNkaXNwbGF5Q2Fycyh0b0JlRGlzcGxheWVkKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9KTtcblxuICAjY2xlYXJNYWluID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSAnJztcbiAgfTtcblxuICAjY3JlYXRlQ2FyRWxlbWVudCA9IChjYXIpID0+IGNhclJlbmRlcihjYXIuaWQsIGNhci5pbWdVcmwsIGNhci5tYWtlLCBjYXIubW9kZWwpO1xuXG4gICNkaXNwbGF5Q2FycyA9ICh0b0JlRGlzcGxheWVkKSA9PiB7XG4gICAgdGhpcy4jY2xlYXJNYWluKCk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSB0b0JlRGlzcGxheWVkLnJlZHVjZShcbiAgICAgIChjb250ZW50LCBjYXIpID0+IHtcbiAgICAgICAgY29uc3QgY2FyRWxlbWVudCA9IHRoaXMuI2NyZWF0ZUNhckVsZW1lbnQoY2FyKTtcbiAgICAgICAgcmV0dXJuIGAke2NvbnRlbnR9XFxuJHtjYXJFbGVtZW50fWA7XG4gICAgICB9LFxuICAgICAgJycsXG4gICAgKTtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gbWFpbkNvbnRlbnQ7XG4gIH07XG5cbiAgdG9nZ2xlSGVhcnQgPSAoZSkgPT4ge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFydCcpKSB7XG4gICAgICBjb25zdCBoZWFydEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGhlYXJ0Q291bnQgPSBoZWFydEJ1dHRvbi5uZXh0U2libGluZy5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICAgICAgY29uc3QgeyBpZCB9ID0gaGVhcnRCdXR0b24ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICBkYXRhLml0ZW1faWQgPSBOdW1iZXIoaWQpO1xuXG4gICAgICBpZiAoaGVhcnRCdXR0b24uY2xhc3NOYW1lID09PSBsaWtlQ2xhc3MpIHtcbiAgICAgICAgaGVhcnRCdXR0b24uY2xhc3NOYW1lID0gdW5saWtlQ2xhc3M7XG4gICAgICAgIGhlYXJ0Q291bnQudGV4dENvbnRlbnQgPSAraGVhcnRDb3VudC50ZXh0Q29udGVudCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFydEJ1dHRvbi5jbGFzc05hbWUgPSBsaWtlQ2xhc3M7XG4gICAgICAgIGhlYXJ0Q291bnQudGV4dENvbnRlbnQgPSAraGVhcnRDb3VudC50ZXh0Q29udGVudCArIDE7XG4gICAgICAgIHRoaXMuaW52b2x2ZW1lbnRBcGkuc2V0TGlrZXNEYXRhKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAjdXBkYXRlTGlrZXMgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnZvbHZlbWVudEFwaS5nZXRMaWtlc0RhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsaWtlc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XG4gICAgICBsaWtlc0VsZW1lbnRzLmZvckVhY2goKGxpa2UpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gbGlrZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgbnVtYmVyT2ZMaWtlcyA9IGRhdGEuZmluZChcbiAgICAgICAgICAoZSkgPT4gTnVtYmVyKGUuaXRlbV9pZCkgPT09IE51bWJlcihpZCksXG4gICAgICAgICk7XG4gICAgICAgIGlmIChudW1iZXJPZkxpa2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBudW1iZXJPZkxpa2VzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1iZXJPZkxpa2VzID0gbnVtYmVyT2ZMaWtlcy5saWtlcztcbiAgICAgICAgfVxuICAgICAgICBsaWtlLnRleHRDb250ZW50ID0gbnVtYmVyT2ZMaWtlcztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ2Fyc0NvdW50KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICByZXR1cm4gbWFpbi5jaGlsZEVsZW1lbnRDb3VudDtcbn1cbiIsImV4cG9ydCBjb25zdCBsaWtlQ2xhc3MgPSAnaGVhcnQgZmFzIGZhLWhlYXJ0JztcbmV4cG9ydCBjb25zdCB1bmxpa2VDbGFzcyA9ICdoZWFydCBmYXIgZmEtaGVhcnQnO1xuZXhwb3J0IGNvbnN0IGNhclJlbmRlciA9IChcbiAgaWQsXG4gIGltZ1VybCxcbiAgbWFrZSxcbiAgbW9kZWwsXG4gIGxpa2VzID0gMCxcbikgPT4gYDxkaXZcbiAgICAgIGNsYXNzPVwiY2FyLWNhcmQgZmxleCBmbGV4LWNvbCBnYXAtMiBib3JkZXItNCByb3VuZGVkLW1kIGJvcmRlci12aW9sZXQtNjAwXCIgaWQ9XCIke2lkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhci1pbWcgaC01MCBvYmplY3QtY292ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInctZnVsbFwiXG4gICAgICAgICAgc3JjPVwiJHtpbWdVcmx9XCJcbiAgICAgICAgICBhbHQ9XCIke21ha2UudG9VcHBlckNhc2UoKX0gJHttb2RlbC50b1VwcGVyQ2FzZSgpfVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyLWluZm8gZmxleCBqdXN0aWZ5LWJldHdlZW4gcC0yIG10LWF1dG9cIj5cbiAgICAgICAgPGgyPiR7bWFrZS50b1VwcGVyQ2FzZSgpfSAke21vZGVsLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtcmVkLTYwMFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiJHt1bmxpa2VDbGFzc31cIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJsYWNrXCI+PHNwYW4gY2xhc3M9XCJsaWtlc1wiPiR7bGlrZXN9PC9zcGFuPiA8c3Bhbj5saWtlczwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyLWJ1dHRvbnMgZmxleCBmbGV4LWNvbCBnYXAtMyBwLTIgXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJtb2RlbFwiIGNsYXNzPVwiY29tbWVudC1idXR0b24gcHgtMiBweS0xIGJvcmRlci0yIGhvdmVyOmJvcmRlci0yIGhvdmVyOnNoYWRvdy1zbSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXNreS01MDBcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cInJlc2VydmF0aW9uLWJ1dHRvbiBweC0yIHB5LTEgYm9yZGVyLTIgaG92ZXI6Ym9yZGVyLTIgaG92ZXI6c2hhZG93LXNtIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ymctc2t5LTUwMFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlJlc2VydmF0aW9uPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUV4aXN0cyhpbWFnZVVybCkge1xuICBjb25zdCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaHR0cC5vcGVuKCdIRUFEJywgaW1hZ2VVcmwsIGZhbHNlKTtcbiAgaHR0cC5zZW5kKCk7XG5cbiAgcmV0dXJuIE51bWJlcihodHRwLnN0YXR1cykgIT09IDQwNDtcbn1cblxuZXhwb3J0IGNvbnN0IGdvb2RDYXJzSWQgPSBbXG4gIDEsIDUsIDcsIDgsIDExLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyNSxcbiAgMjYsIDI5LCAzMSwgMzIsIDM0LCAzNSwgMzksIDQxLCA0MywgNDgsIDQ5LCA1MCwgNTEsIDUzLFxuICA1NSwgNTYsIDU3LCA1OCwgNjAsIDYyLCA2MywgNjQsIDY1LCA2OCwgNjksIDczLCA3NSwgNzYsXG4gIDc5LCA4MywgODQsIDg1LCA4NiwgODcsIDg4LCA5MCwgOTUsIDk4LCAxMDAsIDEwMSwgMTAyLFxuICAxMDQsIDEwNSwgMTA2LCAxMDcsIDEwOCwgMTA5LCAxMTAsIDExMiwgMTEzLCAxMTQsIDExNSxcbiAgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjIsIDEyMywgMTI0LCAxMjYsIDEyOCwgMTI5LCAxMzAsXG4gIDEzMywgMTM0LCAxMzksIDE0MSwgMTQzLCAxNDQsIDE0NSwgMTQ2LCAxNDcsIDE0OCwgMTQ5LFxuICAxNTAsIDE1MSwgMTU0LCAxNTUsIDE1NywgMTU4LCAxNjEsIDE2MiwgMTYzLCAxNjQsIDE2NSxcbiAgMTY2LCAxNjgsIDE2OSwgMTcxLCAxNzIsIDE3OCwgMTc5LCAxODAsIDE4MSwgMTgzLCAxODQsXG4gIDE4NSwgMTg4LCAxODksIDE5MiwgMTk0LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAzLFxuICAyMDUsIDIwNywgMjE0LCAyMTUsIDIxNiwgMjE3LCAyMTksIDIzMCwgMjQwLCAyNDQsIDI0NSxcbiAgMjQ2LCAyNDcsIDI1MCwgMjUxLCAyNTIsIDI1NCwgMjU1LCAyNTksIDI2MCwgMjYxLCAyNjIsXG4gIDI2MywgMjcxLCAyNzMsIDI3NCwgMjc3LCAyNzgsIDI4MSwgMjgyLCAyODMsIDI4NCwgMjg1LFxuICAyODYsIDI4OCwgMjkwLCAyOTIsIDI5NCwgMjk1LCAyOTYsIDI5OCwgMzAwLCAzMDEsIDMwMixcbiAgMzAzLCAzMDQsIDMwNSwgMzA2LCAzMDcsIDMxMywgMzE1LCAzMTgsIDMxOSwgMzIyLCAzMjMsXG4gIDMyNCwgMzI1LCAzMjYsIDMyNywgMzI5LCAzMzAsIDMzMiwgMzMzLCAzMzUsIDMzNiwgMzM3LFxuICAzMzgsIDM0NSwgMzQ2LCAzNDcsIDM0OCwgMzUwLCAzNTEsIDM1MywgMzU0LCAzNTUsIDM1NyxcbiAgMzU5LCAzNjEsIDM2MiwgMzY2LCAzNjksIDM3MSxcbl07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFwaSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICApIHtcbiAgICB0aGlzLnByb2plY3RJZCA9ICdLMms2OHdQQnNUS0FUNjh6aU5FdSc7XG4gICAgdGhpcy5yb290RW5kcG9pbnQgPSB1cmw7XG4gICAgdGhpcy5saWtlc0VuZHBvaW50ID0gYCR7dXJsfSR7dGhpcy5wcm9qZWN0SWR9L2xpa2VzYDtcbiAgICB0aGlzLmxpa2VzRGF0YSA9IHRoaXMuI2dldExpa2VzKCk7XG4gIH1cblxuICBnZXRMaWtlc0RhdGEgPSAoKSA9PiB0aGlzLmxpa2VzRGF0YTtcblxuICBzZXRMaWtlc0RhdGEgPSBhc3luYyAoYm9keURhdGEpID0+IHtcbiAgICBhd2FpdCB0aGlzLiNhZGRMaWtlKHRoaXMubGlrZXNFbmRwb2ludCwgYm9keURhdGEpO1xuICAgIHRoaXMubGlrZXNEYXRhID0gYXdhaXQgdGhpcy4jZ2V0TGlrZXMoKTtcbiAgICByZXR1cm4gdGhpcy5saWtlc0RhdGE7XG4gIH07XG5cbiAgI2dldExpa2VzID0gYXN5bmMgKHVybCA9IHRoaXMubGlrZXNFbmRwb2ludCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH07XG5cbiAgI2FkZExpa2UgPSBhc3luYyAodXJsID0gdGhpcy5saWtlc0VuZHBvaW50LCBib2R5RGF0YSkgPT4ge1xuICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keURhdGEpLFxuICAgIH0pO1xuICB9O1xufVxuIiwiaW1wb3J0IHJlc2VydmF0aW9uQ291bnRlciBmcm9tICcuL3Jlc2VydmF0aW9uLWNvdW50ZXInO1xuXG5jb25zdCBhcHBJZCA9ICdLMms2OHdQQnNUS0FUNjh6aU5FdSc7XG5cbmNvbnN0IHNldFJlc2VydmVkVG9BUEkgPSBhc3luYyAoZGF0YUJvZHkpID0+IHtcbiAgYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L3Jlc2VydmF0aW9uc2AsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUJvZHkpLFxuICAgIH0sXG4gICk7XG59O1xuXG5jb25zdCBnZXREYXRhRnJvbUludm9sdmVtZW50QVBJID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9yZXNlcnZhdGlvbnM/aXRlbV9pZD0ke2lkfWA7XG4gIGNvbnN0IGRpc3BsYXlSZXNlcnZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5yZXNlcnZlZC1jYXJzJyxcbiAgKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb3VudGVyID0gcmVzZXJ2YXRpb25Db3VudGVyKGRhdGEpO1xuXG4gICAgICBjb25zdCBjb3VudGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50ZXItc3BhbicpO1xuICAgICAgY291bnRlckNvbnRhaW5lci5pbm5lckhUTUwgPSBgKCR7Y291bnRlcn0pYDtcblxuICAgICAgZGlzcGxheVJlc2VydmVzLmlubmVySFRNTCA9IGRhdGEucmVkdWNlKFxuICAgICAgICAoY29udGVudCwgY29tbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbW1lbnRFbGVtZW50ID0gYDxsaT4ke2NvbW1lbnQuZGF0ZV9zdGFydH0gLSAke2NvbW1lbnQuZGF0ZV9lbmR9IGJ5ICR7Y29tbWVudC51c2VybmFtZX08L2xpPmA7XG4gICAgICAgICAgY29udGVudCArPSBjb21tZW50RWxlbWVudDtcbiAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfSxcbiAgICAgICAgJycsXG4gICAgICApO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignRmV0Y2ggRGF0YSBGYWlsZWQnKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgc2V0UmVzZXJ2ZWRUb0FQSSwgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSSB9O1xuIiwiaW1wb3J0IENhcnNBcGkgZnJvbSAnLi4vaG9tZS9jYXJzLWFwaSc7XG5pbXBvcnQge1xuICBzZXRSZXNlcnZlZFRvQVBJLFxuICBnZXREYXRhRnJvbUludm9sdmVtZW50QVBJLFxufSBmcm9tICcuL2ludm9sdmVtZW50QVBJJztcblxuY29uc3QgY2FyQXBpID0gbmV3IENhcnNBcGkoKTtcblxuY29uc3QgcmVzZXJ2YXRpb25zUG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGNsZWFySW5wdXRzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI3VzZXJOYW1lSW5wdXQnLFxuICApO1xuXG4gIGNvbnN0IHN0YXJ0RGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI3N0YXJ0RGF0ZUlucHV0JyxcbiAgKTtcblxuICBjb25zdCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kRGF0ZUlucHV0Jyk7XG5cbiAgdXNlck5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICBzdGFydERhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICBlbmREYXRlSW5wdXQudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IHNhdmVSZXNlcnZhdGlvblRvQXBpID0gKGUpID0+IHtcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpLmF0KC0xKTtcbiAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyN1c2VyTmFtZUlucHV0JyxcbiAgKTtcblxuICBjb25zdCBzdGFydERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNzdGFydERhdGVJbnB1dCcsXG4gICk7XG5cbiAgY29uc3QgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZERhdGVJbnB1dCcpO1xuXG4gIGNvbnN0IGRhdGFCb2R5ID0ge1xuICAgIGl0ZW1faWQ6IGlkLFxuICAgIHVzZXJuYW1lOiB1c2VyTmFtZUlucHV0LnZhbHVlLFxuICAgIGRhdGVfc3RhcnQ6IHN0YXJ0RGF0ZUlucHV0LnZhbHVlLFxuICAgIGRhdGVfZW5kOiBlbmREYXRlSW5wdXQudmFsdWUsXG4gIH07XG5cbiAgc2V0UmVzZXJ2ZWRUb0FQSShkYXRhQm9keSkudGhlbigoKSA9PiB7XG4gICAgY2xlYXJJbnB1dHMoKTtcbiAgICBnZXREYXRhRnJvbUludm9sdmVtZW50QVBJKGlkKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93UmVzZXJ2YXRpb25Nb2RhbChlKSB7XG4gIGNvbnN0IGlkID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG5cbiAgY2FyQXBpLmdldERhdGFQcm9taXNlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIHJlc2VydmF0aW9uc1BvcFVwLmNsYXNzTGlzdC5hZGQoXG4gICAgICAncmVzZXJ2YXRpb24tY29udGFpbmVyJyxcbiAgICApO1xuICAgIHJlc2VydmF0aW9uc1BvcFVwLmlkID0gJ3BvcC11cCc7XG4gICAgcmVzZXJ2YXRpb25zUG9wVXAuaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNlcnZhdGlvbnNQb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGNvbnN0IGNhciA9IGRhdGFbaWRdO1xuXG4gICAgcmVzZXJ2YXRpb25zUG9wVXAuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1jb250ZW50IHJlbGF0aXZlIGgtYXV0byBtb2RhbC1pdGVtcyBtLWF1dG8gYmctd2hpdGUgYm9yZGVyLXZpb2xldC02MDAgYm9yZGVyLXNvbGlkIGJvcmRlci00XCIgaWQ9XCIke2lkfVwiPlxuXG4gICAgPGRpdiBjbGFzcz0nZmxleCByZWxhdGl2ZSBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICA8aW1nIGNsYXNzPVwiZmxleC0xIGJnLWNvbnRhaW4gdy03OFwiIHNyYz0ke2Nhci5pbWdVcmx9PlxuICAgICA8YnV0dG9uIGNsYXNzPSdjbG9zZSBhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHRleHQtMnhsIHJvdW5kZWQtZnVsbCBweC0yIGJvcmRlci12aW9sZXQtNzAwIGhvdmVyOmJvcmRlci1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTUwMCBib3JkZXItNCBiZy13aGl0ZSc+IFggPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGgyIGNsYXNzPSd0ZXh0LWNlbnRlciB0ZXh0LXhsIHRleHQtc2xhdGUtNjAwIHB5LTUgZm9udC1ib2xkJz4ke2Nhci5tYWtlLnRvVXBwZXJDYXNlKCl9PC9oMj5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZmxleC1jb2wgdy0xLzIgbXgtYXV0byBnYXAteS01XCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBteC1hdXRvIGZsZXgtd3JhcCBnYXAteS01XCI+XG4gICAgICA8ZGl2IGNsYXNzPSd3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNCc+XG4gICAgICAgICA8aDMgY2xhc3M9J21vZGVsJz5Nb2RlbDogPC9oMz5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDBcIj4ke2Nhci5tb2RlbC50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz0ndy0yLzUgZmxleCB0ZXh0LWxnIGp1c3RpZnktY2VudGVyIGdhcC14LTQnPlxuICAgICAgICAgPGgzIGNsYXNzPSd5ZWFyJz5ZZWFyOjwvaDM+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2xhdGUtNjAwXCI+ICR7Y2FyLnllYXJ9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSd3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNCc+XG4gICAgICAgICA8aDMgY2xhc3M9J2hvcnNlcG93ZXInPkhvcnNlcG93ZXI6PC9oMz5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDBcIj4gJHtcbiAgY2FyLmhvcnNlcG93ZXJcbn08L3NwYW4+XG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzPSd3LTIvNSBmbGV4IHRleHQtbGcganVzdGlmeS1jZW50ZXIgZ2FwLXgtNCc+XG4gICAgICAgICA8aDMgY2xhc3M9J3ByaWNlJz5QcmljZTogPC9oMz5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbGF0ZS02MDBcIj4kJHtjYXIucHJpY2V9PC9zcGFuPlxuICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlc2VydmVkLWNhcnMtY29udGFpbmVyIG1sLTNcIj5cbiAgICAgPGgyIGNsYXNzPSBcInJlc2VydmVkLWNhcnMtdGl0bGUgdGV4dC1jZW50ZXIgdGV4dC14bCBweS00IGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTYwMFwiPiBSZXNlcnZhdGlvbnMgPHNwYW4gaWQ9XCJjb3VudGVyLXNwYW5cIj48L3NwYW4+PC9oMj5cbiAgICAgPHVsIGNsYXNzPVwicmVzZXJ2ZWQtY2FycyBmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sIG14LWF1dG8gaXRlbXMtY2VudGVyIHB5LTJcIj5cbiAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPSdib29rLWNhcnMgdy1mdWxsIG1heC13LXhzIG1sLTMnPlxuICAgIDxoMiBjbGFzcz0nYm9vay1jYXJzLXRpdGxlIHRleHQtY2VudGVyIHB5LTQgdGV4dC14bCBmb250LWJvbGQgdGV4dC1zbGF0ZS02MDAnPiBBZGQgYSByZXNlcnZhdGlvbiA8L2gyPlxuXG4gICAgPGZvcm0gY2xhc3M9J2Zvcm0gZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBteC1hdXRvIGl0ZW1zLWNlbnRlcic+IFxuXG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMCBtYi02XCIgaWQ9XCJ1c2VyTmFtZUlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIiByZXF1aXJlZD5cblxuICAgICAgICAgIDxpbnB1dCBjbGFzcz0nc3RhcnQtZGF0ZSBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwIG1iLTYnIGlkPVwic3RhcnREYXRlSW5wdXRcIiB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPSdzdGFydC1kYXRlJz5cblxuICAgICAgICAgIDxpbnB1dCBjbGFzcz0nZW5kLWRhdGUgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMCBtYi02JyBpZD1cImVuZERhdGVJbnB1dFwiIHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9J2VuZC1kYXRlJz5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3M9J3Jlc2VydmUtY2FyLWJ0biBjZW50ZXIgdGV4dC1sZyBweC0yIHctNDAgbXktNSBoIHB5LTEgbXgtYXV0byBib3JkZXItMiBob3Zlcjpib3JkZXItMiBob3ZlcjpzaGFkb3ctc20gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1za3ktNTAwIHJvdW5kZWQtbGcnIHR5cGU9J2J1dHRvbicgaWQ9J3Jlc2VydmUtYnV0dG9uLSR7aWR9Jz4gUmVzZXJ2ZSA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgIFxuICAgIGA7XG4gICAgYm9keS5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbnNQb3BVcCk7XG5cbiAgICBjb25zdCBkaXNwbGF5UmVzZXJ2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5yZXNlcnZlZC1jYXJzJyxcbiAgICApO1xuXG4gICAgZ2V0RGF0YUZyb21JbnZvbHZlbWVudEFQSShpZCkuY2F0Y2goKCkgPT4ge1xuICAgICAgZGlzcGxheVJlc2VydmVzLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNlcnZlQ2FyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdmb3JtLmZvcm0gLnJlc2VydmUtY2FyLWJ0bicsXG4gICAgKTtcblxuICAgIHJlc2VydmVDYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICBzYXZlUmVzZXJ2YXRpb25Ub0FwaSxcbiAgICApO1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNwb3AtdXAgLmNsb3NlJyxcbiAgICApO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYm9keS5yZW1vdmVDaGlsZChyZXNlcnZhdGlvbnNQb3BVcCk7XG4gICAgICByZXNlcnZhdGlvbnNQb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImNvbnN0IHJlc2VydmF0aW9uQ291bnRlciA9IChyZXNlcnZhdGlvbikgPT4ge1xuICBpZiAocmVzZXJ2YXRpb24ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc2VydmF0aW9uLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2VydmF0aW9uQ291bnRlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NyaXB0b3IudmFsdWU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIFwiICsgYWN0aW9uICsgXCIgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIEhvbWVBcHBsaWNhdGlvbixcbiAgZ2V0QWxsQ2Fyc0NvdW50LFxufSBmcm9tICcuL21vZHVsZXMvaG9tZS9ob21lLWFwcCc7XG5pbXBvcnQgeyBzaG93Q29tbWVudE1vZGFsIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRzL2NvbW1lbnRzLWFwcCc7XG5pbXBvcnQgc2hvd1Jlc2VydmF0aW9uTW9kYWwgZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvbi1hcHAnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvbG9nby5wbmcnO1xuXG5jb25zdCBob21lQXBwID0gbmV3IEhvbWVBcHBsaWNhdGlvbigpO1xuXG5mdW5jdGlvbiByZWdpc3RlckhvbWVFdmVudHMoKSB7XG4gIGNvbnN0IGxpa2VzQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydCcpO1xuICBjb25zdCBhbGxDYXJzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuY2Fycy1uYXYtZWxlbWVudCcsXG4gICk7XG5cbiAgYWxsQ2Fyc0NvdW50LnRleHRDb250ZW50ID0gZ2V0QWxsQ2Fyc0NvdW50KCk7XG5cbiAgbGlrZXNCdXR0b25zLmZvckVhY2goKGxpa2VCdXR0b24pID0+IGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgIGhvbWVBcHAudG9nZ2xlSGVhcnQsXG4gICkpO1xuXG4gIGNvbnN0IGNvbW1lbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmNhci1idXR0b25zID4gLmNvbW1lbnQtYnV0dG9uJyxcbiAgKTtcblxuICBjb21tZW50QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDb21tZW50TW9kYWwpKTtcblxuICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucmVzZXJ2YXRpb24tYnV0dG9uJyxcbiAgKTtcblxuICByZXNlcnZhdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UmVzZXJ2YXRpb25Nb2RhbCkpO1xufVxuXG5jb25zdCBsb2dvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbmxvZ29JbWcuc3JjID0gSWNvbjtcblxuaG9tZUFwcC5pbml0aWFsaXplKCkudGhlbigoKSA9PiB7XG4gIHJlZ2lzdGVySG9tZUV2ZW50cygpO1xufSk7XG4iXSwibmFtZXMiOlsiY29tbWVudENvdW50ZXIiLCJjb21tZW50RGF0YSIsImxlbmd0aCIsIkNvbW1lbnREYXRhIiwidXNlcm5hbWUiLCJjb21tZW50IiwiaWQiLCJpdGVtX2lkIiwiQ2Fyc0FwaSIsIkFwaSIsImNhckFwaSIsIm1vZGFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyQ29tbWVudCIsImRhdGFJdGVtIiwiY3JlYXRpb25fZGF0ZSIsImRpc3BsYXlDb21tZW50Q291bnRlciIsImRhdGEiLCJudW1iZXJPZkNvbW1lbnRzIiwiY29tbWVudENvdW50ZXJFbGVtZW50IiwidGV4dENvbnRlbnQiLCJkaXNwbGF5Q29tbWVudCIsIkNvbW1lbnRDb250YWluZXIiLCJjb250YWluZXJTdHJpbmciLCJmb3JFYWNoIiwiaW5uZXJIVE1MIiwiY3JlYXRlQ29tbWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcGkiLCJmb3JtIiwiY29tQnRuIiwiTnVtYmVyIiwic3BsaXQiLCJ1c2VybmFtZUlucHV0IiwiY29tbWVudElucHV0IiwidmFsdWUiLCJjb21tZW50T2JqIiwiYWRkQ29tbWVudCIsInRoZW4iLCJnZXRDb21tZW50IiwicmVzZXQiLCJzaG93Q29tbWVudE1vZGFsIiwiZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJnZXREYXRhUHJvbWlzZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwiaW1nVXJsIiwibWFrZSIsIm1vZGVsIiwieWVhciIsImhvcnNlcG93ZXIiLCJwcmljZSIsImZvcm0xIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwidXJsIiwicm9vdFVybCIsImNvbW1lbnRzRW5kcG9pbnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJib2R5RGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdElkIiwicm9vdEVuZHBvaW50IiwiQ2FyIiwibGlrZSIsImdvb2RDYXJzSWQiLCJkYXRhUHJvbWlzZSIsImRhdGFPYmoiLCJjYXIiLCJhbGxDYXJzRW5kcG9pbnQiLCJtYXAiLCJvYmoiLCJpbWdfdXJsIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJnZXRBbGxDYXJzIiwiY2FyUmVuZGVyIiwibGlrZUNsYXNzIiwidW5saWtlQ2xhc3MiLCJJbnZvbHZlbWVudEFwaSIsIkhvbWVBcHBsaWNhdGlvbiIsImdldEFOdW1iZXJPZkNhcnMiLCJjYXJzQXBpIiwibnVtYmVyIiwidG9CZURpc3BsYXllZCIsInNsaWNlIiwibWFpbiIsIm1haW5Db250ZW50IiwicmVkdWNlIiwiY29udGVudCIsImNhckVsZW1lbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGVhcnRCdXR0b24iLCJoZWFydENvdW50IiwibmV4dFNpYmxpbmciLCJmaXJzdENoaWxkIiwiY2xhc3NOYW1lIiwiaW52b2x2ZW1lbnRBcGkiLCJzZXRMaWtlc0RhdGEiLCJnZXRMaWtlc0RhdGEiLCJsaWtlc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm51bWJlck9mTGlrZXMiLCJmaW5kIiwidW5kZWZpbmVkIiwibGlrZXMiLCJnZXRBbGxDYXJzQ291bnQiLCJjaGlsZEVsZW1lbnRDb3VudCIsInRvVXBwZXJDYXNlIiwiZmlsZUV4aXN0cyIsImltYWdlVXJsIiwiaHR0cCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJzdGF0dXMiLCJsaWtlc0RhdGEiLCJsaWtlc0VuZHBvaW50IiwicmVzZXJ2YXRpb25Db3VudGVyIiwiYXBwSWQiLCJzZXRSZXNlcnZlZFRvQVBJIiwiZGF0YUJvZHkiLCJnZXREYXRhRnJvbUludm9sdmVtZW50QVBJIiwiZGlzcGxheVJlc2VydmVzIiwiY291bnRlciIsImNvdW50ZXJDb250YWluZXIiLCJjb21tZW50RWxlbWVudCIsImRhdGVfc3RhcnQiLCJkYXRlX2VuZCIsIkVycm9yIiwicmVzZXJ2YXRpb25zUG9wVXAiLCJjcmVhdGVFbGVtZW50IiwiY2xlYXJJbnB1dHMiLCJ1c2VyTmFtZUlucHV0Iiwic3RhcnREYXRlSW5wdXQiLCJlbmREYXRlSW5wdXQiLCJzYXZlUmVzZXJ2YXRpb25Ub0FwaSIsImF0Iiwic2hvd1Jlc2VydmF0aW9uTW9kYWwiLCJoaWRkZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsInJlc2VydmVDYXJCdG4iLCJjbG9zZUJ0biIsInJlbW92ZUNoaWxkIiwicmVzZXJ2YXRpb24iLCJJY29uIiwiaG9tZUFwcCIsInJlZ2lzdGVySG9tZUV2ZW50cyIsImxpa2VzQnV0dG9ucyIsImFsbENhcnNDb3VudCIsImxpa2VCdXR0b24iLCJ0b2dnbGVIZWFydCIsImNvbW1lbnRCdXR0b25zIiwiYnRuIiwicmVzZXJ2YXRpb25CdXR0b25zIiwibG9nb0ltZyIsInNyYyIsImluaXRpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9