import Dropdown from 'components/molecules/Dropdown/Dropdown'
import React from 'react'
import { filter, sort } from 'testData/dropdown'

export default {
   component: Dropdown,
   title: 'Molecules/Dropdown',
}

export const Basic = () => <Dropdown options={filter} label="Filtruj" defaultvalue="all" />
export const WithSort = () => <Dropdown options={sort} label="Sortuj" defaultvalue="date" sort />
