import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router-dom'

class ToTop extends React.Component {
   componentDidUpdate(prevProps) {
      const {
         location: { pathname },
      } = this.props
      const {
         location: { pathname: prevPathname },
      } = prevProps
      if (pathname !== prevPathname) {
         window.scrollTo({ top: 0 })
      }
   }

   render() {
      return null
   }
}

ToTop.propTypes = {
   location: PropTypes.shape({
      pathname: PropTypes.string,
   }).isRequired,
}

export default withRouter(ToTop)
