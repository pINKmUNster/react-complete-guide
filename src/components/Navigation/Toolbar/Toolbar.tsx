import classes from "./Toolbar.module.css"
import React, { FunctionComponent } from "react"
import Logo from '../../Logo/Logo'
import NavigationItems from "../NavigationItems/NavigationItems"

const Toolbar: FunctionComponent<MyProp> = (props) => {
    return (
        <header className={classes.Toolbar} >
            <div> MENU</div>
            <Logo />
            <NavigationItems />
        </header>
    )
}

export default Toolbar

interface MyProp {

}