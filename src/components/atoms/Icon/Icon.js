import emptyIcon from 'assets/empty.svg'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

const IMG = styled.img`
   width: ${({ small }) => (small ? 32 : 64)}px;
   height: ${({ small }) => (small ? 32 : 64)}px;
   object-fit: contain;
   opacity: ${({ loaded }) => (loaded ? 1 : 0)};
   will-change: transform;
   transition: opacity 0.3s ease-out;
`

const Icon = ({ src, ...props }) => {
   const [loaded, setLoaded] = useState(false)
   const [error, setError] = useState(false)

   return (
      <IMG
         loaded={loaded}
         onLoad={() => setLoaded(true)}
         onError={() => {
            setLoaded(true)
            setError(true)
         }}
         src={error ? emptyIcon : src}
         {...props}
      />
   )
}

Icon.propTypes = {
   src: PropTypes.string.isRequired,
}

export default Icon
