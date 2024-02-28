const pets = ['cat', 'dog', 'bat'];

let includesInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog') {
        includesInArray = true;
        break;
    }
}
console.log('for', includesInArray);

const rta = pets.includes('dog');
console.log("includes : ", rta)