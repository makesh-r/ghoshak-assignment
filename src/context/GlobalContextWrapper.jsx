import React, { useReducer } from 'react'
import GlobalContext from './GlobalContext';
import { productsInitialState, productsReducer } from '../reducer/ProductReducer';

const GlobalContextWrapper = (props) => {

    const [{ searchedProducts, categories }, productsDispatch] = useReducer(productsReducer, productsInitialState);


    return (
        <GlobalContext.Provider value={{searchedProducts,categories, productsDispatch}}>
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextWrapper