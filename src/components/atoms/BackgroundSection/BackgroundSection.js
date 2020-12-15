import bgBottom from 'assets/backgrounds/bgBottom.png'
import bgCenter from 'assets/backgrounds/bgCenter.png'
import bgTop from 'assets/backgrounds/bgTop.png'
import styled, { css } from 'styled-components'

const BackgroundSection = styled.div`
   position: relative;

   ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 75vw;
      background-size: 100% auto;
      background-repeat: no-repeat;
      z-index: -1;

      ${({ background }) => {
         switch (background) {
            case 'center':
               return css`
                  background-image: url(${bgCenter});
                  top: 0;
                  background-position: top;
               `
            case 'bottom':
               return css`
                  background-image: url(${bgBottom});
                  bottom: 0;
                  background-position: center bottom;
               `
            default:
               return css`
                  background-image: url(${bgTop});
                  top: 0;
                  background-position: center top;
               `
         }
      }}
   }
`

export default BackgroundSection
