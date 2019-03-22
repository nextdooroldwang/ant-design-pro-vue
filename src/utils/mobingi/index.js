// 精度处理
import NP from 'number-precision'

// 向上取整，保留2位小数
export const toDecimal2 = x => {
  var f = NP.divide(Math.ceil(NP.times(x, 100)), 100)
  var s = f.toString()
  var rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + 2) {
    s += '0'
  }
  return s
}
