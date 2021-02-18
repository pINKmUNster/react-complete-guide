import { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {

    state: CheckoutState = {
        ingredients: {
            Salad: 1,
            Meat: 1,
            Cheese: 1,
            Bacon: 1,
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary clicked={() => { }} ingredients={this.state.ingredients} />
            </div>
        )
            ;
    }
}

export default Checkout;


interface CheckoutState {
    ingredients: { [propertyName: string]: number },
}