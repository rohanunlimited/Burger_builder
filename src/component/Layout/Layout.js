import React from 'react'
import AuxO from '../../hoc/AuxO';
import Styles from './Layout.module.css'
 function Layout(props) {
    return (
        <AuxO>
        <div>
            TooBar ,SideBar,Backdrop
            </div>
            <main className={Styles.Content}>
                {props.children}
            </main>
            </AuxO>
    )
}
export default Layout;