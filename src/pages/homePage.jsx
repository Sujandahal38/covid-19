import React from 'react';
import NepaliCardInfo from '../components/cards/NepalInfoCard';
import News from '../components/cards/News';

export default function HomePage(props) {
  return(
   <>
    <NepaliCardInfo/>
    <News newsLength={10}/>
   </>
  )
}