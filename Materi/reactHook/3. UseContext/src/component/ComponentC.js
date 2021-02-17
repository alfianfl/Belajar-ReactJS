import React from 'react'
import {UserContext} from '../App'


function ComponentC() {
    return (
            <div>
                <UserContext.Consumer>
                    {(username) => 
                        {
                            return <div>hallo {username}</div>
                        }
                    }
                </UserContext.Consumer>
            </div>
    )
}

export default ComponentC
