import React from "react"
import { isAuthenticated } from './auth'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// FUTURAMENTE COLOCAR EM ARQUIVO SEPARADO
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location }}} />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Pagina inicial: logar</h1>} />
            <PrivateRoute path="/buscar" component={() => <h1>Tela de busca: vc ta logado</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes