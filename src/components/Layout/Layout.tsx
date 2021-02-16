import React, { Fragment } from 'react';
import classes from  './Layout.module.css'

const layout =(props: { children: React.ReactNode; }) =>(
    <Fragment>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);


export default layout;