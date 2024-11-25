import React from 'react'
import "./style.scss"
import Header from '../../components/header'
import PageHero from '../../components/pageHero'
import Footer from '../../components/footer'

const UsageOfAadhar = () => {
  return (
    <>
    <Header/>
    <PageHero message="USAGE OF AADHAR"/>
    <div className="usageOfAadharContainer">
      <div className="usageOfAadharContent">
      <h2>DigiLocker:</h2>
      <ul>
        <li>Usage of Aadhaar: DigiLocker, a government platform for storing and accessing important documents, uses Aadhaar for authentication. Users link their Aadhaar to access their official documents like PAN cards, driving licenses, and educational certificates.</li>
        <li>Features: Provides cloud storage for documents and allows users to share verified documents directly with authorities.</li>
        <li>Conditions: Aadhaar linkage is mandatory for account creation and document verification.</li>
      </ul>


      <h2>UMANG App:</h2>
<ul>
  <li>Usage of Aadhaar: UMANG (Unified Mobile Application for New-age Governance) integrates Aadhaar authentication to access multiple government services like EPFO, PAN, and eAadhaar.</li>
  <li>Features: Access over 100 government services through one app, including Aadhaar-linked services such as pension schemes, gas subsidies, and health services.</li>
  <li>Conditions: Aadhaar is often required for many of the services offered on the platform.</li>
</ul>

<h2>Jan Aadhaar Platform:</h2>
<ul>
  <li>Usage of Aadhaar: Rajasthan's Jan Aadhaar scheme integrates Aadhaar authentication for family identification and access to various government welfare schemes.</li>
  <li>Features: Aadhaar-based e-KYC is used for verification of family members and accessing welfare benefits like pensions, health insurance, and scholarships.</li>
</ul>

<h2>UIDAI Services:</h2>
<ul>
  <li>Usage of Aadhaar: The Unique Identification Authority of India (UIDAI) website and app allow Aadhaar holders to update their Aadhaar information, check authentication history, and download e-Aadhaar.</li>
  <li>Features: Offers services like virtual ID generation, locking/unlocking of biometric data, and Aadhaar verification.</li>
  <li>Conditions: Aadhaar number or enrollment ID is mandatory to use these services.</li>
</ul>





      </div>
    </div>

    <Footer/>
    </>
  )
}

export default UsageOfAadhar