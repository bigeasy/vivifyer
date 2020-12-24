require('proof')(7, (okay) => {
    const Vivifyer = require('..')
    let counter = 0
    const vivifyer = new Vivifyer(function (key, extra) {
        okay(key, 'x', 'constructor')
        okay(extra, 'y', 'extra')
        return counter++
    })
    okay(Vivifyer, 'required')
    okay(vivifyer.get('x', 'y'), 0, 'get')
    okay(vivifyer.get('x', 'y'), 0, 'get exists')
    okay(vivifyer.remove('x'), 0, 'remove')
    okay(!('x' in vivifyer.map), 'map')
})
