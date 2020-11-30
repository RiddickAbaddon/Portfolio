import styled, { css } from 'styled-components'

const Glow = styled.div`
   background: ${({ theme }) => theme.gradient.glow};
   width: ${({ bottom }) => (bottom ? 200 : 800)}px;
   max-width: calc(100% - 50px);
   height: ${({ bottom }) => (bottom ? 30 : 70)}px;
   position: absolute;
   left: 50%;
   ${({ bottom }) =>
      bottom
         ? css`
              bottom: 0;
              transform: translateX(-50%) rotate(180deg);
           `
         : css`
              top: 0;
              transform: translateX(-50%);
           `}
`

export default Glow
