const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    return (
        <Default>
            <h1>Error 404</h1>
            <h2>Could Not Find Bread</h2>
        </Default>
    )
}

module.exports = error404