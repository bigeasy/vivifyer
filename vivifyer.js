function Vivifyer (constructor) {
    this._constructor = constructor
    this.map = {}
}

Vivifyer.prototype._vivify = function (key) {
    if (!(key in this.map)) {
        return this.map[key] = this._constructor.call(null, key)
    }
    return this.map[key]
}

Vivifyer.prototype.get = function (key) {
    return this._vivify(key)
}

Vivifyer.prototype.remove = function (key) {
    var value = this.map[key]
    delete this.map[key]
    return value
}

module.exports = Vivifyer
