import Image404 from 'assets/404.svg'
import SVG from 'components/atoms/SVG/SVG'
import React from 'react'

export default {
   component: SVG,
   title: 'Atoms/SVG',
}

export const Basic = () => <SVG src={Image404} alt="404" />
