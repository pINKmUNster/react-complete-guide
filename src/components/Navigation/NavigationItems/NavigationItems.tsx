import NavigationItem from "./NavigationItem/NavigationItem"
import classes from "./NavigationItems.module.css"

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active >BurgerBuilder</NavigationItem>
            <NavigationItem link="/" >Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems