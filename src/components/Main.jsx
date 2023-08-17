import React, { useEffect, useState, useReducer } from 'react';
import Card from './Card/Card';
import "./Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { getProducts } from '../apis/ProductApi';
import { productsActions, productsInitialState, productsReducer } from '../reducer/ProductReducer';


const Main = () => {


    const [{searchedProducts, categories}, productsDispatch] = useReducer(productsReducer, productsInitialState);

    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");


    useEffect(() => {
        getProducts()
            .then((result) => {
                productsDispatch({
                    type:productsActions.GET_ALL_PRODUCTS,
                    items:result.products
                })

                productsDispatch({
                    type: productsActions.GET_CATOGORIES,
                })
            })

    }, [])


    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        if (price === "" || category === "") {
            alert("Please select a category and price.")
        }
        else {
            productsDispatch({
                type: productsActions.SEARCH_PRODUCTS,
                price: price,
                category: category
            })

            setCategory("");
            setPrice("");
        }


    }


    return (
        <div className="main">
            <header className="main__header">
                <form onSubmit={handleSubmit} className="form">

                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="form__select">
                        <option value="">Select a category</option>
                        {
                            categories &&
                            categories.map(
                                (category) => (
                                    <option key={category} value={category}>{category}</option>
                                )
                            )
                        }
                    </select>
                    <input type="number" autoFocus value={price} onChange={(e) => setPrice(e.target.value)} className="form__input" placeholder="Enter price to search" />
                    <button type="submit" className="form__button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
            </header>

            <div className="main__body">

                {
                    searchedProducts.length > 0 ?
                    searchedProducts.map(
                        (item) => {
                            return (
                                <Card
                                    key={item.id}
                                    product={item}
                                />
                            )
                        }
                    ) 
                    :
                    <div className="error">
                        <p>No products in the selected category that are above the entered price.</p>
                    </div>
                }

            </div>
        </div>
    )
}

export default Main