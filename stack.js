function Stack() {
  this.store = [];
  this.index = 0;
  this.push = function (element) {
    this.store[this.index] = element;
    this.index++;
  };
  this.pop = function () {
    if (this.index === 0) {
      return undefined;
    }
    this.index--;
    const result = this.store[this.index];
    delete this.store[this.index];
    return result;
  };
  this.isEmpty = function () {
    return this.index === 0;
  };
  this.peak = function () {
    return this.store[this.index - 1];
  };

  this.size = function () {
    return this.index;
  };
}

const st = new Stack();

// stack thêm vào sau cùng nhưng được lấy ra trước
// queue thêm vào trước được lấy ra trước
// trong stack gồm
/**
 *  push : thêm phần tử vào mảng
 *  peak : in ra phần tử cuối cùng được thêm vào mảng
 *  isEmpty : check mảng rổng hay còn phần tử
 *  pop : xóa và in ra phần tử cuối cùng được thêm vào mảng
 *  size : trả về độ dài của mảng
 */
