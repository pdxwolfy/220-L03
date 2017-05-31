var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo();      // 2

foo.bar();                // 2
Foo();                    // 1

var obj = {};
Foo.call(obj);            // undefined
obj.bar();                // undefined

console.log(this.a);      // 1
