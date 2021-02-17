import classes from "./Toolbar.module.css"
import React, { FunctionComponent } from "react"
import Logo from '../../Logo/Logo'

const Toolbar: FunctionComponent<MyProp> = (props) => {
    return (
        <header className={classes.Toolbar} >
            <div> MENU</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    )
}

export default Toolbar

interface MyProp {

}