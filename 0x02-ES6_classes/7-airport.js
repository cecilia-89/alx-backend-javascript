export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') throw new Error('name must be string');
    if (typeof code !== 'string') throw new Error('code must be string');

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${typeof this} ${this._code}]`;
  }
}
