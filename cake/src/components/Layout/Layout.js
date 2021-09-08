import React from 'react';
import Auxm from '../../hoc/Auxm';
import classes from './Layout.css';


const layout = ( props ) => (
    <Auxm>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxm>
);

export default layout;