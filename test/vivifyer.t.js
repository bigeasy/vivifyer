require('proof')(6, prove)

function prove (okay) {
    var Vivifyer = require('..')
    var counter = 0
    var vivifyer = new Vivifyer(function (key) {
        okay(key == 'x', 'constructor')
        return counter++
    })
    okay(Vivifyer, 'required')
    okay(vivifyer.get('x'), 0, 'get')
    okay(vivifyer.get('x'), 0, 'get exists')
    okay(vivifyer.remove('x'), 0, 'remove')
    okay(!('x' in vivifyer.map), 'map')
}
