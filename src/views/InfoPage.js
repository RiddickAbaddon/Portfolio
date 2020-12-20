import { fetchCollection } from 'actions/api'
import bgRealizations from 'assets/backgrounds/realizations.png'
import Container from 'components/atoms/Container/Container'
import Divider from 'components/atoms/Divider/Divider'
import Heading from 'components/atoms/Heading/Heading'
import Text from 'components/atoms/Text/Text'
import BackgroundSection from 'components/molecules/BackgroundSection/BackgroundSection'
import PreloadText from 'components/molecules/PreloadText/PreloadText'
import NoContentInfo from 'components/organisms/NoContentInfo/NoContentInfo'
import PropTypes from 'prop-types'
import React from 'react'
import reactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Page404 from 'views/Page404'

class InfoPage extends React.Component {
   componentDidMount() {
      const { fetchPages } = this.props
      fetchPages()
   }

   render() {
      const {
         pages,
         language,
         match: {
            params: { page: pageSlug },
         },
         connectionErrors,
      } = this.props

      if (pages) {
         const page = pages.find((x) => x.name_slug === pageSlug)

         if (!page) {
            return <Page404 />
         }

         return (
            <BackgroundSection background={bgRealizations}>
               <Container>
                  <Divider size="large" mobile />
                  <Heading size="h1">{page[`${language}_title`]}</Heading>
                  <Divider size="medium" />
                  <Text>{reactHtmlParser(page[`${language}_description`])}</Text>
                  <Divider size="large" />
               </Container>
            </BackgroundSection>
         )
      }

      return (
         <Container>
            <Divider size="large" />
            <>{connectionErrors.collectionPages ? <NoContentInfo /> : <PreloadText />}</>
            <Divider size="large" />
         </Container>
      )
   }
}

InfoPage.propTypes = {
   pages: PropTypes.arrayOf(
      PropTypes.shape({
         name_slug: PropTypes.string,
         pl_title: PropTypes.string,
         en_title: PropTypes.string,
         pl_description: PropTypes.string,
         en_description: PropTypes.string,
      }),
   ),
   language: PropTypes.string.isRequired,
   fetchPages: PropTypes.func.isRequired,
   match: PropTypes.shape({
      params: PropTypes.shape({
         page: PropTypes.string,
      }),
   }).isRequired,
   // eslint-disable-next-line react/forbid-prop-types
   connectionErrors: PropTypes.object.isRequired,
}

InfoPage.defaultProps = {
   pages: null,
}

const mapStateToProps = ({ api: { pages, connectionErrors }, app: { language } }) => ({
   pages,
   language,
   connectionErrors,
})

const mapDispatchToProps = (dispatch) => ({
   fetchPages: () => dispatch(fetchCollection('pages')),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(InfoPage))
