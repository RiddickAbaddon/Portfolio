import ArrowButton from 'components/molecules/ArrowButton/ArrowButton'
import Card from 'components/organisms/Card/Card'
import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'
import styled, { css } from 'styled-components'
import { getDataByIds } from 'Utils'

const Wrapper = styled.section`
   overflow: hidden;
   position: relative;

   @media ${({ theme }) => theme.breakpoints.min.tablet} {
      padding: 20px 104px;
   }
   @media ${({ theme }) => theme.breakpoints.max.tablet} {
      padding: 20px;
   }
`

const StyledSlider = styled(Slider)`
   max-width: 1000px;
   margin: 0 auto;
`

const SliderShadow = styled.div`
   @media ${({ theme }) => theme.breakpoints.min.tablet} {
      width: 240px;
   }
   @media ${({ theme }) => theme.breakpoints.max.tablet} {
      width: 40px;
   }
   height: 100%;
   background: ${({ theme }) => theme.bgMain};
   mask-image: ${({ theme }) => theme.gradient.slider};
   position: absolute;
   ${({ prev }) =>
      prev
         ? css`
              left: 0;
              transform: scaleX(-1);
           `
         : css`
              right: 0;
           `}
   top: 0;
   z-index: 1;
   pointer-events: none;
`

const StyledArrowButton = styled(ArrowButton)`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   z-index: 2;
   display: flex !important;
   will-change: transform;
   transition: transform 0.3s ease-out;
   transform-origin: center;

   ${({ prev }) =>
      prev
         ? css`
              @media ${({ theme }) => theme.breakpoints.min.tablet} {
                 left: 40px;
              }
              @media ${({ theme }) => theme.breakpoints.max.tablet} {
                 left: 20px;
              }
           `
         : css`
              @media ${({ theme }) => theme.breakpoints.min.tablet} {
                 right: 40px;
              }
              @media ${({ theme }) => theme.breakpoints.max.tablet} {
                 right: 20px;
              }
           `}

   &.slick-disabled {
      transform: translateY(-50%) scale(0);
      pointer-events: none;
   }
`

const Slide = styled.div`
   padding: 0 10px;
`

const RealizationsSliderTemplate = ({ realizations, categories, technologies, language }) => {
   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <StyledArrowButton />,
      prevArrow: <StyledArrowButton prev />,
      responsive: [
         {
            breakpoint: 970,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   }

   return (
      <Wrapper>
         <SliderShadow prev />
         <StyledSlider {...settings}>
            {realizations.map((realization) => {
               const {
                  _id,
                  thumbnail: { path },
                  categories: refCategories,
                  technologies: refTechnologies,
               } = realization

               return (
                  <Slide key={_id}>
                     <Card
                        link={`/realizations/${_id}`}
                        title={realization[`${language}_title`]}
                        image={path}
                        description={realization[`${language}_description`]}
                        categories={
                           refCategories.length ? getDataByIds(refCategories, categories) : []
                        }
                        technologies={
                           refTechnologies.length ? getDataByIds(refTechnologies, technologies) : []
                        }
                     />
                  </Slide>
               )
            })}
         </StyledSlider>
         <SliderShadow />
      </Wrapper>
   )
}

RealizationsSliderTemplate.propTypes = {
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
   ).isRequired,
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

export default RealizationsSliderTemplate
