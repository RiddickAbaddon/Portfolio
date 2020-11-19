import ReactIcon from 'assets/react.png'
import Icon from 'components/atoms/Icon/Icon'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: Icon,
   title: 'Atoms/Icon',
   argTypes: {
      small: {
         control: 'boolean',
      },
   },
}

export const Basic = ({ small }) => <Icon src={ReactIcon} small={small} />

Basic.propTypes = {
   small: PropTypes.bool.isRequired,
}

Basic.args = {
   small: false,
}
