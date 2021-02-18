import React, { FunctionComponent } from 'react';
import Burger from '../../Burger/Burger';
import Button, { ButtonType } from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary: FunctionComponent<{ clicked: () => void, ingredients: { [propertyName: string]: number } }> = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1> We hope it tastes well!!! </h1>
            <div style={{ width: '300px', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType={ButtonType.Danger} clicked={props.clicked} >CANCEL</Button>
            <Button btnType={ButtonType.Success} clicked={props.clicked} >CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary
