import NoContent from 'components/molecules/NoContent/NoContent'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: NoContent,
   title: 'Molecules/NoContent',
   argTypes: {
      children: {
         control: 'text',
      },
   },
}

export const Basic = ({ children }) => <NoContent>{children}</NoContent>

Basic.propTypes = {
   children: PropTypes.string.isRequired,
}

Basic.args = {
   children: 'Brak treści do wyświetlenia',
}
