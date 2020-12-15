import PreloadCategories from 'components/molecules/PreloadCategories/PreloadCategories'
import React from 'react'

export default {
   component: PreloadCategories,
   title: 'Molecules/PreloadCategories',
}

export const Basic = () => <PreloadCategories globalDelay={0.2} />
