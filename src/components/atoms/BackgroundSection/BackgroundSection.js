import bgBottom from 'assets/backgrounds/bgBottom.png'
import bgCenter from 'assets/backgrounds/bgCenter.png'
import bgTop from 'assets/backgrounds/bgTop.png'
import styled, { css } from 'styled-components'

const BackgroundSection = styled.div`
   background-size: 100% auto;
   background-repeat: no-repeat;
   ${({ background }) => {
      switch (background) {
         case 'center':
            return css`
               background-image: url(${bgCenter});
               background-position: center center;
            `
         case 'bottom':
            return css`
               background-image: url(${bgBottom});
               background-position: center bottom;
            `
         default:
            return css`
               background-image: url(${bgTop});
               background-position: center top;
            `
      }
   }}
`

export default BackgroundSection
