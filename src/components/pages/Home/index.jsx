import React from 'react'

import './styles.css'

const Home = () => {
    const Greeting = () => {
        const dNow = new Date()        
        if (dNow.getHours() >= 19 && dNow.getHours() < 6) {
            return <h1 className="display-4">Boa noite!</h1>
        } else if (dNow.getHours() >= 6 && dNow.getHours() < 12)  {
            return <h1 className="display-4">Bom dia!</h1>
        } else {
            return <h1 className="display-4">Boa tarde!</h1>
        }
    }

    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="container">
                <Greeting />
            </div>
        </div>
    )
}

export default Home