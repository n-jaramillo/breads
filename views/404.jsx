const React = require('react')
const Default = require('./layouts/default')

function error404 ({msg}) {
    return (
        <Default>
            <h1>Error 404</h1>
            <h2>{msg}</h2>
        </Default>
    )
}

module.exports = error404