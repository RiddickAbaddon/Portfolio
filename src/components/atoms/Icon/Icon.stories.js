import Icon from 'components/atoms/Icon/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import ReactIcon from 'testData/assets/react.png'

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
