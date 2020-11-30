import Spacer from 'components/atoms/Spacer/Spacer'
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
   component: Spacer,
   title: 'Atoms/Spacer',
   argTypes: {
      small: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ small }) => (
   <>
      <Box />
      <Spacer small={small} />
      <Box />
   </>
)

Basic.propTypes = {
   small: PropTypes.bool.isRequired,
}

Basic.args = {
   small: false,
}
