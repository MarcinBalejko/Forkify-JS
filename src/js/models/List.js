import uniqid from "uniqid";

export default class List {
  constructor() {
    this.items = [];
  }

  addItem(count, unit, ingredient) {
    const item = {
      id: uniqid(),
      count,
      unit,
      ingredient,
    };
    this.items.push(item);
    return item;
  }

  deleteItem(id) {
    const index = this.items.findIndex((el) => el.id === id);
    return this.items.splice(index, 1);
  }

  updateCount(id, newCount) {
    // find is similar to findIndex except that it finds element not index
    this.items.find((el) => el.id === id).count = newCount;
  }
}
