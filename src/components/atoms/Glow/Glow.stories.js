import Glow from 'components/atoms/Glow/Glow'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   background: ${({ theme }) => theme.bgPrimary};
   border-radius: ${({ theme }) => theme.radiusMain};
   box-shadow: ${({ theme }) => theme.shadow.soft};
   width: 1000px;
   height: 450px;
   position: relative;
   max-width: 100%;
`

export default {
   component: Glow,
   title: 'Atoms/Glow',
   argTypes: {
      bottom: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ bottom }) => (
   <Wrapper>
      <Glow bottom={bottom} />
   </Wrapper>
)

Basic.propTypes = {
   bottom: PropTypes.bool.isRequired,
}

Basic.args = {
   bottom: false,
}
