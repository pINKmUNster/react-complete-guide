import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient, { Ingredients } from './BurgerIngredient/BurgerIngredient'

function Burger(props: { ingredients: { [propertyName: string]: number }, }) {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                if (i === 0) {
                    return;
                }
                let type: Ingredients = Ingredients[igKey as keyof typeof Ingredients];
                return <BurgerIngredient key={igKey + i} type={type} />
            })
        }).reduce((array, el) => {
            return array.concat(el);
        }, []);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={Ingredients.BreadTop} />
            {
                transformedIngredients.length !== 0 ? transformedIngredients : null
            }
            <BurgerIngredient type={Ingredients.BreadBottom} />
        </div>
    )
}

export default Burger
