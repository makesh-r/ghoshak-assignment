
const productsInitialState = {
    products: [],
    categories: [],
    searchedProducts: []
}

const productsActions = {
    GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
    GET_CATOGORIES: "GET_CATEGORIES",
    SEARCH_PRODUCTS: "SEARCH_PRODUCTS"
}

const productsReducer = (state = productsInitialState, action) => {

    switch (action.type) {
        case productsActions.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.items,
            }

        case productsActions.SEARCH_PRODUCTS:
            return {
                ...state,
                searchedProducts: state.products.filter(
                    (item) => item.category === action.category && item.price >= action.price
                )
            }

        case productsActions.GET_CATOGORIES:
            return {
                ...state,
                categories: [...new Set(state.products.map(item => item.category))]
            }

        default:
            return {
                state
            }
    }
}

export { productsInitialState, productsActions, productsReducer };