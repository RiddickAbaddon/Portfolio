import ProjectHeader from 'components/organisms/ProjectHeader/ProjectHeader'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: ProjectHeader,
   title: 'Organisms/ProjectHeader',
   argTypes: {
      title: {
         control: 'text',
      },
   },
}

export const Basic = ({ title }) => (
   <ProjectHeader image="https://picsum.photos/700/350" title={title} />
)

Basic.propTypes = {
   title: PropTypes.string.isRequired,
}

Basic.args = {
   title: 'Tytuł projektu',
}
