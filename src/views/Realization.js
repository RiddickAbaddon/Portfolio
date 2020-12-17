import bgHome from 'assets/backgrounds/home.png'
import BackgroundSection from 'components/atoms/BackgroundSection/BackgroundSection'
import Container from 'components/atoms/Container/Container'
import PreloadRealization from 'components/organisms/PreloadRealization/PreloadRealization'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import RealizationTemplate from 'templates/RealizationTemplate/RealizationTemplate'
import { getDataByIds } from 'Utils'
import Page404 from 'views/Page404'

const Realization = ({
   match: {
      params: { id },
   },
   phrases,
   realizations,
   categories,
   technologies,
   language,
}) => {
   if (phrases && realizations && categories && technologies) {
      const project = realizations.find((x) => x._id === id)

      if (!project) {
         return <Page404 />
      }

      const projectCategories = getDataByIds(project.categories, categories)
      const projectTechnologies = getDataByIds(project.technologies, technologies)

      return (
         <BackgroundSection background={bgHome}>
            <Container small>
               <RealizationTemplate
                  realization={project}
                  categories={projectCategories}
                  technologies={projectTechnologies}
                  language={language}
               />
            </Container>
         </BackgroundSection>
      )
   }

   return (
      <BackgroundSection background={bgHome}>
         <Container>
            <PreloadRealization />
         </Container>
      </BackgroundSection>
   )
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
}

Realization.defaultProps = {
   phrases: null,
   realizations: null,
   categories: null,
   technologies: null,
}

const mapStateToProps = ({
   api: { phrases, realizations, categories, technologies },
   app: { language },
}) => ({ phrases, realizations, categories, technologies, language })

export default connect(mapStateToProps)(withRouter(Realization))
