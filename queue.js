function Queue() {
  this.store = [];

  this.push = function (data) {
    this.store.push(data);
  };

  this.Dequeue = function () {
    return this.store.shift();
  };

  this.print = function () {
    return this.store;
  };

  this.isEmpty = function () {
    return this.store.length === 0;
  };
}

/**
 * push : thêm phần tử vảo mảng
 * Dequeue : xóa và in ra phần tử đẩu tiên được thêm
 * print : in ra mảng
 * isEmpty : check mảng rổng
 */
