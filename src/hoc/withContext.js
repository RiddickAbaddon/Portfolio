import PageContext from 'context/PageContext'
import React from 'react'

const withContext = (Component) => {
   return (props) => (
      <PageContext.Consumer>
         {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
   )
}

export default withContext
