products = [
    { pid: 100, pName: "apple", band: "5g", price: 120000, display: "led" },
    { pid: 101, pName: "samsaung", band: "5g", price: 45000, display: "led" },
    { pid: 102, pName: "blackberry", band: "4g", price: 50000, display: "led" },
    { pid: 103, pName: "nokia", band: "3g", price: 1200, display: "lcd" },
    { pid: 104, pName: "motorola", band: "4g", price: 10000, display: "lcd" },
];

console.log("1.");
console.log(products.map((product) => product.pName));
console.log("--------------");

console.log(2);
console.log(products.filter((product) => product.display == "lcd"));
console.log("-------------");

console.log(3);
console.log(products.filter((product) => product.band == "5g"));
console.log("-------------");

console.log(4);
console.log(
    products
        .filter((product) => product.band == "5g")
        .map((product) => product.pName)
);
console.log("-------------");

console.log(5);
let low = products.filter((product) => product.price < 20000);
console.log(low.pName);
console.log("-------------");

console.log(6);
let hig = products.filter((product) => product.price > 20000);
console.log(hig.pName);
console.log("-------------");

console.log(7);
let lowest = products.reduce((a, b) => (a.price < b.price ? a : b));
console.log("the cheapest mobile is :");
console.log(lowest.pName);

console.log("-------------");

console.log(8);
let highest = products.reduce((a, b) => (a.price > b.price ? a : b));
console.log(highest.pName);
console.log("-------------");
