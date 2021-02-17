import { FunctionComponent } from 'react'
import classes from './Logo.module.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const Logo: FunctionComponent = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="BurgerFactory" />
        </div>
    )
}

export default Logo
