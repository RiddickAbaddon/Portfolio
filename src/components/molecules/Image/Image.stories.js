import Image from 'components/molecules/Image/Image'
import React from 'react'
import styled from 'styled-components'

const StyledImage = styled(Image)`
   width: 500px;
   height: 300px;
`

export default {
   component: Image,
   title: 'Molecules/Image',
}

export const Basic = () => <StyledImage src="https://picsum.photos/4000" />
