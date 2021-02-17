import { Fragment, FunctionComponent } from "react"
import Logo from "../../Logo/Logo"
import Backdrop from "../../UI/Backdrop/Backdrop"
import NavigationItems from "../NavigationItems/NavigationItems"

import classes from './SideDrawer.module.css'

const SideDrawer: FunctionComponent<{ show?: boolean, backdropClickHandler: () => void }> = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.backdropClickHandler} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    )
}

export default SideDrawer
