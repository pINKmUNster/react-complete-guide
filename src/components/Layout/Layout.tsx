import React, { Component, Fragment } from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState: { showSideDrawer: boolean }) => { return { showSideDrawer: !prevState.showSideDrawer } })
    }

    render() {
        return (
            <Fragment>
                <Toolbar drawerClicked={this.sideDrawerToggleHandler} />
                <SideDrawer show={this.state.showSideDrawer} backdropClickHandler={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>);
    }
}

export default Layout;