import TechnologyStack from 'components/molecules/TechnologyStack/TechnologyStack'
import React from 'react'
import { technologies } from 'testData/api'

export default {
   comnponent: TechnologyStack,
   title: 'Molecules/TechnologyStack',
}

export const Basic = () => <TechnologyStack technologies={technologies} />
