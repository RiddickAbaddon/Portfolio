import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from 'store'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import Home from 'views/Home'
import InfoPage from 'views/InfoPage'
import Realization from 'views/Realization'
import Realizations from 'views/Realizations'

const Root = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <MainTemplate>
               <Switch>
                  <Route path="/realizations/:id" component={Realization} />
                  <Route path="/realizations" component={Realizations} />
                  <Route path="/:page" component={InfoPage} />
                  <Route path="/" component={Home} />
               </Switch>
            </MainTemplate>
         </BrowserRouter>
      </Provider>
   )
}

export default Root
