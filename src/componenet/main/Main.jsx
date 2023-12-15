import React from 'react'
import Banner from './banner/Banner'
import FirstSlider from './firstSlider/FirstSlider'
import Gender from '../genderCard/Gender'
import DiscoverApp from './discoverPP/DiscoverApp'
import CategorySpor from './ctegorySpor/CategorySpor'
import MemberShip from './membership/MemberShip'



export default function Main() {
  return (
    <>
     <Banner></Banner>
     <FirstSlider></FirstSlider>
     <Gender></Gender>
     <CategorySpor></CategorySpor>
     <DiscoverApp></DiscoverApp>
     <MemberShip></MemberShip>
    

    </>
  )
}
