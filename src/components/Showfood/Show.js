import React from 'react';
import "./Show.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Show = (props) => {
    const { strArea, strIngredient4, idMeal, strMealThumb } = props.meal
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className='sizing'>
                <p> Meal id:{idMeal}</p>
                <p className='font-family'>Meal Name:{strIngredient4}</p>
                <h6>Country:{strArea}</h6>
            </div>
            <button onClick={() => props.handleaddtocart(props.meal)} className='btn-cart'><p className='p-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Show;