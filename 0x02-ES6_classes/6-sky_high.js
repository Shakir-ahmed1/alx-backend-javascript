import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') throw Error('Floors must be a number');
    this._floor = floors;
  }

  get floors() {
    return this._floor;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
