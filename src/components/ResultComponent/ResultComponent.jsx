import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import Card from '../Card/Card';

const ResultComponent = () => {

    const { searchedProducts } = useContext(GlobalContext);

    return (
        <div>
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
    )
}

export default ResultComponent