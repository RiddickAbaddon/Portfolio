import { LANGUAGES, setLanguage as setLanguageAction } from 'actions/app'
import { iconEnglish, iconGithub, iconPolish } from 'assets'
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
   top: ${({ infoMargin }) => (infoMargin ? '40px' : 0)};
   left: 0;
   padding: 20px;
   z-index: 10;
   pointer-events: none;

   @media ${({ theme }) => theme.breakpoints.min.tablet} {
      width: 104px;
   }
   @media ${({ theme }) => theme.breakpoints.max.tablet} {
      display: flex;

      ::before {
         content: '';
         position: absolute;
         top: 10px;
         left: 10px;
         height: 84px;
         width: ${({ bgsmall }) => (bgsmall ? 168 : 252)}px;
         border-radius: ${({ theme }) => theme.radius.primary};
         backdrop-filter: blur(10px);
         box-shadow: ${({ theme }) => theme.shadow.soft};
      }
   }

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
         @media ${({ theme }) => theme.breakpoints.min.tablet} {
            transform: translateY(-84px);
         }
         @media ${({ theme }) => theme.breakpoints.max.tablet} {
            transform: translateX(-84px);
         }
      `}
`

const StyledIcon = styled(Icon)`
   cursor: pointer;

   @media ${({ theme }) => theme.breakpoints.min.tablet} {
      margin: 20px 0;
   }
   @media ${({ theme }) => theme.breakpoints.max.tablet} {
      margin: 0 20px;
   }
`

const Navigation = ({ language, setLanguage, location, infoMargin }) => {
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
      <Wrapper bgsmall={backlink === '#'} infoMargin={infoMargin}>
         <BackButton to={backlink}>
            <ArrowButton direction="left" as="span" />
         </BackButton>
         <NavList up={backlink === '#'}>
            <StyledIcon
               src={language === LANGUAGES.pl ? iconPolish : iconEnglish}
               onClick={() => {
                  setLanguage(language === LANGUAGES.pl ? LANGUAGES.en : LANGUAGES.pl)
               }}
            />
            <a href="https://github.com/RiddickAbaddon" target="_blank" rel="noopener noreferrer">
               <Icon src={iconGithub} />
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
   infoMargin: PropTypes.bool,
}

Navigation.defaultProps = {
   infoMargin: false,
}

const mapStateToProps = ({ app: { language } }) => ({ language })

const mapDispatchToProps = (dispatch) => ({
   setLanguage: (language) => dispatch(setLanguageAction(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))
