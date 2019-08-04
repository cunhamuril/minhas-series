import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/pages/Home'

import Generos from '../components/pages/Generos'
import NovoGenero from '../components/pages/Generos/NovoGenero'
import EditarGenero from '../components/pages/Generos/EditarGenero'

import Series from '../components/pages/Series'
import NovaSerie from '../components/pages/Series/NovaSerie'
import InfoSerie from '../components/pages/Series/InfoSerie'

const routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        
        <Route exact path='/generos' component={Generos} />
        <Route exact path='/generos/novo' component={NovoGenero} />
        <Route exact path='/generos/:id' component={EditarGenero} />

        <Route exact path='/series' component={Series} />
        <Route exact path='/series/novo' component={NovaSerie} />
        <Route exact path='/series/:id' component={InfoSerie} />
    </Switch>
)

export default routes;