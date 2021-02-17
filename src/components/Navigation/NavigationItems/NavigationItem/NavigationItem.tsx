import { FunctionComponent } from 'react'
import classes from './NavigationItems.module.css'

const NavigationItem: FunctionComponent<{ link: string, active?: boolean }> = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a
                href={props.link}
                className={props.active ? classes.active : undefined}
            > {props.children}</a>
        </li>
    )
}

export default NavigationItem
