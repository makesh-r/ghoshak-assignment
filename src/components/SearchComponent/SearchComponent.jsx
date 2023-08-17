import React, { useContext, useEffect, useState } from 'react'
import { productsActions } from '../../reducer/ProductReducer';
import GlobalContext from '../../context/GlobalContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { getProducts } from '../../apis/ProductApi';

const SearchComponent = () => {

    const { categories, productsDispatch } = useContext(GlobalContext);
    
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");


    useEffect(() => {
        getProducts()
            .then((result) => {
                productsDispatch({
                    type: productsActions.GET_ALL_PRODUCTS,
                    items: result.products
                })

                productsDispatch({
                    type: productsActions.GET_CATOGORIES,
                })
            })

    }, [])

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
    )
}

export default SearchComponent