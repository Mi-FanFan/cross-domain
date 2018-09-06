'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jsonp;
function jsonp(url, params) {
  var search = '';
  var index = 0;
  if (params) {
    for (var i in params) {
      search += '' + (index === 0 ? '?' : '&') + i + '=' + params[i];
      index++;
    }
  }

  var allRul = url + search;

  var script_1 = document.createElement('script');

  script_1.src = allRul;

  document.body.appendChild(script_1);

  script_1.addEventListener('load', function () {
    document.body.removeChild(script_1);
  });
}