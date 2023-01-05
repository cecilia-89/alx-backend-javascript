import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqrt, floors) {
    super(sqrt);
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly ${this._floors} floors`;
  }
}
