var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + this.tax - specialDiscount();
          // 30000 + 2000 + undefined
  }
};

console.log(computer.total()); // NaN
