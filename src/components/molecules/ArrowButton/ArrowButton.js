import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
   width: 64px;
   height: 64px;
   background: ${({ theme }) => theme.bgPrimary} !important;
   border-radius: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
   box-shadow: ${({ theme }) => theme.shadow.hard};
   color: ${({ theme }) => theme.fontPrimary};
   border: none;
   cursor: pointer;
   position: relative;

   ::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.transparent.white.mid};
      will-change: transform;
      opacity: 0;
      top: 0;
      left: 0;
      transition: opacity 0.5s linear, transform 0.5s ease-out;
      transform: scale(1);
   }

   &:active::before {
      opacity: 1;
      transition: opacity 0s linear, transform 0s ease-out;
      transform: scale(0);
   }
`

const StyledIcon = styled(ArrowForwardIosRoundedIcon)`
   color: ${({ theme }) => theme.fontPrimary} !important;
   font-size: 32px !important;
   ${({ direction }) => {
      switch (direction) {
         case 'up':
            return css`
               transform: rotate(-90deg);
            `
         case 'left':
            return css`
               transform: rotate(180deg);
            `
         case 'down':
            return css`
               transform: rotate(90deg);
            `
         default:
            return null
      }
   }}
`

const ArrowButton = ({ direction, ...props }) => (
   <StyledButton {...props}>
      <StyledIcon direction={direction} />
   </StyledButton>
)

ArrowButton.propTypes = {
   direction: PropTypes.string,
}

ArrowButton.defaultProps = {
   direction: 'right',
}

export default ArrowButton
