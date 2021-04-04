import React, { Component } from 'react'
import Burger from '../component/burger/Burger';
import AUxO from '../hoc/AuxO'
 class BurgerBuilder extends Component {
    render() {
        return (
            <AUxO>
                <Burger></Burger>
            </AUxO>
        )
    }
}
export default BurgerBuilder;