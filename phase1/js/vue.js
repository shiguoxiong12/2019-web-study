/**********
 * vue 源码分析
 * ***********/
var _toString = Object.prototype.toString;

function toRawType (value) {   //判断vue 类型     如 value :123   number
      return _toString.call(value).slice(8, -1)
}