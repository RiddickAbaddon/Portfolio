import Badge from 'components/atoms/Badge/Badge'
import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import Heading from 'components/atoms/Heading/Heading'
import Text from 'components/atoms/Text/Text'
import Image from 'components/molecules/Image/Image'
import TechnologyStackSmall from 'components/molecules/TechnologyStackSmall/TechnologyStackSmall'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'
import { removeHtmlTags } from 'Utils'

const lang = 'pl'

const StyledCardWrapper = styled(CardWrapper)`
   display: flex;
   flex-direction: column;
`

const StyledHeading = styled(Heading)`
   padding: 10px 20px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`

const CategoriesWrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-bottom: 15px;
   margin-top: -5px;
   height: 30px;
   overflow: hidden;
`

const StyledBadge = styled(Badge)`
   margin: 5px;
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

const Card = ({ title, image, description, categories, technologies }) => (
   <StyledCardWrapper>
      <StyledImage src={`${API_URL}${image}`} alt={title} />
      <StyledHeading size="h3">{title}</StyledHeading>
      <StyledText small lineclamp={4}>
         {ReactHtmlParser(removeHtmlTags(description))}
      </StyledText>
      {categories && categories.length ? (
         <CategoriesWrapper>
            {categories.map((category) => (
               <StyledBadge key={category._id}>#{category[lang]}</StyledBadge>
            ))}
         </CategoriesWrapper>
      ) : null}
      <StyledTechnologyStack technologies={technologies} />
   </StyledCardWrapper>
)

Card.propTypes = {
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
}

Card.defaultProps = {
   description: 'Brak opisu...',
   categories: [],
}

export default Card
