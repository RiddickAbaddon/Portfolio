import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from 'store'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import Home from 'views/Home'
import Realizations from 'views/Realizations'

const Root = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <MainTemplate>
               <Switch>
                  <Route path="/realizations" component={Realizations} />
                  <Route path="/" component={Home} />
               </Switch>
            </MainTemplate>
         </BrowserRouter>
      </Provider>
   )
}

export default Root
