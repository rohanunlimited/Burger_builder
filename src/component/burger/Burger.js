import React from 'react'
import Styles from './Burger.module.css'
import BurgerIngredients from './BurgerIngredient/BurgerIngredients'
 function Burger() {
    return (
        <div className={Styles.Burger}>
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            <BurgerIngredients type="meat"></BurgerIngredients>
            <BurgerIngredients type="salad"></BurgerIngredients>
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    )
}

export default Burger;