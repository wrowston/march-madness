import React, { useState } from 'react'
import { Bookmaker } from './Bookmaker';
import { Table } from 'antd';


export const Team = (props) => {
    let element = props.element;
    console.log('props: ' + JSON.stringify(props))

    return (
        <div className='team-wrapper'>
            {element.bookmakers.map(bookmaker => {
                return (
                    <div key={bookmaker.key} className='bookmaker'>
                        <Bookmaker bookmaker={bookmaker} teamName={element.home_team}/>
                    </div>
                )
            })}
        </div>
    )
}