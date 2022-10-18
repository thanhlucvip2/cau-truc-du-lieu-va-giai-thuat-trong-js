const Queue = function () {
  this.store = [];
  const newElement = function (element, index) {
    this.element = element;
    this.index = index;
  };

  this.push = function (ele, index) {
    const newEle = new newElement(ele, index);
    let next = true;
    if (this.store.length === 0) {
      this.store.push(newEle);
    } else {
      for (let i = 0; i < this.store.length; i++) {
        if (newEle.index <= this.store[i].index) {
          this.store.splice(i, 0, newEle);
          break;
        }
      }
    }
    if (next) {
      console.log(next);
      this.store.push(newEle);
    }
  };
};

const que = new Queue();
