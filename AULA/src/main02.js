//"dev": "babel -w ./main2.js -o ./bundle2.js"

class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 2)); //metodo static, nao precisa instanciar a classe

const arr = [1, 3, , 4, 5, 8, 9];

const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
});

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

const find = arr.find(function(item) {
  return item === 4;
});
