import img404 from 'assets/svg/404.svg'
import SVG from 'components/atoms/SVG/SVG'
import React from 'react'
import CenterPageTemplate from 'templates/CenterPageTemplate/CenterPageTemplate'

export default {
   component: CenterPageTemplate,
   title: 'Templates/CenterPageTemplate',
}

export const Basic = () => (
   <CenterPageTemplate>
      <SVG src={img404} />
   </CenterPageTemplate>
)
