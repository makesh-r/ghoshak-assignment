import React from 'react'
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={product.thumbnail} alt="iPhone X" />
      </div>
      <div className="card__content">
        <h3 className="card__content--title">{product.title} <span className="title--brand">({product.brand})</span></h3>
        <p className="card__content--description">{product.description}</p>
        <p className="card__content--rating">
          {product.rating}
          <span className="rating--icon"><FontAwesomeIcon icon={faStar} /></span>
        </p>
        <p className="card__content--stock">{product.stock} left</p>
      </div>
      <div className="card__price">
        <p className="card__price--price">$ {product.price}</p>
        <p className="card__price--discount">{product.discountPercentage}% off</p>
      </div>

    </div>
  )
}

export default Card