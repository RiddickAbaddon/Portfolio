import Footer from 'components/atoms/Footer/Footer'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
   font-size: ${({ theme }) => theme.fontSize.m};
   color: ${({ theme }) => theme.fontPrimary};
   text-align: center;
`

export default {
   component: Footer,
   title: 'Atoms/Footer',
   argTypes: {
      content: {
         control: 'text',
      },
   },
}

export const Basic = ({ content }) => (
   <Footer>
      <Text>{content}</Text>
   </Footer>
)

Basic.propTypes = {
   content: PropTypes.string.isRequired,
}

Basic.args = {
   content: '2020 © marcin-kalinowski.pl | Polityka cookies',
}
