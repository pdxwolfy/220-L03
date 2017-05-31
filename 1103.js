var person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName: function() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  }
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();
// Peter Parker is the Amazing Spidermanr!
