import Button from 'components/molecules/Button/Button'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: Button,
   title: 'Molecules/Button',
   argTypes: {
      children: {
         control: 'text',
      },
      icon: {
         control: {
            type: 'select',
            options: {
               none: null,
               Link: 'link',
               GitHub: 'github',
               Web: 'web',
            },
         },
      },
   },
}

export const Basic = ({ children, icon }) => <Button icon={icon}>{children}</Button>

Basic.propTypes = {
   children: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
}

Basic.args = {
   children: 'Strona główna',
   icon: null,
}
