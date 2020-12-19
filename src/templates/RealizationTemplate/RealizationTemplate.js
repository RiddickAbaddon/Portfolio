import GetAppIcon from '@material-ui/icons/GetApp'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link'
import WebAssetIcon from '@material-ui/icons/WebAsset'
import authenticalInfoImage from 'assets/authentical_info.png'
import FigmaIconURL from 'assets/icons/figma.svg'
import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import Divider from 'components/atoms/Divider/Divider'
import Icon from 'components/atoms/Icon/Icon'
import Text from 'components/atoms/Text/Text'
import Button from 'components/molecules/Button/Button'
import Categories from 'components/molecules/Categories/Categories'
import Image from 'components/molecules/Image/Image'
import TechnologyStack from 'components/molecules/TechnologyStack/TechnologyStack'
import ProjectHeader from 'components/organisms/ProjectHeader/ProjectHeader'
import { API_URL } from 'defines'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import styled from 'styled-components'
import GalleryTemplate from 'templates/GalleryTemplate/GalleryTemplate'
import { getPhrase } from 'Utils'

const FigmaIcon = () => <Icon src={FigmaIconURL} small />

const Wrapper = styled.div`
   max-width: 1000px;
`

const ButtonsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const ButtonContainer = styled.div`
   display: inline-block;
   margin: 20px;
`

const AuthenticalInfoWrapper = styled(CardWrapper)`
   padding: 20px;
   display: flex;
   align-items: center;

   @media ${({ theme }) => theme.breakpoints.min.tablet} {
      justify-content: space-between;
   }

   @media ${({ theme }) => theme.breakpoints.max.tablet} {
      flex-direction: column;
   }
`

const StyledAuthenticalInfoImage = styled(Image)`
   width: 300px;
   height: 171px;
   flex-shrink: 0;
   border-radius: ${({ theme }) => theme.radius.secondary};

   @media ${({ theme }) => theme.breakpoints.min.tablet} {
      margin-left: 20px;
   }

   @media ${({ theme }) => theme.breakpoints.max.tablet} {
      margin-top: 20px;
      max-width: 100%;
   }
`

const RealizationTemplate = ({ phrases, realization, categories, technologies, language }) => (
   <Wrapper>
      <ProjectHeader
         image={`${API_URL}${realization.thumbnail.path}`}
         title={realization[`${language}_title`]}
      />
      <Categories categories={categories} language={language} />
      <Text>{ReactHtmlParser(realization[`${language}_description`])}</Text>
      {technologies.length ? (
         <>
            <Divider size="medium" />
            <TechnologyStack
               title={getPhrase(phrases, 'technology-used', language)}
               technologies={technologies}
            />
         </>
      ) : null}
      <Divider size="medium" />
      <ButtonsWrapper>
         {realization.links.map(({ value, field: { label } }) => {
            switch (label) {
               case 'app':
                  return (
                     <ButtonContainer>
                        <Button
                           icon={WebAssetIcon}
                           as="a"
                           href={value}
                           target="_balnk"
                           rel="noopener noreferrer"
                        >
                           {getPhrase(phrases, 'app', language)}
                        </Button>
                     </ButtonContainer>
                  )
               case 'demo':
                  return (
                     <ButtonContainer>
                        <Button
                           icon={LinkIcon}
                           as="a"
                           href={value}
                           target="_balnk"
                           rel="noopener noreferrer"
                        >
                           {getPhrase(phrases, 'demo', language)}
                        </Button>
                     </ButtonContainer>
                  )
               case 'download':
                  return (
                     <ButtonContainer>
                        <Button
                           icon={GetAppIcon}
                           as="a"
                           href={value}
                           target="_balnk"
                           rel="noopener noreferrer"
                        >
                           {getPhrase(phrases, 'download', language)}
                        </Button>
                     </ButtonContainer>
                  )
               case 'github':
                  return (
                     <ButtonContainer>
                        <Button
                           icon={GitHubIcon}
                           as="a"
                           href={value}
                           target="_balnk"
                           rel="noopener noreferrer"
                        >
                           {getPhrase(phrases, 'github', language)}
                        </Button>
                     </ButtonContainer>
                  )
               case 'figma':
                  return (
                     <ButtonContainer>
                        <Button
                           icon={FigmaIcon}
                           as="a"
                           href={value}
                           target="_balnk"
                           rel="noopener noreferrer"
                        >
                           {getPhrase(phrases, 'figma', language)}
                        </Button>
                     </ButtonContainer>
                  )
               default:
                  return null
            }
         })}
      </ButtonsWrapper>
      {realization.authentical_info && (
         <>
            <Divider size="large" />
            <AuthenticalInfoWrapper>
               <Text>{getPhrase(phrases, 'authentical-info', language)}</Text>
               <StyledAuthenticalInfoImage src={authenticalInfoImage} />
            </AuthenticalInfoWrapper>
         </>
      )}
      {realization.gallery && realization.gallery.length && (
         <>
            <Divider size="large" />
            <GalleryTemplate gallery={realization.gallery} />
         </>
      )}
      <Divider size="large" />
   </Wrapper>
)

RealizationTemplate.propTypes = {
   phrases: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ),
   realization: PropTypes.shape({
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
      gallery: PropTypes.arrayOf(
         PropTypes.shape({
            meta: PropTypes.shape({
               title: PropTypes.string,
               asset: PropTypes.string,
            }),
            path: PropTypes.string,
         }),
      ),
      _created: PropTypes.number,
      authentical_info: PropTypes.bool,
   }).isRequired,
   categories: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         pl: PropTypes.string,
         en: PropTypes.string,
      }),
   ).isRequired,
   technologies: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string,
         name: PropTypes.string,
         image: PropTypes.shape({
            path: PropTypes.string,
         }),
      }),
   ).isRequired,
   language: PropTypes.string.isRequired,
}

RealizationTemplate.defaultProps = {
   phrases: null,
}

const mapStateToProps = ({ api: { phrases } }) => ({ phrases })

export default connect(mapStateToProps)(RealizationTemplate)
