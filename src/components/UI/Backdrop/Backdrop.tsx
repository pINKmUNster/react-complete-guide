import { FunctionComponent } from "react"
import classes from "./Backdrop.module.css"

const Backdrop: FunctionComponent<{ show?: boolean, clicked: () => void }> = (props) => {
    return (
        props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
    )
}

export default Backdrop

