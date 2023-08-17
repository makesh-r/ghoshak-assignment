import React, { useEffect, useState, useRef } from 'react';
import Card from './Card/Card';
import "./Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { getProducts } from '../apis/ProductApi';


const Main = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [searchedProducts, setSearchedProducts] = useState([]);

    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const inputRef = useRef();


    useEffect(() => {
        inputRef.current.focus();
        getProducts()
            .then((resultProducts) => {
                setProducts(resultProducts.products);
                setCategories([...new Set(products.map(product => product.category))]);

            })

    }, [])

    useEffect(() => {
        setCategories([...new Set(products.map(product => product.category))]);
    }, [products])

    // form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        if (price === "" || category === "") {
            alert("Please select a category and price.")
        }
        else {
            const arr = products.filter(
                (item) => item.price >= price && item.category === category
            );
            arr.length === 0 ? setError(true) : setError(false)
            setSearchedProducts(arr);

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
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form__input" placeholder="Enter price to search" ref={inputRef} />
                    <button type="submit" className="form__button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
            </header>

            <div className="main__body">

                {
                    searchedProducts &&
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
                }
                {
                    error && 
                    <div className="error">
                        <p>No products in the selected category that are above the entered price.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Main