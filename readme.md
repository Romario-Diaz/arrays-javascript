# Manipulación de Arrays en JavaScript

# forEach

La función `forEach()` ejecuta una función proporcionada una vez por cada elemento en un array.

```javascript
const array = [1, 2, 3];

array.forEach(element => {
  console.log(element);
});
// Output:
// 1
// 2
// 3
```

# map

El método `map()` crea un nuevo array con los resultados de llamar a una función para cada elemento del array.

```javascript
const array = [1, 2, 3];

const newArray = array.map(element => element * 2);
console.log(newArray); // Output: [2, 4, 6]
```
# filter

El método `filter()` crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.

```javascript
const array = [1, 2, 3, 4, 5];

const filteredArray = array.filter(element => element % 2 === 0);
console.log(filteredArray); // Output: [2, 4]
```
# reduce

El método `reduce()` ejecuta una función reductora sobre cada elemento de un array, devolviendo un único valor resultante.

```javascript
const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```
# some

El método `some()` comprueba si al menos un elemento del array cumple con la condición proporcionada.

```javascript
const array = [1, 2, 3];

const hasNegative = array.some(element => element < 0);
console.log(hasNegative); // Output: false
```
# every

El método `every()` comprueba si todos los elementos del array cumplen con la condición proporcionada.

```javascript
const array = [1, 2, 3];

const allPositive = array.every(element => element > 0);
console.log(allPositive); // Output: true
```
# find

El método `find()` devuelve el primer elemento del array que cumple con la condición proporcionada.

```javascript
const array = [1, 2, 3, 4, 5];

const found = array.find(element => element > 3);
console.log(found); // Output: 4
```
# includes

El método `includes()` comprueba si un array incluye un determinado elemento.

```javascript
const array = [1, 2, 3];

const includesTwo = array.includes(2);
console.log(includesTwo); // Output: true
```
# join

El método `join()` une todos los elementos de un array en una cadena y devuelve esta cadena.

```javascript
const array = ['Hello', 'world'];

const joinedString = array.join(' ');
console.log(joinedString); // Output: "Hello world"
```
# split

El método `split()` divide una cadena en un array de subcadenas y devuelve el nuevo array.

```javascript
const string = 'Hello,world';

const array = string.split(',');
console.log(array); // Output: ["Hello", "world"]
```
# concat

El método `concat()` se utiliza para unir dos o más arrays.

```javascript
const array1 = [1, 2];
const array2 = [3, 4];

const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4]
```

# flat

El método `flat()` crea un nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

```javascript
const array = [1, [2, [3]]];

const flatArray = array.flat(2);
console.log(flatArray); // Output: [1, 2, 3]
```

# flatmap

El método `flatMap()` primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array.

```javascript
const array = [1, 2, 3];

const mappedArray = array.flatMap(x => [x, x * 2]);
console.log(mappedArray); // Output: [1, 2, 2, 4, 3, 6]
```
# sort

El método `sort()` ordena los elementos de un array localmente y devuelve el array ordenado.

```javascript
const array = [3, 1, 2];

array.sort();
console.log(array); // Output: [1, 2, 3]
```