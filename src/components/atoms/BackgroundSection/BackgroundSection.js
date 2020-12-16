import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
   position: relative;
`

const Image = styled.img`
   position: absolute;
   z-index: -1;
   opacity: ${({ loaded }) => (loaded ? 1 : 0)};
   transition: opacity 3s ease-out;
   width: 100%;
   ${({ align }) =>
      align === 'top'
         ? css`
              top: 0;
           `
         : css`
              bottom: 0;
           `}
`

const BackgroundSection = ({ background, align, children, ...props }) => {
   const [loaded, setLoaded] = useState(false)

   return (
      <Wrapper {...props}>
         {children}
         <Image loaded={loaded} align={align} src={background} onLoad={() => setLoaded(true)} />
      </Wrapper>
   )
}

BackgroundSection.propTypes = {
   children: PropTypes.element.isRequired,
   background: PropTypes.string.isRequired,
   align: PropTypes.oneOf(['top', 'bottom']),
}

BackgroundSection.defaultProps = {
   align: 'top',
}

export default BackgroundSection
