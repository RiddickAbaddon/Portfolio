import EnglishIcon from 'assets/icons/english.svg'
import GitHubIcon from 'assets/icons/github.svg'
import PolishIcon from 'assets/icons/polish.svg'
import Icon from 'components/atoms/Icon/Icon'
import ArrowButton from 'components/molecules/ArrowButton/ArrowButton'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Wrapper = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 104px;
   padding: 20px;
`

const BackButton = styled(Link)`
   will-change: transform;
   transition: transform 0.2s ease-out;
   height: 64px;
   display: block;
   border-radius: 50%;

   ${({ to }) =>
      to
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

const Navigation = ({ backlink, language }) => (
   <Wrapper>
      <BackButton to={backlink}>
         <ArrowButton prev as="span" />
      </BackButton>
      <NavList up={!backlink}>
         <StyledIcon src={language === 'pl' ? PolishIcon : EnglishIcon} />
         <a href="https://github.com/RiddickAbaddon" target="_blank" rel="noopener noreferrer">
            <Icon target src={GitHubIcon} />
         </a>
      </NavList>
   </Wrapper>
)

Navigation.propTypes = {
   backlink: PropTypes.string,
   language: PropTypes.oneOf(['pl', 'eng']).isRequired,
}

Navigation.defaultProps = {
   backlink: null,
}

export default Navigation
