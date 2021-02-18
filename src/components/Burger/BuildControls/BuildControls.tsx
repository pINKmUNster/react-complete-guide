import { IngredientType } from '../BurgerIngredient/BurgerIngredient';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'


const controls = [
    { label: 'Salad', type: IngredientType.Salad },
    { label: 'Bacon', type: IngredientType.Bacon },
    { label: 'Cheese', type: IngredientType.Cheese },
    { label: 'Meat', type: IngredientType.Meat }
];


export interface Props {
    price: number;
    purchasable: boolean;
    disabled: { [propertyName: string]: boolean };
    ingredientAdded: (type: IngredientType) => void;
    removedIngredient: (type: IngredientType) => void;
    orderClicked: () => void;
}

const BuildControls: React.FC<Props> = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p> Price : <strong>{props.price.toFixed(2)}</strong></p>
            { controls.map((control) => {
                return <BuildControl key={control.label} label={control.label}
                    added={() => { props.ingredientAdded(control.type) }}
                    removed={() => { props.removedIngredient(control.type) }}
                    disabled={props.disabled[control.type]}
                />
            })}

            <button onClick={props.orderClicked} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}


export default BuildControls
