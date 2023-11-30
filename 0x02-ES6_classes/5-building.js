export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw Error('Sqft must be a number');
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this.sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
