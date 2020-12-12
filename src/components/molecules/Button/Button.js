import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
   height: 80px;
   position: relative;
   display: inline-flex;
   margin: 0 auto;
   text-decoration: none;
   color: ${({ theme }) => theme.fontPrimary};
   align-items: center;
   justify-content: center;
   padding: 0 35px;
   border: none;
   border-radius: 40px;
   background: ${({ theme }) => theme.gradient.accent};
   cursor: pointer;
   user-select: none;
   text-align: center;
   max-width: 100%;

   ::before {
      content: '';
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      position: absolute;
      top: 4px;
      left: 4px;
      background: ${({ theme }) => theme.bgMain};
      border-radius: 38px;
      z-index: 0;
      will-change: transform;
      transition: transform 0.2s ease-out;
   }

   &:hover::before {
      transform: scale(0);
   }
`

const ButtonText = styled.span`
   display: block;
   font-size: ${({ theme }) => theme.fontSize.m};
   color: ${({ theme }) => theme.fontPrimary};
   position: relative;
   z-index: 1;
`

const IconWrapper = styled.span`
   display: block;
   position: relative;
   z-index: 1;
   margin-right: 10px;
   width: 32px;
   height: 32px;

   .MuiSvgIcon-root {
      color: ${({ theme }) => theme.fontPrimary} !important;
      font-size: 32px !important;
   }
`

const Button = ({ children, icon: IconComponent, ...props }) => (
   <ButtonWrapper {...props}>
      {IconComponent && (
         <IconWrapper>
            <IconComponent />
         </IconWrapper>
      )}
      <ButtonText>{children}</ButtonText>
   </ButtonWrapper>
)

Button.propTypes = {
   children: PropTypes.string.isRequired,
   icon: PropTypes.func,
}

Button.defaultProps = {
   icon: null,
}

export default Button
