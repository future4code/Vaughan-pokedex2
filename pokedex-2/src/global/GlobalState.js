import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalStateContext = (props) => {
    return (
        <GlobalStateContext.Provider>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalStateContext