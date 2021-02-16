
import classes from './Modal.module.css'

const Modal: React.FunctionComponent<MyProps> = (props) => {
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}

export default Modal


interface MyProps { }