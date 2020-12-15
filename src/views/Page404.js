import image404 from 'assets/404.svg'
import BackgroundSection from 'components/atoms/BackgroundSection/BackgroundSection'
import Divider from 'components/atoms/Divider/Divider'
import SVG from 'components/atoms/SVG/SVG'
import Text from 'components/atoms/Text/Text'
import Button from 'components/molecules/Button/Button'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CenterPageTemplate from 'templates/CenterPageTemplate/CenterPageTemplate'
import { getPhrase } from 'Utils'

const Page404 = ({ phrases, language }) => (
   <BackgroundSection background="bottom">
      <CenterPageTemplate>
         <>
            <SVG src={image404} alt="404" />
            <Divider size="medium" />
            <Text>{getPhrase(phrases, '404-info', language)}</Text>
            <Divider size="medium" />
            <Button as={Link} to="/">
               {getPhrase(phrases, 'back-to-homepage', language)}
            </Button>
         </>
      </CenterPageTemplate>
   </BackgroundSection>
)

Page404.propTypes = {
   phrases: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   language: PropTypes.string.isRequired,
}

Page404.defaultProps = {
   phrases: null,
}

const mapStateToProps = ({ api: { phrases }, app: { language } }) => ({ phrases, language })

export default connect(mapStateToProps)(Page404)
