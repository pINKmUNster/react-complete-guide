import { Fragment, FunctionComponent } from "react"
import Button, { ButtonType } from "../../UI/Button/Button";

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
            <Button btnType={ButtonType.Danger} clicked={props.canceled}>CANCEL</Button>
            <Button btnType={ButtonType.Success} clicked={props.continued}>CONTINUE</Button>
        </Fragment>
    )
}

export default OrderSummary

interface MyProp {
    ingredients: { [propertyName: string]: number },
    canceled: () => void;
    continued: () => void;
}