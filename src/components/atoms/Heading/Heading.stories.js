import Heading from 'components/atoms/Heading/Heading'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: Heading,
   title: 'Atoms/Heading',
   argTypes: {
      size: {
         control: {
            type: 'select',
            options: ['h1', 'h2', 'h3', 'h4'],
         },
      },
      children: {
         control: 'text',
      },
   },
}

export const Basic = ({ size, children }) => <Heading size={size}>{children}</Heading>

Basic.propTypes = {
   size: PropTypes.string.isRequired,
   children: PropTypes.string.isRequired,
}

Basic.args = {
   size: 'h1',
   children: 'Heading test',
}
