"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/', function (req, res) {});
router.put('/', function (req, res) {});
router.get('/id', function (req, res) {});
router.delete('/id', function (req, res) {});
var _default = router;
exports.default = _default;