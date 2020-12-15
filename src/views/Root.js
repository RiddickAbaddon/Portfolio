import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from 'store'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import Home from 'views/Home'
import Page404 from 'views/Page404'
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
                  <Route exact path="/" component={Home} />
                  <Route component={Page404} />
               </Switch>
            </MainTemplate>
         </BrowserRouter>
      </Provider>
   )
}

export default Root
