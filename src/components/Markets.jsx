import React, { useState } from 'react'

export const Markets = (props) => {
    let market = props.market

    
    if (market.key === 'h2h') {
        return (
            <div>
                {market.outcomes.map(line => {
                    if (line.name === props.teamName) {
                        return (
                            <div>ML: {line.price}</div>
                        )
                    }
                })
                }
            </div>
        )
    } else if (market.key === 'spreads') {
        return (
            <div>
                {market.outcomes.map(line => {
                    if (line.name === props.teamName) {
                        return (
                            <div>
                                Spread: {line.point} | {line.price}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
    else if (market.key === 'totals') {
        return (
            <div>
                {market.outcomes.map(line => {
                    if (line.name === 'over') {
                        return (
                            <div>
                                {line.name} | {line.point} | {line.price}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}
