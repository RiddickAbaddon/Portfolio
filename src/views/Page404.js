import { backgroundHex } from 'assets'
import image404 from 'assets/svg/404.svg'
import Divider from 'components/atoms/Divider/Divider'
import SVG from 'components/atoms/SVG/SVG'
import Text from 'components/atoms/Text/Text'
import BackgroundSection from 'components/molecules/BackgroundSection/BackgroundSection'
import Button from 'components/molecules/Button/Button'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CenterPageTemplate from 'templates/CenterPageTemplate/CenterPageTemplate'
import { getPhrase } from 'Utils'

const Page404 = ({ phrases, language }) => {
   useEffect(() => {
      document.title = '404'
   })

   return (
      <BackgroundSection background={backgroundHex} align="bottom">
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
}

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
