import { fetchCollection } from 'actions/api'
import Footer from 'components/atoms/Footer/Footer'
import Text from 'components/atoms/Text/Text'
import ToTop from 'components/atoms/ToTop/ToTop'
import Navigation from 'components/organisms/Navigation/Navigation'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
      const { fetchPhrases, fetchRealizations, fetchCategories, fetchTechnologies } = this.props
      fetchPhrases()
      fetchRealizations()
      fetchCategories()
      fetchTechnologies()
   }

   render() {
      const { children, language, phrases } = this.props

      return (
         <ThemeProvider theme={MainTheme}>
            <ToTop />
            <GlobalStyle />
            <SlickSliderStyle />
            <Navigation />
            <Wrapper>{children}</Wrapper>
            <Footer>
               <Text>
                  2020 © marcin-kalinowski.pl |{' '}
                  <Link to="/cookies-policy">{getPhrase(phrases, 'cookies-policy', language)}</Link>
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
   fetchRealizations: PropTypes.func.isRequired,
   fetchCategories: PropTypes.func.isRequired,
   fetchTechnologies: PropTypes.func.isRequired,
}

MainTemplate.defaultProps = {
   phrases: null,
}

const mapStateToProps = ({ api: { phrases }, app: { language } }) => ({ phrases, language })

const mapDispatchToProps = (dispatch) => ({
   fetchPhrases: () => dispatch(fetchCollection('phrases')),
   fetchRealizations: () => dispatch(fetchCollection('realizations')),
   fetchCategories: () => dispatch(fetchCollection('categories')),
   fetchTechnologies: () => dispatch(fetchCollection('technologies')),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate)
