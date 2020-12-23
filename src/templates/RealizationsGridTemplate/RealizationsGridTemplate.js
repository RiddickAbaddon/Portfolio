import Card from 'components/organisms/Card/Card'
import PreloadCards from 'components/organisms/PreloadCard/PreloadCards'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import styled from 'styled-components'
import { getDataByIds } from 'Utils'

const Wrapper = styled.section`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(270px, auto));
   grid-gap: 40px;
`

const Loader = styled(PreloadCards)`
   margin-top: 40px;
`

const RealizationsGridTemplate = ({ realizations, categories, technologies, language }) => {
   const [records, setRecords] = useState(6)

   return (
      <InfiniteScroll
         pageStart={0}
         loadMore={() => setRecords(records + 6)}
         hasMore={records < realizations.length}
         loader={<Loader key="1" />}
         useWindow
      >
         <Wrapper>
            {realizations.slice(0, records).map((realization) => {
               const {
                  _id,
                  thumbnail: { path },
                  categories: refCategories,
                  technologies: refTechnologies,
               } = realization

               return (
                  <Card
                     key={_id}
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
               )
            })}
         </Wrapper>
      </InfiniteScroll>
   )
}

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
   language: PropTypes.string.isRequired,
}

export default RealizationsGridTemplate
