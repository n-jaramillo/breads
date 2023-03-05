import React from 'react'
import Default from './layouts/default'

function error404 ({msg}) {
    return (
        <Default>
            <h1>Error 404</h1>
            <h2>{msg}</h2>
        </Default>
    )
}

export default error404