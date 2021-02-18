import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient, { IngredientType } from './BurgerIngredient/BurgerIngredient'

function Burger(props: { ingredients: { [propertyName: string]: number }, }) {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                let type: IngredientType = IngredientType[igKey as keyof typeof IngredientType];
                return <BurgerIngredient key={igKey + i} type={type} />
            })
        }).reduce((array, el) => {
            return array.concat(el);
        }, []);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={IngredientType.BreadTop} />
            {
                transformedIngredients.length !== 0 ? transformedIngredients : null
            }
            <BurgerIngredient type={IngredientType.BreadBottom} />
        </div>
    )
}

export default Burger
