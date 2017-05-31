var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count; // myObject.myChildObject
    }
  }
};

console.log(myObject.myChildObject.myMethod.call(myObject));
