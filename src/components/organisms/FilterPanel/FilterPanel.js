import { setFilter as setFilterAction, setSort as setSortAction } from 'actions/app'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import SearchInput from 'components/molecules/SearchInput/SearchInput'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getPhrase } from 'Utils'

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

const getDropdownData = (phrases, realizations, categories, technologies, language) => {
   const sort = [
      {
         _id: 'sort-1',
         value: 'date',
         display: getPhrase(phrases, 'date', language),
      },
      {
         _id: 'sort-2',
         value: 'technologycount',
         display: getPhrase(phrases, 'technologies', language),
      },
      {
         _id: 'sort-3',
         value: 'category',
         display: getPhrase(phrases, 'category', language),
      },
   ]

   const dropdownCategories = [
      {
         _id: 'category-0',
         value: 'all',
         display: getPhrase(phrases, 'all', language),
      },
   ]
   const dropdownTechnologies = [
      {
         _id: 'technology-0',
         value: 'all',
         display: getPhrase(phrases, 'all', language),
      },
   ]

   realizations.map((realization) => {
      if (realization.categories) {
         realization.categories.map((category) => {
            const findedCategoryInDropdown = dropdownCategories.find((x) => x._id === category._id)
            const findedCategory = categories.find((x) => x._id === category._id)
            if (!findedCategoryInDropdown) {
               dropdownCategories.push({
                  _id: findedCategory._id,
                  value: findedCategory.name,
                  display: findedCategory[language],
               })
            }
            return 0
         })
      }
      if (realization.technologies) {
         realization.technologies.map((technology) => {
            const findedTechnologyInDropdown = dropdownTechnologies.find(
               (x) => x._id === technology._id,
            )
            const findedTechnology = technologies.find((x) => x._id === technology._id)
            if (!findedTechnologyInDropdown) {
               dropdownTechnologies.push({
                  _id: findedTechnology._id,
                  value: findedTechnology.name,
                  display: findedTechnology.name,
               })
            }
            return 0
         })
      }
      return 0
   })

   return {
      sort,
      categories: dropdownCategories,
      technologies: dropdownTechnologies,
   }
}

const FilterPanel = ({
   phrases,
   realizations,
   categories,
   technologies,
   language,
   setSort,
   setFilter,
   sort,
   filter,
}) => {
   const dropdownData =
      phrases && realizations && categories && technologies
         ? getDropdownData(phrases, realizations, categories, technologies, language)
         : null

   return (
      <Wrapper>
         <Section>
            {dropdownData && (
               <>
                  <StyledDropdown
                     options={dropdownData.sort}
                     label={getPhrase(phrases, 'sort', language)}
                     defaultvalue={sort.option}
                     sort={sort.direction}
                     setValueCallback={(value, direction) => {
                        setSort(value, direction)
                     }}
                  />
                  <StyledDropdown
                     options={dropdownData.categories}
                     label={getPhrase(phrases, 'category', language)}
                     defaultvalue={filter.category}
                     setValueCallback={(value) => {
                        setFilter('category', value)
                     }}
                  />
                  <StyledDropdown
                     options={dropdownData.technologies}
                     label={getPhrase(phrases, 'technology', language)}
                     defaultvalue={filter.technology}
                     setValueCallback={(value) => {
                        setFilter('technology', value)
                     }}
                  />
               </>
            )}
         </Section>
         <StyledSearch label={`${getPhrase(phrases, 'search', language)}...`} />
      </Wrapper>
   )
}

FilterPanel.propTypes = {
   phrases: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   realizations: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         pl_title: PropTypes.string,
         en_title: PropTypes.string,
         thumbnail: PropTypes.shape({
            path: PropTypes.string,
         }),
         pl_desctiption: PropTypes.string,
         en_desctiption: PropTypes.string,
         links: PropTypes.arrayOf(
            PropTypes.shape({
               field: PropTypes.shape({
                  label: PropTypes.string,
               }),
               value: PropTypes.string,
            }),
         ),
         _created: PropTypes.number,
      }),
   ),
   categories: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   technologies: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         image: PropTypes.shape({
            path: PropTypes.string,
         }),
      }),
   ),
   language: PropTypes.string.isRequired,
   sort: PropTypes.shape({
      option: PropTypes.string,
      direction: PropTypes.string,
   }).isRequired,
   filter: PropTypes.shape({
      category: PropTypes.string,
      technology: PropTypes.string,
   }).isRequired,
   setSort: PropTypes.func.isRequired,
   setFilter: PropTypes.func.isRequired,
}

FilterPanel.defaultProps = {
   phrases: null,
   realizations: null,
   categories: null,
   technologies: null,
}

const mapStateToProps = ({
   api: { phrases, realizations, categories, technologies },
   app: { language, sort, filter },
}) => ({ phrases, realizations, categories, technologies, language, sort, filter })

const mapDispatchToProps = (dispatch) => ({
   setSort: (option, direction) => dispatch(setSortAction(option, direction)),
   setFilter: (type, value) => dispatch(setFilterAction(type, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
