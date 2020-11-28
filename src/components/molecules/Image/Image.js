import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

const Show = keyframes`
   from {
      opacity: 0;
   }

   to {
      opacity: 1;
   }
`

const Wrapper = styled.div`
   position: relative;
   background: ${({ theme }) => theme.bgBadge};
   overflow: hidden;
`

const IMG = styled.img`
   object-fit: cover;
   width: 100%;
   height: 100%;
   ${({ show }) =>
      show &&
      css`
         animation: ${Show} 0.5s ease-out;
      `}
`

const StyledPreloadImage = styled(PreloadImage)`
   position: absolute;
   top: 0;
   left: 0;
   display: ${({ show }) => (show ? 'block' : 'none')};
`

const Image = ({ src, alt, ...props }) => {
   const [loaded, setLoaded] = useState(false)

   return (
      <Wrapper {...props}>
         {src && <IMG src={src} alt={alt} onLoad={() => setLoaded(true)} show={loaded} />}
         <StyledPreloadImage width="100%" height="100%" show={!loaded} />
      </Wrapper>
   )
}

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
}

Image.defaultProps = {
   src: null,
   alt: '',
}

export default Image
