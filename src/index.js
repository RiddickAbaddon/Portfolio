import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from 'reportWebVitals'
import * as serviceWorker from 'serviceWorker'
import Root from 'views/Root'

ReactDOM.render(
   <React.StrictMode>
      <Root />
   </React.StrictMode>,
   document.getElementById('root'),
)

reportWebVitals()
serviceWorker.register()

window.author = `
  ┌────────────────┐
┌─┤ Development by ├───────────────┐
│ └────────────────┘               │
│   <···>                          │
│   Marcin Kalinowski              │
│   https://marcin-kalinowski.pl   │
│                                  │
└──────────────────────────────────┘
`
