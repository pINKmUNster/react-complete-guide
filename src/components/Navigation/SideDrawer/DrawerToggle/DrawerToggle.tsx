import { FunctionComponent } from "react"
import classes from './DrawerToggle.module.css'

const DrawerToggle: FunctionComponent<{ clicked: () => void }> = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    )
}

export default DrawerToggle
