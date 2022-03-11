import React, { useState } from 'react'
import { Bookmaker } from './Bookmaker';
import Table from 'react-bootstrap/Table'

export const Team = (props) => {
    let teams = props.teams;
    console.log('props: ' + JSON.stringify(props))

    return (
        <div className='team-wrapper'>
            {teams.map(team => {
                if (team.bookmaker === 'FanDuel') {
                    return (
                        <Table striped bordered hover variant="dark" key={team.id}>
                            <thead>
                                <tr>
                                    <th rowSpan={2}>Team Name</th>
                                    <th colSpan={4}>{team.bookmaker}</th>
                                </tr>
                                <tr>
                                    <th>ML</th>
                                    <th>Spread</th>
                                    <th>O/U</th>
                                    <th>RowBotPick</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{team.underdog}</td>
                                    <td>+{team.underdogMoneyLine}</td>
                                    <td>+{team.underdogSpread} | {team.underdogSpreadPrice}</td>
                                    <td>U {team.underPrice}</td>
                                    <td rowSpan={2}>{team.rowBotPick}</td>
                                </tr>
                                <tr>
                                    <td>{team.favorite}</td>
                                    <td>{team.favMoneyLine}</td>
                                    <td>{team.favSpread} | {team.favSpreadPrice}</td>
                                    <td>O {team.overPrice}</td>
                                </tr>
                            </tbody>
                        </Table>
                    )
                }
            })}

            {/* {teams.bookmakers.map(bookmaker => {
                return (
                    <div key={bookmaker.key} className='bookmaker'>
                        <Bookmaker bookmaker={bookmaker} teamName={teams.home_team} />
                    </div>
                )
            })} */}
        </div>
    )
}