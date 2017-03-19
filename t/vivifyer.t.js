require('proof/redux')(1, prove)

function prove (assert) {
    var Vivifyer = require('..')
    assert(Vivifyer, 'required')
}
