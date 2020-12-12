import Dropdown from 'components/molecules/Dropdown/Dropdown'
import React from 'react'
import { categories, sort } from 'testData/dropdown'

export default {
   component: Dropdown,
   title: 'Molecules/Dropdown',
}

export const Basic = () => <Dropdown options={categories} label="Filtruj" defaultvalue="all" />
export const WithSort = () => <Dropdown options={sort} label="Sortuj" defaultvalue="date" sort />
