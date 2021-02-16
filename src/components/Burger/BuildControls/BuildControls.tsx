import { Ingredients } from '../BurgerIngredient/BurgerIngredient';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'


const controls = [
    { label: 'Salad', type: Ingredients.Salad },
    { label: 'Bacon', type: Ingredients.Bacon },
    { label: 'Cheese', type: Ingredients.Cheese },
    { label: 'Meat', type: Ingredients.Meat }
];

const BuildControls = (props: any) => {
    return (
        <div className={classes.BuildControls}>
            { controls.map((control) => {
                return <BuildControl key={control.label} label={control.label}
                    added={() => { props.ingredientAdded(control.type) }}
                    removed={() => { props.removedIngredient(control.type) }}
                />
            })}
        </div>
    )
}


export default BuildControls
