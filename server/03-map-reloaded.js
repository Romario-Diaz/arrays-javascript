const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log("original", orders)
const rpta = orders.map(item => item.total);
console.log("new array : ", rpta)

// const rpta2 = orders.map(item => {
//     item.tax = .19;
//     return item
// });


// console.log("rpta 2 : ", rpta2)
// console.log("original", orders)

const rpta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
});

console.log("rpta 3 : ", rpta3)
// console.log("rpta 2 : ", rpta2)
console.log("original", orders)
