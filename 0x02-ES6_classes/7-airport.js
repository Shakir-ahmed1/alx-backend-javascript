export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw Error('Name must be a string');
    this._name = name;
    if (typeof code !== 'string') throw Error('code must be a string');
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  inspect() {
    return `Airport [${this._code}] ${this}`;
  }
}
