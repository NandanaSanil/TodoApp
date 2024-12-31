import React from 'react'

function Counter({ title, ...obj }) {
    return (
        <div>
            <h1>Counter:{title} {obj.count}</h1>
        </div>
    )
}

export default Counter
