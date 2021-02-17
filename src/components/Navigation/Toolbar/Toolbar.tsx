import classes from "./Toolbar.module.css"
import React, { FunctionComponent } from "react"
import Logo from '../../Logo/Logo'
import NavigationItems from "../NavigationItems/NavigationItems"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const Toolbar: FunctionComponent<MyProp> = (props) => {
    return (
        <header className={classes.Toolbar} >
            <DrawerToggle clicked={props.drawerClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar

interface MyProp {
    drawerClicked: () => void;
}