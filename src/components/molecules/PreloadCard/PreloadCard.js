import CardWrapper from 'components/atoms/CardWrapper/CardWrapper'
import PreloadImage from 'components/atoms/PreloadImage/PreloadImage'
import PreloadCategories from 'components/molecules/PreloadCategories/PreloadCategories'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledCardWrapper = styled(CardWrapper)`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Container = styled.div`
   padding: 0 20px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Title = styled(PreloadImage)`
   margin: 25px 0;
   width: 70%;
   height: 25px;
   border-radius: 13px;
   animation-delay: ${({ globaldelay }) => globaldelay}s;
`

const DescriptionLine = styled(PreloadImage)`
   width: ${({ width }) => width};
   height: 15px;
   border-radius: 8px;
   margin-bottom: 10px;
   animation-delay: ${({ globaldelay }) => globaldelay}s;
`

const CardFooter = styled.div`
   margin-top: auto;
   height: 64px;
   padding: 16px;
   border-bottom-left-radius: ${({ theme }) => theme.radius.primary};
   border-bottom-right-radius: ${({ theme }) => theme.radius.primary};
   background: ${({ theme }) => theme.bgSecondary};
   width: 100%;
   display: flex;
`

const Image = styled(PreloadImage)`
   border-top-left-radius: ${({ theme }) => theme.radius.primary};
   border-top-right-radius: ${({ theme }) => theme.radius.primary};
   height: 200px;
   flex-shrink: 0;
   animation-delay: ${({ globaldelay }) => globaldelay}s;
`

const Icon = styled(PreloadImage)`
   width: 32px;
   height: 32px;
   margin-right: 16px;
   border-radius: 50%;
   animation-delay: ${({ delay, globaldelay }) => (delay || 0) + globaldelay}s;
`

const getDelays = () => {
   const result = []

   for (let i = 0; i < 4; i++) {
      result.push(i * 0.025)
   }

   return result
}

const delays = getDelays()

const PreloadCard = ({ delay: globalDelay }) => (
   <StyledCardWrapper>
      <Image globaldelay={globalDelay} />
      <Container>
         <Title globaldelay={globalDelay} />
         <DescriptionLine width="100%" globaldelay={globalDelay} />
         <DescriptionLine width="80%" globaldelay={globalDelay} />
         <DescriptionLine width="90%" globaldelay={globalDelay} />
         <DescriptionLine width="60%" globaldelay={globalDelay} />
         <PreloadCategories delay={globalDelay} />
      </Container>
      <CardFooter>
         {delays.map((delay, i) => (
            <Icon key={`tech-${i}`} delay={delay} globaldelay={globalDelay} />
         ))}
      </CardFooter>
   </StyledCardWrapper>
)

PreloadCard.propTypes = {
   delay: PropTypes.number,
}

PreloadCard.defaultProps = {
   delay: 0,
}

export default PreloadCard
