import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import MainTheme from 'theme/MainTheme'

const MainTemplate = ({ children }) => (
   <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <div>{children}</div>
   </ThemeProvider>
)

MainTemplate.propTypes = {
   children: PropTypes.element.isRequired,
}

export default MainTemplate
