import LinkIcon from '@material-ui/icons/Link'
import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import Heading from 'components/atoms/Heading/Heading'
import Text from 'components/atoms/Text/Text'
import Categories from 'components/molecules/Categories/Categories'
import Image from 'components/molecules/Image/Image'
import TechnologyStackSmall from 'components/molecules/TechnologyStackSmall/TechnologyStackSmall'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getPhrase, removeHtmlTags } from 'Utils'

const Button = styled.div`
   height: 64px;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: ${({ theme }) => theme.gradient.accent};
   font-size: ${({ theme }) => theme.fontSize.m};
   color: ${({ theme }) => theme.fontPrimary};
   position: absolute;
   bottom: 0;
   will-change: transform;
   transform: translateY(100%);
   transition: transform 0.3s ease-out;
`

const ImageHoverIcon = styled.div`
   position: absolute;
   top: 100px;
   left: 50%;
   background: ${({ theme }) => theme.transparent.black.hard};
   width: 64px;
   height: 64px;
   border-radius: 50%;
   will-change: transform;
   transition: transform 0.3s ease-out, opacity 0.3s linear;
   transform: translate(-50%, -50%) scale(0);
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: 0;
`

const StyledCardWrapper = styled(CardWrapper)`
   color: ${({ theme }) => theme.fontPrimary};
   display: flex;
   flex-direction: column;
   overflow: hidden;
   position: relative;

   :hover {
      ${Button} {
         transform: translateY(0%);
      }
      ${ImageHoverIcon} {
         transform: translate(-50%, -50%) scale(1);
         opacity: 1;
      }
   }
`

const StyledHeading = styled(Heading)`
   padding: 10px 20px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`

const StyledText = styled(Text)`
   padding: 0 20px;
   margin: 10px 0 20px 0;
`

const StyledTechnologyStack = styled(TechnologyStackSmall)`
   margin-top: auto;
`

const StyledImage = styled(Image)`
   border-top-left-radius: ${({ theme }) => theme.radius.primary};
   border-top-right-radius: ${({ theme }) => theme.radius.primary};
   height: 200px;
   margin-bottom: 10px;
   flex-shrink: 0;
`

const StyledLinkIcon = styled(LinkIcon)`
   color: ${({ theme }) => theme.fontPrimary};
   font-size: 32px !important;
   transform: rotate(-45deg);
`

const StyledLink = styled(Link)`
   color: inherit;
   text-decoration: none;
`

const Card = ({ phrases, link, title, image, description, categories, technologies, language }) => (
   <StyledCardWrapper as="article">
      <StyledLink to={link}>
         <header>
            <StyledImage src={`${API_URL}${image}`} thumbnail={[300, 200]} alt={title} />
            <StyledHeading size="h3">{title}</StyledHeading>
         </header>
         <ImageHoverIcon>
            <StyledLinkIcon />
         </ImageHoverIcon>
         <StyledText small lineclamp={4}>
            {description
               ? ReactHtmlParser(removeHtmlTags(description))
               : getPhrase(phrases, 'no-description', language)}
         </StyledText>
      </StyledLink>
      {categories && categories.length ? (
         <Categories categories={categories} language={language} trim />
      ) : null}
      <StyledLink to={link}>
         <footer>
            <StyledTechnologyStack technologies={technologies} />
         </footer>
         <Button>{getPhrase(phrases, 'show', language)}</Button>
      </StyledLink>
   </StyledCardWrapper>
)

Card.propTypes = {
   phrases: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   link: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   description: PropTypes.string,
   categories: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   technologies: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         image: PropTypes.shape({
            path: PropTypes.string,
         }),
      }),
   ).isRequired,
   language: PropTypes.string.isRequired,
}

Card.defaultProps = {
   description: null,
   categories: [],
   phrases: null,
}

const mapStateToProps = ({ api: { phrases }, app: { language } }) => ({ phrases, language })

export default connect(mapStateToProps)(Card)
