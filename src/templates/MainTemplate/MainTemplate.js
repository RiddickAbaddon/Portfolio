import { fetchCollection } from 'actions/api'
import Footer from 'components/atoms/Footer/Footer'
import Text from 'components/atoms/Text/Text'
import Navigation from 'components/organisms/Navigation/Navigation'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import MainTheme from 'theme/MainTheme'
import SlickSliderStyle from 'theme/SlickSliderStyle'
import { getPhrase } from 'Utils'

const Wrapper = styled.div`
   min-height: calc(100vh - 104px);
`

class MainTemplate extends React.Component {
   componentDidMount() {
      const { fetchPhrases } = this.props
      fetchPhrases()
   }

   render() {
      const { children, language, phrases } = this.props

      return (
         <ThemeProvider theme={MainTheme}>
            <GlobalStyle />
            <SlickSliderStyle />
            <Navigation />
            <Wrapper>{children}</Wrapper>
            <Footer>
               <Text>
                  2020 © marcin-kalinowski.pl | {getPhrase(phrases, 'cookies-policy', language)}
               </Text>
            </Footer>
         </ThemeProvider>
      )
   }
}

MainTemplate.propTypes = {
   children: PropTypes.element.isRequired,
   language: PropTypes.string.isRequired,
   phrases: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   fetchPhrases: PropTypes.func.isRequired,
}

MainTemplate.defaultProps = {
   phrases: null,
}

const mapStateToProps = ({ api: { phrases }, app: { language } }) => ({ phrases, language })

const mapDispatchToProps = (dispatch) => ({
   fetchPhrases: () => dispatch(fetchCollection('phrases')),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate)
