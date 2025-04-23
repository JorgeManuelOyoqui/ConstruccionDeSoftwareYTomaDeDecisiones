const items = [];

module.exports = class Item {
  constructor(value) {
    this.value = value;
  }

  save() {
    items.push(this);
  }

  static fetchAll() {
    return items;
  }
}
