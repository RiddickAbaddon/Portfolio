import { fetchSingleton } from 'actions/api'
import bgHex from 'assets/backgrounds/hex.png'
import bgHome from 'assets/backgrounds/home.png'
import mailIcon from 'assets/mail.svg'
import Container from 'components/atoms/Container/Container'
import Divider from 'components/atoms/Divider/Divider'
import Heading from 'components/atoms/Heading/Heading'
import PreloadAbout from 'components/atoms/PreloadAbout/PreloadAbout'
import SVG from 'components/atoms/SVG/SVG'
import BackgroundSection from 'components/molecules/BackgroundSection/BackgroundSection'
import Button from 'components/molecules/Button/Button'
import PreloadTechnologyStack from 'components/molecules/PreloadTechnologyStack/PreloadTechnologyStack'
import TechnologyStack from 'components/molecules/TechnologyStack/TechnologyStack'
import About from 'components/organisms/About/About'
import NoContentInfo from 'components/organisms/NoContentInfo/NoContentInfo'
import PreloadCards from 'components/organisms/PreloadCard/PreloadCards'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CenterPageTemplate from 'templates/CenterPageTemplate/CenterPageTemplate'
import RealizationsSliderTemplate from 'templates/RealizationsSliderTemplate/RealizationsSliderTemplate'
import { getDataByIds, getPhrase } from 'Utils'

const sortRealizations = (a, b) => {
   if (a._created > b._created) return -1
   if (a._created < b._created) return 1
   return 0
}

class Home extends React.Component {
   componentDidMount() {
      const { fetchAbout } = this.props
      fetchAbout()
   }

   render() {
      const {
         phrases,
         about,
         realizations,
         categories,
         technologies,
         language,
         connectionErrors,
      } = this.props

      return (
         <>
            <BackgroundSection background={bgHome}>
               <Container>
                  <Divider size="large" mobile />
                  <Heading size="h1">Marcin Kalinowski</Heading>
                  <Divider size="small" />
                  <Heading size="h4">Front-end developer / UI designer</Heading>
                  <Divider size="medium" />
                  {about ? (
                     <About avatar={`${API_URL}${about.avatar.path}`}>{about[language]}</About>
                  ) : (
                     <>{connectionErrors.singletonAbout ? <NoContentInfo /> : <PreloadAbout />}</>
                  )}
                  <Divider size="large" />
                  {technologies && about ? (
                     <TechnologyStack
                        title={getPhrase(phrases, 'technologies-i-work-with', language)}
                        technologies={getDataByIds(about.technologies, technologies)}
                     />
                  ) : (
                     <>
                        {connectionErrors.singletonAbout ||
                        connectionErrors.collectionTechnologies ? (
                           <NoContentInfo />
                        ) : (
                           <PreloadTechnologyStack />
                        )}
                     </>
                  )}
               </Container>
            </BackgroundSection>

            <section>
               <Container>
                  <Divider size="large" />
                  <Heading size="h1">{getPhrase(phrases, 'realizations', language)}</Heading>
                  <Divider size="large" />
               </Container>

               {realizations && categories && technologies ? (
                  <RealizationsSliderTemplate
                     realizations={realizations.sort(sortRealizations).slice(0, 9)}
                     categories={categories}
                     technologies={technologies}
                     language={language}
                  />
               ) : (
                  <Container>
                     <>
                        {connectionErrors.collectionRealizations ||
                        connectionErrors.collectionCategories ||
                        connectionErrors.collectionTechnologies ? (
                           <NoContentInfo />
                        ) : (
                           <PreloadCards smallgap />
                        )}
                     </>
                  </Container>
               )}

               <Container>
                  <Divider size="large" />
                  <Button as={Link} to="/realizations">
                     {getPhrase(phrases, 'show-more', language)}
                  </Button>
               </Container>
            </section>

            <BackgroundSection background={bgHex} align="bottom">
               <CenterPageTemplate title={getPhrase(phrases, 'contact', language)}>
                  <Container>
                     <SVG src={mailIcon} alt="mail" />
                     <Divider size="medium" />
                     <Button as="a" href="mailto: Marcin36K@outlook.com">
                        Marcin36K@outlook.com
                     </Button>
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
   fetchAbout: PropTypes.func.isRequired,
   // eslint-disable-next-line react/forbid-prop-types
   connectionErrors: PropTypes.object.isRequired,
}

Home.defaultProps = {
   about: null,
   realizations: null,
   categories: null,
   technologies: null,
   phrases: null,
}

const mapStateToProps = ({
   api: { about, realizations, categories, technologies, phrases, connectionErrors },
   app: { language },
}) => ({
   about,
   realizations,
   categories,
   technologies,
   language,
   phrases,
   connectionErrors,
})

const mapDispatchToProps = (dispatch) => ({
   fetchAbout: () => dispatch(fetchSingleton('about')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
