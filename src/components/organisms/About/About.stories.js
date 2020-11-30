import Avatar from 'assets/avatar.jpg'
import About from 'components/organisms/About/About'
import React from 'react'

export default {
   component: About,
   title: 'Organisms/About',
}

export const Basic = () => (
   <About avatar={Avatar}>
      Jestem programistą samoukiem, specjalizuje się w front-endzie (głównie javascript) lecz
      back-end też nie jest mi obcy. Mam prawie roczne doświadczenie w agencji interaktywnej jako
      programista php/javascript. Zajmowałem się tworzeniem stron na wordpress, sklepów na
      prestashop oraz stron na autorskim firmowym CMS. Obecnie pracuje jako freelancer tworząc
      strony, szablony oraz moduły pod Batflata.
   </About>
)
