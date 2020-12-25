import { backgroundHex, backgroundLowpoly } from 'assets'
import Container from 'components/atoms/Container/Container'
import Divider from 'components/atoms/Divider/Divider'
import Heading from 'components/atoms/Heading/Heading'
import BackgroundSection from 'components/molecules/BackgroundSection/BackgroundSection'
import NoContentInfo from 'components/organisms/NoContentInfo/NoContentInfo'
import PreloadRealization from 'components/organisms/PreloadRealization/PreloadRealization'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import RealizationsGridTemplate from 'templates/RealizationsGridTemplate/RealizationsGridTemplate'
import RealizationTemplate from 'templates/RealizationTemplate/RealizationTemplate'
import { getDataByIds, getPhrase } from 'Utils'
import Page404 from 'views/Page404'

const title = (value) => {
   document.title = `MK - ${value}`
}

class Realization extends React.Component {
   filterSimilarRealizations(realization) {
      const { realizations } = this.props
      const filtered = []

      realizations.map((element) => {
         if (element._id !== realization._id) {
            const { categories, technologies } = element
            let score = 0

            if (categories && realization.categories) {
               realization.categories.map(({ _id }) => {
                  if (categories.find((x) => x._id === _id)) {
                     score += 1
                  }
                  return 0
               })
            }

            if (technologies && realization.technologies) {
               realization.technologies.map(({ _id }) => {
                  if (technologies.find((x) => x._id === _id)) {
                     score += 1
                  }
                  return 0
               })
            }

            if (score > 0) {
               filtered.push({
                  ...element,
                  score,
               })
            }
         }
         return 0
      })

      filtered.sort((a, b) => {
         if (a._created > b._created) return 1
         if (a._created < b._created) return -1
         return 0
      })

      filtered.sort((a, b) => {
         if (a.score < b.score) return 1
         if (a.score > b.score) return -1
         return 0
      })

      return filtered.slice(0, 3)
   }

   render() {
      const {
         match: {
            params: { id },
         },
         phrases,
         realizations,
         categories,
         technologies,
         language,
         connectionErrors,
      } = this.props

      if (phrases && realizations && categories && technologies) {
         const project = realizations.find((x) => x._id === id)

         if (!project) {
            return <Page404 />
         }

         title(project[`${language}_title`])
         const projectCategories = getDataByIds(project.categories, categories)
         const projectTechnologies = getDataByIds(project.technologies, technologies)
         const similarRealizations = this.filterSimilarRealizations(project)

         return (
            <>
               <BackgroundSection background={backgroundLowpoly}>
                  <Container small>
                     <RealizationTemplate
                        realization={project}
                        categories={projectCategories}
                        technologies={projectTechnologies}
                        language={language}
                     />
                  </Container>
               </BackgroundSection>

               {similarRealizations.length ? (
                  <BackgroundSection background={backgroundHex} as="section">
                     <Container>
                        <header>
                           <Heading size="h1">
                              {getPhrase(phrases, 'similar-realizations', language)}
                           </Heading>
                        </header>
                        <Divider size="large" />
                        <RealizationsGridTemplate
                           realizations={similarRealizations}
                           categories={categories}
                           technologies={technologies}
                           language={language}
                        />
                        <Divider size="large" />
                     </Container>
                  </BackgroundSection>
               ) : null}
            </>
         )
      }

      return (
         <BackgroundSection background={backgroundLowpoly}>
            <Container small>
               <>
                  {connectionErrors.collectionRealizations ||
                  connectionErrors.collectionCategories ||
                  connectionErrors.collectionTechnologies ? (
                     <>
                        <Divider size="large" />
                        <NoContentInfo />
                     </>
                  ) : (
                     <PreloadRealization />
                  )}
               </>
               <Divider size="large" />
            </Container>
         </BackgroundSection>
      )
   }
}

Realization.propTypes = {
   match: PropTypes.shape({
      params: PropTypes.shape({
         id: PropTypes.string,
      }),
   }).isRequired,
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
   // eslint-disable-next-line react/forbid-prop-types
   connectionErrors: PropTypes.object.isRequired,
}

Realization.defaultProps = {
   phrases: null,
   realizations: null,
   categories: null,
   technologies: null,
}

const mapStateToProps = ({
   api: { phrases, realizations, categories, technologies, connectionErrors },
   app: { language },
}) => ({ phrases, realizations, categories, technologies, language, connectionErrors })

export default connect(mapStateToProps)(withRouter(Realization))
