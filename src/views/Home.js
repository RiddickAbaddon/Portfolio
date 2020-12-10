import { fetchCollection, fetchSingleton } from 'actions/api'
import BackgroundSection from 'components/atoms/BackgroundSection/BackgroundSection'
import Container from 'components/atoms/Container/Container'
import Divider from 'components/atoms/Divider/Divider'
import Heading from 'components/atoms/Heading/Heading'
import PreloadAbout from 'components/atoms/PreloadAbout/PreloadAbout'
import Button from 'components/molecules/Button/Button'
import PreloadCard from 'components/molecules/PreloadCard/PreloadCard'
import PreloadTechnologyStack from 'components/molecules/PreloadTechnologyStack/PreloadTechnologyStack'
import TechnologyStack from 'components/molecules/TechnologyStack/TechnologyStack'
import About from 'components/organisms/About/About'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import CenterPageTemplate from 'templates/CenterPageTemplate/CenterPageTemplate'
import RealizationsSliderTemplate from 'templates/RealizationsSliderTemplate/RealizationsSliderTemplate'
import { getDataByIds, getPhrase } from 'Utils'

class Home extends React.Component {
   componentDidMount() {
      const { fetchAbout, fetchRealizations, fetchCategories, fetchTechnologies } = this.props
      fetchAbout()
      fetchRealizations()
      fetchCategories()
      fetchTechnologies()
   }

   render() {
      const { phrases, about, realizations, categories, technologies, language } = this.props

      return (
         <>
            <BackgroundSection background="top">
               <Container>
                  <Divider size="large" />
                  <Heading size="h1">Marcin Kalinowski</Heading>
                  <Divider size="small" />
                  <Heading size="h4">Front-end developer / UI designer</Heading>
                  <Divider size="medium" />
                  {about ? (
                     <About avatar={`${API_URL}${about.avatar.path}`}>{about[language]}</About>
                  ) : (
                     <PreloadAbout />
                  )}
                  <Divider size="large" />
                  {technologies && about && phrases ? (
                     <TechnologyStack
                        title={getPhrase(phrases, 'technologies-i-work-with', language)}
                        technologies={getDataByIds(about.technologies, technologies)}
                     />
                  ) : (
                     <PreloadTechnologyStack />
                  )}
               </Container>
            </BackgroundSection>

            <BackgroundSection background="center">
               <Container>
                  <Divider size="large" />
                  <Heading size="h1">{getPhrase(phrases, 'realizations', language)}</Heading>
                  <Divider size="large" />
               </Container>

               {realizations && categories && technologies ? (
                  <RealizationsSliderTemplate
                     realizations={realizations.slice(0, 9)}
                     categories={categories}
                     technologies={technologies}
                     language={language}
                  />
               ) : (
                  <Container>
                     <PreloadCard />
                     <PreloadCard delay={0.2} />
                     <PreloadCard delay={0.4} />
                  </Container>
               )}

               <Container>
                  <Divider size="large" />
                  <Button>{getPhrase(phrases, 'show-more', language)}</Button>
               </Container>
            </BackgroundSection>
            <BackgroundSection background="bottom">
               <CenterPageTemplate title={getPhrase(phrases, 'contact', language)}>
                  <Container>
                     <Button>marcin36k@outlook.com</Button>
                  </Container>
               </CenterPageTemplate>
            </BackgroundSection>
         </>
      )
   }
}

Home.propTypes = {
   phrases: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   about: PropTypes.shape({
      avatar: PropTypes.shape({
         path: PropTypes.string,
      }),
      pl: PropTypes.string,
      en: PropTypes.string,
      technologies: PropTypes.arrayOf(
         PropTypes.shape({
            _id: PropTypes.string,
            display: PropTypes.string,
         }),
      ),
   }),
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
   fetchAbout: PropTypes.func.isRequired,
   fetchRealizations: PropTypes.func.isRequired,
   fetchCategories: PropTypes.func.isRequired,
   fetchTechnologies: PropTypes.func.isRequired,
}

Home.defaultProps = {
   about: null,
   realizations: null,
   categories: null,
   technologies: null,
   phrases: null,
}

const mapStateToProps = ({
   api: { about, realizations, categories, technologies, phrases },
   app: { language },
}) => ({
   about,
   realizations,
   categories,
   technologies,
   language,
   phrases,
})

const mapDispatchToProps = (dispatch) => ({
   fetchAbout: () => dispatch(fetchSingleton('about')),
   fetchRealizations: () => dispatch(fetchCollection('realizations')),
   fetchCategories: () => dispatch(fetchCollection('categories')),
   fetchTechnologies: () => dispatch(fetchCollection('technologies')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
