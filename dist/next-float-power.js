(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DOT = '.';

  nx.floatPower = function (inValue) {
    var str = String(inValue);
    var length = str.length;
    var index = str.indexOf(DOT);
    if (!length || index === -1) {
      return 0;
    } else {
      return Math.pow(10, length - index - 1);
    }
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.floatPower;
  }

}());
