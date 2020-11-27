import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import PropTypes from 'prop-types'
import React from 'react'

export default {
   component: PreloadImage,
   title: 'Atoms/PreloadImage',
   argTypes: {
      width: {
         control: 'number',
      },
      height: {
         control: 'number',
      },
   },
}

export const Basic = ({ width, height }) => (
   <PreloadImage width={`${width}px`} height={`${height}px`} />
)

Basic.propTypes = {
   width: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
}

Basic.args = {
   width: 500,
   height: 300,
}
