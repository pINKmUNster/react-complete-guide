import classes from './BurgerIngredient.module.css';

export enum IngredientType {
    BreadBottom = "BreadBottom",
    BreadTop = "BreadTop",
    Meat = "Meat",
    Cheese = "Cheese",
    Salad = "Salad",
    Bacon = "Bacon"
}

export interface Ingredients {
    ingredients: { [propertyName: string]: number },
}

const burgerIngredient = (props: { type: IngredientType; }) => {
    let ingredient = null;

    switch (props.type) {
        case (IngredientType.BreadBottom):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case (IngredientType.BreadTop):
            ingredient = (<div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>);
            break;
        case (IngredientType.Meat):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case (IngredientType.Cheese):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case (IngredientType.Salad):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case (IngredientType.Bacon):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
};



export default burgerIngredient;