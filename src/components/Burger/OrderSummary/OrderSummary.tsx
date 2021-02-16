import { Fragment, FunctionComponent } from "react"
import classes from './OrderSummary.module.css'


const OrderSummary: FunctionComponent<MyProp> = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}> {igKey} : {props.ingredients[igKey]} </li>;
        });
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout ?</p>
        </Fragment>
    )
}

export default OrderSummary

interface MyProp {
    ingredients: { [propertyName: string]: number },
}