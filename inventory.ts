let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer"];
let productId: number | string = 101;

function printProductInfo(): void {
    console.log(
        `Product ID: ${productId}, Product: ${productName}, Price: ${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}`
    );
}

printProductInfo();
function add(a: number, b: number): number {
    return a + b;
}

add(10,20);

function calculateDiscount(
    price: number,
    discountPercent: number = 10
): number {
    return price - (price * discountPercent / 100);
}

console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));

function applyBulkDiscount(
    prices: number[],
    discountRate: number
): number[] {
    return prices.map(
        (price: number) =>
            price - (price * discountRate / 100)
    );
}

let prices: number[] = [1000, 2000, 3000];

console.log(applyBulkDiscount(prices, 10));

function scopeExample(): void {

    let functionVariable: string = "I am inside the function";

    for (let i: number = 0; i < 3; i++) {

        let blockVariable: string = "I am inside the loop";

        console.log(blockVariable);
    }

    // blockVariable cannot be accessed here
    // console.log(blockVariable);

    console.log(functionVariable);
}

scopeExample();

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}

let products: Product[] = [
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

function getAvailableProducts(
    products: Product[]
): Product[] {
    return products.filter(
        (product: Product) => product.inStock
    );
}

console.log(getAvailableProducts(products));

interface DiscountedProduct extends Product {
    discountPercent: number;
}

function applyDiscountToProducts(
    products: Product[]
): DiscountedProduct[] {

    const discountPercent: number = 10;

    return products.map(
        (product: Product): DiscountedProduct => ({
            ...product,
            price: product.price -
                (product.price * discountPercent / 100),
            discountPercent: discountPercent
        })
    );
}

console.log(applyDiscountToProducts(products));

const productList = document.getElementById("productList");

if (productList) {
    products.forEach((product: Product) => {
        const div = document.createElement("div");

        div.className = "product";

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>In Stock: ${product.inStock ? "Yes" : "No"}</p>
            <p>Tags: ${product.tags?.join(", ") || "No tags"}</p>
        `;

        productList.appendChild(div);
    });
}