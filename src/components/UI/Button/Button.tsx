import classes from "./Button.module.css"
import { FunctionComponent } from "react"

const Button: FunctionComponent<MyProp> = (props) => {
    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(" ")}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button


interface MyProp {
    clicked: () => void;
    btnType: ButtonType;
}

export enum ButtonType {
    Danger = "Danger",
    Success = "Success",
}