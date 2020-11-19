import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
   margin: 0;
   font-weight: ${({ size, theme }) =>
      size === 'h1' ? theme.fontWeight.bold : theme.fontWeight.regular};
   font-size: ${({ size, theme }) => {
      switch (size) {
         case 'h2':
            return theme.fontSize.l
         case 'h3':
         case 'h4':
            return theme.fontSize.m
         default:
            return theme.fontSize.xl
      }
   }};
   color: ${({ size, theme }) => size === 'h4' && theme.fontSecondary};
   text-align: center;
`

const Heading = ({ children, size, className }) => (
   <StyledHeading as={size} size={size} className={className}>
      {children}
   </StyledHeading>
)

Heading.propTypes = {
   children: PropTypes.string,
   size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
   className: PropTypes.string,
}

Heading.defaultProps = {
   children: '',
   size: 'h1',
   className: null,
}

export default Heading
