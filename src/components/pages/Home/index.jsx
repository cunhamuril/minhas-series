import React from 'react'

import './styles.css'

const Home = () => {
    const Greeting = () => {
        const wlcm = 'Seja bem vindo.'        
        const dateNow = new Date()

        if (dateNow.getHours() >= 6 && dateNow.getHours() < 12) {
            return <h1 className="display-4">Bom dia! {wlcm}</h1>
        } else if (dateNow.getHours() >= 12 && dateNow.getHours() < 19) {
            return <h1 className="display-4">Boa tarde! {wlcm}</h1>
        } else {
            return <h1 className="display-4">Boa noite! {wlcm}</h1>
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