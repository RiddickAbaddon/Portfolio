import Divider from 'components/atoms/Divider/Divider'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
   background: white;
   border: 2px solid black;
   width: 50px;
   height: 50px;
`

export default {
   component: Divider,
   title: 'Atoms/Divider',
   argTypes: {
      size: {
         control: {
            type: 'inline-radio',
            options: ['small', 'medium', 'large'],
         },
      },
   },
}

export const Basic = ({ size }) => (
   <>
      <Box />
      <Divider size={size} />
      <Box />
   </>
)

Basic.propTypes = {
   size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
}

Basic.args = {
   size: 'medium',
}
