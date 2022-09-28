import React, { useEffect, useState } from 'react';
import "./Food.css"
import Show from '../Showfood/Show';
import Cart from '../Cart/Cart';
import { addToDb, getSotredCart } from '../../utilities/fakedb';

const Food = () => {
    const [meals, setmeals] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setmeals(data.meals))
    }, []);

    useEffect(() => {
        const storedcart = getSotredCart();
        for (const idMeal in storedcart) {
            const addedMeals = meals.find(meal => meal.idMeal === idMeal);
            if (addedMeals) {
                console.log(addedMeals);
            }
        }
    }, [meals])

    const handleaddtocart = (meal) => {
        const newcart = [...cart, meal];
        setcart(newcart);
        addToDb(meal.idMeal)
    }

    return (
        <div className='cart-container'>
            <div className='meals-container'>
                {
                    meals.map(meal => <Show
                        key={meal.idMeal}
                        meal={meal}
                        handleaddtocart={handleaddtocart}
                    ></Show>)
                }

            </div>
            <div className='container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Food;