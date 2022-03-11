import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Team } from './Team'
import mockGameOdds from '../mockGameOdds.json'
import Table from 'react-bootstrap/Table'

export const GameOdds = () => {
    let [gameOdds, setGameOdds] = useState([]);
    let [teamOdds, setTeamOdds] = useState([]);

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
            game.bookmakers.map(book => {
                let team = {
                    id: game.id,
                    favorite: '',
                    underdog: '',
                    bookmaker: '',
                    favSpread: '',
                    favSpreadPrice: '',
                    underdogSpread: '',
                    underdogSpreadPrice: '',
                    underdogMoneyLine: '',
                    favMoneyLine: '',
                    total: '',
                    overPrice: '',
                    underPrice: '',
                    rowBotPick: ''
                }

                if (book.title === 'FanDuel') {
                    team.bookmaker = book.title
                    book.markets.map(market => {
                        if (market.key === 'h2h') {
                            market.outcomes.map(outcome => {
                                if (outcome.price > 0) {
                                    team.underdog = outcome.name
                                    team.underdogMoneyLine = outcome.price
                                } else if (outcome.price <= 0) {
                                    team.favorite = outcome.name
                                    team.favMoneyLine = outcome.price
                                }
                            })
                        } else if (market.key === 'spreads') {
                            market.outcomes.map(outcome => {
                                if (outcome.point > 0) {
                                    team.underdog = outcome.name
                                    team.underdogSpread = outcome.point
                                    team.underdogSpreadPrice = outcome.price
                                } else if (outcome.point < 0) {
                                    team.favorite = outcome.name
                                    team.favSpread = outcome.point
                                    team.favSpreadPrice = outcome.price
                                }
                            })
                        } else if (market.key === 'totals') {
                            market.outcomes.map(outcome => {
                                team.total = outcome.point
                                if (outcome.name === 'Over') {
                                    team.overPrice = outcome.price
                                } else if (outcome.name === 'Under') {
                                    team.underPrice = outcome.price
                                }
                            })
                        }
                    })
                }
                team.rowBotPick = rowBotRandomPick(team.favorite, team.underdog)
                teams.push(team)
            })
        })

        setTeamOdds(teams)
        console.log('teams: ' + JSON.stringify(teamOdds))

    }

    const rowBotRandomPick = (favorite, underdog) => {
        let num = Math.floor(Math.random() * 2)
        if (num === 0) {
            return underdog
        } else {
            return favorite
        }
    }

    return (

        <div>
            <Button onClick={translateGameOdds}>Translate GameOdds</Button>

            <Team teams={teamOdds}/>

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