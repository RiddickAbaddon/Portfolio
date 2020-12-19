import bgRealizations from 'assets/backgrounds/realizations.png'
import BackgroundSection from 'components/atoms/BackgroundSection/BackgroundSection'
import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import Container from 'components/atoms/Container/Container'
import Divider from 'components/atoms/Divider/Divider'
import Heading from 'components/atoms/Heading/Heading'
import Text from 'components/atoms/Text/Text'
import FilterPanel from 'components/organisms/FilterPanel/FilterPanel'
import PreloadCards from 'components/organisms/PreloadCard/PreloadCards'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import RealizationsGridTemplate from 'templates/RealizationsGridTemplate/RealizationsGridTemplate'
import { getPhrase } from 'Utils'

class Realizations extends React.Component {
   filterRealizations() {
      const { sort, filter, realizations, categories, language } = this.props

      if (!realizations || !categories) {
         return []
      }

      let filtered = [...realizations]
      const sortTrue = sort.direction === 'desc' ? 1 : -1
      const sortFalse = sort.direction === 'asc' ? 1 : -1

      filtered = filtered.sort((a, b) => {
         if (a._created > b._created) return sortTrue
         if (a._created < b._created) return sortFalse
         return 0
      })

      if (sort.option === 'technologycount') {
         filtered = filtered.sort((a, b) => {
            if (sort.direction === 'desc') return a.technologies.length - b.technologies.length
            return b.technologies.length - a.technologies.length
         })
      } else if (sort.option === 'category') {
         filtered = filtered.sort((a, b) => {
            const firstCategoryA = a.categories[0]
               ? categories.find((x) => x.name === a.categories[0].display)
               : null
            const firstCategoryB = a.categories[0]
               ? categories.find((x) => x.name === b.categories[0].display)
               : null
            const displayA = firstCategoryA ? firstCategoryA[language] : ''
            const displayB = firstCategoryB ? firstCategoryB[language] : ''
            if (sort.direction === 'asc') return displayA.localeCompare(displayB)
            return displayB.localeCompare(displayA)
         })
      }

      if (filter.technology !== 'all') {
         filtered = filtered.filter((x) => {
            if (x.technologies && x.technologies.length) {
               return !!x.technologies.find((y) => y.display === filter.technology)
            }
            return false
         })
      }

      if (filter.category !== 'all') {
         filtered = filtered.filter((x) => {
            if (x.categories && x.categories.length) {
               return !!x.categories.find((y) => y.display === filter.category)
            }
            return false
         })
      }

      if (filter.search !== '') {
         filtered = filtered.filter((x) => {
            const phrase = filter.search.toLowerCase()
            const title = x[`${language}_title`].toLowerCase()
            const description = x[`${language}_description`].toLowerCase()
            return title.includes(phrase) || description.includes(phrase)
         })
      }

      return filtered
   }

   render() {
      const { phrases, realizations, categories, technologies, language } = this.props
      const filtered = this.filterRealizations()
      return (
         <BackgroundSection background={bgRealizations}>
            <Container>
               <Divider size="large" mobile />
               <Heading>{getPhrase(phrases, 'realizations', language)}</Heading>
               <Divider size="medium" />
               <FilterPanel />
               <Divider size="medium" />
               {realizations && categories && technologies ? (
                  <>
                     {filtered.length ? (
                        <>
                           <RealizationsGridTemplate
                              realizations={filtered}
                              categories={categories}
                              technologies={technologies}
                              language={language}
                           />
                        </>
                     ) : (
                        <CardWrapper>
                           <Divider size="small" />
                           <Text>{getPhrase(phrases, 'no-filtered-realizations', language)}</Text>
                           <Divider size="small" />
                        </CardWrapper>
                     )}
                  </>
               ) : (
                  <PreloadCards />
               )}
               <Divider size="large" />
            </Container>
         </BackgroundSection>
      )
   }
}

Realizations.propTypes = {
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
      search: PropTypes.string,
   }).isRequired,
}

Realizations.defaultProps = {
   phrases: null,
   realizations: null,
   categories: null,
   technologies: null,
}

const mapStateToProps = ({
   api: { phrases, realizations, categories, technologies },
   app: { language, sort, filter },
}) => ({
   phrases,
   realizations,
   categories,
   technologies,
   language,
   sort,
   filter,
})

export default connect(mapStateToProps)(Realizations)
