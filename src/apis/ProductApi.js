// function to get the products from api

async function getProducts() {
    return fetch("https://dummyjson.com/products").then(result => result.json())
}

export {getProducts};