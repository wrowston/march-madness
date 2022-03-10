import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Team } from './Team'
import mockGameOdds from '../mockGameOdds.json'
import { Table } from 'antd';

export const GameOdds = () => {
    let [gameOdds, setGameOdds] = useState([]);
    let [teamOdds, setTeamOdds] = useState([]);

    const data = teamOdds
    const columns = [
        {
            title: 'Team Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2',
            width: 150,
        },
        {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
        },
        {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
        },
        {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5',
            width: 150,
        },
        {
            title: 'Column 6',
            dataIndex: 'address',
            key: '6',
            width: 150,
        },
        {
            title: 'Column 7',
            dataIndex: 'address',
            key: '7',
            width: 150,
        },
        { title: 'Column 8', dataIndex: 'address', key: '8' },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>action</a>,
        },
    ];


    const getGameOdds = async () => {
        // let url = `https://api.the-odds-api.com/v4/sports/basketball_ncaab/odds/?apiKey=${API_KEY}&regions=us&markets=h2h,spreads,totals&oddsFormat=american`

        // let results = await axios.get(url)
        // console.log('GAME ODDS: ' + JSON.stringify(results.data))
        // setGameOdds(results.data)
        // results.data.forEach(element => gameOdds.push(element))
        // console.log('state: ' + gameOdds)

        setGameOdds(mockGameOdds)
        console.log('GAME ODDS: ' + JSON.stringify(mockGameOdds))

    }

    const translateGameOdds = async () => {
        getGameOdds()
        let teams = []
        gameOdds.forEach(game => {
            let team = {
                id: game.id,
                name: '',
                bookmaker: '',
                spread: '',
                spreadPrice: '',
                moneyLine: '',
                total: '',
                overPrice: '',
                underPrice: ''
            }
            game.bookmakers.map(book => {
                team.bookmaker = book.title
                book.markets.map(market => {
                    if (market.key === 'h2h') {
                        market.outcomes.map(outcome => {
                            team.name = outcome.name
                            team.moneyLine = outcome.price
                        })
                    } else if (market.key === 'spreads') {
                        market.outcomes.map(outcome => {
                            if (outcome.name === team.name) {
                                team.spread = outcome.point
                                team.spreadPrice = outcome.price
                            }
                        })
                    } else if (market.key === 'totals') {
                        market.outcomes.map(outcome => {
                            if (outcome.name === 'Over') {
                                team.total = outcome.point
                                team.overPrice = outcome.price
                            } else if (outcome.name === 'Under') {
                                team.underPrice = outcome.price
                            }
                        })
                    }
                })
            })

            teams.push(team)
        })

        setTeamOdds(teams)
        console.log('teams: ' + teamOdds)

    }

    return (

        <div>
            <Button onClick={translateGameOdds}>Translate GameOdds</Button>

            {/* <Button onClick={getGameOdds}>Refresh GameOdds</Button>
            Game Odds:

            {gameOdds.map(element => {
                return (
                    <div key={element.id}>
                        <Team element={element}/>
                        <div className='awayTeam'>{element.away_team}</div>
                        
                        <div>--------------------</div>
                    </div>
                )
            })} */}

        </div>
    )

}