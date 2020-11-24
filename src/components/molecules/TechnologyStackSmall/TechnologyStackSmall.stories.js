import TechnologyStackSmall from 'components/molecules/TechnologyStackSmall/TechnologyStackSmall'
import React from 'react'
import technologies from 'testData/technologies'

export default {
   comnponent: TechnologyStackSmall,
   title: 'Molecules/TechnologyStackSmall',
}

export const Basic = () => <TechnologyStackSmall technologies={technologies} />
