var children = require('ramitos-children')

module.exports = function (el, selector) {
  return children(el.parentNode, selector).filter(function (sibling) {
    return sibling !== el
  })
}