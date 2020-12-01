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
      small: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ small }) => (
   <>
      <Box />
      <Divider small={small} />
      <Box />
   </>
)

Basic.propTypes = {
   small: PropTypes.bool.isRequired,
}

Basic.args = {
   small: false,
}
