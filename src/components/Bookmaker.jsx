import React, { useState } from 'react'
import { Table } from 'antd';
const { Column, ColumnGroup } = Table;


export const Bookmaker = (props) => {
    let bookmaker = props.bookmaker

    return (
        <div>
            {/* <Table columns={columns} dataSource={bookmaker} scroll={{ x: 1500, y: 300 }} /> */}
            {/* <Table dataSource={bookmaker}>
                <ColumnGroup title={bookmaker.title}>
                    <Column title="ML" dataIndex="" key="firstName" />
                    <Column title="Spread" dataIndex="lastName" key="lastName" />
                    <Column title="O/U" dataIndex="lastName" key="lastName" />
                </ColumnGroup>
            </Table> */}
            {/* <div className='team-name'>{props.teamName}</div> */}
            <div className='bookmakerTitle'>
                {bookmaker.title}
            </div>
            <div className='market-wrapper'>
                {bookmaker.markets.map(market => {

                    if (market.key === 'h2h') {
                        return (
                            <div className='bookmaker-wrapper'>
                                {market.outcomes.map(line => {
                                    if (line.name === props.teamName) {
                                        return (
                                            <div className='moneyLine'>ML: {line.price}</div>
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
                                            <div className='spread'>
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
                                    return (
                                        // <Column title='O/U'/>
                                        <div className='totals'>
                                            {line.name} | {line.point} | {line.price}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                    // if (market.key === 'h2h') {
                    //     return (
                    //         <div key={market.key}>
                    //             <div className=''>
                    //                 ML: {market.outcomes[0].price}
                    //             </div>
                    //         </div>
                    //     )
                    // } else if (market.key === 'spreads') {
                    //     return (
                    //         <div key={market.key}>
                    //             <div >
                    //                 spread: {market.outcomes[0].point}
                    //             </div>
                    //         </div>
                    //     )
                    // } else if (market.key === 'totals') {
                    //     return (
                    //         <div key={market.key}>
                    //             <div>
                    //                 over: {market.outcomes[0].point} | {market.outcomes[0].price}
                    //             </div>
                    //             <div >
                    //                 under: {market.outcomes[1].point} | {market.outcomes[1].price}
                    //             </div>
                    //         </div>
                    //     )
                    // }

                })}
            </div>
        </div>
    )
}

