import { LANGUAGES, setLanguage as setLanguageAction } from 'actions/app'
import EnglishIcon from 'assets/icons/english.svg'
import GitHubIcon from 'assets/icons/github.svg'
import PolishIcon from 'assets/icons/polish.svg'
import Icon from 'components/atoms/Icon/Icon'
import ArrowButton from 'components/molecules/ArrowButton/ArrowButton'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Wrapper = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 104px;
   padding: 20px;
   z-index: 10;
   pointer-events: none;

   a,
   img {
      pointer-events: all;
   }
`

const BackButton = styled(Link)`
   will-change: transform;
   transition: transform 0.2s ease-out;
   height: 64px;
   display: block;
   border-radius: 50%;

   ${({ to }) =>
      to !== '#'
         ? css`
              transform: scale(1);
              pointer-events: all;
           `
         : css`
              transform: scale(0);
              pointer-events: none;
           `}
`

const NavList = styled.div`
   will-change: transform;
   transition: transform 0.3s ease-out;

   ${({ up }) =>
      up &&
      css`
         transform: translateY(-84px);
      `}
`

const StyledIcon = styled(Icon)`
   margin: 20px 0;
   cursor: pointer;
`

const Navigation = ({ language, setLanguage, location }) => {
   const path = location.pathname.split('/').filter((x) => x !== '')

   let backlink = '#'
   if (path.length) {
      if (path.length > 1) {
         let backlinkpath = ''
         path.map((element, i) => {
            if (i < path.length - 1) {
               backlinkpath += `/${element}`
            }
            return 0
         })

         backlink = backlinkpath
      } else {
         backlink = '/'
      }
   }

   return (
      <Wrapper>
         <BackButton to={backlink}>
            <ArrowButton prev as="span" />
         </BackButton>
         <NavList up={backlink === '#'}>
            <StyledIcon
               src={language === LANGUAGES.pl ? PolishIcon : EnglishIcon}
               onClick={() => {
                  setLanguage(language === LANGUAGES.pl ? LANGUAGES.en : LANGUAGES.pl)
               }}
            />
            <a href="https://github.com/RiddickAbaddon" target="_blank" rel="noopener noreferrer">
               <Icon src={GitHubIcon} />
            </a>
         </NavList>
      </Wrapper>
   )
}

Navigation.propTypes = {
   language: PropTypes.string.isRequired,
   setLanguage: PropTypes.func.isRequired,
   location: PropTypes.shape({
      pathname: PropTypes.string,
   }).isRequired,
}

const mapStateToProps = ({ app: { language } }) => ({ language })

const mapDispatchToProps = (dispatch) => ({
   setLanguage: (language) => dispatch(setLanguageAction(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
