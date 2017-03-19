require('proof/redux')(6, prove)

function prove (assert) {
    var Vivifyer = require('..')
    var counter = 0
    var vivifyer = new Vivifyer(function (key) {
        assert(key == 'x', 'constructor')
        return counter++
    })
    assert(Vivifyer, 'required')
    assert(vivifyer.get('x'), 0, 'get')
    assert(vivifyer.get('x'), 0, 'get exists')
    assert(vivifyer.remove('x'), 0, 'remove')
    assert(!('x' in vivifyer.map), 'map')
}
