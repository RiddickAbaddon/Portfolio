import ArrowButton from 'components/molecules/ArrowButton/ArrowButton'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: ArrowButton,
   title: 'Molecules/ArrowButton',
   argTypes: {
      prev: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ prev }) => <ArrowButton prev={prev} />

Basic.propTypes = {
   prev: PropTypes.bool.isRequired,
}

Basic.args = {
   prev: false,
}
