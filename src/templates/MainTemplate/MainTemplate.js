import Footer from 'components/atoms/Footer/Footer'
import Text from 'components/atoms/Text/Text'
import Navigation from 'components/organisms/Navigation/Navigation'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import MainTheme from 'theme/MainTheme'
import SlickSliderStyle from 'theme/SlickSliderStyle'

const Wrapper = styled.div`
   min-height: calc(100vh - 104px);
`

const MainTemplate = ({ children }) => (
   <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <SlickSliderStyle />
      <Navigation language="pl" />
      <Wrapper>{children}</Wrapper>
      <Footer>
         <Text>2020 © marcin-kalinowski.pl | Polityka cookies</Text>
      </Footer>
   </ThemeProvider>
)

MainTemplate.propTypes = {
   children: PropTypes.element.isRequired,
}

export default MainTemplate
