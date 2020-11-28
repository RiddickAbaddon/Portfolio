import Dropdown from 'components/molecules/Dropdown/Dropdown'
import SearchInput from 'components/molecules/SearchInput/SearchInput'
import React from 'react'
import styled from 'styled-components'
import { category, sort, technologies } from 'testData/dropdown'

const Wrapper = styled.div`
   min-height: 64px;
   border-radius: 32px;
   box-shadow: ${({ theme }) => theme.shadow.soft};
   background: ${({ theme }) => theme.bgPrimary};
   padding: 4px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Section = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-end;
`

const StyledDropdown = styled(Dropdown)`
   margin: 4px;
`

const StyledSearch = styled(SearchInput)`
   margin: 4px;
   margin-left: auto;
`

const FilterPanel = () => (
   <Wrapper>
      <Section>
         <StyledDropdown options={sort} label="Sortuj" defaultvalue="date" sort />
         <StyledDropdown options={category} label="Kategoria" defaultvalue="all" />
         <StyledDropdown options={technologies} label="Technologia" defaultvalue="all" />
      </Section>
      <StyledSearch />
   </Wrapper>
)

export default FilterPanel
