import React, { Component, Fragment } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import { Ingredients } from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import Modal from "../../components/UI/Modal/Modal";

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
        purchasable: boolean
    } = {
            ingredients: {
                Salad: 0,
                Bacon: 0,
                Meat: 0,
                Cheese: 0
            },
            totalPrice: 4,
            purchasable: false
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
                <Modal />
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Fragment>);
    }

    updatePurchaseState(ingredients: { [propertyName: string]: number }) {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, el) => { return sum + el; }, 0);

        this.setState({ purchasable: sum > 0 })
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
        this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients);
    }
}

export default BurgerBuilder;