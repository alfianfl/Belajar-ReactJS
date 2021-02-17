import React from 'react'
import {UserContext, ChanelContext} from '../App'

function ComponentF() {
    return (
        <div> 
            <UserContext.Consumer>
                {
                    username => {
                        return (
                            <ChanelContext.Consumer>
                                {
                                    chanel => {
                                        return <div>User context value {username}, chanel context value {chanel}</div>
                                    }
                                }
                            </ChanelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
