import Card from 'components/organisms/Card/Card'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { getDataByIds } from 'Utils'

const lang = 'pl'

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 40px;
`

const RealizationsGridTemplate = ({ realizations, categories, technologies }) => (
   <Wrapper>
      {realizations.map((realization) => {
         const {
            thumbnail: { path },
            categories: refCategories,
            technologies: refTechnologies,
         } = realization

         return (
            <Card
               title={realization[`${lang}_title`]}
               image={path}
               description={realization[`${lang}_description`]}
               categories={refCategories.length ? getDataByIds(refCategories, categories) : []}
               technologies={
                  refTechnologies.length ? getDataByIds(refTechnologies, technologies) : []
               }
            />
         )
      })}
   </Wrapper>
)

RealizationsGridTemplate.propTypes = {
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
}

export default RealizationsGridTemplate