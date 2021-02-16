import { Component, Fragment } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import { Ingredients } from "../../components/Burger/BurgerIngredient/BurgerIngredient";

const INGREDIENT_PRICES: { [propertyName: string]: number } = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7,
};

class BurgerBuilder extends Component {

    state: {
        ingredients: { [propertyName: string]: number },
        totalPrice: number,
    } = {
            ingredients: {
                Salad: 0,
                Bacon: 0,
                Meat: 0,
                Cheese: 0
            },
            totalPrice: 4
        };
    render() {

        const disabledInfo: { [propertyName: string]: boolean } = {
            Salad: true,
            Bacon: true,
            Meat: true,
            Cheese: true
        }

        for (let key in this.state.ingredients) {
            disabledInfo[key] = this.state.ingredients[key] <= 0;
        }
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                />
            </Fragment>);
    }

    addIngredientHandler = (type: Ingredients) => {
        const oldCount = this.state.ingredients[type.toString()];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type.toString()] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type.toString()]
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    };
    removeIngredientHandler = (type: Ingredients) => {
        const oldCount = this.state.ingredients[type.toString()];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type.toString()] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type.toString()]
        const newPrice = this.state.totalPrice - priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }
}

export default BurgerBuilder;