import { fetchCollection } from 'actions/api'
import emptyIcon from 'assets/empty.svg'
import Footer from 'components/atoms/Footer/Footer'
import Text from 'components/atoms/Text/Text'
import ToTop from 'components/atoms/ToTop/ToTop'
import OfflineInfo from 'components/molecules/OfflineInfo/OfflineInfo'
import Navigation from 'components/organisms/Navigation/Navigation'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import MainTheme from 'theme/MainTheme'
import SlickSliderStyle from 'theme/SlickSliderStyle'
import { getPhrase } from 'Utils'

const PulseMessenger = keyframes`
   from {
      opacity: 1;
      transform: scale(0);
   }
   to {
      opacity: 0;
      transform: scale(1);
   }
`

const Wrapper = styled.div`
   min-height: calc(100vh - 104px);
   overflow: hidden;
`

const MessengerBackground = styled.div`
   position: fixed;
   width: 64px;
   height: 64px;
   left: 20px;
   bottom: 20px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.accentColor};
   z-index: 9;

   ::before {
      content: '';
      display: block;
      position: absolute;
      width: 58px;
      height: 58px;
      top: 3px;
      left: 3px;
      border-radius: 50%;
      will-change: transform;
      background: ${({ theme }) => theme.transparent.white.mid};
      animation: ${PulseMessenger} 1s ease-out infinite;
   }
`

const LoadNoContentIcon = styled.img`
   width: 0;
   height: 0;
   position: absolute;
   top: 0;
   left: 0;
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
      const { children, language, phrases, connectionErrors } = this.props
      return (
         <ThemeProvider theme={MainTheme}>
            {connectionErrors.fetchDataFailure && <OfflineInfo />}
            <ToTop />
            <GlobalStyle />
            <SlickSliderStyle />
            <Navigation infoMargin={connectionErrors.fetchDataFailure} />
            <Wrapper>{children}</Wrapper>
            <Footer>
               <Text>
                  2020 © marcin-kalinowski.pl |{' '}
                  <Link to="/cookies-policy">{getPhrase(phrases, 'cookies-policy', language)}</Link>
               </Text>
            </Footer>
            <MessengerBackground />
            <LoadNoContentIcon src={emptyIcon} alt="no content" />
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
   // eslint-disable-next-line react/forbid-prop-types
   connectionErrors: PropTypes.object.isRequired,
}

MainTemplate.defaultProps = {
   phrases: null,
}

const mapStateToProps = ({ api: { phrases, connectionErrors }, app: { language } }) => ({
   phrases,
   language,
   connectionErrors,
})

const mapDispatchToProps = (dispatch) => ({
   fetchPhrases: () => dispatch(fetchCollection('phrases')),
   fetchRealizations: () => dispatch(fetchCollection('realizations')),
   fetchCategories: () => dispatch(fetchCollection('categories')),
   fetchTechnologies: () => dispatch(fetchCollection('technologies')),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate)
