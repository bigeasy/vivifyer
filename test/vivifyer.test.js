describe('vivifyer', () => {
    const assert = require('assert')
    it('can vivify', () => {
        const Vivifyer = require('..')
        let counter = 0
        const vivifyer = new Vivifyer(function (key) {
            assert.equal(key, 'x', 'constructor')
            return counter++
        })
        assert(Vivifyer, 'required')
        assert.equal(vivifyer.get('x'), 0, 'get')
        assert.equal(vivifyer.get('x'), 0, 'get exists')
        assert.equal(vivifyer.remove('x'), 0, 'remove')
        assert(!('x' in vivifyer.map), 'map')
    })
})
