import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    if (typeof value !== typeof 2) {
      throw new Error('Name must be a string');
    } else {
      this._amount = value;
    }
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('Currency must be a currency object');
    } else {
      this._currency = value;
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
