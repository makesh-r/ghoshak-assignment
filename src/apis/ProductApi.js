

async function getProducts() {
    return fetch("https://dummyjson.com/products").then(result => result.json())
}

export {getProducts};