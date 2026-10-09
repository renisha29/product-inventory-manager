"use strict";
let productName = "Laptop";
let price = 55000;
let inStock = true;
let tags = ["Electronics", "Computer"];
let productId = 101;
function printProductInfo() {
    console.log(`Product ID: ${productId}, Product: ${productName}, Price: ${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}`);
}
printProductInfo();
function add(a, b) {
    return a + b;
}
add(10, 20);
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent / 100);
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));
function applyBulkDiscount(prices, discountRate) {
    return prices.map((price) => price - (price * discountRate / 100));
}
let prices = [1000, 2000, 3000];
console.log(applyBulkDiscount(prices, 10));
function scopeExample() {
    let functionVariable = "I am inside the function";
    for (let i = 0; i < 3; i++) {
        let blockVariable = "I am inside the loop";
        console.log(blockVariable);
    }
    // blockVariable cannot be accessed here
    // console.log(blockVariable);
    console.log(functionVariable);
}
scopeExample();
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        inStock: true,
        tags: ["Computer", "Electronics"]
    },
    {
        id: 2,
        name: "Mobile",
        price: 25000,
        inStock: true,
        tags: ["Electronics"]
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        inStock: false,
        tags: ["Audio"]
    },
    {
        id: 4,
        name: "Keyboard",
        price: 1500,
        inStock: true
    }
];
function getAvailableProducts(products) {
    return products.filter((product) => product.inStock);
}
console.log(getAvailableProducts(products));
function applyDiscountToProducts(products) {
    const discountPercent = 10;
    return products.map((product) => (Object.assign(Object.assign({}, product), { price: product.price -
            (product.price * discountPercent / 100), discountPercent: discountPercent })));
}
console.log(applyDiscountToProducts(products));
const productList = document.getElementById("productList");
if (productList) {
    products.forEach((product) => {
        var _a;
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>In Stock: ${product.inStock ? "Yes" : "No"}</p>
            <p>Tags: ${((_a = product.tags) === null || _a === void 0 ? void 0 : _a.join(", ")) || "No tags"}</p>
        `;
        productList.appendChild(div);
    });
}
