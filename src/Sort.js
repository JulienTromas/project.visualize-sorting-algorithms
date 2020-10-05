class Bubbles {
  constructor(array) {
    this.array = array;
  }

  sort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length; j++) {
        if (this.array[j] > this.array[j + 1]) {
          let tempValueHolder = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = tempValueHolder;
        }
      }
    }
    return this.array;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Bubbles;
