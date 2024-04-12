/*

    Reduce Method
    variable_name.reduce((previousValue, currentValue, currentIndex, array) =>{
        return previousValue + currentValue;
    }, 0);

    0 -> is Initial Value

*/

let product = [
    {
        "id": 1,
        "name": "Deluxe Pizza",
        "price": 299.99
    },
    {
        "id": 2,
        "name": "Seafood Pizza",
        "price": 249.99
    },
    {
        "id": 3,
        "name": "Truffle Mushroom Pizza",
        "price": 219.99
    },
    {
        "id": 4,
        "name": "Gourmet Veggie Pizza",
        "price": 229.99
    },
    {
        "id": 5,
        "name": "Ultimate Meat Lover's Pizza",
        "price": 259.99
    },
    {
        "id": 6,
        "name": "Four Cheese Pizza",
        "price": 209.99
    },
    {
        "id": 7,
        "name": "Mediterranean Pizza",
        "price": 239.99
    },
    {
        "id": 8,
        "name": "BBQ Chicken Pizza",
        "price": 219.99
    },
    {
        "id": 9,
        "name": "Pesto Veggie Pizza",
        "price": 229.99
    },
    {
        "id": 10,
        "name": "Spicy Diablo Pizza",
        "price": 249.99
    }
]

let productPriceTotal = product.reduce((acc, productPrice) =>{
    return acc + productPrice.price
}, 0);

console.log(parseInt(productPriceTotal));