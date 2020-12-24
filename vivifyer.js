class Vivifyer {
    constructor (constructor) {
        this._constructor = constructor
        this.map = {}
    }

    _vivify (key) {
        if (!(key in this.map)) {
            return this.map[key] = this._constructor.call(null, key)
        }
        return this.map[key]
    }

    get (key, ...vargs) {
        if (!(key in this.map)) {
            return this.map[key] = this._constructor.apply(null, [ key ].concat(vargs))
        }
        return this.map[key]
    }

    remove (key) {
        const value = this.map[key]
        delete this.map[key]
        return value
    }
}

module.exports = Vivifyer
