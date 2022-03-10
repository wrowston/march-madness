import React, { Component } from 'react'
import {GameOdds} from './GameOdds'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>HomePage.</h1>
                <GameOdds/>
            </div>
        )
    }
}