import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Feature from '../../components/features/Feature'
import PropertyList from '../../components/propertyList/PropertyList'
import FeatureProperties from '../../components/featuresProperties/FeatureProperties'
import EmailList from '../../components/emailList/EmailList'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />

        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />

        <h1 className='homeTitle'>Stay at our top unique properties</h1>
        <FeatureProperties />

        <EmailList />

        <Footer />
      </div>
    </div>
  )
}

export default Home