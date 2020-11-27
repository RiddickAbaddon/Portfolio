import Heading from 'components/atoms/Heading/Heading'
import Icon from 'components/atoms/Icon/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Show = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`

const Wrapper = styled.section`
   animation: ${Show} 0.5s ease-out;
`

const IconsWrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-top: 20px;
`

const IconLabel = styled.span`
   position: absolute;
   bottom: -5px;
   left: 50%;
   color: ${({ theme }) => theme.fontPrimary};
   font-size: ${({ theme }) => theme.fontSize.xs};
   will-change: transform;
   transition: transform 0.2s ease-out, opacity 0.2s linear;
   opacity: 0;
   transform: translate(-50%, -16px);
`

const IconWrapper = styled.div`
   width: 84px;
   height: 104px;
   padding: 20px 10px;
   position: relative;

   &:hover ${IconLabel} {
      opacity: 1;
      transform: translate(-50%, 0);
   }
`

const TechnologyStack = ({ technologies, ...props }) => (
   <Wrapper {...props}>
      <Heading size="h2">Technologie na których pracuje</Heading>
      <IconsWrapper>
         {technologies &&
            technologies.map(({ _id, image, name }) => (
               <IconWrapper key={_id}>
                  <Icon src={image.path} alt={name} />
                  <IconLabel>{name}</IconLabel>
               </IconWrapper>
            ))}
      </IconsWrapper>
   </Wrapper>
)

TechnologyStack.propTypes = {
   technologies: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         image: PropTypes.shape({
            path: PropTypes.string,
         }),
      }),
   ),
}

TechnologyStack.defaultProps = {
   technologies: null,
}

export default TechnologyStack
