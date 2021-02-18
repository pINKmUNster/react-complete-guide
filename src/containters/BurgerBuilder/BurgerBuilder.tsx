import React, { Component, Fragment } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import { IngredientType } from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import axios from '../../axios-orders'
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../withErrorHandler";
import { RouteComponentProps } from "react-router-dom";


const INGREDIENT_PRICES: { [propertyName: string]: number } = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7,
};

class BurgerBuilder extends Component<RouteComponentProps> {
    state: BurgerBuilderState = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Meat: 0,
            Cheese: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
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

                <Modal show={this.state.purchasing} modalClosed={this.modalCloseHandler} >
                    {this.state.loading ? <Spinner /> : <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} continued={this.purchaseContinueHandler} canceled={this.modalCloseHandler} />}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    removedIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderClicked={this.purchasingHandler}
                />
            </Fragment>);
    }

    updatePurchaseState(ingredients: { [propertyName: string]: number }) {
        const sum = Object.keys(ingredients).map((key) => {
            return ingredients[key];
        }).reduce((sum, el) => { return sum + el; }, 0);

        this.setState({ purchasable: sum > 0 })
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseContinueHandler = () => {
        this.props.history.push("/checkout");
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Flo",
        //         address: {
        //             street: "test",
        //             zipCode: '1321'
        //         },
        //         email: "a@a.fr"
        //     },
        //     deliveryMethod: 'fastest'
        // };
        // axios.post('/orders.json', order)
        //     .then(r => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(e => {
        //         this.setState({ loading: false, purchasing: false });
        //         console.log(e);
        //     })
    }

    modalCloseHandler = () => {
        this.setState({ purchasing: false });
    }

    addIngredientHandler = (type: IngredientType) => {
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

    removeIngredientHandler = (type: IngredientType) => {
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

export default withErrorHandler(BurgerBuilder, axios);


interface BurgerBuilderState {
    ingredients: { [propertyName: string]: number },
    totalPrice: number,
    purchasable: boolean,
    purchasing: boolean,
    loading: boolean
}