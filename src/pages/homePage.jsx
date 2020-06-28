import React from 'react';
import NepaliCardInfo from '../components/cards/NepalInfoCard';
import News from '../components/cards/News';
import PodcastSection from './PodcastSection';

export default function HomePage(props) {
  return(
   <>
    <NepaliCardInfo/>
    <PodcastSection/>
    <News newsLength={10}/>
   </>
  )
}